
# D3.js with Ionic [![GitHub license](https://img.shields.io/github/license/proustibat/d3js-ionic.svg)](https://github.com/proustibat/d3js-ionic/blob/master/LICENSE.md)
A tutorial app built with [Ionic Framework](https://ionicframework.com/) to learn [D3.js](https://d3js.org/) with Typescript

-------------------------

| [![d3js-ionic-icon](https://user-images.githubusercontent.com/1054387/35104149-46b23f56-fc68-11e7-8a50-357fa36d0d32.png)<br/> ![google-play-icon](https://user-images.githubusercontent.com/1054387/35104116-2c9addda-fc68-11e7-85fa-91b13423d5f4.png)](https://play.google.com/store/apps/details?id=prstbt.ionic.d3&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1) | [![Build Status](https://travis-ci.org/proustibat/d3js-ionic.svg?branch=master)](https://travis-ci.org/proustibat/d3js-ionic) <br/> [![Sonar quality gate](https://sonarcloud.io/api/badges/gate?key=prstbt.ionic.d3.app)](https://sonarcloud.io/dashboard?id=prstbt.ionic.d3.app) </br> [![Code Climate](https://codeclimate.com/github/proustibat/d3js-ionic/badges/gpa.svg)](https://codeclimate.com/github/proustibat/d3js-ionic) | [![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)](https://github.com/proustibat/d3js-ionic/commits/master) <br/> [![GitHub last commit](https://img.shields.io/github/last-commit/proustibat/d3js-ionic.svg)](https://github.com/proustibat/d3js-ionic/commits/master) <br/> [![Open issues](https://sonarcloud.io/api/badges/measure?key=prstbt.ionic.d3.app&metric=open_issues)](https://sonarcloud.io/component_measures?id=prstbt.ionic.d3.app&metric=open_issues) | [![Greenkeeper badge](https://badges.greenkeeper.io/proustibat/d3js-ionic.svg)](https://greenkeeper.io/) <br/> [![Dependencies Status](https://david-dm.org/proustibat/d3js-ionic/status.svg)](https://david-dm.org/proustibat/d3js-ionic) <br/> [![DevDependencies Status](https://david-dm.org/proustibat/d3js-ionic/dev-status.svg)](https://david-dm.org/proustibat/d3js-ionic?type=dev) |
| --- | :---- | :---- | :---- 

---------------------------


![screenshot-1](https://user-images.githubusercontent.com/1054387/35104066-08acd856-fc68-11e7-821f-3ee8fbcf3b44.png) ![screenshot-2](https://user-images.githubusercontent.com/1054387/35104068-09de7626-fc68-11e7-9130-e0c22c07c980.png)

---------------------------


## Presentation

### Why this app?

I made this app while learning D3.js. But while I had in mind that my goal was to use it in an Ionic app, I realized there was some differences compared to a classical use. Mainly because of Typescript.

If you're in this case, you need to install TypeScript type definitions. So syntax may be different than a simple usage of D3.js.


### Who is this for?

I propose to share my work to make you save time while learning.

I think these examples could also be appropriated if you already are in and advanced step of your learning but stuck on some points.


### What can you find here?

Most of these examples are based on [Dashing D3.js tutorials](https://www.dashingd3js.com/table-of-contents) adapted in Typescript 2 for Ionic 3. 

---------------

## Working with this code

### Prerequisites
Of course you need node and npm.

Please also be sure you installed [Ionic](https://ionicframework.com/docs/) and [Cordova](https://cordova.apache.org/):
```bash
npm install -g ionic cordova
```
To verify your system is ok run `ionic info`.


### Installation

Install the app by running:
```bash
git clone git@github.com:proustibat/d3js-ionic.git
cd d3js-ionic
ionic cordova prepare
```
This should prompt you if you want to install npm packages, answer `yes`. If it's not the case, run `npm install`;

Run the app: 
```bash
// in the browser with livereload
ionic serve -l
// or on a device
ionic cordova run android --device
ionic cordova run ios --device
```


### Documentation
[Code documentation is available here](https://proustibat.github.io/d3js-ionic/)

### Feel free to improve the app

- Please use [commitizen](https://github.com/commitizen/cz-cli) if you wanna contribute to the project and create a pull request ( run `git cz` instead of `git commit`)
- Quality code status is available on [Sonarcloud](https://about.sonarcloud.io/)
- CI with [Travis](https://travis-ci.org/proustibat/d3js-ionic)


## Contribute

- Issue Tracker: [https://github.com/proustibat/d3js-ionic/issues](https://github.com/proustibat/d3js-ionic/issues)
- Source Code: [https://github.com/proustibat/d3js-ionic](https://github.com/proustibat/d3js-ionic)

## Support

If you are having issues, questions or any suggestions, please let me know: proustibat@gmail.com / [twitter/@proustibat](https://twitter.com/proustibat)

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
