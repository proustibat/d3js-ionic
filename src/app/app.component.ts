import { Component, ViewChild } from '@angular/core';
import { AlertController, MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Menu, PagesList, RootPage } from '../pages/index';
import { MenuOptionModel } from '../components/side-menu-content/models/menu-option-model';
import { SideMenuSettings } from '../components/side-menu-content/models/side-menu-settings';
import { HomePage } from '../pages/home/home';
import { SideMenuContentComponent } from '../components/side-menu-content/side-menu-content.component';

@Component({
    templateUrl: 'app.html'
})

export class MyApp {

    rootPage: any = RootPage;

    @ViewChild(Nav) nav: Nav;

    // Get the instance to call the public methods
    @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

    pages = PagesList;

    menuData = Menu;

    // Options to show in the SideMenuComponent
    public options: MenuOptionModel[] = Menu;

    // Settings for the SideMenuComponent
    public sideMenuSettings: SideMenuSettings = {
        // Collapses any opened option when a new option is expanded.
        accordionMode: true,
        // The Ionic icon name to be used as the arrow in the header options
        arrowIcon: 'arrow-down',
        // If the selected option should be highlighted (if it is a sub item, its
        // parent will also be highlighted). If the selected option is a sub item,
        // its parent will be always shown expanded when opening the side menu
        showSelectedOption: true,
        // Name of the class to be added to the selected option. Only used when showSelectedOption is true
        selectedOptionClass: 'active-side-menu-option',
        // Vertically aligns the sub options without icons to the parent option
        indentSubOptionsWithoutIcons: false,
    };

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
                private alertCtrl: AlertController,
                private menuCtrl: MenuController) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    public selectOption(option: MenuOptionModel): void {
        this.menuCtrl.close().then(() => {

            if (option.custom) {
                this.alertCtrl.create({
                    title: 'Information',
                    message: 'You\'ve clicked a custom option!',
                    buttons: ['Ok']
                }).present();
            } else {
                // Redirect to the selected page
                this.nav.setRoot(option.component || HomePage, { title: option.displayName });
            }
        });
    }
}
