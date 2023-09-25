@RegressionTest123
Feature: Questionnaire answer screen
    # Scenario: Verification of Questionnaire answer screen

    #     Given Navigate to the Answer Display Page
    #     And Verify the Questionnaire answer screen
    #     And Verify the SA Questiontext is same as "This is SA Question"
    #     And Verify the SA Choice is same as "This is Single Choice"
    #     And Verify the MA Questiontext is same as "This is MA Question"
    #     And Verify the MA Choice is same as "This is Multiple choice"
    #     And Verify the FA Questiontext is same as "This is FA Question"
    #     And Verify the exclusive choice option

    # Scenario: Choice randomization SA

    #     Then Verify the choice randomization of SA

    # Scenario: Show Exclusive Choices SA

    #     And Verify the exclusive choice control of SA

    # Scenario: Choice Randomization MA
    #     Then Verify the choice randomization of MA

    # Scenario: Show Exclusive Choice MA
    #     And Verify the exclusive choice control of MA




    Scenario: Verification of Questionnaire answer screen

        Given Navigate to the Answer Display Page
        And Click Submit Button
        And Verify that Require question validation is displayed for MA Question
        And Verify that Require question validation is displayed for SA Question
        And Verify that Require question validation is displayed for FA Question
        And Click close button of validation pop up


    Scenario: Verification of FA Question Answer field
        Given Navigate to the Answer Display Page
        And Verify that Validation message is displayed when the user input more than 500 characters in FA question