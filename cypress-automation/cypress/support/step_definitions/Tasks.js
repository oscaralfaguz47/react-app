import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";


Given("I access the Tasks web page",() => {
    cy.visit(Cypress.env('URL'));
})
    
When("I enter a task name in the input field {word}",(taskName)=>{
    cy.get("#enter-task").type(taskName);
});