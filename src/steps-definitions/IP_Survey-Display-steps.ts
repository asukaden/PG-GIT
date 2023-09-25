import { ICustomWorld } from '../support/custom-world';
//import { config } from '../support/config';
import { Given } from '@cucumber/cucumber';


Given('Navigate to the Answer Display Page', async function (this: ICustomWorld) {
  await this.PageObject?.surveyDisplay.GotoSurveyDisplay();
});



Given('Verify the Questionnaire answer screen', async function (this: ICustomWorld) {
  await this.PageObject?.surveyDisplay.VerifySubmitBtn();
});


Given('Verify the SA Questiontext is same as {string}', async function (this: ICustomWorld,Questiontext: string) {
  await this.PageObject?.surveyDisplay.VerifySAQuestiontext(Questiontext);
});

Given('Verify the MA Questiontext is same as {string}', async function (this: ICustomWorld,Questiontext: string) {
  await this.PageObject?.surveyDisplay.VerifyMAQuestiontext(Questiontext);
});

Given('Verify the FA Questiontext is same as {string}', async function (this: ICustomWorld,Questiontext: string) {
  await this.PageObject?.surveyDisplay.VerifyFAQuestiontext(Questiontext);
});

Given('Verify the SA Choice is same as {string}', async function (this: ICustomWorld,Questiontext: string) {
  await this.PageObject?.surveyDisplay.VerifySAChoicetext(Questiontext);
});


Given('Verify the MA Choice is same as {string}', async function (this: ICustomWorld,Questiontext: string) {
  await this.PageObject?.surveyDisplay.VerifyMAChoicetext(Questiontext);
});


Given('Verify the exclusive choice option', async function (this: ICustomWorld) {
  await this.PageObject?.surveyDisplay.VerifyExclusiveOption();
});


Given('Click Submit Button', async function (this: ICustomWorld) {
  await this.PageObject?.surveyDisplay.ClickSubmitButton();
});




Given('Verify that Require question validation is displayed for MA Question', async function (this: ICustomWorld) {
await this.PageObject?.surveyDisplay.VerifyRequiredQuestionMA();

});

Given('Verify that Require question validation is displayed for SA Question', async function (this: ICustomWorld) {
await this.PageObject?.surveyDisplay.VerifyRequiredQuestionSA();

});

Given('Verify that Require question validation is displayed for FA Question', async function (this: ICustomWorld) {
await this.PageObject?.surveyDisplay.VerifyRequiredQuestionFA();

});







Given('Verify the exclusive choice control of SA', async function (this: ICustomWorld) {
await this.PageObject?.surveyDisplay.exclusiveverifysa();

});




Given('Verify the choice randomization of SA', async function (this: ICustomWorld) {
await this.PageObject?.surveyDisplay.RandomSAQuestion();

});

Given('Verify the choice randomization of MA', async function (this: ICustomWorld) {
await this.PageObject?.surveyDisplay.RandomMA();

});

Given('Verify the exclusive choice control of SA', async function (this: ICustomWorld) {
await this.PageObject?.surveyDisplay.exclusiveverifysa();

});


Given('Click close button of validation pop up', async function (this: ICustomWorld) {
await this.PageObject?.surveyDisplay.ClickSubmitButton();

});

Given('Verify the exclusive choice control of MA', async function (this: ICustomWorld) {
await this.PageObject?.surveyDisplay.exclusiveverifysa();

});



Given('Verify that Validation message is displayed when the user input more than 500 characters in FA question', async function (this: ICustomWorld) {
await this.PageObject?.surveyDisplay.VerifyFALimit();

});