import { last } from 'lodash';
import userData from '../../fixtures/userData.json';
import { sign } from 'crypto';

describe('Login Tests', () => {

  const selectorsList = {
    usernameField: "[data-test='signin-username']",
    passwordField: "[data-test='signin-password']",
    loginButton: "[data-test='signin-submit']",
    tabList: "[data-test='nav-transaction-tabs']",
    wrongCredenntialAlert: "[role='alert']",
    signupLink: "[data-test='signup']",
    firstnameFieldSignup: "[data-test='signup-first-name']",
    lastnameFieldSignup: "[data-test='signup-last-name']",
    usernameFieldSignup: "[data-test='signup-username']",
    passwordFieldSignup: "[data-test='signup-password']",
    confirmPasswordFieldSignup: "[data-test='signup-confirmPassword']",
    signupButton: "[data-test='signup-submit']",



  }


    it('Deve fazer login com usuário válido', () => {
      cy.visit('/signin')
      cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
      cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.tabList).should('be.visible')  
    })

    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
      cy.visit('/signin')
      cy.get(selectorsList.usernameField).type(userData.userFail.username)
      cy.get(selectorsList.passwordField).type(userData.userFail.password)
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredenntialAlert) 
    });

    it('Deve registrar um novo usuário com informações válidas', () => {
      cy.visit('/signin')
      cy.get(selectorsList.signupLink).click();
       // Preenche os campos do formulário
      cy.get(selectorsList.firstnameFieldSignup).type('Carolina');
      cy.get(selectorsList.lastnameFieldSignup).type('Ferreira');
      cy.get(selectorsList.usernameFieldSignup).type('carol_teste_' + Date.now()); // username único
      cy.get(selectorsList.passwordFieldSignup).type('SenhaSegura123!');
      cy.get(selectorsList.confirmPasswordFieldSignup).type('SenhaSegura123!');
  
      // Envia o formulário
      cy.get(selectorsList.signupButton).click();
  
      // Verifica se foi redirecionado para a página de login com sucesso
      cy.url().should('include', '/signin');
      });
  })

  
   
   
  
