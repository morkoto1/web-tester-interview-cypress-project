/// <reference types="cypress" />

describe('Pricing page', () => {
    // Table values
    const features = ["Sessions/month", "Data history", "Events", "Funnels", "Heatmaps", "Session vault", "Standart integrations", "Premium integrations", "Devtools", "Enterprise features"]
    const freeValues = ['1,500', '1 month', '2', '1', '3', 'X', 'X', 'X', 'X', 'X']
    const startupValues = ['5,000', '1 month', '4', '1', '10', 'X', 'X', 'X', 'X', 'X']
    const businessValues = ['15,000', '1 month', '12', '4', '30', 'Y', 'Y', , 'add-on', 'add-on', 'X']
    const ultimateValues = ['Custom', 'Custom', 'Custom', 'Custom', 'Custom', 'Y', 'Y', 'add-on', 'add-on', 'add-on']

    // Icons data sources
    const crossIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTMiIGhlaWdodD0iMTMiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNNy4xMDYgNi4xNmw0LjkwOC00Ljg3N2MuMjA1LS4xNTQuMjU2LS4zNTkuMjU2LS41NjQgMC0uMjA2LS4xMDMtLjM2LS4yMDUtLjUxNEEuODE2LjgxNiAwIDAwMTEuNTAzIDBjLS4yNTYgMC0uNDEuMTAzLS41NjIuMjA1TDYuMTM1IDUuMDMxdi4wNTFMMS4yNzguMjA1QzEuMTI1LjA1MS45MiAwIC43MTYgMCAuNTEgMCAuMzU4LjEwMy4yMDQuMjA1LjEwMi4zNiAwIC41NjUgMCAuNzdjMCAuMjA1LjEwMi4zNi4yMDQuNTEzTDUuMTEyIDYuMTYuMjA0IDExLjAzN2MtLjE1My4xNTQtLjIwNC4zNi0uMjA0LjU2NSAwIC4yMDUuMTAyLjM2LjIwNC41MTRhLjgxNi44MTYgMCAwMC41NjMuMjA1Yy4yNTUgMCAuNDA5LS4xMDMuNTYyLS4yMDVMNi4xODYgNy4yOXYtLjA1MWw0Ljg1NyA0LjgyNWMuMTUzLjE1NC4zNTguMjA2LjU2Mi4yMDYuMjA1IDAgLjM1OC0uMTAzLjUxMS0uMjA2YS43MzcuNzM3IDAgMDAuMjA1LS41MTNjMC0uMjA2LS4xMDItLjM2LS4yMDUtLjUxNEw3LjEwNiA2LjE2eiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjYSIvPjxnIGZpbGw9IiMzRjVCNzgiIG1hc2s9InVybCgjYikiPjxwYXRoIGQ9Ik0wIDBoMTIuMjk0djEyLjI5NEgweiIvPjwvZz48L2c+PC9zdmc+"
    const checkIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTciIGhlaWdodD0iMTYiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMTYuNDU3LjI2MmMuNjM3LjMxOS42MzcgMS4yNzUuMzE4IDEuODA2TDcgMTUuMzVjLS43NDMuODUtMS43Ljg1LTIuNDQzIDBsLTQuMjUtNS4xYy0uNDI1LS41MzItLjQyNS0xLjM4Mi4xMDYtMS44MDcuNTMxLS41MyAxLjM4MS0uMzE4IDEuODA2LjEwN2wzLjUwNiA0LjE0M0wxNC42NS40NzVjLjQyNS0uNTMyIDEuMjc1LS42MzggMS44MDctLjIxM3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48dXNlIGZpbGw9IiM0NjkzRTAiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI2EiLz48ZyBmaWxsPSIjMkVDMDlBIiBtYXNrPSJ1cmwoI2IpIj48cGF0aCBkPSJNMCAwaDE3djE3SDB6Ii8+PC9nPjwvZz48L3N2Zz4="

    // Package variants
    const FREE_PLAN = "Free"
    const STARTUP_PLAN = "Startup"
    const BUSINESS_PLAN = "Business"
    const ULTIMATE_PLAN = "Ultimate"

    // 1.  Check prices of packages
    context('Pricing table', () => {
        beforeEach(() => {
            cy.visit('https://www.alfa.smartlook.cloud/pricing/?currencyCode=CZK')
        })

        it('Plans headings', () => {
            cy.get('div:nth-child(1) > div.package__name.package-name > h3').contains(FREE_PLAN)
            cy.get('div:nth-child(2) > div.package__name.package-name > h3').contains(STARTUP_PLAN)
            cy.get('div.package.package--highlighted > div.package__name.package-name > h3').contains(BUSINESS_PLAN)
            cy.get('div:nth-child(4) > div.package__name.package-name > h3').contains(ULTIMATE_PLAN)
        })

        it('Check list of features', () => {
            cy.get('ul:nth-child(1)>li').each(($el, index) => {
                cy.get('h4').contains(features[index])
            })
        })

        it('Check Free plan values', () => {
            cy.get('ul>li').each(($el, index) => {
                if (freeValues[index] === 'X') {
                    cy.get(`img[src="${crossIcon}"]`).should('be.visible')
                } else if (freeValues[index] === undefined) {
                    // do nothing - empty li
                } else {
                    cy.get('span').contains(freeValues[index])
                }
            })
        })

        it('Check Startup plan values', () => {
            cy.get('ul:nth-child(3)>li').each(($el, index) => {
                // Check icons condition
                if (startupValues[index] === 'X') {
                    cy.get(`img[src="${crossIcon}"]`).should('be.visible')
                }
                else if (startupValues[index] === undefined) {
                    // do nothing - empty li
                } else {
                    cy.get('span').contains(startupValues[index])
                }
            })
        })

        it('Check Business plan values', () => {
            cy.get('ul:nth-child(4)>li').each(($el, index) => {
                // Check icons condition
                if (businessValues[index] === 'X') {
                    cy.get(`img[src="${crossIcon}"]`).should('be.visible')
                } else if (businessValues[index] === 'Y') {
                    cy.get(`img[src="${checkIcon}"]`).should('be.visible')
                } else if (businessValues[index] === undefined) {
                    // do nothing - empty li
                } else {
                    cy.get('.package-features-item__property--value').contains(businessValues[index])
                }
            })
        })

        it('Check Ultimate plan values', () => {
            cy.get('div:nth-child(4)>ul>li').each(($el, index) => {
                // Check icons condition
                if (ultimateValues[index] === 'Y') {
                    cy.get(`img[src="${checkIcon}"]`).should('be.visible')
                } else if (ultimateValues[index] === undefined) {
                    // do nothing - empty li
                } else {
                    cy.get('.package-features-item__property--value').contains(ultimateValues[index])
                }
            })
        })

        it('Check default Prices', () => {
            // Free plan
            cy.get('div:nth-child(1) > div.package__price.package-price').contains('Free')
            // Startup plan
            cy.get('div:nth-child(2) > div.package__price.package-price').contains('CZK 879 / monthly')
            // Business plan
            cy.get('div.package.package--highlighted > div.package__price.package-price').contains('CZK 2,079 / monthly')
            // Ultimate plan - without price 
            cy.get('div:nth-child(4) > div.package__price.package-price').should('have.value', '')
        })
    })

    // 2.  Test that 'Build a plan' button works and the modal is behaving as expected - prices and limits
    context('Pricing options', () => {
        beforeEach(() => {
            cy.visit('https://www.alfa.smartlook.cloud/pricing/?currencyCode=CZK')
        })

        it('Get started option', () => {
            cy.get('#free-package-button')
                .contains('Get started')
                .click()
            cy.wait(1000)

            cy.url().should('eq', 'https://app.alfa.smartlook.cloud/sign/up')
            cy.go('back')
        })

        it('Build a Startup plan option', () => {
            cy.get('#startup-package-button')
                .contains('Build a Startup plan')
                .click()
            cy.wait(1000)

            // Change to mothly payment
            cy.get('.modal-price').contains('CZK 879')
            cy.get('#modal-period_interval-annually').check({ force: true })
            cy.get('.modal-price').contains('CZK 1,099')

            // Change sessions limit
            cy.get('select').should('have.value', '5000')
            cy.get('select').eq(0).select('5,000').should('have.value', '5000')
            cy.get('.modal-price').contains('CZK 1,099')

            cy.get('select').eq(0).select('7,500').should('have.value', '7500')
            cy.get('.modal-price').contains('CZK 1,299')

            cy.get('select').eq(0).select('15,000').should('have.value', '15000')
            cy.get('.modal-price').contains('CZK 1,999')

            cy.get('select').eq(0).select('25,000').should('have.value', '25000')
            cy.get('.modal-price').contains('CZK 2,799')

            cy.get('select').eq(0).select('more').should('have.value', '0')
            cy.get('.modal-price--loading').contains('CZK 2,799')



            // Change to annual plan 
            cy.get('#modal-period_interval-monthly').check({ force: true })
            // Change sessions limit
            cy.get('select').eq(0).select('5,000').should('have.value', '5000')
            cy.get('.modal-price').contains('CZK 879')

            cy.get('select').eq(0).select('7,500').should('have.value', '7500')
            cy.get('.modal-price').contains('CZK 1,039')

            cy.get('select').eq(0).select('15,000').should('have.value', '15000')
            cy.get('.modal-price').contains('CZK 1,599')

            cy.get('select').eq(0).select('25,000').should('have.value', '25000')
            cy.get('.modal-price').contains('CZK 2,239')


            // Check redirect - Start free Trial
            cy.get('#pricing-modal-button')
                .contains('Start free Trial')
                .click()
            cy.url().should('eq', 'https://app.alfa.smartlook.cloud/sign/up')
            cy.go('back')

            // return to the Startup modal
            cy.get('#startup-package-button')
                .contains('Build a Startup plan')
                .click()
            cy.wait(1000)

            // Check redirect - Contact us
            cy.get('select').eq(0).select('more').should('have.value', '0')
            cy.get('#pricing-modal-button')
                .contains('Contact us')
                .click()
        })

        it('Build a Business plan option - monthly', () => {
            cy.get('#business-package-button')
                .click()
            cy.wait(1000)

            // Check monthly plan - data history 1 month
            cy.get('.modal-price').contains('CZK 2,079')
            cy.get('#modal-period_interval-annually').check({ force: true })
            cy.get('.modal-price').contains('CZK 2,599')
            cy.get('select').should('have.value', '15000')
            // Change sessions limits
            cy.get('select').eq(0).select('15,000').should('have.value', '15000')
            cy.get('.modal-price').contains('CZK 2,599')

            cy.get('select').eq(0).select('25,000').should('have.value', '25000')
            cy.get('.modal-price').contains('CZK 3,299')

            cy.get('select').eq(0).select('50,000').should('have.value', '50000')
            cy.get('.modal-price').contains('CZK 4,399')

            cy.get('select').eq(0).select('100,000').should('have.value', '100000')
            cy.get('.modal-price').contains('CZK 6,599')

            cy.get('select').eq(0).select('150,000').should('have.value', '150000')
            cy.get('.modal-price').contains('CZK 8,799')

            cy.get('select').eq(0).select('200,000').should('have.value', '200000')
            cy.get('.modal-price').contains('CZK 10,999')

            cy.get('select').eq(0).select('more').should('have.value', '0')
            cy.get('.modal-price--loading').should('be.visible')


            // Check monthly plan - data history 3 months
            cy.get('div:nth-child(2) > select').eq(0).select('3 months').should('have.value', '90')
            cy.get('select').eq(0).select('15,000').should('have.value', '15000')
            cy.get('.modal-price').contains('CZK 3,049')
            // Change sessions limits
            cy.get('select').eq(0).select('25,000').should('have.value', '25000')
            cy.get('.modal-price').contains('CZK 3,949')

            cy.get('select').eq(0).select('50,000').should('have.value', '50000')
            cy.get('.modal-price').contains('CZK 5,499')

            cy.get('select').eq(0).select('100,000').should('have.value', '100000')
            cy.get('.modal-price').contains('CZK 8,149')

            cy.get('select').eq(0).select('150,000').should('have.value', '150000')
            cy.get('.modal-price').contains('CZK 10,799')

            cy.get('select').eq(0).select('200,000').should('have.value', '200000')
            cy.get('.modal-price').contains('CZK 13,399')

            cy.get('select').eq(0).select('more').should('have.value', '0')
            cy.get('.modal-price--loading').should('be.visible')


            // Check monthly plan - data history 6 months
            cy.get('div:nth-child(2) > select').eq(0).select('6 months').should('have.value', '180')
            cy.get('select').eq(0).select('15,000').should('have.value', '15000')
            cy.get('.modal-price').contains('CZK 3,499')
            // Change sessions limits
            cy.get('select').eq(0).select('25,000').should('have.value', '25000')
            cy.get('.modal-price').contains('CZK 4,599')

            cy.get('select').eq(0).select('50,000').should('have.value', '50000')
            cy.get('.modal-price').contains('CZK 6,599')

            cy.get('select').eq(0).select('100,000').should('have.value', '100000')
            cy.get('.modal-price').contains('CZK 9,699')

            cy.get('select').eq(0).select('150,000').should('have.value', '150000')
            cy.get('.modal-price').contains('CZK 12,799')

            cy.get('select').eq(0).select('200,000').should('have.value', '200000')
            cy.get('.modal-price').contains('CZK 15,799')

            cy.get('select').eq(0).select('more').should('have.value', '0')
            cy.get('.modal-price--loading').should('be.visible')


            // Check monthly plan - data history 12 months
            cy.get('div:nth-child(2) > select').eq(0).select('12 months').should('have.value', '360')
            cy.get('select').eq(0).select('15,000').should('have.value', '15000')
            cy.get('.modal-price').contains('CZK 3,949')
            // Change sessions limits
            cy.get('select').eq(0).select('25,000').should('have.value', '25000')
            cy.get('.modal-price').contains('CZK 5,249')

            cy.get('select').eq(0).select('50,000').should('have.value', '50000')
            cy.get('.modal-price').contains('CZK 7,699')

            cy.get('select').eq(0).select('100,000').should('have.value', '100000')
            cy.get('.modal-price').contains('CZK 11,249')

            cy.get('select').eq(0).select('150,000').should('have.value', '150000')
            cy.get('.modal-price').contains('CZK 14,799')

            cy.get('select').eq(0).select('200,000').should('have.value', '200000')
            cy.get('.modal-price').contains('CZK 18,199')

            cy.get('select').eq(0).select('more').should('have.value', '0')
            cy.get('.modal-price--loading').should('be.visible')

        })

        it('Build a Business plan option - annual', () => {
            cy.visit('https://www.alfa.smartlook.cloud/pricing/?currencyCode=CZK')
            cy.get('#business-package-button')
                .click()
            cy.wait(1000)

            // Check annual plan - data history 1 month
            cy.get('select').eq(0).select('15,000').should('have.value', '15000')
            cy.get('.modal-price').contains('CZK 2,079')
            // Change sessions limits
            cy.get('select').eq(0).select('25,000').should('have.value', '25000')
            cy.get('.modal-price').contains('CZK 2,639')

            cy.get('select').eq(0).select('50,000').should('have.value', '50000')
            cy.get('.modal-price').contains('CZK 3,519')

            cy.get('select').eq(0).select('100,000').should('have.value', '100000')
            cy.get('.modal-price').contains('CZK 5,279')

            cy.get('select').eq(0).select('150,000').should('have.value', '150000')
            cy.get('.modal-price').contains('CZK 7,039')

            cy.get('select').eq(0).select('200,000').should('have.value', '200000')
            cy.get('.modal-price').contains('CZK 8,799')

            cy.get('select').eq(0).select('more').should('have.value', '0')
            cy.get('.modal-price--loading').should('be.visible')


            // Check annual plan - data history 3 months
            cy.get('div:nth-child(2) > select').eq(0).select('3 months').should('have.value', '90')
            cy.get('select').eq(0).select('15,000').should('have.value', '15000')
            cy.get('.modal-price').contains('CZK 2,439')
            // Change sessions limits
            cy.get('select').eq(0).select('25,000').should('have.value', '25000')
            cy.get('.modal-price').contains('CZK 3,159')

            cy.get('select').eq(0).select('50,000').should('have.value', '50000')
            cy.get('.modal-price').contains('CZK 4,399')

            cy.get('select').eq(0).select('100,000').should('have.value', '100000')
            cy.get('.modal-price').contains('CZK 6,519')

            cy.get('select').eq(0).select('150,000').should('have.value', '150000')
            cy.get('.modal-price').contains('CZK 8,639')

            cy.get('select').eq(0).select('200,000').should('have.value', '200000')
            cy.get('.modal-price').contains('CZK 10,719')

            cy.get('select').eq(0).select('more').should('have.value', '0')
            cy.get('.modal-price--loading').should('be.visible')


            // Check annual plan - data history 6 months
            cy.get('div:nth-child(2) > select').eq(0).select('6 months').should('have.value', '180')
            cy.get('select').eq(0).select('15,000').should('have.value', '15000')
            cy.get('.modal-price').contains('CZK 2,799')
            // Change sessions limits
            cy.get('select').eq(0).select('25,000').should('have.value', '25000')
            cy.get('.modal-price').contains('CZK 3,679')

            cy.get('select').eq(0).select('50,000').should('have.value', '50000')
            cy.get('.modal-price').contains('CZK 5,279')

            cy.get('select').eq(0).select('100,000').should('have.value', '100000')
            cy.get('.modal-price').contains('CZK 7,759')

            cy.get('select').eq(0).select('150,000').should('have.value', '150000')
            cy.get('.modal-price').contains('CZK 10,239')

            cy.get('select').eq(0).select('200,000').should('have.value', '200000')
            cy.get('.modal-price').contains('CZK 12,639')

            cy.get('select').eq(0).select('more').should('have.value', '0')
            cy.get('.modal-price--loading').should('be.visible')


            // Check annual plan - data history 12 months
            cy.get('div:nth-child(2) > select').eq(0).select('12 months').should('have.value', '360')
            cy.get('select').eq(0).select('15,000').should('have.value', '15000')
            cy.get('.modal-price').contains('CZK 3,159')
            // Change sessions limits
            cy.get('select').eq(0).select('25,000').should('have.value', '25000')
            cy.get('.modal-price').contains('CZK 4,199')

            cy.get('select').eq(0).select('50,000').should('have.value', '50000')
            cy.get('.modal-price').contains('CZK 6,159')

            cy.get('select').eq(0).select('100,000').should('have.value', '100000')
            cy.get('.modal-price').contains('CZK 8,999')

            cy.get('select').eq(0).select('150,000').should('have.value', '150000')
            cy.get('.modal-price').contains('CZK 11,839')

            cy.get('select').eq(0).select('200,000').should('have.value', '200000')
            cy.get('.modal-price').contains('CZK 14,559')

            cy.get('select').eq(0).select('more').should('have.value', '0')
            cy.get('.modal-price--loading').should('be.visible')

        })

        it('Contact sales option', () => {
            cy.get('#ultimate-package-button')
                .contains('Contact sales')
                .click()

            cy.url().should('eq', 'https://www.alfa.smartlook.cloud/request-demo/')
        })
    })
})
