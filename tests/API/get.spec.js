import { test, expect } from '@playwright/test';

test('get api',async({request})=>{
const response=await request.get('https://jsonplaceholder.typicode.com/posts/1')

//console.log(response)
const responseJson=await response.json()
//console.log(responseJson)

//status code
const statuscode=response.status()
console.log(statuscode)
const statusText=response.statusText()
console.log(statusText)

//assertion
expect(statuscode).toBe(200)
expect(statusText).toBe('OK')

expect(response.ok()).toBeTruthy()

expect(responseJson).toHaveProperty('userId',1) //userid from response json

expect(responseJson.body).toContain('quia et suscipit') //body from response json

})

//api site--https://restful-booker.herokuapp.com/apidoc/index.html?utm_source=chatgpt.com