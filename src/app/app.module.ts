import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Pages } from '../pages/index';
import { Components } from '../components/index';

import { IonPrismDirective } from 'ion-prism';

@NgModule({
    declarations: [
        MyApp,
        Pages,
        Components,
        IonPrismDirective,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {
            menuType: 'push'
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        Pages,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
