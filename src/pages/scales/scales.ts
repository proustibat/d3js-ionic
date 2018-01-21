import { Component } from '@angular/core';

import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector: 'page-scales',
    templateUrl: 'scales.html',
})
export class ScalesPage {

    initialDataToScale: number[];
    scaledData: number[] = [];

    isPushed = false;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.isPushed = this.navParams.get('isPushed') || false;
    }

    ionViewDidLoad() {

        this.createScales();

    }

    createScales(): void {

        this.initialDataToScale = [ 0, 1000, 3000, 2000, 5000, 4000, 7000, 6000, 9000, 8000, 10000 ];

        const linearScale = d3Scale
            // Constructs a new continuous linear scale with
            // the unit domain [0, 1], the unit range [0, 1],
            // the default interpolator and clamping disabled
            .scaleLinear()
            // Sets the scale’s domain to the specified array of numbers.
            .domain([
                d3Array.min(this.initialDataToScale),
                d3Array.max(this.initialDataToScale)
            ])
            // Sets the scale’s range to the specified array of values
            .range([ 0, 100 ]);

        this.scaledData = this.initialDataToScale.map((data) => linearScale(data));

    }

}
