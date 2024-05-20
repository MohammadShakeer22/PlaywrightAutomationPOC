const { test, expect } = require('@playwright/test');

test('First playwright test',async ({browser})=>
{
   const context =  await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://opstra.definedge.com/");
})

test('Second playwright test', async ({page})=>
    {
        await page.goto("https://opstra.definedge.com/");
    })