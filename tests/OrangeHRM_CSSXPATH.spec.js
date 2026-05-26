// @ts-check


const{test,expect} = require('@playwright/test');
test('Validate OrangeHRM CSSXPATH', async({page}) =>{
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await page.locator('xpath=//input[@placeholder="Username"]').fill('Admin');

    await page.waitForTimeout(3000);
    await page.locator('input[placeholder="Password"]').fill('admin123');
    await page.waitForTimeout(3000);

    await page.getByRole('button', {name: 'Login'}).click();
    await page.waitForTimeout(3000);

    await page.locator('xpath=//img[@class="oxd-userdropdown-img"]').click();
    await page.waitForTimeout(3000);
    await page.getByRole('menuitem',{name: 'Logout'}).click();


})