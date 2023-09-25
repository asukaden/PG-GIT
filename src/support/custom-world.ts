/* eslint-disable @typescript-eslint/no-explicit-any */
import FieldConfig from '../utils/FieldConfig';
import { PageObject } from '../utils/PageObjects';
import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import * as messages from '@cucumber/messages';
import {
  Page,
  PlaywrightTestOptions,
  APIRequestContext,
  BrowserContext,
} from '@playwright/test';
export interface CucumberWorldConstructorParams {
  parameters: { [key: string]: string };
}

export interface ICustomWorld extends World {
  fieldConfig?: FieldConfig;
  debug: boolean;
  feature?: messages.Pickle;
  // context?: BrowserContext;
  context1?: BrowserContext;
  context2?: BrowserContext;
  page?: Page;
  page1?: Page;
  page2?: Page;
  testName?: string;
  startTime?: Date;
  server?: APIRequestContext;
  playwrightOptions?: PlaywrightTestOptions;
  PageObject?: PageObject;
}

export class CustomWorld extends World implements ICustomWorld {
  constructor(options: IWorldOptions) {
    super(options);
  }
  debug = false;
}
setWorldConstructor(CustomWorld);
