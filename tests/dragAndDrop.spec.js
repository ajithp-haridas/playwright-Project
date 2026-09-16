import {test,expect} from "@playwright/test";

test('dragAndDrop',async ({page})=>{

await page.goto('https://selenium.qabible.in/index.php')

const OthersOption=page.getByRole('link',{name:"Others"})
await OthersOption.click()

await page.getByRole('link',{name:"Drag and Drop"}).click()

//const source=page.getByText("Draggable n°1")
const allSources=await page.locator('#todrag span[draggable="true"]')
const destination=page.locator('#mydropzone')
//await source.dragTo(destination)
const count=await allSources.count()
console.log(count)

for(let i=0;i<count;i++){ //drag and drop all the elements. 

    await allSources.first().dragTo(destination) 
    await page.waitForTimeout(3000)
}

})

/*click options
 normal click- locator.click()
 double click- locator.dblClick()
 triple click- locator.click({clickCount:3})
 Right click- locator.Click({button:"right"}) */

 //practice in checkbox


 //mousehover -locator.hover()

 
