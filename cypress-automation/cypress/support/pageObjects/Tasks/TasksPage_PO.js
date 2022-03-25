class TasksPage_PO {

    getEnterTaskInputField(){
        return cy.get("#enter-task");
    }
    getEditTaskBtn(){
        return cy.xpath("//span[@class='icon icon-edit']");
    }
    getDeleteTaskBtn(){
        return cy.xpath("//span[@class='icon icon-delete']");
    }
    getDoneTaskBtn(){
        return cy.xpath("//span[@class='icon icon-done']");
    }

    //FUNCTIONS
    addTaskFunc(taskName){
        this.getEnterTaskInputField().type(taskName).type('{enter}');
    }

    verifyTaskAddedFunc(taskName){
        cy.xpath("//form[@class='todos-single' and span[contains(text(),'" + taskName + "')]]").should("be.visible");
    }

}
export default TasksPage_PO;