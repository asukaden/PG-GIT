import FieldConfig from '../utils/FieldConfig';
import { BasePage } from '../utils/BasePage';
//import { config } from '../support/config';
import { Locator, Page,expect } from '@playwright/test';


export default class SurveyDisplay extends BasePage {

readonly submitBtn:Locator;
SAquestinTxt:Locator;
MAquestinTxt:Locator;
FAquestinTxt:Locator;

SAChoiceTxt:Locator;
MAChoiceTxt:Locator;
ExclusiveTag:Locator;
SubmitButton :Locator;
readonly sachoices:string;
readonly machoices:string;

readonly exclusivesachoice:Locator;
readonly exclusivemachoice:Locator;

readonly MAValidationmsg:Locator;
readonly SAValidationmsg:Locator;

readonly FAValidationmsg:Locator;
readonly CloseBtn:Locator;
readonly FAAnsfield:Locator;
readonly FALimit:Locator;

readonly FAData:string;


fieldconfig!: FieldConfig;






constructor(page: Page, fieldconfig: FieldConfig) {
    super(page);

this.submitBtn= this.page1.locator("//*[contains(@value,'Submit')]")
this.SAquestinTxt= this.page1.locator("(//h6[contains(text,'')])[1]");
this.MAquestinTxt= this.page1.locator("(//h6[contains(text,'')])[2]");
this.FAquestinTxt= this.page1.locator("(//h6[contains(text,'')])[3]");  
this.SAChoiceTxt= this.page1.locator("(//label[contains(@text,'')])[1]");
this.MAChoiceTxt= this.page1.locator("(//label[contains(@text,'')])[2]");
this.ExclusiveTag= this.page1.locator("//input[contains(@exclusive_option,'True')]");
this.SubmitButton=this.page1.locator("//*[@value='Submit']");
this.sachoices="//h6[contains(text(),'')][1]/following-sibling::ul/div[@question-type='2']/label";
this.machoices="//h6[contains(text(),' ')][1]/following-sibling::ul/div[@question-type='1']/label";
this.exclusivesachoice=this.page1.locator("//input[@type='radio'][@exclusive_option='True'][1]");
this.exclusivemachoice=this.page1.locator("//input[@type='checkbox'][@exclusive_option='True'][1]");
this.MAValidationmsg=this.page1.locator('(//*[@id="form"]//*[contains(text(),"This is a required question")])[1]');
this.SAValidationmsg=this.page1.locator('(//*[@id="form"]//*[contains(text(),"This is a required question")])[1]');
this.FAValidationmsg=this.page1.locator('(//*[@id="form"]//*[contains(text(),"This is a required question")])[1]');
this.CloseBtn=this.page1.locator("//*[@id='toaster-notification']/li/button");
this.FAAnsfield=this.page1.locator("(//*[@id='exampleFormControlTextarea1'])[1]");
this.FALimit=this.page1.locator("//*[@id='form']//*[contains(text(),'maximum length exceeded')]");
this.FAData= "This is a Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu"

    this.fieldconfig = fieldconfig;
  }    



public async GotoSurveyDisplay(){

    this.page1.goto("https://bff.questionnaire.ip-poc.com/bff/yaml-html/35805db7-96b7-43a7-90b0-930fca884ebb");

}


public async VerifySubmitBtn(){


  await this.locatorShouldBePresent(this.submitBtn);

}



public async VerifySAQuestiontext(QuestionText:string){
const SAtext1= await this.SAquestinTxt.textContent();
const SAtext = SAtext1?.trim();

expect(SAtext).toEqual(QuestionText);  

}

public async VerifyMAQuestiontext(QuestionText:string){
const MAtext1= await this.MAquestinTxt.textContent();
const MAtext = MAtext1?.trim();
expect(MAtext).toEqual(QuestionText);  

}
public async VerifyFAQuestiontext(QuestionText:string){
const FAtext1= await this.FAquestinTxt.textContent();
const FAtext = FAtext1?.trim();
expect(FAtext).toEqual(QuestionText);  

}

public async VerifySAChoicetext(QuestionText:string){
const SAtext1= await this.SAChoiceTxt.textContent();
const SAtext = SAtext1?.trim();
expect(SAtext).toEqual(QuestionText);  

}

public async VerifyMAChoicetext(QuestionText:string){
const MAtext1= await this.MAChoiceTxt.textContent();
const MAtext = MAtext1?.trim();
expect(MAtext).toEqual(QuestionText);  

}

public async VerifyExclusiveOption(){
await this.locatorShouldBePresent(this.ExclusiveTag);
}

public async ClickSubmitButton(){
await this.SubmitButton.click();
}


public async VerifyRequiredQuestionMA(){
await this.locatorShouldBePresent(this.MAValidationmsg);
}

public async VerifyRequiredQuestionSA(){
await this.locatorShouldBePresent(this.SAValidationmsg);
}

public async VerifyRequiredQuestionFA(){
await this.locatorShouldBePresent(this.FAValidationmsg);
}


public async ClickCloseBtn(){
await this.CloseBtn.click();
}


public async VerifyFALimit(){
await this.FAAnsfield.fill(this.FAData);
await this.SubmitButton.click();
await this.locatorShouldBePresent(this.FALimit);
}



























public async RandomSAQuestion(){

const choiceElements = await this.page1.$$("//h6[contains(text(),'')][1]/following-sibling::ul/div[@question-type='2']/label");
const choices: string[] = [];

for (const element of choiceElements) {

const choiceText = await element.textContent();
const choicetext=await choiceText?.trim() ?? "";
if (choicetext !== "") {

choices.push(choicetext);
}
}
console.log('Choices:', choices);
if (choices[0] != "Choice SA 1" || choices[1] != "Choice SA 2" || choices[2] != "Choice SA 3" || choices[3] != "Choice SA 4" || choices[4] != "Choice SA 5") {

console.log("Single Answer Choice Order is : Random"); 

}
}


public async RandomMA(){
 
  const choiceElements = await this.page1.$$(this.machoices);
  const choices: string[] = [];

  for (const element of choiceElements) {

    const choiceText = await element.textContent();
    const choicetext=await choiceText?.trim() ?? "";
    if (choicetext !== "") {

      choices.push(choicetext);
    }
}
 console.log('Choices:', choices);
 if (choices[0] != "Choice MA 1" || choices[1] != "Choice MA 2" || choices[2] != "Choice MA 3" || choices[3] != "Choice MA 4" || choices[4] != "Choice MA 5") {

console.log("Multiple Answer Choice Order is : Random"); 

}
}



public async exclusiveverifysa(){

    await this.locatorShouldBePresent(this.exclusivesachoice);
    const choiceElements = await this.page1.$$("//h6[contains(text(),'')][1]/following-sibling::ul/div[@question-type='2']/label");
  const choices: string[] = [];

  for (const element of choiceElements) {

    const choiceText = await element.textContent();
    const choicetext=await choiceText?.trim() ?? "";
    if (choicetext !== "") {

      choices.push(choicetext);
    }
}

 if (choices[4] == "Choice SA 3") {

console.log("The exclusive option of SA is in last position"); 

}
   
}


public async exclusiveverifyma(){

    await this.locatorShouldBePresent(this.exclusivemachoice);
    const choiceElements = await this.page1.$$(this.machoices);
  const choices: string[] = [];

  for (const element of choiceElements) {

    const choiceText = await element.textContent();
    const choicetext=await choiceText?.trim() ?? "";
    if (choicetext !== "") {

      choices.push(choicetext);
    }
}

 if (choices[4] == "Choice MA 2") {

console.log("The exclusive option of MA is in last position"); 

}
   
}


















}