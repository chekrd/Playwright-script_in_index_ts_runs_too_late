import { Component } from './Component';
import { expect, test } from '@playwright/experimental-ct-react';

test.describe('Component', () => {
  test('is rendered', async ({ page, mount }) => {
    await mount(<Component />);

    await expect(page.locator(`text=value`)).toBeVisible();
  });
});
