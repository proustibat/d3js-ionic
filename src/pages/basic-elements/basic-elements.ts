import { Component } from '@angular/core';

import * as d3 from 'd3-selection';

@Component({
    selector: 'page-basic-elements',
    templateUrl: 'basic-elements.html',
})
export class BasicElementsPage {

    constructor() {}

    ionViewDidLoad():void {
        this.createCircles();
        this.createCoordinateCircles();
    }

    createCircles():void {

        let circleRadii = [ 40, 20, 10 ];

        let svgContainer = d3.select( '#circles' ).append( 'svg' )
            .attr( 'width', 300 )
            .attr( 'height', 100 )
            .style( 'border', '1px solid black' );

        let circles = svgContainer.selectAll( 'circle' )
            .data( circleRadii )
            .enter()
            .append( 'circle' );

        circles.attr( 'cx', 50 )
            .attr( 'cy', 50 )
            .attr( 'r',  d => d )
            .style( 'fill', d => {
                let returnColor;
                if ( d === 40 ) {
                    returnColor = 'green';
                }
                else if ( d === 20 ) { returnColor = 'purple'; }
                else if ( d === 10 ) { returnColor = 'red'; }
                return returnColor;
            });

    }

    createCoordinateCircles():void {

        let spaceCircles = [ 30, 70, 110 ];

        let svgContainer = d3.select( '#coordinateCircles' ).append( 'svg' )
            .attr( 'width', 300 )
            .attr( 'height', 200 )
            .style( 'border', '1px solid black' );

        let circles = svgContainer.selectAll( 'circle' )
            .data( spaceCircles )
            .enter()
            .append( 'circle' );

        circles
            .attr( 'cx', d => d )
            .attr( 'cy', d => d )
            .attr( 'r', 20 )
            .style( 'fill', d => {
                let returnColor;
                if ( d === 30 ) {
                    returnColor = 'green';
                }
                else if ( d === 70 )  { returnColor = 'purple'; }
                else if ( d === 110 ) { returnColor = 'red'; }
                return returnColor;
            });

    }
}
