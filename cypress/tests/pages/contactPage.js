class ContactPage {
    selectorsList() {
        const selectors = {
            contact: "[data-test='user-list-item-GjWovtg2hr']",
        }   
        
        return selectors;
    }


    selectContact() {
        cy.get(this.selectorsList().contact).click();
    }
}

export default ContactPage 