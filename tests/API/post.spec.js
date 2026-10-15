import { test, expect } from '@playwright/test';

test('post api auth',async({request})=>{
const authData={
    "username" : "admin",
    "password" : "password123"
}
const response=await request.post('https://restful-booker.herokuapp.com/auth', { headers:{'Content-Type': 'application/json'}, data: authData })
//console.log(response.status())
const responseJson=await response.json()
console.log(responseJson)
expect(responseJson.token).not.toBeNull()  //token to be not null
})

test('post booking data',async({request})=>{
const bookingData={
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
const response=await request.post('https://restful-booker.herokuapp.com/booking', { headers:{'Content-Type': 'application/json'}, data: bookingData })
//console.log(response.status())
const responseJson=await response.json()
console.log(responseJson)
expect(responseJson.bookingid).not.toBeNull()  //bookingid to be not null
console.log('Booking id is: '+responseJson.bookingid)
expect(responseJson.booking.firstname).toBe(bookingData.firstname)  //firstname to be Jim
})