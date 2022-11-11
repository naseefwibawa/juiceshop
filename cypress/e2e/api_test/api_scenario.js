/// <reference types="Cypress"/>

import { address } from '../../support/page_object/address'
import { onLogin } from '../../support/page_object/login-command'
import { navigateTo } from '../../support/page_object/navigation'

describe('API scenario', () => {
	let email = 'poy@example.com'
	let password = 'poyoyo'

	it('send a review', () => {
		cy.request({
			method: 'PUT',
			url: 'http://localhost:3000/rest/products/24/reviews',
			body: {
				message: 'test',
				author: email,
			},
		}).then(response => {
			expect(response.status).to.equal(201)
		})
	})

	it('check a review', () => {
		cy.request({
			method: 'GET',
			url: 'http://localhost:3000/rest/products/24/reviews',
		}).then(response => {
			let body = JSON.parse(JSON.stringify(response.body))
			expect(response.status).to.equal(200)
			expect(response.body.data[0].author).to.equal(email)
			expect(response.body.data[0].likesCount).to.equal(0)
			expect(response.body.data[0].message).to.equal('test')
			expect(response.body.data[0]._id).to.not.be.null
		})
	})

	it('send like count to the review', () => {
		cy.request({
			method: 'POST',
			url: 'http://localhost:3000/rest/products/reviews',
		})
	})
})
