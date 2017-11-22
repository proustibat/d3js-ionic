import { Component, ViewChild } from '@angular/core';
import { Platform, Nav }        from 'ionic-angular';
import { StatusBar }            from '@ionic-native/status-bar';
import { SplashScreen }         from '@ionic-native/splash-screen';

import { RootPage, PagesList } from "../pages/index";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any = RootPage;
    @ViewChild(Nav) nav: Nav;

    pages = PagesList;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    openPage(page) {
        // page.component !== this.nav.getActive().component ? this.nav.push(page.component) : console.log('already here');
        page.component !== this.nav.getActive().component ? this.nav.setRoot(page.component) : console.log('already here');
    }

}


