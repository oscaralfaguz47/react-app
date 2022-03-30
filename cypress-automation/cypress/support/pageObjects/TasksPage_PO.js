class TasksPage_PO {

    //Objects
    getEnterTaskInputField() {
        return cy.get("#enter-task");
    }
    getEditIconBtn() {
        return cy.xpath("(//span[@class='icon icon-edit'])[1]");
    }
    getInputTextFromFirstAddedTask() {
        return cy.xpath("(//input[@class='todos-single-text'])[1]");
    }

    //FUNCTIONS
    fillOutEnterTaskInputFieldFunc(taskName) {
        this.getEnterTaskInputField().type(taskName);
    }

    hitEnterKeyInTaskInputFieldFunc() {
        this.getEnterTaskInputField().type('{enter}');
    }

    verifyNewTaskAddedFunc(taskName) {
        cy.xpath("//form[@class='todos-single' and span[normalize-space(text())='" + taskName + "']]").should("be.visible");
    }

    addNewTaskFunc(taskName) {
        this.fillOutEnterTaskInputFieldFunc(taskName);
        this.hitEnterKeyInTaskInputFieldFunc();
    }

    clickOnEditTaskBtnFunc() {
        this.getEditIconBtn().click();
    }

    fillOutInputTextFromFirstAddedTaskFunc(taskName) {
        this.getInputTextFromFirstAddedTask().clear().type(taskName);
    }

    hitEnterKeyInInputTextFromFirstAddedTaskFunc() {
        this.getInputTextFromFirstAddedTask().type('{enter}');
    }
    verifyTaskEdited(taskNameEdited) {
        cy.xpath("//form[@class='todos-single' and span[normalize-space(text())='" + taskNameEdited + "']]").should("be.visible");
    }

    clickOnDeleteBtnFromAddedTaskFunc(addedTaskName) {
        cy.xpath("//form[span[normalize-space(text())='" + addedTaskName + "']]//span[@class='icon icon-delete']").click();
    }

    verifyAddedTaskIsDeletedFunc(addedTaskName){
        cy.xpath("//form[@class='todos-single' and span[normalize-space(text())='" + addedTaskName + "']]").should("not.exist");
    }

    clickOnDoneButtonFromAddedTaskFunc(addedTaskName){
        cy.xpath("//form[span[normalize-space(text())='" + addedTaskName + "']]//span[@class='icon icon-done']").click();
    }
    
    verifyTaskIsCompletedFunc(taskName){
        cy.xpath("//form[s[normalize-space(text())='" + taskName + "']]").should("be.visible");
    }

}
export default TasksPage_PO;