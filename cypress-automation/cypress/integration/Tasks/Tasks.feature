Feature: Tasks page

    Scenario Outline: Verify that the user is able to add a new task
        Given I access the Tasks web page
        When I enter a task name in the input field "<taskName>"
        And I hit the Enter key
        Then I will be able to add the new task "<taskName>"
        Examples:
            | taskName                        |
            | Create React Sample Application |

    Scenario Outline: Verify that the user is able to edit an added task
        Given I access the Tasks web page
        When I add a new task "<taskName>"
        And I click on the edit button icon from the added task
        And I update the task name in the input field to "<taskNameEdited>"
        When I hit the enter key in the added task input field
        Then I will be able to update the task to "<taskNameEdited>"
        Examples:
            | taskName                          | taskNameEdited                  |
            | Create Angular Sample Application | Create React Sample Application |

    Scenario Outline: Verify that the user is able to delete an added task
        Given I access the Tasks web page
        And I add a new task "<newTaskName>"
        And I click on the delete button from the added task "<newTaskName>"
        Then I will be able to delete the added task "<newTaskName>"
        Examples:
            | newTaskName                               |
            | Integrate automation project with Jenkins |

    Scenario Outline: Verify that the user is able to get Done a task
        Given I access the Tasks web page
        And I add a new task "<newTaskName>"
        When I click on the Done button from the added task "<newTaskName>"
        Then I will be able to get Done the added task "<newTaskName>"
        Examples:
            | newTaskName                                              |
            | Complete the continuous integration with GitHub and Jira |