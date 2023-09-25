// eslint-disable-next-line no-console
import { ICustomWorld } from '../support/custom-world';
//import { config } from '../support/config';
import { Given } from '@cucumber/cucumber';


Given('Verify that the user is able to navigate to survey edit page', async function (this: ICustomWorld) {
  await this.PageObject?.editSurvey.ClickEditBtn();
});

Given('Verify that the user is able to update the question as {string}', async function (this: ICustomWorld,question: string) {
  await this.PageObject?.editSurvey.VerifyQuestionEdit(question);
});

Given('Verify that the user is unable to perform edit  after survey is started', async function (this: ICustomWorld) {
  await this.PageObject?.editSurvey.viewQuestion();
});

Given('Verify the option can be edited with value as {string}',async function (this: ICustomWorld,optionedit:string) {
       await this.PageObject?.editSurvey.optionedit(optionedit); 
       await this.PageObject?.editSurvey.editverify();       
});
