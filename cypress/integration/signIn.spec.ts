/// <reference types="cypress" />

// This file will contain tests for the Sign In form. Feel free to add as many as you want.
// You dont have to test successful sign in as an account is needed for it. Other scenarios are recommended to test.

describe('Sign-in page', () => {

    const randomString = Cypress._.random(0, 99999).toString()
    // Generate random email 
    const userEmail = `${Cypress._.random(0, 99999)}@testEmail.cz`
    // Generate random wrong format email
    const wrongEmail = `email${Cypress._.random(0, 99999)}`
    // Generate password
    const password = `password${Cypress._.random(0, 99999)}`
    // Generate invalid password
    const wrongPassword = Cypress._.random(0, 99999).toString()

    context('Sign-in input cases', () => {
        beforeEach(() => {
            cy.visit('https://app.alfa.smartlook.cloud/sign/in')
        })

        // Test sign in form - wrong inputs
        it('Sign-in: default values check', () => {
            cy.get('#sign-in-form--email-input--label').should(
                'contain',
                'Email'
            )
            cy.get('#sign-in-form--password-input').should(
                'contain',
                'Password'
            )
        })

        it('Sign-in: Invalid email address format', () => {
            cy.get('#sign-in-form--email-input--inner').type(randomString)
            cy.wait(1000)
            cy.get('p[data-cy="email-input-error"]').should('contain', 'That doesn\'t look like a valid email address')
        })

        it('Sign-in: Correct email format and missing password', () => {
            cy.get('#sign-in-form--email-input--inner').clear()
            cy.get('#sign-in-form--email-input--inner').type(userEmail)
            cy.get('#sign-in-form--submit').click()
            cy.get('p[data-cy="password-input-error"]').should('contain', 'Please enter your password')
        })

        it('Sign-in: Correct email format and invalid password length', () => {
            cy.get('#sign-in-form--email-input--inner').type(userEmail)
            cy.get('#sign-in-form--password-input--inner').type(wrongPassword)
            cy.wait(1000)
            cy.get('p[data-cy="password-input-error"]').should('contain', 'Your password must be at least 6 characters long')
        })

        it('Sign-in: Correct password format and missing email address', () => {
            // reload page to clear fields
            cy.reload()
            cy.get('#sign-in-form--password-input--inner').type(password)
            cy.get('#sign-in-form--submit').click()
            cy.get('p[data-cy="email-input-error"]').should('contain', 'Please fill in your email address')
        })

        it('Sign-in: Missing email address and password', () => {
            // reload page to clear fields
            cy.reload()
            cy.get('#sign-in-form--submit').click()
            cy.get('p[data-cy="email-input-error"]').should('contain', 'Please fill in your email address')
        })

        it('Sign-in: Non-existing user', () => {
            cy.get('#sign-in-form--email-input--inner').type(userEmail)
            cy.get('#sign-in-form--password-input--inner').type(password)
            cy.get('#sign-in-form--submit').click()
            cy.wait(2000)
            cy.get('div').should('contain', 'Incorrect login or password. If you recently signed up, please check your email for your invitation link.')
        })

        it('Sign-in: Correct credentials', () => {
            // Correct login
        })
    })

    context('Login options', () => {
        beforeEach(() => {
            cy.visit('https://app.alfa.smartlook.cloud/sign/in')
        })

        it('Login: Google', () => {
            cy.get("#google-sign-in").contains('Google').click()
            // check popup window
        })

        it('Login: Facebook', () => {
            cy.get("#facebook-sign-in").contains('Facebook').click()
            // Check popup window
        })

        it('Login: Segment', () => {
            cy.get("#segment-sign-in").contains('Segment').click()
            // Check popup window
        })

        it('Login: Company login', () => {
            cy.get("#sign-sso-button").contains('Company login (SSO)').click()
            cy.url().should('eq', 'https://app.alfa.smartlook.cloud/sign/sso')
        })
    })

    context('Links', () => {
        beforeEach(() => {
            cy.visit('https://app.alfa.smartlook.cloud/sign/in')
        })

        it('Link: Create a free account', () => {
            cy.get('#sign-in-redirect-to-sign-up--desktop').click()
            cy.wait(1000)
            cy.url().should('eq', 'https://app.alfa.smartlook.cloud/sign/up?source=signInPage')
        })

        it('Link: Forgot password', () => {
            cy.visit('https://app.alfa.smartlook.cloud/sign/in')

            cy.get('#sign-in-form--reset-password-link').click()
            cy.wait(1000)
            cy.url().should('eq', 'https://app.alfa.smartlook.cloud/sign/reset-password')
        })

        it('Link: Privacy Policy', () => {
            cy.get('#recaptcha-privacy-link').should('have.attr', 'href', 'https://policies.google.com/privacy')
        })

        it('Link: Terms of Service', () => {
            cy.get('#recaptcha-terms-link').should('have.attr', 'href', 'https://policies.google.com/terms')
        })
    })

    context('Show/hide password feature', () => {
        beforeEach(() => {
            cy.visit('https://app.alfa.smartlook.cloud/sign/in')
        })

        it('Check hidden/shown password', () => {
            // Hidden value
            cy.get('#sign-in-form--password-input--inner')
                .type(password)
                .should('have.attr', 'type', 'password')

            // Show password    
            cy.get('#sign-in-form--password-input--show-password-btn').click()

            // Shown value
            cy.get('#sign-in-form--password-input--inner')
                .should('have.attr', 'type', 'text')
                .should('have.attr', 'value', password)
        })
    })

})