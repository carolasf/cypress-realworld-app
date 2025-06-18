import DashboardPage from '../pages/dashboardPage.js';
import LoginPage from '../pages/loginPage.js';
import userData from '../../fixtures/userData.json';
import ContactPage from '../pages/contactPage.js';
import PaymentPage from '../pages/paymentPage.js';

const paymentPage = new PaymentPage();

const contactPage = new ContactPage();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Transfrência de dinheiro', () => {

    it('Deve enviar dinheiro com sucesso', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);

        dashboardPage.checkDashboardPage();
        dashboardPage.checkBalance().then((saldo) => {
            cy.log('Saldo capturado no teste: ' + saldo);

            // Escolhe o valor a ser enviado - por exemplo, metade do saldo
            let valorParaTransferir = saldo >= 2 ? Math.floor(saldo / 2) : saldo;

        dashboardPage.accessNewTransaction();
       


        contactPage.selectContact();

        paymentPage.fillPaymentForm(valorParaTransferir, 'Transferência com base no saldo');
    });
  });


    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);

        dashboardPage.checkDashboardPage();

        dashboardPage.checkBalance().then((saldo) => {
            cy.log('Saldo atual: ' + saldo);

            // Define um valor maior que o saldo atual
            const valorExcedente = saldo + 100;

            dashboardPage.accessNewTransaction();
            contactPage.selectContact();
            paymentPage.fillPaymentForm(valorExcedente, 'Transferência com valor além do saldo feita com sucesso');

        
        });
    });
});