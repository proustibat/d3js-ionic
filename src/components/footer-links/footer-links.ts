import { Component, Input } from '@angular/core';
import { NavController, ViewController } from "ionic-angular";
import { ISubscription } from "rxjs/Subscription";
import { PagesList } from "../../pages/index";

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


    constructor(public navCtrl:NavController) {
        console.log('HELLO FooterLinksComponent Component ');
    }

    ngAfterViewInit() {
        this.subscriptionEnter = this.navCtrl.viewDidEnter.subscribe(viewCtrl=>{
            console.log("--------------------------------------");
            console.log("VIEWDIDENTER ");

            this.subscriptionLeave = this.navCtrl.viewWillLeave.subscribe(viewCtrl => {
                console.log("WILL LEAVE ");
                this.subscriptionLeave.unsubscribe();
                this.subscriptionEnter.unsubscribe();

            });

            console.log('Current: ' + viewCtrl.name);
            let currentViewInList = PagesList.find(item => item.component === viewCtrl.component);
            let currentIndexView = PagesList.indexOf(currentViewInList);

            this.previousPage = PagesList[ currentIndexView - 1 ] || null;
            this.nextPage = PagesList[ currentIndexView + 1 ] || null;

            console.log('Pagination: ', this.previousPage, ' | ' , this.nextPage);
        });
    }

    openPage(page:any) {
        this.navCtrl.setRoot(page);
    }


    ngOnDestroy() {
        // console.log("DESTROY");
    }

}
