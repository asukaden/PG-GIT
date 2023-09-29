import FieldConfig from '../utils/FieldConfig';
import { BasePage } from '../utils/BasePage';
//import { config } from '../support/config';
import { Locator, Page } from '@playwright/test';

export default class QuestionCreation extends BasePage {
  fieldconfig!: FieldConfig;
  readonly QuestionPageTitle: Locator;
  readonly AddQuestionField1: Locator;
  readonly AddQuestionButton: Locator;
  readonly QuestionTypeDropdown: Locator;
  QuestionType: String;

  readonly AddOptnBtn: Locator;
  readonly AddMultOptnBtn: Locator;

  readonly requiredFlag: Locator;
  readonly randomizationdFlag: Locator;

  readonly optionField1: Locator;

  readonly optionError: Locator;
  readonly questioninputbox:Locator;

    readonly addquestionbutton:Locator;
    readonly addmultiple:Locator;

     readonly multipleopt:Locator;
    readonly dialogbox:Locator;
 readonly optioninputbox:Locator;
    readonly optionaddbutton:Locator;
    readonly exclusivetoggle:Locator;

  constructor(page: Page, fieldconfig: FieldConfig) {
    super(page);
    this.QuestionPageTitle = this.page1.locator(
      "//*[@id='root']/div[1]//h1[text()='Adding Questions and Options']",
    );
    this.AddQuestionField1 = this.page1.locator("//*[@id='outlined-basic']");
    this.AddQuestionButton = this.page1.locator(
      "//*[contains(@data-testid,'AddCircleOutlineIcon')]",
    );
    this.QuestionTypeDropdown = this.page1.locator(
      "//*[@id='mui-component-select-question.0.type']",
    );
    this.QuestionType =
      "//*[@id='menu-question.0.type']//*[text()='QuestionType']";
    this.AddOptnBtn = this.page1.locator("(//*[text()=' Add option'])[1]");

    this.AddMultOptnBtn = this.page1.locator("(//*[text()='Add multiple option'])[1]");

    this.requiredFlag = this.page1.locator(
      "//*[contains(@name,'question.1.required')]",
    );
    this.randomizationdFlag = this.page1.locator(
      "//*[contains(@name,'question[0].options[0].exclusive_option')]",
    );
    this.optionField1 = this.page1.locator("//*[@id='option-0']");
    this.optionError = this.page1.locator("//*[@id='option-0-helper-text']");

this.questioninputbox=this.page1.locator("//textarea[@placeholder='Enter your questions']");
    this.addquestionbutton=this.page1.locator("//button[contains(text(),'Add')]");

    this.addmultiple=this.page1.locator("//button[2]/*[name()='svg']");
    this.multipleopt=this.page1.locator('//div[2]/a[2]');
    this.dialogbox=this.page1.locator('//div[2]/div[3]/div');
this.optioninputbox=this.page1.locator("//textarea[@placeholder='Enter your options']");
    this.optionaddbutton=this.page1.locator("//button[contains(text(),'Add')]");
this.exclusivetoggle=this.page1.locator("//input[@name='question[0].options[0].exclusive_option']");
    this.fieldconfig = fieldconfig;
  }

  public async VerifyQuestionPage() {
    await this.locatorShouldBePresent(this.QuestionPageTitle);
  }
  public async EnterQuestion(Question: string) {
    await this.AddQuestionField1.fill(Question);
  }

  public async MaximumQuestionAddVerification() {
    for (let i = 0; i < 9; i++) {
      await this.AddQuestionButton.click();
    }

    await this.locatorShouldNotBePresent(this.AddQuestionButton);
  }

  public async SelectQuestionType(Questiontype: string) {
    await this.QuestionTypeDropdown.click();
    await this.page1
      .locator(this.QuestionType.replace('QuestionType', Questiontype))
      .click();
  }

  public async AddmultipleOption(Questiontype: string) {
    await this.SelectQuestionType(Questiontype);
    //await this.locatorShouldBePresent(this.AddMultOptnBtn);
  }

  public async RequiredFlag() {
    await this.locatorShouldBePresent(this.requiredFlag);
  }

  public async RandomizationFlag() {
    await this.locatorShouldBePresent(this.randomizationdFlag);
  }

  public async MaximumOptionAddVerification() {
    for (let i = 0; i < 49; i++) {
      await this.AddOptnBtn.click();
    }

    await this.locatorShouldNotBePresent(this.AddMultOptnBtn);
  }

  public async OptionValidation() {
    await this.optionField1.fill(
      'Libero nostra turpis maecenas tempor rhoncus dis dolor dapibus lobortis. Cubilia. Suspendisse magnis massa a libero tempor tellus conubia vivamus facilisis vitae tortor neque mus leo. In blandit suspendisse sem massa vestibulum Nullam est sagittis suscipit at suspendisse quisque aliquam condimentum torquent, parturient rutrum arcu interdum. Porttitor varius varius purus. Ullamcorper cum, netus est ipsum. Dictumst quam cum blandit aliquam. Dui netus posuere luctus non nulla vehicula ad egestas Tempor at ipsum viverra per nisl. Vel volutpat at est nonummy phasellus magna iaculis vel orci. Ut laoreet quis lobortis praesent venenatis id rutrum Metus primis turpis tristique sed. Mauris lectus.1234',
    );
    await this.page1.keyboard.press('Enter');
    await this.locatorShouldBePresent(this.optionError);
  }
public async  VerifyAddMultOptnBtn() {
  await this.locatorShouldBePresent(this.AddMultOptnBtn);
  
}

public async addmultipleverify() {
  
  await this.addmultiple.click();
 

}


public async questioninput(qstninput:string){

   await this.questioninputbox.type(qstninput);
}
public async addquestionlick(){

   await this.addquestionbutton.click();
}
  public async enterkeyboard()
{
  await this.page1.keyboard.press('Enter');
}


public async multipleoption(){
  await this.locatorShouldBePresent(this.multipleopt);
  await this.multipleopt.click();
}
public async dialogboxverify(){
  await this.locatorShouldBePresent(this.dialogbox);
  
   
}

public async optioninput(input:string){
  await this.optioninputbox.type(input);
  
}
public async addoptionclick(){
   await this.optionaddbutton.click();
}

public async exclusivetogglebutton(){
  await this.locatorShouldBePresent(this.exclusivetoggle);
  //await this.exclusivetoggle.click();
}

// It is published with issue 3 chat4



}
