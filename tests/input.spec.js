import { expect, test } from '@playwright/test';

test.beforeEach('open app', async ({ page }) => {
    await page.goto("https://letcode.in/test");
    const edit = page.locator("//a[@href='/edit']");
    await expect(edit).toHaveText("Edit");
    await edit.click();
    const inputTitle = page.locator("//h1");
    await expect(inputTitle).toBeVisible();
})

test('validate input field', async ({ page }) => {
    const fullname = page.locator("#fullName");
    await fullname.fill('Shama');
    await expect(fullname).toHaveValue('Shama');
})

test('validate append input field', async ({ page }) => {
    const appendTextbox = page.locator("#join");
    const text = await appendTextbox.getAttribute('value');
    await appendTextbox.fill(text.concat(' Testing'));
    await expect(appendTextbox).toHaveValue('I am good Testing');

    await page.keyboard.press('Tab');
})


test('whats in text', async ({ page }) => {
    const validateText = page.locator("#getMe");
    const text = await validateText.getAttribute('value');
    expect(text).toEqual("ortonikc");
})


test('clear the text', async ({ page }) => {
    const textToClear = page.locator("#clearMe");
    await textToClear.clear();
    await expect(textToClear).toHaveValue("");
})


test('disabled edit field', async ({ page }) => {
    const disabledText = page.locator("#noEdit");
    await expect(disabledText).toBeDisabled();
})

test('readonly edit field', async ({ page }) => {
    const readOnlyText = page.locator("#dontwrite");
    await expect(readOnlyText).not.toBeEditable();
})