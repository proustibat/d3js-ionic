import { Component } from '@angular/core';

import * as d3 from 'd3-selection';

@Component({
    selector: 'page-dynamic-svg-coord',
    templateUrl: 'dynamic-svg-coord.html',
})
export class DynamicSvgCoordPage {

    constructor() {}

    ionViewDidLoad() {
        this.createDynamicSvg();
    }

    createDynamicSvg(): void {
        
        let jsonRectangles = [
            { 'x': 10,  'y': 10, 'height': 20, 'width':20, 'color' : 'green' },
            { 'x': 160, 'y': 40, 'height': 20, 'width':20, 'color' : 'purple' },
            { 'x': 70,  'y': 70, 'height': 20, 'width':20, 'color' : 'red' }];

        let max = this.getMaxSVG( jsonRectangles, 
            'x', 
            'y', 
            'width', 
            'height' );

        let svgContainer = d3.select( '#dynamicSvg' ).append( 'svg' )
            .attr( 'width', max.x )
            .attr( 'height', max.y )
            .style( 'border', '1px solid black' );

        let rectangles = svgContainer.selectAll( 'rect' )
            .data( jsonRectangles )
            .enter()
            .append( 'rect' );

        rectangles
            .attr( 'x', d => d.x )
            .attr( 'y', d => d.y )
            .attr( 'width', d => d.width )
            .attr( 'height', d => d.height )
            .style( 'fill', d =>d.color );

    }

    getMaxSVG( data:any, xKey:string, yKey:string, wKey:string, hKey:string ): { x:number, y:number } {
        let max = {
            x:0,
            y:0
        };
        data.forEach( item => {
            max.x = Math.max( item[ xKey ] + item[wKey], max.x );
            max.y = Math.max( item[ yKey ] + item[hKey], max.y );
        });
        return max;
    }

}
