// eslint-disable-next-line no-console
import { ICustomWorld } from '../support/custom-world';
//import { config } from '../support/config';
import { Given } from '@cucumber/cucumber';

Given(
  'Select the page Langauge as {string}',
  async function (this: ICustomWorld, Language: string) {
    await this.PageObject?.dashboard.selectLanguage(Language);
  },
);

Given('Verify the English Page', async function (this: ICustomWorld) {
  await this.PageObject?.dashboard.VerifyEnglishTitle();
});

Given('Verify the Japanese Page', async function (this: ICustomWorld) {
  await this.PageObject?.dashboard.VerifyJapaneseTitle();
});

Given(
  'Verify the survey details for the SurveyTitle as {string} and Description as {string}',
  async function (
    this: ICustomWorld,
    SurveyTitle: string,
    SurveyDescription: string,
  ) {
    await this.PageObject?.dashboard.VerifySurveyDetails(
      SurveyTitle,
      SurveyDescription,
    );
  },
);

Given(
  'Verify that the user can select a survey',
  async function (this: ICustomWorld) {
    await this.PageObject?.dashboard.selectSurvey();
  },
);

Given(
  'Verify that the Play button is changed to stop button when click on play button',
  async function (this: ICustomWorld) {
    await this.PageObject?.dashboard.ClickPlayBtn();
  },
);

Given('click on play button', async function (this: ICustomWorld) {
  await this.PageObject?.dashboard.ClickPlayBtn();
});

Given(
  'Verify that the Stop button is changed to Play button when click on Stop button',
  async function (this: ICustomWorld) {
    await this.PageObject?.dashboard.ClickStopBtn();
  },
);

Given(
  'Verify that the delete button is present in the page',
  async function (this: ICustomWorld) {
    await this.PageObject?.dashboard.ClickDeleteBtn();
  },
);


Given('Verify that items cannot be modified or changed after the survey has started',async function (this: ICustomWorld) {
    await this.PageObject?.dashboard.VerifySurveyAfterStart();
  },
);