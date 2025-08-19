import { test, expect } from '@playwright/test';

test.describe('Conference Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have hero section with navigation and call-to-action', async ({ page }) => {
    // Check navigation
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('nav').getByText('Home')).toBeVisible();
    await expect(page.locator('nav').getByText('About')).toBeVisible();
    await expect(page.locator('nav').getByText('Program')).toBeVisible();
    await expect(page.locator('nav').getByText('Speakers')).toBeVisible();
    await expect(page.locator('nav').getByText('Pricing')).toBeVisible();
    await expect(page.locator('nav').getByText('Contact')).toBeVisible();

    // Check hero content
    await expect(page.getByText('Naučte se moderně komunikovat!')).toBeVisible();
    await expect(page.locator('nav').getByRole('button', { name: 'Register now' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Secure your spot' })).toBeVisible();
  });

  test('should display about section with content', async ({ page }) => {
    await expect(page.getByText('Nadpis sekce').first()).toBeVisible();
    await expect(page.getByText('This helps your team communicate')).toBeVisible();
    await expect(page.getByText('Conference Preview')).toBeVisible();
  });

  test('should show features section with 6 feature cards', async ({ page }) => {
    const features = [
      'Advanced AI Applications',
      'Automation & Robotics',
      'Competitive Advantage',
      'Future of Work',
      'Data-Driven Decisions',
      'Ethical AI & Governance'
    ];

    for (const feature of features) {
      await expect(page.getByRole('heading', { name: feature })).toBeVisible();
    }
  });

  test('should display program schedule with all sessions', async ({ page }) => {
    // Check for key program items
    await expect(page.getByText('Registration and Welcome Coffee')).toBeVisible();
    await expect(page.getByText('Keynote: Future of Communication')).toBeVisible();
    await expect(page.getByText('AI in Modern Communication')).toBeVisible();
    await expect(page.getByText('Workshop: Communication Tools')).toBeVisible();
    
    // Check time format
    await expect(page.getByText('09:00 - 09:30')).toBeVisible();
    await expect(page.getByText('09:30 - 10:30')).toBeVisible();
  });

  test('should show speakers section with speaker profiles', async ({ page }) => {
    const speakers = [
      'Dr. Ana Kovačić',
      'Marko Novak Petrov',
      'Sandra Svoboda',
      'David Černý'
    ];

    for (const speaker of speakers) {
      await expect(page.getByText(speaker)).toBeVisible();
    }

    // Check for job titles
    await expect(page.getByText('Chief Technology Officer')).toBeVisible();
    await expect(page.getByText('Innovation Director')).toBeVisible();
  });

  test('should display pricing section with three pricing tiers', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Standard Pass' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Pro Pass' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'VIP Pass' })).toBeVisible();

    await expect(page.getByText('$299')).toBeVisible();
    await expect(page.getByText('$599')).toBeVisible();
    await expect(page.getByText('$999')).toBeVisible();

    // Check for Most Popular badge
    await expect(page.getByText('Most Popular')).toBeVisible();
    
    // Check for buttons (using partial matches to avoid case sensitivity issues)
    await expect(page.getByRole('button', { name: /register now/i }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Go pro' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'UNLOCK VIP' })).toBeVisible();
  });

  test('should show partners section with partner logos', async ({ page }) => {
    const partners = ['TechCorp', 'InnovateLab', 'DataFlow', 'CloudTech'];
    
    for (const partner of partners) {
      await expect(page.getByText(partner)).toBeVisible();
    }
  });

  test('should display FAQ section with expandable questions', async ({ page }) => {
    // Check for FAQ questions
    await expect(page.getByText('When and where is the Tech Way Conference taking place?')).toBeVisible();
    await expect(page.getByText('What topics will be covered at the conference?')).toBeVisible();
    
    // Test FAQ interaction
    const firstQuestion = page.getByText('When and where is the Tech Way Conference taking place?');
    await firstQuestion.click();
    
    // Check if answer appears
    await expect(page.getByText('The conference will be held on March 15, 2024')).toBeVisible();
  });

  test('should show contact section with location details', async ({ page }) => {
    await expect(page.getByText('Visit Our Conference Location')).toBeVisible();
    await expect(page.getByText('Prague Convention Center')).toBeVisible();
    await expect(page.getByText('+420 123 456 789')).toBeVisible();
    await expect(page.getByText('info@techconference.com')).toBeVisible();
    
    // Check transportation info
    await expect(page.getByText('Metro: Line C, Budějovická Station')).toBeVisible();
  });

  test('should display footer with newsletter signup', async ({ page }) => {
    await expect(page.getByText('Hack Your Way Into')).toBeVisible();
    
    // Check newsletter form
    const emailInput = page.getByPlaceholder('Enter your email address');
    await expect(emailInput).toBeVisible();
    
    const subscribeButton = page.getByRole('button', { name: 'Subscribe' });
    await expect(subscribeButton).toBeVisible();
    
    // Test newsletter signup - handle alert dialog
    page.on('dialog', dialog => dialog.accept());
    await emailInput.fill('test@example.com');
    await subscribeButton.click();
    
    // Verify form was reset (indicating successful submission)
    await expect(emailInput).toHaveValue('');
  });

  test('should be responsive and work on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check that key elements are still visible on mobile
    await expect(page.getByText('Naučte se moderně komunikovat!')).toBeVisible();
    await expect(page.locator('nav').getByRole('button', { name: 'Register now' })).toBeVisible();
    
    // Check that sections stack properly on mobile
    await expect(page.getByRole('heading', { name: 'Standard Pass' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Pro Pass' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'VIP Pass' })).toBeVisible();
  });

  test('should have smooth scrolling between sections', async ({ page }) => {
    // Test that anchor links work
    const programLink = page.locator('nav').getByRole('link', { name: 'Program' });
    await programLink.click();
    
    // Check that we scrolled to program section
    await expect(page.getByText('Registration and Welcome Coffee')).toBeInViewport();
  });

  test('should handle form submissions properly', async ({ page }) => {
    // Test newsletter form
    const emailInput = page.getByPlaceholder('Enter your email address');
    const subscribeButton = page.getByRole('button', { name: 'Subscribe' });
    
    // Test empty form submission
    await subscribeButton.click();
    // Form should require email due to required attribute
    
    // Test valid email submission - handle alert dialog
    page.on('dialog', dialog => dialog.accept());
    await emailInput.fill('valid@email.com');
    await subscribeButton.click();
    
    // Verify form was reset (indicating successful submission)
    await expect(emailInput).toHaveValue('');
  });
});