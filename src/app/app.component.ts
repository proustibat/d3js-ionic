import { Component, ViewChild } from '@angular/core';
import { Platform, Nav }        from 'ionic-angular';
import { StatusBar }            from '@ionic-native/status-bar';
import { SplashScreen }         from '@ionic-native/splash-screen';

import { HomePage }             from '../pages/home/home';
import { BasicElementsPage }    from "../pages/basic-elements/basic-elements";
import { BasicShapesPage }      from "../pages/basic-shapes/basic-shapes";
import { PathsSvgPage }         from "../pages/paths-svg/paths-svg";
import { DynamicSvgCoordPage }  from "../pages/dynamic-svg-coord/dynamic-svg-coord";
import { ScalesPage }           from "../pages/scales/scales";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any = HomePage;
    @ViewChild(Nav) nav: Nav;

    pages = [
        { component: HomePage,              title: 'Home' },
        { component: BasicElementsPage,     title: 'Basic SVG Elements' },
        { component: BasicShapesPage,       title: 'Basic Shapes' },
        { component: PathsSvgPage,          title: 'SVG Paths' },
        { component: DynamicSvgCoordPage,   title: 'Dynamic coordinate space' },
        { component: ScalesPage,            title: 'Scales' }
    ];
    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    openPage(page) {
        page.component !== this.nav.getActive().component ? this.nav.setRoot(page.component) : console.log('already here');
    }

}


