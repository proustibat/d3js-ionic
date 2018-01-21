import { Component, Input } from '@angular/core';
import { Events, NavController } from 'ionic-angular';
import { Subscription as RxjsSubscription } from 'rxjs';
import { PagesList } from '../../pages/index';
import { SideMenuRedirectEvent,
    SideMenuRedirectEventData } from '../side-menu-content/models/side-menu-redirect-events';

@Component({
    selector: 'footer-links',
    templateUrl: 'footer-links.html'
})
export class FooterLinksComponent {

    @Input() tutorialUrl: string;

    subscriptionEnter: RxjsSubscription;
    subscriptionLeave: RxjsSubscription;

    previousPage: any;
    nextPage: any;

    constructor(public navCtrl: NavController, private eventCtrl: Events) {

    }

    ngAfterViewInit() {

        this.subscriptionEnter = this.navCtrl.viewDidEnter.subscribe((viewCtrl) => {

            this.subscriptionLeave = this.navCtrl.viewWillLeave.subscribe(() => {

                this.subscriptionLeave.unsubscribe();
                this.subscriptionEnter.unsubscribe();

            });

            // TODO : ne pas chercher dans PagesList qui va etre supprime,
            // parcourir Menu, et voir si la page appartient a un sous menu
            const currentViewInList = PagesList.find((item) => item.component === viewCtrl.component);
            const currentIndexView = PagesList.indexOf(currentViewInList);

            this.previousPage = PagesList[ currentIndexView - 1 ] || null;
            this.nextPage = PagesList[ currentIndexView + 1 ] || null;

        });

    }

    openPage(page: any) {

        // Since we're redirecting to a page without clicking the option from the
        // side menu, we need to use events to tell the side menu component
        // which option should be marked as selected.
        const redirectData: SideMenuRedirectEventData = {
            displayName: page.title
        };

        // Send the event to the side menu component
        this.eventCtrl.publish(SideMenuRedirectEvent, redirectData);

        this.navCtrl.setRoot(page.component);

    }

}
