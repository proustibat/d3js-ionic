import { Component } from '@angular/core';
import * as d3 from 'd3-selection';

@Component({
    selector: 'page-group-element-d3',
    templateUrl: 'group-element-d3.html',
})
export class GroupElementD3Page {

    constructor() {}

    ionViewDidLoad() {

        this.createSVG( '#svg-element' );

        this.createSVG( '#svg-element-transform', true );

    }


    createSVG( wrapperId:string, transformCircles:boolean = false ): void {
        let circleData = [
            { 'cx': 20, 'cy': 20, 'radius': 20, 'color' : 'green' },
            { 'cx': 70, 'cy': 70, 'radius': 20, 'color' : 'purple' }];

        let rectangleData = [
            { 'rx': 110, 'ry': 110, 'height': 30, 'width': 30, 'color' : 'blue' },
            { 'rx': 160, 'ry': 160, 'height': 30, 'width': 30, 'color' : 'red' }];

        let svgContainer = d3.select(wrapperId).append('svg')
            .attr( 'width',200 )
            .attr( 'height',200 );


        // Appending an SVG Group Element to the already defined SVG Container
        let circleGroup = svgContainer.append( 'g' );

        // Add circles to the group container
        let circles = circleGroup.selectAll( 'circle' )
            .data( circleData )
            .enter()
            .append( 'circle' );

        // Transform the group
        if( transformCircles ) {
            // TODO : more example of tranform (matrix, rotate, skew, etc)
            circleGroup.attr( 'transform', 'translate( 80, 0 )' );
        }

        circles
            .attr( 'cx', d => d.cx )
            .attr( 'cy', d => d.cy )
            .attr( 'r', d => d.radius )
            .style( 'fill', d => d.color );

        let rectangles = svgContainer.selectAll( 'rect' )
            .data( rectangleData )
            .enter()
            .append( 'rect' );

        rectangles
            .attr( 'x', d => d.rx )
            .attr( 'y', d => d.ry )
            .attr( 'height', d => d.height )
            .attr( 'width', d => d.width )
            .style( 'fill', d => d.color );

    }

}
