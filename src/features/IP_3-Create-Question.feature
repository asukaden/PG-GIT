@RegressionTest
Feature: Create Question
    Scenario: Verify the Register question and Options page displayed correctly
        Given Launch the application
        When Click the Add New Button
        And Select the SortOrder as "Ascending"
        And Select the DefaultLanguage as "English"
        # And Select the RequiredLanguage as "English"
        # And Enter the title as "EnglishTitle"
        # And Enter the description as "EnglishDescription"
        And Click on the Save and Continue Button
        Then Verify the Question settings page

    Scenario: Verify the user is able to register question sentence
        When Input the question sentence as "This is Question one?"

    Scenario: Verify the multiple questions registration
        Then Verify that user is unable to add more than 10 questions

    Scenario: Verify the multiple registration button is present
        Then Select the Question type as "Multiple Choice" and verify that multiple registration button is present

    Scenario: Verify the Required flag
        Then Verify the Required flag

    Scenario: Verify the Randomization flag
        Then Verify the Randomization flag

    Scenario: Verification of [Multiple registration] button display
        And Verify that the Multipleoption registration button is present

    Scenario: Verify the multiple options registration
        Then Verify the options creation and maximum limit validation

    Scenario: Verification of multiple questions registration with Line break
        And Input question as "Question1","Question1","Question3"
        And Verify multiple questions registration with the given inputs are possible


    Scenario: Verification of Multiple registration button display
        Then Verify the Add multiple option button is present

    Scenario: Verification of multiple option selection dilog box
        And Verify the multiple option selection dilog box is present

    Scenario: Verification of multiple options registration with Line break
        And Input options as "OPTION10","OPTION9","OPTION8"
        And Verify multiple options registration with the given inputs are possible



    Scenario: Verification of exclusive  toggle button
        Then Verify the exclusive toggle button is present




