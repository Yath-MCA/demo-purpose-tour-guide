import { test, expect } from '@playwright/test'

// Base URL — matches Vite dev server default
const BASE_URL = 'http://localhost:5173'

test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL)
})

// ─────────────────────────────────────────────
// TEST 1: Normal button click
// ─────────────────────────────────────────────
test('TC01 — normal action button click triggers alert', async ({ page }) => {
  // Listen for the dialog (alert) before clicking
  page.once('dialog', async (dialog) => {
    expect(dialog.type()).toBe('alert')
    expect(dialog.message()).toContain('Normal Action triggered')
    await dialog.accept()
  })

  const btn = page.locator('#normalActionBtn')
  await expect(btn).toBeVisible()
  await btn.click()
})

// ─────────────────────────────────────────────
// TEST 2: Profile dropdown opens on button click
// ─────────────────────────────────────────────
test('TC02 — profile dropdown is hidden by default, opens on click', async ({ page }) => {
  const dropdown = page.locator('#profileDropdown')
  const profileBtn = page.locator('#profileBtn')

  // Dropdown should exist in DOM but be invisible initially
  await expect(dropdown).toBeAttached()
  await expect(dropdown).toHaveClass(/hidden/)

  // Click profile button
  await profileBtn.click()

  // Dropdown should now be visible
  await expect(dropdown).toHaveClass(/visible/)
  await expect(dropdown).toBeVisible()
})

// ─────────────────────────────────────────────
// TEST 3: Logout button is visible inside dropdown
// ─────────────────────────────────────────────
test('TC03 — logout button is present inside dropdown and triggers alert', async ({ page }) => {
  const profileBtn = page.locator('#profileBtn')
  const dropdown = page.locator('#profileDropdown')
  const logoutBtn = page.locator('#logoutBtn')

  // Open the dropdown first
  await profileBtn.click()
  await expect(dropdown).toHaveClass(/visible/)

  // Logout button should be inside the dropdown and visible
  await expect(logoutBtn).toBeVisible()

  // Confirm it is a descendant of the dropdown
  const isInsideDropdown = await dropdown.locator('#logoutBtn').count()
  expect(isInsideDropdown).toBe(1)

  // Click logout — expect alert
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Logout triggered')
    await dialog.accept()
  })
  await logoutBtn.click()

  // Dropdown should close after logout
  await expect(dropdown).toHaveClass(/hidden/)
})

// ─────────────────────────────────────────────
// TEST 4: Slide panel opens
// ─────────────────────────────────────────────
test('TC04 — slide panel opens when Open Panel button is clicked', async ({ page }) => {
  const openBtn = page.locator('#openPanelBtn')
  const panel = page.locator('#slidePanel')

  // Panel should not have 'open' class initially
  await expect(panel).not.toHaveClass(/open/)

  // Click open button
  await openBtn.click()

  // Panel should gain 'open' class and be visible
  await expect(panel).toHaveClass(/open/)
  await expect(panel).toBeVisible()
})

// ─────────────────────────────────────────────
// TEST 5: Slide panel closes
// ─────────────────────────────────────────────
test('TC05 — slide panel closes when Close Panel button is clicked', async ({ page }) => {
  const openBtn = page.locator('#openPanelBtn')
  const closeBtn = page.locator('#closePanelBtn')
  const panel = page.locator('#slidePanel')

  // Open the panel first
  await openBtn.click()
  await expect(panel).toHaveClass(/open/)

  // Close button must be visible inside open panel
  await expect(closeBtn).toBeVisible()

  // Click close
  await closeBtn.click()

  // Panel should no longer have 'open' class
  await expect(panel).not.toHaveClass(/open/)
})

// ─────────────────────────────────────────────
// TEST 6: Toggle message visibility
// ─────────────────────────────────────────────
test('TC06 — toggle message shows and hides on button click', async ({ page }) => {
  const toggleBtn = page.locator('#toggleMessageBtn')
  const message = page.locator('#toggleMessage')

  // Message should be hidden by default
  await expect(message).toHaveClass(/hidden/)
  await expect(message).not.toBeVisible()

  // Click to show
  await toggleBtn.click()
  await expect(message).toHaveClass(/visible/)
  await expect(message).toBeVisible()

  // Click again to hide
  await toggleBtn.click()
  await expect(message).toHaveClass(/hidden/)
  await expect(message).not.toBeVisible()
})

// ─────────────────────────────────────────────
// TEST 7: Dropdown closes on outside click
// ─────────────────────────────────────────────
test('TC07 — dropdown closes when clicking outside', async ({ page }) => {
  const profileBtn = page.locator('#profileBtn')
  const dropdown = page.locator('#profileDropdown')

  // Open dropdown
  await profileBtn.click()
  await expect(dropdown).toHaveClass(/visible/)

  // Click outside (on page body away from dropdown)
  await page.mouse.click(100, 400)

  // Dropdown should be hidden
  await expect(dropdown).toHaveClass(/hidden/)
})

// ─────────────────────────────────────────────
// TEST 8: Slide panel closes on overlay click
// ─────────────────────────────────────────────
test('TC08 — slide panel closes when clicking backdrop overlay', async ({ page }) => {
  const openBtn = page.locator('#openPanelBtn')
  const panel = page.locator('#slidePanel')
  const overlay = page.locator('.panel-overlay')

  await openBtn.click()
  await expect(panel).toHaveClass(/open/)
  await expect(overlay).toHaveClass(/visible/)

  // Click the overlay (backdrop)
  await overlay.click({ position: { x: 100, y: 300 } })

  await expect(panel).not.toHaveClass(/open/)
})
