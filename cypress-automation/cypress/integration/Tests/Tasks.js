/// <reference types="Cypress" />

import TasksPage_PO from "../../support/pageObjects/Tasks/TasksPage_PO";

describe("Task test cases", () => {

    const tasksPage_PO = new TasksPage_PO();

    beforeEach(function () {
        cy.visit(Cypress.env('URL')); // Open the URL
    });

    //Test Cases
    it.only("Verify that ther user is able to add a new task (TC-01)", () => {
       tasksPage_PO.addTaskFunc("Build the React Sample App");
       tasksPage_PO.verifyTaskAddedFunc("Build the React Sample App");

    });

    it("Verify that ther user is able to delete a task (TC-02)", () => {
        tasksPage_PO.addTaskFunc("Build the React Sample App");
     });








})