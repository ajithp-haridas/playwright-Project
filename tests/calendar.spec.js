import {test,expect} from "@playwright/test"

test('calendar',async ({page})=>{


await page.goto('https://selenium.qabible.in/index.php')

const datePickerOption=page.getByRole('link',{name:"Date Pickers"})
await datePickerOption.click()

const dateInput=page.locator('.form-control.datepicker')
await dateInput.click()

await page.locator('.datepicker-days th.datepicker-switch').click() //parent to child locator
await page.locator('.datepicker-months th.datepicker-switch').click()

const targetYear=2026
const targetMonth=11
const targetDate=22
while(true){
const yearRange=await page.locator('.datepicker-years th.datepicker-switch').textContent()
console.log(yearRange)

const startYear=await yearRange.split('-')[0]
const endYear=await yearRange.split('-')[1]

console.log(startYear)
console.log(endYear)

if(targetYear>=startYear && targetYear<=endYear){

    break
}

if(targetYear<startYear){
    //click back button
const previousButton=await page.locator('.datepicker-years th.prev').click()
}else{
    //click next button
const nextButton=await page.locator('.datepicker-years th.next').click()
}

}
//await page.getByText(targetYear.toString(),{exact:true}).first().click() //convert to text to string
//await page.locator(`:text-is("${targetYear}")`).first().click()
await page.locator('span').filter({hasText:new RegExp(`^${targetYear}$`)}).first().click()
await page.locator('.month').nth(targetMonth-1).click() //nth will change according to month

await page.getByText(targetDate.toString(),{exact:true}).click()

//show date and assertion

const showDateButton=page.locator('#button-one')
await showDateButton.click()

const showDateText=await page.locator('#message-one').textContent()
console.log(showDateText)
await expect(showDateText).toContain('Date :')



})


