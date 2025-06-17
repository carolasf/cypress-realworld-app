import DashboardPage from '../pages/dashboardPage.js';
import LoginPage from '../pages/loginPage.js';
import userData from '../../fixtures/userData.json';
import ContactPage from '../pages/contactPage.js';
import PaymentPage from '../pages/paymentPage.js';

const paymentPage = new PaymentPage();

const contactPage = new ContactPage();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Enviar dinheiro com saldo suficiente', () => {
    it.only('Deve enviar dinheiro com sucesso', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);

        dashboardPage.checkDashboardPage();
        dashboardPage.accessNewTransaction();
        contactPage.selectContact();

        paymentPage.fillPaymentForm('1000', 'Transferência para Carolina');
    });
  });