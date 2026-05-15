# reqres-api-test

API Automation Test project using **Playwright** to test the [Reqres](https://reqres.in/) REST API — covering CREATE, SINGLE USER, UPDATE, and DELETE operations.

---

## 📋 Overview

This project was built as part of a QA automation assessment. The goal is to design and automate test cases for 4 API endpoints on `https://reqres.in`, validating both **response status** and **response result** for each scenario.

---

## 🎬 Demo Video

▶️ [Watch Demo Video](https://drive.google.com/file/d/1EwwyYe8dSV37T0VohpeNSyUDs7UPQh7z/view?usp=drive_link)

---

## 🛠️ Tech Stack & Tools

- JavaScript
- Playwright
- Node.js

---

## 📁 Project Structure

```
reqres-api-test/
├── config/
│   └── user.config.js       # Centralized test data & configuration
├── tests/
│   ├── create.spec.js        # POST /api/users
│   ├── singleUser.spec.js    # GET /api/users/:id
│   ├── update.spec.js        # PUT /api/users/:id
│   └── delete.spec.js        # DELETE /api/users/:id
├── playwright-report/        # HTML test report (auto-generated)
├── test-results/             # Raw test artifacts (auto-generated)
├── playwright.config.js      # Playwright global configuration
└── package.json
```

---

## ⚙️ Setup & Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/reqres-api-test.git
cd reqres-api-test

# 2. Install dependencies
npm install

# 3. Install Playwright browsers (if needed)
npx playwright install
```

---

## ▶️ Running Tests

```bash
# Run all tests
npx playwright test

# Run with list reporter (console output)
npx playwright test --reporter=list

# Open HTML report after test run
npx playwright show-report
```

---

## 🧪 Test Cases

### CREATE — `POST /api/users`

| TC | Description | Assertion |
|----|-------------|-----------|
| TC01 | Create a new user | Status `201` |
| TC02 | Response contains `id` and `createdAt` | Response result |
| TC03 | `name` and `job` match the request payload | Response result |

### SINGLE USER — `GET /api/users/:id`

| TC | Description | Assertion |
|----|-------------|-----------|
| TC04 | Get existing user (id=2) | Status `200` |
| TC05 | Response contains all required fields (`id`, `email`, `first_name`, `last_name`) | Response result |
| TC06 | Get non-existing user | Status `404` |
| TC07 | `data.id` in response equals the requested user ID | Response result |

### UPDATE — `PUT /api/users/:id`

| TC | Description | Assertion |
|----|-------------|-----------|
| TC08 | Update existing user (id=2) | Status `200` |
| TC09 | `name` and `job` in response match the request payload | Response result |
| TC10 | Response contains `updatedAt` | Response result |

### DELETE — `DELETE /api/users/:id`

| TC | Description | Assertion |
|----|-------------|-----------|
| TC11 | Delete existing user (id=2) | Status `204` |
| TC12 | Delete non-existing user | Status `204` |

> **Note:** Reqres is a mock API that returns `204` for all DELETE requests regardless of whether the resource exists. In a real-world system, deleting a non-existing resource would typically return `404 Not Found`.

---

## 🔧 Configuration

All shared test data is centralized in `config/user.config.js` to avoid hardcoding values across test files.

```js
// config/user.config.js (example structure)
module.exports = {
  API_KEY: '...',
  CREATE_USER: { name: '...', job: '...' },
  UPDATE_USER: { name: '...', job: '...' },
  EXISTING_USER_ID: 2,
  NON_EXISTING_USER_ID: 9999,
};
```

Global HTTP headers (`Content-Type`, `x-api-key`) and `baseURL` are configured in `playwright.config.js` so every test shares the same setup without repetition.

---

## 📊 Test Results

All **12 test cases pass** across the 4 API groups.

```
✓ CREATE        3 passed
✓ SINGLE USER   4 passed
✓ UPDATE        3 passed
✓ DELETE        2 passed
─────────────────────────
  Total         12 passed
```

An HTML report is generated automatically at `playwright-report/` after each run.

---

## ✅ Requirements Checklist

- [x] Configuration file for centralized test data
- [x] CREATE test cases
- [x] SINGLE USER test cases
- [x] UPDATE test cases
- [x] DELETE test cases
- [x] Response status validation
- [x] Response result validation

---

## 👨‍💻 Author

**Name:** Phuriphatthanachai Rattanatham  
**GitHub:** [@ctrlfaith](https://github.com/ctrlfaith)
