# Protractor - End to End automation for AngularJS

The structure is based on two layers: steps and pages.

1. Steps: Contains all the steps implementations;
2. Pages: Contains all the pages in the website. A page must contain the declaration of all the elements of the page and the declaration of its actions;
3. Helpers: Contains all the helpers functions and variables for project.

## Pre Conditions

1. Node.js LTS (10.15.1)
2. Chromedriver
3. Geckodriver

## Instalation

Install it as:
```bash
$ npm install
```
## Usage

Too run tests in terminal (for chrome browser), type:

---
```bash
$ npm updatewd
$ npm startwd
```
  and 

```bash
$ npm test
```
---
<!-- 
to firefox browser: protractor --browserName firefox 

To gerenate reports:

```
  npm run report
  or
  ./node_modules/.bin/allure generate ./allure-results -o ./reports

``` 

To clean reports:

```
  rm -rf allure-results/
  or 
  npm run cleanreports

``` -->

## Reports

1. To see reports, open reports/htmlReport.html