const { test, expect } = require('@playwright/test');

async function selectStory(page, group, storyId) {
  const section = page.locator(`[id="${group}"]`);
  if ((await section.getAttribute('aria-expanded')) !== 'true') {
    await section.click();
  }
  await page.locator(`[id="${storyId}"]`).click();
  const canvas = page.getByTestId(storyId);
  await expect(canvas).toBeVisible();
  return canvas;
}

test('renders the affected stories with one React runtime', async ({
  page,
}) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    const text = message.text();
    // Remote avatar images may be unavailable; rendering errors must still fail.
    if (
      (message.type() === 'error' &&
        !text.startsWith('Failed to load resource:')) ||
      text.includes('Error rendering story')
    ) {
      errors.push(text);
    }
  });

  await page.goto('/');
  const formik = await selectStory(page, 'formik', 'formik--story-1');
  await expect(formik.getByPlaceholder('John')).toBeVisible();
  await formik.getByPlaceholder('John').fill('Formik browser check');
  await expect(formik.getByPlaceholder('John')).toHaveValue(
    'Formik browser check'
  );

  const usage = await selectStory(
    page,
    'react-hook-form',
    'react-hook-form--story-1'
  );
  await usage.getByPlaceholder('John').fill('Hook form browser check');
  await expect(usage.getByPlaceholder('John')).toHaveValue(
    'Hook form browser check'
  );

  const demo = await selectStory(
    page,
    'react-hook-form',
    'react-hook-form--story-2'
  );
  await expect(
    demo.getByText('Account Settings', { exact: true })
  ).toBeVisible();

  const flatList = await selectStory(page, 'flatlist', 'flatlist--story-1');
  await expect(flatList.getByText('Inbox', { exact: true })).toBeVisible();
  await expect(
    flatList.getByText('Aafreen Khan', { exact: true })
  ).toBeVisible();

  const scrollView = await selectStory(
    page,
    'scrollview',
    'scrollview--story-1'
  );
  await expect(scrollView.getByText('Cyan', { exact: true })).toBeVisible();
  await expect(
    page.getByText('Something went wrong rendering your story', { exact: true })
  ).toHaveCount(0);
  expect(errors).toEqual([]);
});
