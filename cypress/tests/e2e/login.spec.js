describe('Login Tests', () => {

  const selectorsList = {
    usernameField: "[data-test='signin-username']",
    passwordField: "[data-test='signin-password']",
    loginButton: "[data-test='signin-submit']",
    tabList: "[data-test='nav-transaction-tabs']",
    wrongCredenntialAlert: "[role='alert']",

  }

    it('Deve fazer login com usuário válido', () => {
      cy.visit('/signin')
      cy.get(selectorsList.usernameField).type('Heath93')
      cy.get(selectorsList.passwordField).type('s3cret')
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.tabList).should('be.visible')  
    })

    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
      cy.visit('/signin')
      cy.get(selectorsList.usernameField).type('TestFail')
      cy.get(selectorsList.passwordField).type('TestFail')
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredenntialAlert) // Implemente os passos do caso de teste aqui
    });

  })

  
/*
  describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
      cy.visit('/signup')
       // Preenche os campos do formulário
    cy.get("#firstName").type('Carolina');
    cy.get("#lastName").type('Ferreira');
    cy.get('[data-test="username"]').type('carol_teste_' + Date.now()); // username único
    cy.get('[data-test="password"]').type('SenhaSegura123!');
    cy.get('[data-test="confirmPassword"]').type('SenhaSegura123!');

    // Envia o formulário
    cy.get('button[type="submit"]').click();

    // Verifica se foi redirecionado para a página de login com sucesso
    cy.url().should('include', '/signin');
    cy.contains('Conta criada com sucesso').should('be.visible');
  });
});
*/

   
  
