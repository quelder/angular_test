/// <reference types="Cypress" />


import {cards} from "../../support/pages/cards";


before(() => {
  cy.visit('http://localhost:4200/')
})

it('Start page test', () => {
  cards.checkPageTitle('Hello Angular')
  cards.checkToggleCards()

  cy.wait(1000).document().toMatchImageSnapshot()
})

it('First card', () => {
  cards.checkTitleAndTime('1 Card 1', 'This is card number 1', 0)
  cards.checkColorButton('0')
  cards.checkTitleButton('Test title', '0', 1)
})

it('Second card', () => {
  cards.checkTitleAndTime('2 This is card 2', 'This is card number 2',  1)
  cards.checkColorButton('1')
  cards.checkTitleButton('Test title', '1', 2)
})

it('Third card', () => {
  cards.checkTitleAndTime('3 Last card!', 'This is card number 3',  2)
  cards.checkColorButton(2)
  cards.checkTitleButton('Test title', 2, 3)
})
