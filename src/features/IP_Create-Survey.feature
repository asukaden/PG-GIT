@RegressionTest
Feature: Create Survey
    # Scenario: Verification of survey initial page with English
    #     Given Launch the application for survey creation
    #     When Select the page Langauge as "English"
    #     Then Verify the English Page

    # Scenario: Verification of survey initial page with Japanese
    #     Given Launch the application for survey creation
    #     When Select the page Langauge as "Japanese"
    #     Then Verify the Japanese Page


    # Scenario: Create survey by clicking add new button
    #     Given Launch the application for survey creation
    #     Given Click the Add New Button
    #     When Select the SortOrder as "Ascending"
    #     And Select the DefaultLanguage as "English"
    #     # And Select the RequiredLanguage as "English"
    #     And Enter the title as "EnglishTitle"
    #     And Enter the description as "EnglishDescription"
    #     Then Click on the Save and Continue Button


    # Scenario: Verification of Survey start
    #     Given Launch the application for survey creation
    #     And Verify that the Play button is changed to stop button when click on play button

    # Scenario: Verification of Survey stop
    #     Given Launch the application for survey creation
    #     And click on play button
    #     Then Verify that the Stop button is changed to Play button when click on Stop button

    # Scenario: Verification of Survey delete
    #     Given Launch the application for survey creation
    #     And Verify that the delete button is present in the page



    # Scenario: Verification of SurveyList
    #     Given Launch the application for survey creation
    #     When Verify the survey details for the SurveyTitle as "Sample Survey 0" and Description as "Sample Survey"
    # # Then Select the SurveyTitle as "Survey Description"



    # Scenario: Select a Survey
    #     Given Launch the application for survey creation
    #     Then Verify that the user can select a survey

    Scenario: Verify the Register question and Options page displayed correctly
        Given Launch the application for survey creation
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

    Scenario: Verify the multiple options registration
        Then Verify the options creation and maximum limit validation

    Scenario: Verify maximum option sentence validation
        Then Verify that the validation message is displayed when input more than 100 words in option field
