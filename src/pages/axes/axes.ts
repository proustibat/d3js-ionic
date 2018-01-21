import { Component, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScalesPage } from '../scales/scales';

import * as d3 from 'd3-selection';
import { Axis, default as d3Axis } from 'd3-axis';
import * as d3Scale from 'd3-scale';

@Component({
    selector: 'page-axes',
    templateUrl: 'axes.html',
})

export class AxesPage {

    scalePage = ScalesPage;

    xAxis: Axis<any>;

    constructor(public navCtrl: NavController, private elementRef: ElementRef) {  }

    ionViewDidLoad() {

        this.createAxis();

        this.createSVG();

        this.createOtherAxis();

    }

    createAxis(): void {

        // Create the Scale we will use for the Axis
        const axisScale = d3Scale
            .scaleLinear()
            .domain([ 0, 100 ])
            .range([ 0, 300 ]);

        // Generate the D3.js Axis
        this.xAxis =  d3Axis.axisBottom(axisScale);

    }

    createSVG(): void {
        // Create the SVG Viewport selection
        const svgContainer = d3.select('#axis-svg').append('svg')
            .attr('width', 300)
            .attr('height', 100);

        // Create a group Element for the Axis elements and call the xAxis function
        svgContainer.append('g')
            .call(this.xAxis);
    }

    createOtherAxis(): void {

        this.elementRef.nativeElement.querySelectorAll('.svg-axis').forEach((container) => {

            const config = JSON.parse(container.getAttribute('data-config'));

            // Create the SVG Viewport selection
            const svgContainer = d3.select('#' + container.id).append('svg')
                .attr('width', config.width)
                .attr('height', config.height);

            // Create the Scale we will use for the Axis
            const axisScale = d3Scale
                .scaleLinear()
                .domain(config.domain)
                .range(config.range);

            // Create a group Element for the Axis elements and
            const axisGroup = svgContainer.append('g');

            // Generate the D3.js Axis
            let axis: Axis<any>;
            let translateValue = [ 0, 0 ];
            switch (config.axisPosition) {
                case 'top':
                    axis =  d3Axis.axisTop(axisScale);
                    translateValue = [ 0, 20 ];
                    break;
                case 'left':
                    axis =  d3Axis.axisLeft(axisScale);
                    translateValue = [ 20, 0 ];
                    break;
                case 'right':
                    axis =  d3Axis.axisRight(axisScale);
                    break;
                default:
                    axis =  d3Axis.axisBottom(axisScale);
                    break;
            }

            // Call the xAxis function on the axis group
            axisGroup.call(axis);

            // Call the translate to display the axis in the viewport
            axisGroup.attr('transform', 'translate(' + translateValue.join() + ')');

        });

    }
}
