import { Component } from '@angular/core';

import * as d3 from 'd3-selection';

@Component({
    selector: 'page-basic-elements',
    templateUrl: 'basic-elements.html',
})
export class BasicElementsPage {

    constructor() {

    }

    ionViewDidLoad():void {
        this.createCircles();
        this.createCoordinateCircles();

    }

    createCircles():void {

        // the data set
        let circleRadii = [ 40, 20, 10 ];

        // an SVG element to hold the SVG Circles
        let svgContainer = d3.select( '#circles' ).append( 'svg' )
            .attr( 'width', 300 )
            .attr( 'height', 100 )
            .style( 'border', '1px solid black' );

        let circles = svgContainer
            // selectAll circle
            .selectAll( 'circle' )
            // bind the data
            .data( circleRadii )
            // select the virtual .enter() selection
            .enter()
            // append the SVG circle elements
            .append( 'circle' );

        // Specify the attributes for each circle.
        circles
            // cx - The x-axis coordinate of the center of the circle
            .attr( 'cx', 50 )
            // cy - The y-axis coordinate of the center of the circle
            .attr( 'cy', 50 )
            // r - The radius of the circle.
            .attr( 'r',  d => d )
            // use D3.js' .style() operator to modify the CSS style property
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
            // add the attributes to the circle selection.
            // The data set specifies the circle center's x-coordinate and y-coordinate,
            // use D3.js to update the "cx" and "cy" of the specified data above
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
