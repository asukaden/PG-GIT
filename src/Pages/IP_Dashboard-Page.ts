import FieldConfig from '../utils/FieldConfig';
import { BasePage } from '../utils/BasePage';
//import { config } from '../support/config';
import { Locator, Page } from '@playwright/test';

export default class Dashboard extends BasePage {
  fieldconfig!: FieldConfig;
  readonly LanguageDropdown: Locator;
  LanguageOption: string;
  readonly EnglishTitle: Locator;
  readonly JapaneseTitle: Locator;
  Surveytitle: string;
  SurveyDescription: string;
  readonly SurveyDate: Locator;

  readonly playBtn: Locator;
  readonly StopBtn: Locator;
  readonly DeleteBtn: Locator;
  readonly ViewBtn: Locator;
  readonly ViewBtn2: Locator;
  readonly editSubmitBtn: Locator;

  constructor(page: Page, fieldconfig: FieldConfig) {
    super(page);
    this.LanguageDropdown = this.page1.locator("//*[@id='language']");
    this.LanguageOption = '//*[@role="option"][(text()="langSelect")]';
    this.EnglishTitle = this.page1.locator("//*[text()='Questionnaire']");
    this.JapaneseTitle = this.page1.locator("//*[text()='新規作成']");
    this.Surveytitle = '(//*[contains(text(),"SurveyTitleValue" )])[1]';
    this.SurveyDescription =
      '(//*[contains(text(),"SurveyDescriptionValue" )])[1]';
    this.SurveyDate = this.page1.locator(
      "//*[@id='root']/div/div/div/div[2]/div/div[2]/div[1]/div[1]/span",
    );
    this.playBtn = this.page1.locator(
      "(//*[@data-testid='PlayCircleOutlineIcon'])[1]",
    );
    this.StopBtn = this.page1.locator(
      "(//*[@data-testid='StopCircleIcon'])[1]",
    );
    this.DeleteBtn = this.page1.locator(
      "(//*[@data-testid='DeleteOutlineIcon'])[1]",
    );
    this.ViewBtn = this.page1.locator(
      "//*[@id='root']/div[1]/div/div/div[2]/div[1]/div/div[1]/div[2]/button[1]",
    );

    this.ViewBtn2 = this.page1.locator("(//*[@data-testid='VisibilityIcon'])[1]");

    this.editSubmitBtn=this.page1.locator("//*[contains(text(),'Set for review')]");






    this.fieldconfig = fieldconfig;
  }

  public async selectLanguage(Language: string) {
    await this.LanguageDropdown.click();
    await this.page1
      .locator(this.LanguageOption.replace('langSelect', Language))
      .click();
  }

  public async VerifyEnglishTitle() {
    await this.locatorShouldBePresent(this.EnglishTitle);
  }
  public async VerifyJapaneseTitle() {
    await this.locatorShouldBePresent(this.JapaneseTitle);
  }

  public async VerifySurveyDetails(
    SurveyTitle: string,
    SurveyDescription: string,
  ) {
    await this.locatorShouldBePresent(
      this.page1.locator(
        this.Surveytitle.replace('SurveyTitleValue', SurveyTitle),
      ),
    );
    await this.locatorShouldBePresent(
      this.page1.locator(
        this.SurveyDescription.replace(
          'SurveyDescriptionValue',
          SurveyDescription,
        ),
      ),
    );
    //await this.locatorShouldBePresent(this.SurveyDate);
  }

  public async selectSurvey() {
    await this.ViewBtn.click();
  }

  public async ClickPlayBtn() {
    this.playBtn.click();
    await this.locatorShouldBePresent(this.StopBtn);
  }

  public async ClickStopBtn() {
    this.StopBtn.click();
    await this.locatorShouldBePresent(this.playBtn);
  }

  public async ClickDeleteBtn() {
    await this.locatorShouldBePresent(this.DeleteBtn);
  }


public async VerifySurveyAfterStart() {
  await this.playBtn.click();
  await this.ViewBtn2.click();
  await this.locatorShouldNotBePresent(this.editSubmitBtn);
  }

  
}
