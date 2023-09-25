import FieldConfig from '../utils/FieldConfig';
import { BasePage } from '../utils/BasePage';
//import { config } from '../support/config';

import { Locator, Page,expect } from '@playwright/test';

export default class EditSurvey extends BasePage {
fieldconfig!: FieldConfig;

readonly EditBtn:Locator;
readonly questiondropdown1: Locator;

readonly questionfield1: Locator;
readonly setForReviewBtn: Locator;

readonly viewbtn: Locator;
readonly firstoption:Locator;
readonly exclusivetoggle:Locator;
constructor(page: Page, fieldconfig: FieldConfig) {
    super(page);


this.EditBtn=this.page1.locator('(//*[@aria-label="copy"])[1]');
this.questiondropdown1=this.page1.locator('(//*[@aria-label="add"])[1]');

this.questionfield1=this.page1.locator('(//*[@id="outlined-basic"])[1]');

this.setForReviewBtn=this.page1.locator('//*[@id="root"]//*[contains(@type,"submit")]');
this.viewbtn=this.page1.locator("(//*[@id='root']//*[contains(@data-testid,'VisibilityIcon')])[1]");
this.firstoption=this.page1.locator("//input[@id='option-0']");
this.exclusivetoggle=this.page1.locator("//input[@name='question[0].options[0].exclusive_option']");
    this.fieldconfig = fieldconfig;
  }    


public async ClickEditBtn(){

    this.EditBtn.click();

}





public async VerifyQuestionEdit(question:string){

    await this.questiondropdown1.click();
    await this.questionfield1.fill(question)


}

public async viewQuestion(){

    await this.viewbtn.click();
    await this.locatorShouldNotBePresent(this.setForReviewBtn);


}

public async optionedit(optionedit:string){
  await this.firstoption.click();
  await this.firstoption.fill(optionedit);
  await this.exclusivetoggle.click();
  
}
public async editverify(){

  await this.page1.reload();
  const editvalue=await this.firstoption.inputValue();
  //console.log("editvalue:  "+ editvalue);
  expect(editvalue).toEqual("OPTION2");


































}
}