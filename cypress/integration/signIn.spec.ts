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

    // context('Sign-in input cases', () => {
    //     beforeEach(() => {
    //         cy.visit('https://app.alfa.smartlook.cloud/sign/in')
    //     })

    //     // Test sign in form - wrong inputs
    //     it('Sign-in: default values check', () => {
    //         cy.get('#sign-in-form--email-input--label').should(
    //             'contain',
    //             'Email'
    //         )
    //         cy.get('#sign-in-form--password-input').should(
    //             'contain',
    //             'Password'
    //         )
    //     })

    //     it('Sign-in: Invalid email address format', () => {
    //         cy.get('#sign-in-form--email-input--inner').type(randomString)
    //         cy.wait(1000)
    //         cy.get('p[data-cy="email-input-error"]').should('contain', 'That doesn\'t look like a valid email address')
    //     })

    //     it('Sign-in: Correct email format and missing password', () => {
    //         cy.get('#sign-in-form--email-input--inner').clear()
    //         cy.get('#sign-in-form--email-input--inner').type(userEmail)
    //         cy.get('#sign-in-form--submit').click()
    //         cy.get('p[data-cy="password-input-error"]').should('contain', 'Please enter your password')
    //     })

    //     it('Sign-in: Correct email format and invalid password length', () => {
    //         cy.get('#sign-in-form--email-input--inner').type(userEmail)
    //         cy.get('#sign-in-form--password-input--inner').type(wrongPassword)
    //         cy.wait(1000)
    //         cy.get('p[data-cy="password-input-error"]').should('contain', 'Your password must be at least 6 characters long')
    //     })

    //     it('Sign-in: Correct password format and missing email address', () => {
    //         // reload page to clear fields
    //         cy.reload()
    //         cy.get('#sign-in-form--password-input--inner').type(password)
    //         cy.get('#sign-in-form--submit').click()
    //         cy.get('p[data-cy="email-input-error"]').should('contain', 'Please fill in your email address')
    //     })

    //     it('Sign-in: Missing email address and password', () => {
    //         cy.reload()
    //         cy.get('#sign-in-form--submit').click()
    //         cy.get('p[data-cy="email-input-error"]').should('contain', 'Please fill in your email address')
    //     })

    //     it('Sign-in: Non-existing user', () => {
    //         cy.get('#sign-in-form--email-input--inner').type(userEmail)
    //         cy.get('#sign-in-form--password-input--inner').type(password)
    //         cy.get('#sign-in-form--submit').click()
    //         cy.get('div').should('contain', 'Incorrect login or password. If you recently signed up, please check your email for your invitation link.')
    //     })

    //     it('Sign-in: Correct credentials', () => {
    //         // Correct login
    //     })
    // })

    context('Login options', () => {
        beforeEach(() => {
            cy.visit('https://app.alfa.smartlook.cloud/sign/in')
        })

        it('Login: Google', () => {
            cy.get("#google-sign-in").contains('Google').click()
            // check popup window
            // url   https://accounts.google.com/o/oauth2/v2/auth/identifier?client_id=1011958794189-uf5u4cd4nimstmj0rbmtu0vgurckeuuu.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fapi-gateway.alfa.smartlook.cloud%2Fauth%2Fv1%2Flogin-google%2Freceive&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&response_type=code&access_type=offline&prompt=consent&state=newRedirect&flowName=GeneralOAuthFlow
        })

        it('Login: Facebook', () => {
            cy.get("#facebook-sign-in").contains('Facebook').click()
            // Check popup window
        })

        it('Login: Segment', () => {
            cy.get("#segment-sign-in").contains('Segment').click()
            // Check popup window
            // https://app.segment.com/login?login_challenge=1473a72707764d868a79fc0b414537d9
        })

        it('Login: Company login', () => {
            cy.get("#sign-sso-button").contains('Company login (SSO)').click()
            cy.url().should('eq', 'https://app.alfa.smartlook.cloud/sign/sso')
        })
    })

    // context('Links', () => {
    //     beforeEach(() => {
    //         cy.visit('https://app.alfa.smartlook.cloud/sign/in')
    //     })

    //     it('Link: Create a free account', () => {
    //         cy.get('#sign-in-redirect-to-sign-up--desktop').click()
    //         cy.location('pathname').should('eq', '/sign/up?source=signInPage')
    //     })

    //     it('Link: Forgot password', () => {
    //         // return back to Login page
    //         cy.go('back')

    //         cy.get('#sign-in-form--reset-password-link').click()
    //         cy.location('pathname').should('eq', '/sign/reset-password')
    //     })

    //     it('Link: Privacy Policy', () => {
    //         // return back to Login page
    //         cy.go('back')

    //         cy.get('#recaptcha-privacy-link').click()
    //         cy.url().should('eq', 'https://policies.google.com/privacy')
    //     })

    //     it('Link: Terms of Service', () => {
    //         // return back to Login page
    //         cy.go('back')

    //         cy.get('#recaptcha-terms-link').click()
    //         cy.url().should('eq', 'https://policies.google.com/terms')
    //     })
    // })

    // context('Show/hide password feature', () => {
    //     beforeEach(() => {
    //         cy.visit('https://app.alfa.smartlook.cloud/sign/in')
    //     })

    //     it('Check hidden/shown password', () => {
    //         cy.get('#sign-in-form--password-input--inner').type(password)//.should('not.visible', password)
    //         cy.get('#sign-in-form--password-input--show-password-btn').click()
    //         cy.get('#sign-in-form--password-input--inner').should('contain', password)
    //     })
    // })

})