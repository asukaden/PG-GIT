// eslint-disable-next-line no-console
import { ICustomWorld } from '../support/custom-world';
//import { config } from '../support/config';
import { Given } from '@cucumber/cucumber';

Given('Verify the Question settings page', async function (this: ICustomWorld) {
  await this.PageObject?.questionCreation.VerifyQuestionPage();
});

Given(
  'Input the question sentence as {string}',
  async function (this: ICustomWorld, Question: string) {
    await this.PageObject?.questionCreation.EnterQuestion(Question);
  },
);

Given(
  'Verify that user is unable to add more than 10 questions',
  async function (this: ICustomWorld) {
    await this.PageObject?.questionCreation.MaximumQuestionAddVerification();
  },
);

Given(
  'Select the Question type as {string} and verify that multiple registration button is present',
  async function (this: ICustomWorld, QuestionType: string) {
    await this.PageObject?.questionCreation.AddmultipleOption(QuestionType);
  },
);

Given('Verify the Required flag', async function (this: ICustomWorld) {
  await this.PageObject?.questionCreation.RequiredFlag();
});

Given('Verify the Randomization flag', async function (this: ICustomWorld) {
  await this.PageObject?.questionCreation.RandomizationFlag();
});

Given(
  'Verify the options creation and maximum limit validation',
  async function (this: ICustomWorld) {
    await this.PageObject?.questionCreation.MaximumOptionAddVerification();
  },
);

Given(
  'Verify that the validation message is displayed when input more than 100 words in option field',
  async function (this: ICustomWorld) {
    await this.PageObject?.questionCreation.OptionValidation();
  },
);


Given(
  'Verify that the Multipleoption registration button is present',
  async function (this: ICustomWorld) {
    await this.PageObject?.questionCreation.VerifyAddMultOptnBtn();
  });


Given('Input question as {string},{string},{string}',async function (this: ICustomWorld,input1:string,input2:string,input3:string) {
     await this.PageObject?.questionCreation.addmultipleverify();  
       await this.PageObject?.questionCreation.questioninput(input1);  
       await this.PageObject?.questionCreation.enterkeyboard();    
       await this.PageObject?.questionCreation.questioninput(input2);  
       await this.PageObject?.questionCreation.enterkeyboard();
       await this.PageObject?.questionCreation.questioninput(input3);
      
});

Given('Verify multiple questions registration with the given inputs are possible',async function (this: ICustomWorld) {

       await this.PageObject?.questionCreation.addquestionlick();
});


Given('Verify the Add multiple option button is present',async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.multipleoption();       
});
Given('Verify the multiple option selection dilog box is present',async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.dialogboxverify();       
});
Given('Input options as {string},{string},{string}',async function (this: ICustomWorld,input1:string,input2:string,input3:string) {
       await this.PageObject?.questionCreation.optioninput(input1);  
       await this.PageObject?.questionCreation.enterkeyboard();    
       await this.PageObject?.questionCreation.optioninput(input2);  
       await this.PageObject?.questionCreation.enterkeyboard();
       await this.PageObject?.questionCreation.optioninput(input3);
      
});
Given('Verify multiple options registration with the given inputs are possible',async function (this: ICustomWorld) {

       await this.PageObject?.questionCreation.addoptionclick();
});

Given('Verify the exclusive toggle button is present',async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.exclusivetogglebutton();       
});
