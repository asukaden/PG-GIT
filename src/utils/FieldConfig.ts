/* eslint-disable @typescript-eslint/no-explicit-any */
import { loadFieldsConfigFromYaml } from './YamlReader';
// import { Page } from '@playwright/test';
// eslint-disable-next-line import/no-unresolved

export default class FieldConfig {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  public fieldData: any;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor() {
    this.fieldData = loadFieldsConfigFromYaml();
  }
  public getFieldData(fieldName: string) {
    return this.fieldData[fieldName];
  }
  public getFieldLocator(fieldName: string) {
    return this.getFieldData(fieldName).getFieldLocator;
  }
  public getFieldError(fieldName: string) {
    return this.getFieldData(fieldName).invalidCredentialError;
  }
}
