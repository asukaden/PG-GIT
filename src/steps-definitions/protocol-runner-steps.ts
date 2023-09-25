import { ICustomWorld } from '../support/custom-world';
//import { config } from '../support/config';
import { Given } from '@cucumber/cucumber';


Given('Initialize protocol', async function (this: ICustomWorld) {
  await this.PageObject?.protocolRun.protocolRunner();
});