export class Layout {


  checkElementPositionOnPageByWidth(el, eq) {
    cy.get(el).eq(eq)
      .then($target => {
        //const windowInnerWidth = Cypress.config(`viewportWidth`);

        cy.window().then(win => {
          const pageWidth = win.document.documentElement.scrollWidth
          const bounding = $target[0].getBoundingClientRect();
          const rightwidht = pageWidth - bounding.right
          expect(bounding.left).to.be.at.equal(rightwidht);
        })
      })
  }

}

export const layout = new Layout()
