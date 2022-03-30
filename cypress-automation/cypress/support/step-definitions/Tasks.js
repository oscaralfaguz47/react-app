import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import TasksPage_PO from "../pageObjects/TasksPage_PO";

const tasksPage_PO = new TasksPage_PO();

Given("I access the Tasks web page", () => {
    cy.visit(Cypress.env('URL'));
})

When("I enter a task name in the input field {string}", (taskName) => {
    tasksPage_PO.fillOutEnterTaskInputFieldFunc(taskName);
});

And("I hit the Enter key", () => {
    tasksPage_PO.hitEnterKeyInTaskInputFieldFunc();
});

Then("I will be able to add the new task {string}", (taskName) => {
    tasksPage_PO.verifyNewTaskAddedFunc(taskName);
});

And("I add a new task {string}", (taskName) => {
    tasksPage_PO.addNewTaskFunc(taskName);
});

And("I click on the edit button icon from the added task", () => {
    tasksPage_PO.clickOnEditTaskBtnFunc();
});

And("I update the task name in the input field to {string}", (taskNameEdited) => {
    tasksPage_PO.fillOutInputTextFromFirstAddedTaskFunc(taskNameEdited);
});

When("I hit the enter key in the added task input field", () => {
    tasksPage_PO.hitEnterKeyInInputTextFromFirstAddedTaskFunc();
});

Then("I will be able to update the task to {string}", (taskNameEdited) => {
    tasksPage_PO.verifyNewTaskAddedFunc(taskNameEdited);
});

And("I click on the delete button from the added task {string}", (addedTaskName) => {
    tasksPage_PO.clickOnDeleteBtnFromAddedTaskFunc(addedTaskName);
});

Then("I will be able to delete the added task {string}", (addedTaskName) => {
    tasksPage_PO.verifyAddedTaskIsDeletedFunc(addedTaskName);
});

When("I click on the Done button from the added task {string}", (addedTaskName) => {
    tasksPage_PO.clickOnDoneButtonFromAddedTaskFunc(addedTaskName);
});

Then("I will be able to get Done the added task {string}", (addedTaskName) => {
    tasksPage_PO.verifyTaskIsCompletedFunc(addedTaskName);
});