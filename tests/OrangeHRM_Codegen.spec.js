// @ts-check


const{test,expect} = require('@playwright/test');
test('Validate OrangeHRM Website Title', async({page}) =>{
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.waitForTimeout(5000);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Login' }).click();

  // cleanup is handled by Playwright Test runner
})