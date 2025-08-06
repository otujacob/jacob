describe('Verifying that our page is LIVE', () => {
  it('it visits the live app', () => {
    cy.visit('https://jacob-nu.vercel.app')

    cy.contains('EDO STATE SECURITY SUMMIT').should('be.visible')
    
  })

})