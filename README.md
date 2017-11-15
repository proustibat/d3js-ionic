# D3.js with Ionic</h1>

------------


[![Sonar quality gate](https://sonarcloud.io/api/badges/gate?key=prstbt.ionic.d3.app)](https://sonarcloud.io/dashboard?id=prstbt.ionic.d3.app)
[![Quality Gate Status](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=alert_status)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=alert_status)
[![Dependencies Status](https://david-dm.org/proustibat/d3js-ionic/status.svg)](https://david-dm.org/proustibat/d3js-ionic)
[![DevDependencies Status](https://david-dm.org/proustibat/d3js-ionic/dev-status.svg)](https://david-dm.org/proustibat/d3js-ionic?type=dev)
[![GitHub license](https://img.shields.io/github/license/proustibat/d3js-ionic.svg)](https://github.com/proustibat/d3js-ionic/blob/master/LICENSE.md)

----------------

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Presentation](#presentation)
  - [Why this app?](#why-this-app)
  - [Who is this for?](#who-is-this-for)
  - [What can you find here?](#what-can-you-find-here)
  - [Context](#context)
    - [What is Ionic](#what-is-ionic)
    - [What is D3.js](#what-is-d3js)
  - [Still don't understand anything?](#still-dont-understand-anything)
- [Installation](#installation)
- [Feel free to improve the app with us](#feel-free-to-improve-the-app-with-us)
- [Contribute](#contribute)
- [Support](#support)
- [License](#license)
- [Dev stats](#dev-stats)
  - [Complexity](#complexity)
  - [Documentation & sizes](#documentation--sizes)
  - [Duplications](#duplications)
  - [Issues](#issues)
  - [Maintainability](#maintainability)
  - [Technical debt](#technical-debt)
  - [Reliability](#reliability)
  - [Security](#security)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


----------------



## Presentation

### Why this app?

I made this app while learning D3.js. But while I had in mind that my goal was to use it in an Ionic app, I realized there was some differences compared to a classical use. Mainly because of Typescript.

If you're in this case, you need to install TypeScript type definitions. So syntax may be different than a simple usage of D3.js.


### Who is this for?

I propose to share my work to make you save time while learning.

I think these examples could also be appropriated if you already are in and advanced step of your learning but stuck on some points.


### What can you find here?

Most of these examples are based on [Dashing D3.js tutorials](https://www.dashingd3js.com/table-of-contents) adapted in Typescript 2 for Ionic 3. 


### Context


#### What is Ionic

I suppose if you're here you know what Ionic is, probably your favorite framework for building amazing mobile apps :-)

This is not exactly our subject here but if you are an Ionic developer I suggest you to make the [documentation](https://ionicframework.com/docs/) your bible.

#### What is D3.js

D3 (or D3.js) is a JavaScript library for visualizing data using web standards. D3 helps you bring data to life using SVG, Canvas and HTML.

[Learn more about D3.js here](https://d3js.org/). Consider it as a complementary of your bible if you wanna learn data visualization.

### Still don't understand anything?

I suggest you to be more familiar with the context. 

Otherwise you're maybe not a developer and I'm sorry you're here :-)


## Installation

Install the app by running:
```
npm install -g ionic cordova
npm i
ionic cordova prepare
```

Run the app: 
```
ionic serve -l
```
or on a device: 
```
ionic cordova run android --device
```

```
ionic cordova run ios --device
```

## Feel free to improve the app

- I use [commitizen](https://github.com/commitizen/cz-cli), so if you wanna contribute to the project and create a pull request, please use it by running `git cz` instead of `git commit`.


## Contribute

- Issue Tracker: [https://github.com/proustibat/d3js-ionic/issues](https://github.com/proustibat/d3js-ionic/issues)
- Source Code: [https://github.com/proustibat/d3js-ionic](https://github.com/proustibat/d3js-ionic)

## Support

If you are having issues, please let me know: proustibat@gmail.com

## License

The project is licensed under the [GNU Affero General Public License v3.0 license](LICENSE.md)


-----------------

## Dev stats

### Complexity
How simple or complicated the control flow of the application is. 


[![Complexity](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=complexity)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=complexity) 
[![Complexity per file](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=file_complexity)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=file_complexity)
[![Cognitive Complexity](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=cognitive_complexity)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=cognitive_complexity)


### Documentation & sizes
[![Lines](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=lines)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=lines) 
[![Lines of code](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=ncloc)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=ncloc) 
[![Comment lines](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=comment_lines)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=comment_lines) 
[![Comments (%)](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=comment_lines_density)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=comment_lines_density)

[![Directories](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=directories)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=directories) 
[![Files](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=files)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=files)
[![Classes](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=classes)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=classes) 
[![Functions](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=functions)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=functions)


### Duplications
[![Duplicated blocks](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=duplicated_blocks)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=duplicated_blocks) 
[![Duplicated lines](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=duplicated_lines)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=duplicated_lines)


### Issues
[![Open issues](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=open_issues)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=open_issues)
[![Confirmed issues](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=confirmed_issues)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=confirmed_issues)
[![Won't fix issues](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=wont_fix_issues)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=wont_fix_issues) 


### Maintainability
Issues in this domain mark code that will be more difficult to update competently than it should

[![Code smells](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=code_smells)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=code_smells)
[![SQALE Rating](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=sqale_rating)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=sqale_rating)


### Technical debt
Effort to fix all maintainability issues. The measure is stored in minutes. An 8-hour day is assumed when values are shown in days. (The value of the cost to develop a line of code is 0.06 days)

[![Technical debt](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=sqale_index)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=sqale_index) 
[![Technical debt ratio](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=sqale_debt_ratio)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=sqale_debt_ratio)


### Reliability
Issues in this domain mark code where you will get behavior other than what was expected.

[![Bugs](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=bugs)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=bugs)
[![Reliability remediation effort](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=reliability_remediation_effort)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=reliability_remediation_effort)
[![Reliability Rating](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=reliability_rating)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=reliability_rating)


### Security

[![Vulnerabilities](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=vulnerabilities)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=vulnerabilities)
[![Security remediation effort	](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=security_remediation_effort)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=security_remediation_effort)
[![Security Rating](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=security_rating)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=security_rating)



