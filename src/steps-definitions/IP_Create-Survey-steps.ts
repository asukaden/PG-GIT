// eslint-disable-next-line no-console
import { ICustomWorld } from '../support/custom-world';
//import { config } from '../support/config';
import { Given } from '@cucumber/cucumber';

Given('Launch the application', async function (this: ICustomWorld) {
  await this.PageObject?.surveycreation.LaunchMeetingAppForMeetingCreation();
});

Given('Click the Add New Button', async function (this: ICustomWorld) {
  await this.PageObject?.surveycreation.ClickAddNewBtn();
});

Given(
  'Select the SortOrder as {string}',
  async function (this: ICustomWorld, SortOrder: string) {
    await this.PageObject?.surveycreation.selectSortOrder(SortOrder);
  },
);

Given(
  'Select the DefaultLanguage as {string}',
  async function (this: ICustomWorld, DefaultLanguage: string) {
    await this.PageObject?.surveycreation.selectdefaultLanguage(
      DefaultLanguage,
    );
  },
);

Given(
  'Select the RequiredLanguage as {string}',
  async function (this: ICustomWorld, RequiredLanguage: string) {
    await this.PageObject?.surveycreation.selectRequiredLanguage(
      RequiredLanguage,
      
    );
  },
);

Given(
  'Enter the english title as {string}',
  async function (this: ICustomWorld, title: string) {
    await this.PageObject?.surveycreation.EnterTitleInEnglish(title);
  },
);


Given(
  'Enter the jp title as {string}',
  async function (this: ICustomWorld, title: string) {
    await this.PageObject?.surveycreation.EnterTitleInJP(title);
  },
);

Given(
  'Enter the EN description as {string}',
  async function (this: ICustomWorld, description: string) {
    await this.PageObject?.surveycreation.EnterDescriptionInEnglish(
      description,
    );
  },
);

Given(
  'Enter the JP description as {string}',
  async function (this: ICustomWorld, description: string) {
    await this.PageObject?.surveycreation.EnterDescriptionInJP(
      description,
    );
  },
);




Given(
  'Click on the Save and Continue Button',
  async function (this: ICustomWorld) {
    await this.PageObject?.surveycreation.ClickSaveAndContinueBtn();
  },
);


Given(
  'create 10 MA question with 50 options',
  async function (this: ICustomWorld) {
    await this.PageObject?.surveycreation.createMA50();

    

  },
);

  Given(
  'create question with 50 options as {string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string}',
  async function (this: ICustomWorld,q1: string, q2: string, q3: string,jq1:string, jq2:string,jq3:string, Mop1: string, Mop2: string, Mop3: string, Mop4:string,Sop1: string, Sop2: string, Sop3: string, Sop4:string,JMOP1: string, JMOP2: string, JMOP3: string, JMOP4:string,JSOP1: string, JSOP2: string, JSOP3: string, JSOP4:string) {
    await this.PageObject?.surveycreation.createMASAFA(q1, q2, q3,jq1, jq2,jq3, Mop1, Mop2, Mop3, Mop4,Sop1, Sop2, Sop3, Sop4,JMOP1, JMOP2, JMOP3, JMOP4,JSOP1, JSOP2, JSOP3, JSOP4);

    

  },
 





);