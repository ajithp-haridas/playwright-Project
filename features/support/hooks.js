import { Before,BeforeStep,After,AfterStep,Status } from "@cucumber/cucumber";
import {PomManager} from "../../pages/PageObjectManager.js"
import { chromium } from "@playwright/test";

Before(async function(){

    console.log("Before hook executed before once each scenario")
    this.browser=await chromium.launch({headless:false}) //browser launch
    this.context=await this.browser.newContext()
    this.page=await this.context.newPage()
    
        this.pomObject=new PomManager(this.page)
})

BeforeStep(async function(){
    console.log("Before hook executed before each step")
})

After(async function(){

    console.log("After hook executed after each scenario")
    if(this.browser){
        await this.browser.close()
    }
    if(this.context){
        await this.context.close()
    }
    if(this.page){
        await this.page.close()
    }
})

AfterStep(async function({result}){
    console.log("After hook executed after each step")
if(result.status===Status.FAILED){
    await this.page.screenshot({path:`./screenshot/${Date.now()}.png`,fullPage:true})

}
})

