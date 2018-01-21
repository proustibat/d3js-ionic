import {Component, ElementRef} from '@angular/core';
import * as d3 from 'd3-selection';

@Component({
    selector: 'page-group-element-d3',
    templateUrl: 'group-element-d3.html',
})
export class GroupElementD3Page {

    constructor(private elementRef: ElementRef) {}

    ionViewDidLoad() {
        this.elementRef.nativeElement.querySelectorAll('.svg-element').forEach((container) => {
            this.createSVG('#' + container.id, JSON.parse(container.getAttribute('data-transformations')));
        });
    }

    createSVG(wrapperId: string, transformations?: [{group: string, properties: string[]}]): void {
        const circleData = [
            { cx: 20, cy: 20, radius: 20, color : 'green' },
            { cx: 70, cy: 70, radius: 20, color : 'purple' }];

        const rectangleData = [
            { rx: 110, ry: 110, height: 30, width: 30, color : 'blue' },
            { rx: 160, ry: 160, height: 30, width: 30, color : 'red' }];

        const svgContainer = d3.select(wrapperId).append('svg')
            .attr('width', 200)
            .attr('height', 200);

        // Appending an SVG Group Element to the already defined SVG Container
        const circleGroup = svgContainer.append('g');
        const rectangleGroup = svgContainer.append('g');

        // Add circles to the group container
        const circles = circleGroup.selectAll('circle')
            .data(circleData)
            .enter()
            .append('circle');

        circles
            .attr('cx', (d) => d.cx)
            .attr('cy', (d) => d.cy)
            .attr('r', (d) => d.radius)
            .style('fill', (d) => d.color);

        // Add rectangles to the group container
        const rectangles = rectangleGroup.selectAll('rect')
            .data(rectangleData)
            .enter()
            .append('rect');

        rectangles
            .attr('x', (d) => d.rx)
            .attr('y', (d) => d.ry)
            .attr('height', (d) => d.height)
            .attr('width', (d) => d.width)
            .style('fill', (d) => d.color);

        // Transform the groups
        if (transformations) {
            transformations.forEach((transformation) => {
                let group = null;
                switch (transformation.group) {
                    case 'circles':
                        group = circleGroup;
                        break;
                    case 'rectangles':
                        group = rectangleGroup;
                        break;
                }
                if (group) {
                    transformation.properties.forEach((property) => {
                        group.attr('transform', property);
                    });
                }
            });
        }

    }

}
