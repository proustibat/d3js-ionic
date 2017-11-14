import { Component } from '@angular/core';

import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';

@Component({
    selector: 'page-scales',
    templateUrl: 'scales.html',
})
export class ScalesPage {

    initialDataToScale:Array<number>;
    scaledData:Array<number> = [];

    constructor() {}

    ionViewDidLoad() {

        this.createScales();

    }

    createScales():void {

        this.initialDataToScale = [ 0, 1000, 3000, 2000, 5000, 4000, 7000, 6000, 9000, 8000, 10000 ];

        let linearScale = d3Scale
            .scaleLinear()
            .domain([
                d3Array.min( this.initialDataToScale ),
                d3Array.max( this.initialDataToScale)
            ])
            .range( [ 0, 100 ] );

        this.initialDataToScale.forEach( data =>
            this.scaledData.push( linearScale( data ) )
        );

    }

}
