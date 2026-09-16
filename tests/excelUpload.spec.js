import test from "@playwright/test";

const Exceljs=require ('exceljs');
//import {test,expect} from '@playwright/test'


async function writeExcelTest(searchValue,replacedValue,change,filePath) {
      const workbook=new Exceljs.Workbook();
      await workbook.xlsx.readFile(filePath) //open the file
      const worksheet=workbook.getWorksheet('Sheet1');
      const output=await readExcel(worksheet,searchValue);//first runwithout await then put
      const cell=worksheet.getCell(output.row,output.column+change.columnChange); //insted of hardcode we use the object variables ,use change as last
      //const cell=worksheet.getCell(output.row,output.column);
      cell.value=replacedValue 
      await workbook.xlsx.writeFile(filePath);//re-write the file and save it again

}

async  function readExcel(worksheet,searchValue) 
{
    
   let output={row:-1,column:-1} 

  
worksheet.eachRow((row,rowNumber)=>{

    row.eachCell((cell,colNumber)=>{
 
        if(cell.value===searchValue)
      
         {
            output.row=rowNumber; 
            output.column=colNumber; 
            console.log(cell.value)
            console.log(output.row); 
            console.log(output.column);
        
      }
    })

  })

  return output; 
}
//writeExcelTest('garlic','20',{rowChange:0,columnChange:1},'C:/Users/pc/OneDrive/Documents/playWright/utils/sample.xlsx')


test('excelUpload',async ({page})=>{

await page.goto('https://demo.automationtesting.in/FileUpload.html')

const browseButton=page.locator('#input-4')
await browseButton.setInputFiles('C:/Users/pc/OneDrive/Documents/playWright/utils/sample.xlsx')


})

test.only('fileDownload',async ({page})=>{

    await page.goto('https://demoqa.com/upload-download')
    const downloadPromise=page.waitForEvent('download')
    const downloadButton=page.getByRole('button',{name:"Download"})
    await downloadButton.click()
    const download=await downloadPromise
    await download.saveAs('C:/Users/pc/OneDrive/Documents/playWright/utils/download.jpg')
})