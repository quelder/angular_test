/// <reference types="Cypress" />


import {cards} from "../../support/pages/cards";
import {layout} from "../../support/pages/layout";


beforeEach(() => {
   cy.visit('http://localhost:4200/')
})



it ('Start page test', () => {
  cards.checkPageTitle('Hello Angular')
  cards.checkToggleCards()
})


it ('First card', () => {
  cy.get('.card').eq(0)
    .trigger('focus','topLeft')
    .trigger('focus','topRight')
  cards.checkTitleAndTime('1 Card 1', 'This is card number 1', 0)
  cards.checkColorButton('0')
  cards.checkTitleButton('Test title', '0', 1)
})

it ('Second card', () => {
  cards.checkTitleAndTime('2 This is card 2', 'This is card number 2',  1)
  cards.checkColorButton('1')
  cards.checkTitleButton('Test title', '1', 2)
})

it ('Third card', () => {
  cards.checkTitleAndTime('3 Last card!', 'This is card number 3',  2)
  cards.checkColorButton(2)
  cards.checkTitleButton('Test title', 2, 3)
})



describe('Desktop 1920, 1080', {
  viewportHeight: 1080,
  viewportWidth: 1920,
  baseUrl: 'http://localhost:4200/'
}, () => {
  it('viewport test', () => {
    cy.visit('/').then(() => {
      let numberOfCards = 2;

      for (let i = 0; i <= numberOfCards; i += 1) {
        cy.get('app-card').eq(`${i}`).topIsWithinViewport()
        layout.checkElementPositionOnPageByWidth('app-card', `${i}`)
      }
    })
  })

  it(' checks css styles and sizing', () => {
    let numberOfCards = 2;
    for (let i = 0; i <= numberOfCards; i += 1) {
      cy.get('.card').eq(`${i}`)
        .should('have.css', 'margin', '0px 0px 16px')
        .should('have.css', 'border', '1px dashed rgb(204, 204, 204)')
        .should('have.css', 'padding', '8px 16px')

    }

    let numberOfButtons = 15;
    for (let j = 0; j <= numberOfButtons; j += 1) {
      cy.get('button').eq(`${j}`)
        .should('have.css', 'margin', '0px')
        .should('have.css', 'border', '2px outset rgb(118, 118, 118)')
        .should('have.css', 'padding', '1px 6px')
        .should('have.css', 'background-color', 'rgb(239, 239, 239)')
        .should('have.css', 'height', '21px')
    }

    let numberOfInput = 2;
    for (let k = 0; k <= numberOfInput; k += 1) {
      cy.get('input').eq(`${k}`)
        .should('have.css', 'margin', '0px')
        .should('have.css', 'border', '2px inset rgb(118, 118, 118)')
        .should('have.css', 'padding', '1px 2px')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        .should('have.css', 'height', '15px')
        .should('have.css', 'width', '169px')
    }

    // cy.get('[data-cy=headline]')
    //   .should('have.css', 'width').and('match', /^(569|571)px/)
  })

})

describe('Desktop 1366, 768', {
  viewportHeight: 768,
  viewportWidth: 1366,
  baseUrl: 'http://localhost:4200/'
}, () => {
  it('viewport test', () => {
    cy.visit('/').then(() => {
      let numberOfCards = 2;

      for (let i = 0; i <= numberOfCards; i += 1) {
        cy.get('app-card').eq(`${i}`).topIsWithinViewport()
        layout.checkElementPositionOnPageByWidth('app-card', `${i}`)
      }
    })
  })

  it (' checks css styles and sizing', () => {
    let numberOfCards = 2;
    for (let i = 0; i <= numberOfCards; i += 1) {
      cy.get('.card').eq(`${i}`)
        .should('have.css', 'margin', '0px 0px 16px')
        .should('have.css', 'border', '1px dashed rgb(204, 204, 204)')
        .should('have.css', 'padding', '8px 16px')

    }

    let numberOfButtons = 15;
    for (let j = 0; j <= numberOfButtons; j += 1) {
      cy.get('button').eq(`${j}`)
        .should('have.css', 'margin', '0px')
        .should('have.css', 'border', '2px outset rgb(118, 118, 118)')
        .should('have.css', 'padding', '1px 6px')
        .should('have.css', 'background-color', 'rgb(239, 239, 239)')
        .should('have.css', 'height', '21px')
    }

    let numberOfInput = 2;
    for (let k = 0; k <= numberOfInput; k += 1) {
      cy.get('input').eq(`${k}`)
        .should('have.css', 'margin', '0px')
        .should('have.css', 'border', '2px inset rgb(118, 118, 118)')
        .should('have.css', 'padding', '1px 2px')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        .should('have.css', 'height', '15px')
        .should('have.css', 'width', '169px')
    }
  })
})

describe('Ipad 2048, 1536', {
  viewportHeight: 1536,
  viewportWidth: 2048,
  baseUrl: 'http://localhost:4200/'
}, () => {
  it('viewport test', () => {
    cy.visit('/').then(() => {
      let numberOfCards = 2;

      for (let i = 0; i <= numberOfCards; i += 1) {
        cy.get('app-card').eq(`${i}`).topIsWithinViewport()
        layout.checkElementPositionOnPageByWidth('app-card', `${i}`)
      }
    })
  })

  it (' checks css styles and sizing', () => {
    let numberOfCards = 2;
    for (let i = 0; i <= numberOfCards; i += 1) {
      cy.get('.card').eq(`${i}`)
        .should('have.css', 'margin', '0px 0px 16px')
        .should('have.css', 'border', '1px dashed rgb(204, 204, 204)')
        .should('have.css', 'padding', '8px 16px')

    }

    let numberOfButtons = 15;
    for (let j = 0; j <= numberOfButtons; j += 1) {
      cy.get('button').eq(`${j}`)
        .should('have.css', 'margin', '0px')
        .should('have.css', 'border', '2px outset rgb(118, 118, 118)')
        .should('have.css', 'padding', '1px 6px')
        .should('have.css', 'background-color', 'rgb(239, 239, 239)')
        .should('have.css', 'height', '21px')
    }

    let numberOfInput = 2;
    for (let k = 0; k <= numberOfInput; k += 1) {
      cy.get('input').eq(`${k}`)
        .should('have.css', 'margin', '0px')
        .should('have.css', 'border', '2px inset rgb(118, 118, 118)')
        .should('have.css', 'padding', '1px 2px')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        .should('have.css', 'height', '15px')
        .should('have.css', 'width', '169px')
    }
  })
})

describe('Iphone 828, 1792', {
  viewportHeight: 1792,
  viewportWidth: 828,
  baseUrl: 'http://localhost:4200/'
}, () => {
  it('viewport test', () => {
    cy.visit('/').then(() => {
      let numberOfCards = 2;

      for (let i = 0; i <= numberOfCards; i += 1) {
        cy.get('app-card').eq(`${i}`).topIsWithinViewport()
        layout.checkElementPositionOnPageByWidth('app-card', `${i}`)
      }
    })
  })

  it (' checks css styles and sizing', () => {
    let numberOfCards = 2;
    for (let i = 0; i <= numberOfCards; i += 1) {
      cy.get('.card').eq(`${i}`)
        .should('have.css', 'margin', '0px 0px 16px')
        .should('have.css', 'border', '1px dashed rgb(204, 204, 204)')
        .should('have.css', 'padding', '8px 16px')

    }

    let numberOfButtons = 15;
    for (let j = 0; j <= numberOfButtons; j += 1) {
      cy.get('button').eq(`${j}`)
        .should('have.css', 'margin', '0px')
        .should('have.css', 'border', '2px outset rgb(118, 118, 118)')
        .should('have.css', 'padding', '1px 6px')
        .should('have.css', 'background-color', 'rgb(239, 239, 239)')
        .should('have.css', 'height', '21px')
    }

    let numberOfInput = 2;
    for (let k = 0; k <= numberOfInput; k += 1) {
      cy.get('input').eq(`${k}`)
        .should('have.css', 'margin', '0px')
        .should('have.css', 'border', '2px inset rgb(118, 118, 118)')
        .should('have.css', 'padding', '1px 2px')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        .should('have.css', 'height', '15px')
        .should('have.css', 'width', '169px')
    }
  })
})
