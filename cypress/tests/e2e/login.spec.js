import userData from '../../fixtures/userData.json';
import LoginPage from '../pages/loginPage.js';
import SignupPage from '../pages/signupPage.js';
import DashboardPage from '../pages/dashboardPage.js';


const loginPage = new LoginPage()
const signupPage = new SignupPage()
const dashboardPage = new DashboardPage()


describe('Tests ReaWorld App', () => {
  it('Deve fazer login com usuário válido', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);
    
    dashboardPage.checkDashboardPage();
    });

  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password);
    loginPage.checkAccessInvalid();
    });
  
  
  it('Deve registrar um novo usuário com informações válidas', () => {
    signupPage.accessSignupPage();
    signupPage.fillSignupForm(userData.newUserSuccess.firstName,userData.newUserSuccess.lastName,userData.newUserSuccess.username, userData.newUserSuccess.password, userData.newUserSuccess.confirmPassword);
    loginPage.accessLoginPage();
    });
  
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    signupPage.accessSignupPage();
    signupPage.fillSignupForm(userData.newUserFail.firstName, userData.newUserFail.lastName, userData.newUserFail.username, userData.newUserFail.password, userData.newUserFail.confirmPassword); 
    signupPage.validateFirstNameRequiredError();
    //signupPage.validatePasswordMismatchError();
  });  
});

  