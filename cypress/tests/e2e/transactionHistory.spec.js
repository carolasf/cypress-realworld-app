import LoginPage from '../pages/loginPage';
import userData from '../../fixtures/userData.json';
import DashboardPage from '../pages/dashboardPage';

const dashboardPage = new DashboardPage();
const loginPage = new LoginPage();


describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
      loginPage.accessLoginPage();
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);
      
      dashboardPage.checkDashboardPage();
      dashboardPage.transactionListShouldBeVisible();
      dashboardPage.openFirstTransactionDetails();
  
    });

    it.only('Deve exibir o histórico de transações de um usuário corretamente', () => {
      loginPage.accessLoginPage();
      loginPage.loginWithUser(userData.userNoTransactions.username, userData.userNoTransactions.password);
      
      dashboardPage.checkDashboardPage();
      dashboardPage.shouldShowNoTransactionMessage();
      

    });
  });