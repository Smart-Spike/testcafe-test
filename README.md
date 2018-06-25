# TestCafe Template Test Automation Framework 


*Run tests in Chrome Firefox and Cloud*

https://github.com/DevExpress/testcafe


npm install -g testcafe



#Custom script to run test in package.json

#Run Web / Gui tests 
npm run test-web

#Run Api and DB tests using Jest 
npm run test-api

For More commands
https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#file-pathglob-pattern

e.g testcafe --list-browsers


Stable tests and no manual timeouts
TestCafe automatically waits for page loads and XHRs before the test starts and after each action. It also features smart test actions and assertions that wait for page elements to appear. You can change the maximum wait time. If elements load faster, tests skip the timeout and continue.

Rapid test development tool
Changes in test code immediately restart the test, and you see the results instantly.
See how it works in the TestCafe Live repository.

Latest JS and TypeScript support
TestCafe supports the latest JavaScript features, including ES2017 (for example, async/await). You can also use TypeScript if you prefer a strongly typed language.

Detects JS errors in your code
TestCafe reports JS errors that it finds on the webpage. Tests automatically fail because of that. However, you can disable this.

Concurrent tests launch
TestCafe can open multiple instances of the same browser to run parallel tests which decreases test execution time.

PageObject pattern support
The TestCafe's Test API includes a high-level selector library, assertions, etc. You can combine them to implement readable tests with the PageObject pattern.

const macOSInput = Selector('.column').find('label').withText('MacOS').child('input');
Easy to include in a continuous integration system
You can run TestCafe from a console, and its reports can be viewed in a CI system's interface (TeamCity, Jenkins, Travis & etc.)
