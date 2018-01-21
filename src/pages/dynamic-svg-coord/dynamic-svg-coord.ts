import { Component } from '@angular/core';

import * as d3 from 'd3-selection';

@Component({
    selector: 'page-dynamic-svg-coord',
    templateUrl: 'dynamic-svg-coord.html',
})
export class DynamicSvgCoordPage {

    ionViewDidLoad() {
        this.createDynamicSvg();
    }

    createDynamicSvg(): void {
        const jsonRectangles = [
            { x: 10,  y: 10, height: 20, width: 20, color : 'green' },
            { x: 160, y: 40, height: 20, width: 20, color : 'purple' },
            { x: 70,  y: 70, height: 20, width: 20, color : 'red' }];

        // Loop through the array of JSON objects to get the max x-coordinate and the max y-coordinate
        const max = this.getMaxSVG(jsonRectangles,
            'x',
            'y',
            'width',
            'height');

        const svgContainer = d3.select('#dynamicSvg').append('svg')
            // dynamically change the width and height attributes of the SVG Container/Viewport according to the data
            .attr('width', max.x)
            .attr('height', max.y)
            .style('border', '1px solid black');

        const rectangles = svgContainer.selectAll('rect')
            .data(jsonRectangles)
            .enter()
            .append('rect');

        rectangles
            .attr('x', (d) => d.x)
            .attr('y', (d) => d.y)
            .attr('width', (d) => d.width)
            .attr('height', (d) => d.height)
            .style('fill', (d) => d.color);

    }

    /**
     * The max x-coordinate and max y-coordinate will be the bottom right hand point of the rectangle
     * @param data
     * @param {string} xKey the x key property to loop through the data
     * @param {string} yKey the y key property to loop through the data
     * @param {string} wKey the width key property to loop through the data
     * @param {string} hKey the height key property to loop through the data
     * @returns {{x: number, y: number}}
     */
    getMaxSVG(data: any, xKey: string, yKey: string, wKey: string, hKey: string): { x: number, y: number } {
        const max = {
            x: 0,
            y: 0
        };
        data.forEach((item) => {
            max.x = Math.max(item[ xKey ] + item[ wKey ], max.x);
            max.y = Math.max(item[ yKey ] + item[ hKey ], max.y);
        });
        return max;
    }

}
