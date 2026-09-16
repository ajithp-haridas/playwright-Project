import test from "@playwright/test";

test('iframeTest',async ({page})=>{

await page.goto('https://demoqa.com/frames')

const iframe=page.frameLocator('#frame1')
const iframeText=await iframe.locator('#sampleHeading').textContent()
console.log(iframeText)




})