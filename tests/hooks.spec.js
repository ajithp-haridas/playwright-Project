import {test} from "@playwright/test";

test.describe('grouping test case', ()=>{



test.beforeEach('beforeEachHook',async ({page})=>{

    console.log("Run before each test")//it run once before all other test
})

test('normalTest case',async ({page})=>{

    console.log('Normal test')
})

test.skip('skip test case',async ({page})=>{

    console.log('Skip test')
})

test.fixme('Known bug test case',async ({page})=>{

    console.log('Known bug test')
})

test('slow test case',async ({page})=>{

    test.slow()
    console.log('slow test case')
})

test.afterEach('after each test case',async ({page})=>{

    console.log('after each test')
})

test.afterAll('after all test case',async ({browser})=>{

    console.log('after all test')
})//page and context fixtures will not work afterAll

test.beforeAll('before all test case',async ({browser})=>{

    console.log('before all test')
}) //page and context fixtures will not work beforeAll


})