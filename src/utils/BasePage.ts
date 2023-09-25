/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-unresolved
// import { PlaywrightWaitForOptions } from '../types/PlaywrightTypes';
// import ScenarioContext from '../support/ScenarioContext';
// import { PageObject } from './PageObjects';
import ScenarioContext from '../support/ScenarioContext';
// import { CustomWorld, ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Locator, Page } from '@playwright/test';
// import { LocalStorage } from 'node-localstorage';

import * as AWS from 'aws-sdk';

import axios, { AxiosRequestConfig } from 'axios';

import { exec } from 'child_process';

// import { LocalStorage } from 'node-localstorage';
import fs from 'fs'; 
import assert from 'assert';
export abstract class BasePage {
  protected page1: Page;
  protected page: Page;
  protected page2: Page;

  // S3 credentials 
  S3accessKeyId = ''; // Access Key;
  S3secretAccessKey = '' ; // 'your_secret_access_key';
  S3region = '' ; // 'your_bucket_region';
  S3BucketName = '';

  // Define the parameters for the S3 getObject operation

  test!: Boolean;
  FileNames : string[];
  context1: any;
  context2: any;
  static FileNames1: any;
  static ScreenSharedBy: any;
  // private newWindow: any;

  // private context1: any;
  // private context2: any;
  // browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser | undefined;

  constructor(page: Page) {
    this.page = page;
    this.page1 = page;
    this.page2 = page;
    this.context1 = ScenarioContext.get('context1');
    this.page1 = ScenarioContext.get('page1');
    this.context2 = ScenarioContext.get('context2');
    this.page2 = ScenarioContext.get('page2');

    // Access the local storage values
    
    this.FileNames = [];
 
  }

  // public async switchToNewTab(pageUrl: string) {
  //   [this.newWindow] = await Promise.all([this.newContext.waitForEvent('page')]);
  //   await this.newWindow.waitForLoadState();
  //   const newurl = await this.newWindow.url();
  //   // console.log("newurl :"+newurl);
  //   // assert (pageUrl, newurl);
  //   await this.newWindow.close();
  //   // await this.page.close();
  // }
  // public async LaunchAppWithNewContext1() {
  //   // this.page1 = this.context1.newPage();
  //   // const [pages] = this.context1.Pages();
  //   // console.log('pages :' + pages);

  //   // this.page1.pause();
  //   // await expect(this.page1.url()).toContain('google');
  // }

  // public async LaunchAppWithNewContext2() {
  //   // this.page2 = this.context2.newPage();
  //   await this.page2.goto('http://localhost:3000/');
  //   // this.page2.pause();
  //   // await expect(this.page2.url()).toContain('amazon');
  // }

  // public isCurrentPageUrl(url: string): boolean {
  //   // return this.page1.url().includes(url);
  // }

  public async S3BucketConnection()
  {

    // Set up AWS credentials
    AWS.config.update({
      accessKeyId: this.S3accessKeyId,
      secretAccessKey: this.S3secretAccessKey,
      region: this.S3region
    });

    // Create an instance of the S3 service
    // const s3 = new AWS.S3();

    // Define the parameters for the S3 getObject operation
   
  }

  public async batFileExecution(filePath:string)
  {
    await exec(`${filePath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  }

  public async localStorageValues()
  {
 
    this.context1.localStorage.setItem("Test","TestValue");
    // const storageState = await this.context1.storageState();
    // const localStorage = storageState.localStorage;
     
    const value = await this.context1.evaluate(() => {
      return localStorage.getItem('Test');
    });

    console.log('Local Storage test 1:' + value); // .get('websdk_ng_global_parameter')
    
    // console.log('Local Storage test 3:' +await localStorage.getItem('websdk_ng_global_parameter'));
  }
  
  public async getTheFileNamesToArray() {

    // Define the endpoint, body, and auth credentials
    // const endpoint = 'https://bff.ip-poc.com/api/query_recording/';
    const endpoint = 'https://bff.ip-poc.com/api/get_users/';
    const requestBody = {
      'channelName':''+config.MeetingName+''
    };
    // const headers = {
    //   'Content-Type': 'application/json',
    // };
      
    const axiosConfig: AxiosRequestConfig ={
      method: 'post',
      url: endpoint,
      data: requestBody,
      // auth: auth,
      // headers: headers,
    };

    try {
      const response = await axios(axiosConfig);
      const Uids = await response.data.data.usersList;
      const Sid = await response.data.data.sid;
      let i=1;
      for (const uid of Uids) {
        console.log("Audio File :" + config.MeetingName+"/"+Sid+"_"+config.MeetingName+"__uid_s_"+uid+"__uid_e_audio.m3u8");
        console.log("video File :" + config.MeetingName+"/"+Sid+"_"+config.MeetingName+"__uid_s_"+uid+"__uid_e_video.m3u8");

        this.FileNames.push(config.MeetingName+"/"+Sid+"_"+config.MeetingName+"__uid_s_"+uid+"__uid_e_audio.m3u8");
        this.FileNames.push(config.MeetingName+"/"+Sid+"_"+config.MeetingName+"__uid_s_"+uid+"__uid_e_video.m3u8");

        i = i+1;
      }
      BasePage.FileNames1 = this.FileNames;

      // console.log("File List1 : "+this.FileNames);
    } catch (error) {
      console.error(error);
    }
    return this.FileNames;
  }
    
  public async S3FileVerification()
  {
  
    AWS.config.update({
      accessKeyId: this.S3accessKeyId,
      secretAccessKey: this.S3secretAccessKey,
      region: this.S3region
    });
    const s3 = new AWS.S3();

    for(const filekey of BasePage.FileNames1)
    {
      const params = {
        Bucket: this.S3BucketName,
        Key: filekey
      };

      // Call the S3 getObject operation to retrieve the file
      s3.getObject(params, (err, data) => {
        // console.log("File Not Found : " + err);
        // console.log(" File Exist : " + data);
        try{
          if (err) {
            console.log("\n File Not Found : " + err);
            assert.strictEqual(true,false,"File does not exist in S3 bucket : "+ filekey);
        
          } else {
            console.log("\n File Exist : " + data);
            assert.strictEqual(true,true,"File exist in S3 bucket : "+ filekey);
        
          }
        }
        catch
        {
          console.log("\n Error While Checking The S3 Files :"+ filekey+ "-   "+Date.now());
        }
      
      });
    }
  }
  
  public async locatorShouldBePresent(locator: Locator) {
   
    await assert.strictEqual(await this.isLocatorPresentAfterWait(locator), true, 'The Element Not Found : ');
    return true;
  }
  public async locatorShouldNotBePresent(locator: Locator) {
    await assert.strictEqual(await this.isLocatorPresentAfterWait(locator), false, 'The Element Should Not Be Present');
    return true;
  }

  public async isElementDisappered(page:Page,locator: Locator) {
    await assert.strictEqual(await this.waitForElementToBeDisappear(page,locator), true, 'The Element Should Not Be Present');
    return true;
  }
  // public async isHiddenLocatorPresent(locator: Locator): Promise<boolean> {
  //   return this.isLocatorPresentAfterWait(locator, { state: 'hidden', timeout: 5000 });
  // }

  // public async LaunchAppWithNewContext(newContext: any) {
  //   newContext =
  // }

  // }

  public async enterText(locator: Locator, text: string) {
    await locator.fill(text);
  }
  public async getIFrameWithUrl(url: string) {
    return await this.page1.frame({ url: url });
  }

  public async waitForElementToBeDisappear(page:Page,locator: any) {
    await page.waitForSelector(locator, { state: 'hidden' });
  }

  public async waitForElementToBePresent(page:Page,locator: any) {
    await page.waitForSelector(locator, { state: 'visible' });
  }

  public async LaunchApp(page: Page, URL: string) {
    await page.goto(URL);
    console.log(await this.page1.title());
  }

  private async isLocatorPresentAfterWait(
    locator: Locator
    // options: PlaywrightWaitForOptions,
  ) {
    try {
      await locator.waitFor();
      return true;
    } catch (error) {
      return false;
    }
  }

  public async verifySortedOrderOfTheList(dateList: Array<string>) {
    const Sortedlist = dateList.sort();
    await console.log('Sortedlist :' + Sortedlist);
    return Sortedlist;
  }

  public async fileUpload(locator: Locator, filePath: string) {
    const fileChooserPromise = this.page1.waitForEvent('filechooser');
    await locator.click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(filePath);
  }

  public async launchApplication(Url: string) {
    await this.page1.goto(Url);

    // this.uploadFile();
    // this.waitForSecond(5);
  }
  public async uploadFile() {
    // await locator.click();
    console.log(' Coming to this method');
    await this.page1.locator('input[name="upfile"]').click();

    // await this.page.keyboard.press('Enter');
    // this.waitForSecond(5);
    // await this.page.locator('input[name="upfile"]').setInputFiles('D:/ToDelete/SampleText.txt');
    // await this.page.getByRole('button', { name: 'Press' }).click();

    // await this.page.getByText('Sample file upload for testing').isVisible();
  }

  public async waitForSecond(waittime: number) {
    const startTime: number = new Date().getTime();
    let printtime = startTime +  1000;
    while (new Date().getTime() <= startTime + waittime * 1000) {
      if(new Date().getTime() >= printtime)
      {
        // console.log("printtime : " + printtime);
        printtime = new Date().getTime() + 1000;
      }
    }
  }

  data = 'This is some text that will be written to the file.';

  public async writefile(Filepath: string, fileContent: string) {
    fs.writeFile(Filepath, fileContent, (err: NodeJS.ErrnoException | null) => {
      if (err) {
        console.error(err);
      } else {
        console.log('File written successfully!');
      }
    });
  }

  public async fileReading() {
    const featuredata = fs.readFileSync('src/features/Login.feature');
    console.log(featuredata);
  }

  public async stepDefenitionWriting() {
    const path = 'src/steps-defenitions/ZoomAppSample.steps.ts';
    const data =
      '// eslint-disable-next-line no-console' +
      'import { ICustomWorld } from "../support/custom-world";' +
      'import { Given, Then, When } from "@cucumber/cucumber";' +
      'import { expect } from "@playwright/test";' +
      '\n\n' +
      "Given(Launch the MINT application', async function (this: ICustomWorld) {" +
      'this.PageObject?.loginPage.pageClassWriting();' +
      'this.PageObject?.loginPage.fileReading();' +
      '});';

    this.writefile(path, data);
  }

  public async pageClassWriting() {
    const path = 'src/Pages/ZoomAppSample.ts';
    const data =
      '/* eslint-disable no-console */\n\n' +
      "import FieldConfig from '../utils/FieldConfig';" +
      "import { BasePage } from '../utils/BasePage';" +
      "import { Locator, Page } from '@playwright/test';" +
      'export default class Loginpage extends BasePage {' +
      'readonly LoginUserName: Locator;' +
      'fieldconfig!: FieldConfig;' +
      'constructor(page: Page, fieldconfig: FieldConfig) {' +
      'super(page);' +
      'this.fieldconfig = fieldconfig;' +
      'this.LoginUserName = page.locator("[data-test=username]");}' +
      '\n\n' +
      'public async EnterUserName(UserName: string) {' +
      'console.log("EnterUserName");' +
      'await this.enterText(this.LoginUserName, UserName);' +
      '}}';

    this.writefile(path, data);
  }

  public async copyPasteText(text: string) {
    await navigator.clipboard.writeText(text);
    await navigator.clipboard.readText();
  }
  // copyToClipboard = async (text: string) => {
  //   try {
  //     await navigator.clipboard.writeText(text);
  //     console.log('Text copied to clipboard');
  //   } catch (error) {
  //     console.error('Error copying text to clipboard: ', error);
  //   }
  // };

  // pasteFromClipboard = async () => {
  //   try {
  //     const text = await navigator.clipboard.readText();
  //     console.log('Text pasted from clipboard: ', text);
  //     return text;
  //   } catch (error) {
  //     console.error('Error pasting text from clipboard: ', error);
  //     return null;
  //   }
  // };
}
