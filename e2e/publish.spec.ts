import { test } from '@playwright/test';

test('Publish', async ({ page }) => {
  await page.goto('https://sendsay.ru/admin/docsupdate');

  const { PUBLISH_LOGIN, PUBLISH_PASSWORD } = process.env;

  await page.locator("[name='credential_0']").fill(PUBLISH_LOGIN);
  await page.locator("[name='credential_1']").fill(PUBLISH_PASSWORD);

  await page.getByRole('button').click();

  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'playwright-report/result.png' });
});
