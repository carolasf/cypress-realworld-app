import userData from '../../fixtures/userData.json';
import LoginPage from '../pages/loginPage.js';
import SignupPage from '../pages/signupPage.js';
import DashboardPage from '../pages/dashboardPage.js';


const loginPage = new LoginPage()
const signupPage = new SignupPage()
const dashboardPage = new DashboardPage()


describe('Login Tests', () => {

    it.only('Deve fazer login com usuário válido', () => {
      //cy.intercept('POST', '/graphql').as('loginRequest');


      loginPage.accessLoginPage();
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);

      dashboardPage.checkDashboardPage();
      // cy.wait('@loginRequest').then((interception) => {
      //   if (interception && interception.response) {
      //     expect(interception.response.statusCode).to.eq(200);
      //   } else {
      //     throw new Error('A resposta da requisição de login está indefinida');
      //   }
      });


      });
      
  

      it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithUser(userData.userFail.username, userData.userFail.password);
        loginPage.checkAccessInvalid();
      });

      it('Deve registrar um novo usuário com informações válidas', () => {
        cy.visit('/signin')
      
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
  
    
   

    