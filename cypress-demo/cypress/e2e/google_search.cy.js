/// <reference types="cypress" />

// Basic function structure
it('Google Search', function (){
    cy.visit('https://google.com')
    cy.get('#APjFqb', {timeout:5000}).wait(5000).type('Cypress{enter}') // Type text and hit enter
    //cy.contains('Google Search').click() // find element and click
})

// Alternative function structure
// if ('Google Search', () => {

// })