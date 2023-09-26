/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import FieldConfig from '../utils/FieldConfig';
import { BasePage } from '../utils/BasePage';
import { config } from '../support/config';
import { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';
const fs = require('fs')


// import ScenarioContext from '../support/ScenarioContext';
// import { ICustomWorld } from '../support/custom-world';
// import { chromium, Page } from '@playwright/test';

export default class SurveyCreation extends BasePage {
  fieldconfig!: FieldConfig;

  readonly headerBtn: Locator;

  readonly addNewBtn: Locator;

  readonly SetOrderdropdown: Locator;
  SetOrderValue: string;

  readonly DefaultLanguagedropdown: Locator;
  DefaultLanguageValue: string;

  readonly RequiredLanguagedropdown: Locator;
  RequiredLanguageValue: string;
  readonly Title: Locator;
  readonly Description: Locator;
  readonly SaveAndContinueBtn: Locator;

  constructor(page: Page, fieldconfig: FieldConfig) {
    super(page);
    this.headerBtn = this.page1.locator(
      "//*[@id='root']/div[1]/div/div/div/div/div/h1",
    );

    this.addNewBtn = this.page1.locator("//*[contains(text(),'Add new')]");
    this.SetOrderdropdown = this.page1.locator(
      "//*[@id='mui-component-select-order']",
    );
    this.SetOrderValue = '//*[@id="menu-order"]//*[text()="sortValue"]';
    this.DefaultLanguagedropdown = this.page1.locator("//*[@id='mui-component-select-defaultLanguage']");
    this.DefaultLanguageValue = '//li[text()="DefLangValue"]'; 
    this.RequiredLanguagedropdown = this.page1.locator(
      "//*[@id='mui-component-select-requiredLanguage']",
    );
    this.RequiredLanguageValue =
      '//*[@id="menu-requiredLanguage"]//*[text()="RequiredLangValue"]';
    this.Title = this.page1.locator("[name='titleAndDescription.0.title']");
    this.Description = this.page1.locator(
      "[name='titleAndDescription.0.description']",
    );
    this.SaveAndContinueBtn = this.page1.locator(
      "//*[@id='root']//*[text()='Save And Continue']",
    );

    this.fieldconfig = fieldconfig;
  }

  public async LaunchMeetingAppForMeetingCreation() {
    // await this.LaunchAppWithNewContext1();
    await this.page1.goto(config.BASE_URL);

const filePath = 'qrcode.csv';  // Replace with your file path

const data = fs.readFileSync(filePath, 'utf-8');
const lines = data.split('\n');


    for (let i = 0; i < 2;i++) {
    await this.page1.goto("https://www.the-qrcode-generator.com/");
    
    await this.page1.locator("//*[@data-attr='txt-tab']").click();
    await this.page1.locator("//*[@data-attr='txt-tab']").click();


    await this.page1.locator("(//*[@class='MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline css-10oer18'])[1]").fill(lines);
    await this.page1.locator("//*[@data-testid='DownloadIcon']").click();
    await this.page1.locator("//*[@class='MuiInputBase-input MuiInput-input css-mnn31']").fill("qrname");

const [ download ] = await Promise.all([
        this.page1.waitForEvent('download'),
 
    await this.page1.locator("//*[@type='submit']").click()

     ]);

     const suggestedFileName = download.suggestedFilename()
  const filePath = 'qrcode/' + suggestedFileName + i
  await download.saveAs(filePath)
  expect(fs.existsSync(filePath)).toBeTruthy()
  



  }}




  public async ClickAddNewBtn() {
    await this.addNewBtn.click();
  }

  public async selectSortOrder(SortOrder: string) {
    await this.SetOrderdropdown.click();
    await this.page1
      .locator(this.SetOrderValue.replace('sortValue', SortOrder))
      .click();
  }

  public async selectdefaultLanguage(DefaultLanguage: string) {
    await this.DefaultLanguagedropdown.click();
    await this.page1.locator(this.DefaultLanguageValue.replace('DefLangValue', DefaultLanguage)).click();
  }

  public async selectRequiredLanguage(RequiredLanguage: string) {
    await this.RequiredLanguagedropdown.click();
    await this.page1.locator(this.RequiredLanguageValue.replace('RequiredLangValue',RequiredLanguage )).click();
   await this.page1.keyboard.press('Escape');
  }

  public async EnterTitleInEnglish(title: string) {
await this.page1.locator("[name='titleAndDescription.0.title']").fill(title);
 await this.page1.locator("[name='titleAndDescription.1.title']").fill(title + "JA");
  }

 public async EnterTitleInJP(title: string) {
 await this.page1.locator("[name='titleAndDescription.1.title']").fill(title);
  }





  public async EnterDescriptionInEnglish(description: string) {
        await this.page1.locator("[name='titleAndDescription.0.description']").fill(description);

    await this.page1.locator("[name='titleAndDescription.1.description']").fill(description + "JA");
  }


  public async EnterDescriptionInJP(description: string) {

    await this.page1.locator("[name='titleAndDescription.1.description']").fill(description);
  }








  public async ClickSaveAndContinueBtn() {
    await this.SaveAndContinueBtn.click();


  
}


public async createMA50() {

  //for adding 10 questions
    for (let i = 1; i < 10; i++) {
      await this.page1.locator("//*[contains(@data-testid,'AddCircleOutlineIcon')]").click();
    }
//for selecting the 10 questions as MA
 for (let i = 0; i < 10; i++) {
  await this.page1.locator("//*[@name='question."+i+".questionText.0.text']").fill("Question"+ i);
    await  this.page1.locator("//*[@id='mui-component-select-question."+i+".type']").click();
    await this.page1.locator("//*[@id='menu-question."+i+".type']//*[text()='Multiple Choice']").click();
     await this.page1.locator("//*[@name='question."+i+".questionText.1.text']").fill("questionjp"+ i);
    for (let k=0;k<49;k++) {
       await this.page1.locator("(//*[text()=' Add option'])[1]").click();
    }
        for (let j = 0; j < 50 ; j++) {
        await this.page1.locator("//*[@name='question["+i+"].options["+j+"].optionsName[0].text']").fill("Option"+ j);
         await this.page1.locator("//*[@name='question["+i+"].options["+j+"].optionsName[1].text']").fill("Optionjp"+ j);
        //console.log(this.page1.locator("//*[@name='question["+i+"].options["+j+"].optionsName[0].text']"));
        }





  }

// //this is for Japanese Questionnaire
//   for (let i = 0; i < 2; i++) {
//   await this.page1.locator("//*[@name='question."+i+".questionText.1.text']").fill("This is jp question"+ i);
//         for (let j = 0; j < 50 ; j++) {
//         await this.page1.locator("//*[@name='question["+i+"].options["+j+"].optionsName[1].text']").fill("This is jP option"+ j);
//         //console.log(this.page1.locator("//*[@name='question["+i+"].options["+j+"].optionsName[1].text']"));
//         }





  


await this.page1.locator("//*[@id='root']//*[contains(text(),'Set for review')]").click();

  }



public async createMASAFA( q1: string,Mop1: string, Mop2: string, Mop3: string, Mop4:string,q2: string, Sop1: string, Sop2: string, Sop3: string, Sop4:string,q3: string,jq1:string,JMOP1: string, JMOP2: string, JMOP3: string, JMOP4:string,jq2:string,JSOP1: string, JSOP2: string, JSOP3: string, JSOP4:string,jq3:string) {
   for (let i = 1; i < 3; i++) {
      await this.page1.locator("//*[contains(@data-testid,'AddCircleOutlineIcon')]").click();
    }



  await this.page1.locator("//*[@name='question.0.questionText.0.text']").fill(q1);
    await  this.page1.locator("//*[@id='mui-component-select-question.0.type']").click();
    await this.page1.locator("//*[@id='menu-question.0.type']//*[text()='Multiple Choice']").click();
     await this.page1.locator("//*[@name='question.0.questionText.1.text']").fill(jq1);
    for (let k=0;k<3;k++) {
       await this.page1.locator("(//*[text()=' Add option'])[1]").click();
    }
        
        await this.page1.locator("//*[@name='question[0].options[0].optionsName[0].text']").fill(Mop1);


         await this.page1.locator("//*[@name='question[0].options[0].optionsName[1].text']").fill(JMOP1);
         await this.page1.locator("//*[@name='question[0].options[1].optionsName[0].text']").fill(Mop2);


         await this.page1.locator("//*[@name='question[0].options[1].optionsName[1].text']").fill(JMOP2);
         await this.page1.locator("//*[@name='question[0].options[2].optionsName[0].text']").fill(Mop3);


         await this.page1.locator("//*[@name='question[0].options[2].optionsName[1].text']").fill(JMOP3);
         await this.page1.locator("//*[@name='question[0].options[3].optionsName[0].text']").fill(Mop4);


         await this.page1.locator("//*[@name='question[0].options[3].optionsName[1].text']").fill(JMOP4);
        //console.log(this.page1.locator("//*[@name='question["+i+"].options["+j+"].optionsName[0].text']"));
        

//second question

 await this.page1.locator("//*[@name='question.1.questionText.0.text']").fill(q2);
    await  this.page1.locator("//*[@id='mui-component-select-question.1.type']").click();
    await this.page1.locator("//*[@id='menu-question.1.type']//*[text()='Single Choice']").click();
     await this.page1.locator("//*[@name='question.1.questionText.1.text']").fill(jq2);
    for (let k=0;k<3;k++) {
       await this.page1.locator("(//*[text()=' Add option'])[2]").click();
    }
       
        await this.page1.locator("//*[@name='question[1].options[0].optionsName[0].text']").fill(Sop1);
         await this.page1.locator("//*[@name='question[1].options[0].optionsName[1].text']").fill(JSOP1);
         //await this.waitForSecond(1)
         await this.page1.locator("//*[@name='question[1].options[1].optionsName[0].text']").fill(Sop2);
         await this.page1.locator("//*[@name='question[1].options[1].optionsName[1].text']").fill(JSOP2);
 //await this.waitForSecond(1)
         await this.page1.locator("//*[@name='question[1].options[2].optionsName[0].text']").fill(Sop3);
         await this.page1.locator("//*[@name='question[1].options[2].optionsName[1].text']").fill(JSOP3);
 //await this.waitForSecond(1)
         await this.page1.locator("//*[@name='question[1].options[3].optionsName[0].text']").fill(Sop4);
         await this.page1.locator("//*[@name='question[1].options[3].optionsName[1].text']").fill(JSOP4);





 await this.waitForSecond(1)


        //console.log(this.page1.locator("//*[@name='question["+i+"].options["+j+"].optionsName[0].text']"));
      


await this.page1.locator("//*[@name='question.2.questionText.0.text']").fill(q3);
 //await this.waitForSecond(1)
    await  this.page1.locator("//*[@id='mui-component-select-question.2.type']").click();
    await this.page1.locator("//*[@id='menu-question.2.type']//*[text()='Long Text']").click();

     await this.page1.locator("//*[@name='question.2.questionText.1.text']").fill(jq3);



  

  await this.page1.locator("//*[@id='root']//*[contains(text(),'Set for review')]").click();

}











}