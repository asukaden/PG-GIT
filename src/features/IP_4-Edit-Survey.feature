@RegressionTest1
Feature: Survey Edit
    Scenario: Verification of Questionnaire Edit Before survey start

        Given Launch the application
        And Verify that the user is able to navigate to survey edit page
        #When Select the SortOrder as "Ascending"
        And Select the DefaultLanguage as "English"
        # And Select the RequiredLanguage as "English"
        # And Enter the title as "Updated Title"
        # And Enter the description as "UpdatedDescription"
        Then Verify that the user is able to update the question as "Updated Question"



    Scenario: Verification of Questionnaire Edit After survey start

        Given Launch the application
        And Verify that the user is unable to perform edit  after survey is started


    Scenario: Verification of change options
        Then Verify the option can be edited with value as "OPTION2"