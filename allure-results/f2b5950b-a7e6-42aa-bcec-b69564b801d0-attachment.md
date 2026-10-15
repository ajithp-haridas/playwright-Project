# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshot.spec.js >> visual comparison
- Location: tests\screenshot.spec.js:18:6

# Error details

```
Error: A snapshot doesn't exist at C:\Users\pc\OneDrive\Documents\playWright\tests\screenshot.spec.js-snapshots\screenshot-screenshot1-firefoxProject-win32.png, writing actual.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | test('screenshot',async ({page})=>{
  3  | 
  4  | await page.goto('https://www.saucedemo.com/')
  5  | 
  6  | //page level screenshot
  7  | await page.screenshot({path:'screenshot/screenshot.png',fullPage:true})
  8  | 
  9  | //element level screenshot
  10 | const loginButton=page.locator('#login-button')
  11 | await loginButton.screenshot({path:'screenshot/loginButton.png'})
  12 | 
  13 | })
  14 | 
  15 | 
  16 | //visual comparison
  17 | 
  18 | test.only('visual comparison',async ({page})=>{
  19 | 
  20 | await page.goto('https://www.saucedemo.com/')
  21 | 
> 22 | await expect(page).toHaveScreenshot('screenshot/screenshot1.png')
     |  ^ Error: A snapshot doesn't exist at C:\Users\pc\OneDrive\Documents\playWright\tests\screenshot.spec.js-snapshots\screenshot-screenshot1-firefoxProject-win32.png, writing actual.
  23 | 
  24 | 
  25 | })
```