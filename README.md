# Class Schedule Assistant E2E Tests 🎓

This repository contains end-to-end tests for the Class Schedule Assistant application using Playwright. The tests verify the core functionality of the application, including user login, timetable upload, and schedule query interactions.

## 🚀 Features Tested

- User authentication flow
- ICS file upload functionality
- Schedule query processing
- AI-powered responses
- Voice interaction capabilities
- Response playback

## 🛠️ Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A modern web browser (Chrome, Firefox, or Safari)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShishirPathak/ClassClock-Test-Project

   cd ClassClock-Test-Project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## 🧪 Running Tests

To run the end-to-end tests:

```bash
npm run test
```

This will execute the test suite defined in `schedule-assistant.spec.ts`, which includes:
- User login simulation
- Timetable file upload
- Multiple schedule queries:
  - Monday class schedule
  - Machine Learning class details
  - Today's schedule
  - Advanced Mathematical Stats location

## 📝 Test Structure

The main test file (`schedule-assistant.spec.ts`) follows this structure:

1. **Setup**: Initializes the test environment and navigates to the application
2. **Authentication**: Simulates user login
3. **File Upload**: Handles ICS timetable file upload
4. **Queries**: Tests various schedule-related questions
5. **Response Verification**: Ensures proper response rendering

## 🔍 Test Cases

The test suite includes verification of:

```typescript
const questions = [
  'Do I have any classes on Monday?',
  'What is the schedule for Machine Learning class?',
  'What is my schedule for Today?',
  'Where does the Advanced Mathematical Stats class take place??'
];
```

Each question tests different aspects of the schedule assistant's capabilities.

## ⚙️ Configuration

The tests use default Playwright configuration. You can modify the configuration in `playwright.config.ts` if needed.

## 📁 Project Structure

```
├── tests/
│   └── schedule-assistant.spec.ts   # Main test file
├── sample-data/
│   └── schedule.ics                 # Sample timetable file
├── package.json
└── README.md
```


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Known Issues

- Test recordings might need longer timeouts on slower systems
- File paths might need adjustment based on your local setup

## 🔮 Future Improvements

- Add more comprehensive test cases
- Implement visual regression testing
- Add API response mocking
- Include performance testing
- Add cross-browser testing scenarios

## 🤖 Tech Stack

- [Playwright](https://playwright.dev/) - Modern E2E testing framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Node.js](https://nodejs.org/) - JavaScript runtime

## 📫 Support

For support, please open an issue in the repository or contact the maintainers.

---
Made with ❤️ by Shishir