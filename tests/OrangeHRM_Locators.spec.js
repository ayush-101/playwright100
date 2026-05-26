// @ts-check


const{test,expect} = require('@playwright/test');
test('Validate OrangeHRM Locators', async({page}) =>{
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await page.getByPlaceholder('Username').fill('Admin');
    await page.waitForTimeout(3000);
    await page.getByPlaceholder('password').fill('admin123');
    await page.waitForTimeout(3000);

    await page.getByRole('button', {name: 'Login'}).click();
    await page.waitForTimeout(3000);

    await page.getByText('AdminAuto User').click();
    await page.waitForTimeout(3000);
    await page.getByRole('menuitem',{name: 'Logout'}).click();


})