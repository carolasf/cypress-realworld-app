describe('Login com sucesso', () => {
    it('Deve fazer login com usuário válido', () => {
      cy.visit('/signin')
      cy.get('#username').type('Heath93')
      cy.get('#password').type('s3cret')
      cy.get('[data-test="signin-submit"]').click()
      cy.url().should('include', "http://localhost:3000/")
    })

    it('Tentar fazer login com credenciais inválidas', () => {
      cy.visit('/signin')
      cy.get('#username').type('TestFail')
      cy.get('#password').type('TestFail')
      cy.get('[data-test="signin-submit"]').click()
      cy.get("[role='alert']")
    
    })
  
  })
  
  
