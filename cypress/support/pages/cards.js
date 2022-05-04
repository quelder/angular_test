export class Cards {

  checkPageTitle(text) {
    cy.get('.container').get('h1').should('have.text', text)
  }

  checkToggleCards() {
    cy.contains("Toggle Cards").click()
    //cy.get('p').contains('Cards are hidden!')
    cy.get('app-card').should('not.exist');
    cy.contains("Toggle Cards").click()
  }

  checkTitleAndTime(h2_text, p_text, eq) {
    const dayjs = require('dayjs');
    const todaysDate = dayjs().format('DD MMM YYYY HH:mm')
    cy.get('.card').eq(eq)
      .get('h2').eq(eq).should('have.text', h2_text)
      .get('p').eq(eq).should('have.text', p_text)
      .get('strong').eq(eq).contains(todaysDate)
  }

  checkColorButton(eq) {
    cy.get('.card').eq(eq)
      .contains("Set Blue").click()
      .get('p').eq(eq).should('have.css', 'color', 'rgb(0, 0, 255)')
    cy.get('.card').eq(eq)
      .contains("Set Green").click()
      .get('p').eq(eq).should('have.css', 'color', 'rgb(0, 128, 0)')
    cy.get('.card').eq(eq)
      .contains("Set Red").click()
      .get('p').eq(eq).should('have.css', 'color', 'rgb(255, 0, 0)')
  }

  checkTitleButton(text, eq, card_number) {
    cy.get('.card').eq(eq)
      .contains("Change title").click()
      .get('h2').eq(eq).should('have.text', card_number + ' Title has been changed!')
      .get('input').eq(eq).invoke('attr', 'ng-reflect-model').should('contain', 'Title has been changed!')
    cy.get('.card').eq(eq)
      .contains("Change title inline").click()
      .get('h2').eq(eq).should('have.text', card_number + ' Inline title')
      .get('input').eq(eq).invoke('attr', 'ng-reflect-model').should('contain', 'Inline title')
    cy.get('.card').eq(eq)
      .get('input').eq(eq).clear().type(text)
  }

}

export const cards = new Cards()
