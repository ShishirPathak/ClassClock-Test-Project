import { test, expect } from '@playwright/test';
import path from 'path';

test('complete flow test', async ({ page }) => {
  // Navigate to the application
  await page.goto('/');
  
  // Login
  await page.fill('input[placeholder="Enter your name"]', 'Test User');
  await page.click('button[type="submit"]');
  
  // Wait for the upload button to be visible
  await page.waitForSelector('button:has-text("Upload Timetable")');
  
  // Handle file upload
  const fileInput = await page.locator('input[type="file"]');
  await fileInput.setInputFiles(path.join('/Users/shishirsmac/Personal/Personal Projects/Test Project/ClassClock-Test-Project/sample-data/schedule.ics'));
  
  // Wait for the upload to complete
  await page.waitForSelector('text=Timetable Loaded');
  
  // Test questions array
  const questions = [
    'What classes do I have today?',
    'When is my next class?',
    'What is my schedule for tomorrow?',
    'What is my schedule for Thursday?'
  ];
  
  // Ask each question and wait for response
  for (const question of questions) {
    // Type the question
    await page.fill('input[placeholder="Ask about your timetable"]', question);
    
    // Click ask button
    await page.click('button:has-text("Ask Question")');
    
    // Wait for the answer
    await page.waitForSelector('.bg-gray-50');
    
    // Optional: Add delay to make recording more viewable
    await page.waitForTimeout(2000);
  }
});