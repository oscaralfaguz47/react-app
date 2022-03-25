Feature: Tasks page

    Scenario: Add a new task
        Given I access the Tasks web page
        When I enter a task name in the input field
        And I hit the Enter key
        Then I will be able to add the new task