import FieldConfig from '../utils/FieldConfig';
import { BasePage } from '../utils/BasePage';
//import { config } from '../support/config';
import { Page } from '@playwright/test';


export default class protocolRun extends BasePage {


fieldconfig!: FieldConfig;

constructor(page: Page, fieldconfig: FieldConfig) {
    super(page);
 this.fieldconfig = fieldconfig;
  }    



public async protocolRunner(){

    console.log("initializing protocol features...././././././../../.../.....>>>>>>>");
    console.log("Motive : Whatever it takes do not stop Keep Going.Nothing will end until you breath");
    console.log("Waking Up around 5 - 5.30");
    console.log("Start Running or walking eventually...");
    console.log("Warming Up....routine as follows...");
    console.log("side to sides\n","torso swivels\n","Jumping around on torso to limber...\n","All of the above should be completed within 15 minutes");
    console.log("Do it with different phases small steps to Bigger .......");
    console.log("Next On to The Floor.....");
    console.log("-----------15 minutes of exercises total 300 reps----------");
    console.log("Sit-ups in bycycling motion");
    console.log("sit-ups with a medicine ball");
    console.log("Legraises");
    console.log("---------------------------------------------------------------");
    console.log("Every day the above should be done properly. eventually Bring the rep count t0 300");
    console.log("Add PushUPs and Regular routines");
    console.log("Add flexibility training.");
    console.log("EOF");
   

        

}

}