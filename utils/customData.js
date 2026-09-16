import test from "@playwright/test"

exports.customTest=test.extend({
    loginData:{
        username:"standard_user",
        password:"secret_sauce"
    }
})

//customTest is an object and loginData is fixture