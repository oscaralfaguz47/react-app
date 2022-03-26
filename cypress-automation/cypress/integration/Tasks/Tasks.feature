Feature: Tasks page

    Scenario Outline: Verify that the user is able to add a new task
        Given I access the Tasks web page
        When I enter a task name in the input field "<task>"
        And I hit the Enter key
        Then I will be able to add the new task
        Examples:
            | task | 
            | Create React Sample Application |