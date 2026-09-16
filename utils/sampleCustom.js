import test from "@playwright/test";


exports.myTest=test.extend({
    userDetail:async({},use)=>{
        await use([
            {
            username:"standard_user",
        password:"secret_sauce"
        },{
             username:"problem_user",
        password:"secret_sauce"
        }])
    }

  
})