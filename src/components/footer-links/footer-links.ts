import { Component, Input } from '@angular/core';
import { NavController }    from "ionic-angular";
import { ISubscription }    from "rxjs/Subscription";
import { PagesList }        from "../../pages/index";

@Component({
    selector: 'footer-links',
    templateUrl: 'footer-links.html'
})
export class FooterLinksComponent {

    @Input() tutorialUrl:string;

    subscriptionEnter:ISubscription;
    subscriptionLeave:ISubscription;

    previousPage:any;
    nextPage:any;


    constructor( public navCtrl:NavController ) { }

    ngAfterViewInit() {

        this.subscriptionEnter = this.navCtrl.viewDidEnter.subscribe( viewCtrl => {

            this.subscriptionLeave = this.navCtrl.viewWillLeave.subscribe( viewCtrl => {
                this.subscriptionLeave.unsubscribe();
                this.subscriptionEnter.unsubscribe();
            });

            let currentViewInList = PagesList.find( item => item.component === viewCtrl.component );
            let currentIndexView = PagesList.indexOf( currentViewInList );

            this.previousPage = PagesList[ currentIndexView - 1 ] || null;
            this.nextPage = PagesList[ currentIndexView + 1 ] || null;

        });

    }

    openPage( page:any ) {
        this.navCtrl.setRoot( page );
    }

}
