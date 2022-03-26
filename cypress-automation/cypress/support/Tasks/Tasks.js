import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";


Given("I access the Tasks web page",() => {
    cy.visit(Cypress.env('URL'));
})
    
When("I enter a task name in the input field {string}",(taskName)=>{
    cy.get("#enter-task").type(taskName);
});

And("I hit the Enter key",()=>{
    cy.get("#enter-task").type('{enter}');
});
Then("I will be able to add the new task",()=>{
    cy.xpath("//form[@class='todos-single']").should("be.visible");
});