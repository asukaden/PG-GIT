import FieldConfig from './FieldConfig';
import { Page } from '@playwright/test';
import SurveyCreation from '../Pages/IP_Create-Survey-Page';
import QuestionCreation from '../Pages/IP_Create-Question-Page';
import Dashboard from '../Pages/IP_Dashboard-Page';
import EditSurvey from '../Pages/IP_Edit-Survey-Page';
import SurveyDisplay from '../Pages/IP_Survey-Display-Page';
import protocolRun from '../Pages/protocol-runner-page';
export class PageObject {
  surveycreation: SurveyCreation;
  questionCreation: QuestionCreation;
  dashboard: Dashboard;
  editSurvey: EditSurvey;
  surveyDisplay: SurveyDisplay;
  protocolRun: protocolRun

  constructor(page: Page, fieldConfig: FieldConfig) {
    this.surveycreation = new SurveyCreation(page, fieldConfig);
    this.questionCreation = new QuestionCreation(page, fieldConfig);
    this.dashboard = new Dashboard(page, fieldConfig);
    this.editSurvey= new EditSurvey(page, fieldConfig);
    this.surveyDisplay= new SurveyDisplay(page,fieldConfig);
    this.protocolRun=new protocolRun(page,fieldConfig);
  }
}
