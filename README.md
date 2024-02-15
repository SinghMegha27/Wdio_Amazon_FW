# WebdriverIO OrangeHRM Framework

## Description
WebdriverIO OrangeHRM Framework is a test automation framework built using the Page Object Model (POM) design pattern for WebdriverIO. It provides a structured approach for writing automated tests to verify the functionality of OrangeHRM, a popular human resource management software.

This framework aims to streamline the process of writing, organizing, and maintaining automated tests for OrangeHRM by separating page elements and interactions into reusable Page Objects. It leverages WebdriverIO's capabilities to interact with web elements, execute test scenarios, and generate detailed test reports.

## Features

- **Page Object Model (POM)**: Organize test automation code into reusable Page Objects, making tests more maintainable and scalable.
- **Allure Reports**: Generate detailed and visually appealing reports using Allure, providing insights into test execution results.
- **Custom Commands**: Implement custom commands to extend WebdriverIO's functionality and improve test readability and maintainability.
- **Test Data**: Contains Test data used through the spec files.

## Getting Started
To get started with the WebdriverIO OrangeHRM Framework, follow these steps:

1. Clone the repository:
git clone https://github.com/SinghMegha27/Wdio_OrangeHRM_FW.git
2. Install dependencies:
npm install
3. Configuration:
Update `wdio.conf.js` with your desired WebDriver configurations.
- Customize `allure-results` folder path in `wdio.conf.js` to specify where Allure reports will be saved.
4. Run Tests:
npx wdio run wdio.conf.js


## Contributing

Contributions are welcome! To contribute to the WebdriverIO OrangeHRM Framework, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit them: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a pull request.
