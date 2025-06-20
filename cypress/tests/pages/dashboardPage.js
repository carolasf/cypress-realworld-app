    class DashboardPage {

        selectorsList() {

        
            const selectors = {
                tabList: "[data-test='nav-transaction-tabs']",
                newTransactionButton: "[data-test='nav-top-new-transaction']",
                balanceAmount: "[data-test='sidenav-user-balance']",
                transactionList: "[data-test='transaction-list']",
                transactionItem: "[data-test='transaction-item-Ec6hHyL6SC2F']",
                transactionMessage: "[data-test='empty-list-header']",
                mineButton: "[data-test='nav-personal-tab']"
            }   
            
            return selectors;
        }

        // accessDashboardPage() {
        //     cy.visit('/');
        // }

        checkDashboardPage() {
            cy.location('pathname').should('eq', '/'); 
            cy.get(this.selectorsList().tabList, { timeout: 10000 }).should('be.visible');
        }

        accessNewTransaction() {
            cy.get(this.selectorsList().newTransactionButton).click();
        }

        checkBalance() {
            this.saldoAtual = 0;
            return cy.get(this.selectorsList().balanceAmount).invoke('text').then((text) => {
                // Remove símbolos e converte para número
                this.saldoAtual = parseFloat(text.replace(/[^0-9.-]+/g, ''));
                cy.log('Saldo atual: ' + this.saldoAtual);
                return this.saldoAtual;                    
            }); 
        }

        transactionListShouldBeVisible() {
                cy.get(this.selectorsList().transactionList).should('be.visible');
            }  

        openFirstTransactionDetails() {
            cy.get(this.selectorsList().transactionItem).first().click();
        
        }

        shouldShowNoTransactionMessage() {
            cy.get(this.selectorsList().mineButton).click();
            cy.get(this.selectorsList().transactionMessage).should('be.visible').and('contain.text', 'No Transactions');
        }

    
            
    }

    export default DashboardPage
