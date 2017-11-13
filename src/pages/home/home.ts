import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as d3 from 'd3-selection';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
    ionViewDidLoad() {
        console.log('HomePage.ionViewDidLoad');

        this.createCircles();
        this.createCoordinatedCircles();
        this.createCoordinatedCirclesWithJSON();

        this.createRectangles();
        this.createEllipsis();

        this.createLines();
    }

    createCircles():void {

        let circleRadii = [40, 20, 10];
        let svgContainer = d3.select('#myCircles').append("svg")
            .attr("width", 300)
            .attr("height", 100)
            .style("border", "1px solid black");

        let circles = svgContainer.selectAll("circle")
            .data(circleRadii)
            .enter()
            .append("circle");

        let circleAttributes = circles
            .attr("cx", 50)
            .attr("cy", 50)
            .attr("r",  (d)=>{ return d; })
            .style("fill", (d)=>{
                let returnColor;
                if (d === 40) {
                    returnColor = "green";
                } else if (d === 20) { returnColor = "purple";
                } else if (d === 10) { returnColor = "red"; }
                return returnColor;
            });

    }

    createCoordinatedCircles():void {
        let spaceCircles = [30, 70, 110];
        let svgContainer = d3.select("#myCoordinatedCircles").append("svg")
            .attr("width", 300)
            .attr("height", 200)
            .style("border", "1px solid black");

        let circles = svgContainer.selectAll('circle')
            .data(spaceCircles)
            .enter()
            .append('circle');

        let circlesAttributes = circles
            .attr('cx', (d)=>{return d;})
            .attr('cy', (d)=>{return d;})
            .attr('r', 20)
            .style("fill", (d)=>{
                let returnColor;
                if (d === 30) {
                    returnColor = "green";
                } else if (d === 70) { returnColor = "purple";
                } else if (d === 110) { returnColor = "red"; }
                return returnColor;
            });
    }

    createCoordinatedCirclesWithJSON():void {

        let jsonCircles = [
            { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" },
            { "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
            { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}];

        let svgContainer = d3.select("#myCoordinatedCirclesWithJSON").append("svg")
            .attr("width", 300)
            .attr("height", 200)
            .style("border", "1px solid black");

        let circles = svgContainer.selectAll("circle")
            .data(jsonCircles)
            .enter()
            .append("circle");

        let circleAttributes = circles
            .attr("cx", (d) => { return d.x_axis; })
            .attr("cy", (d) => { return d.y_axis; })
            .attr("r", (d) => { return d.radius; })
            .style("fill", (d) =>{ return d.color; });
    }


    createRectangles():void {
        let jsonRectangles = [
            { "x": 0, "y": 0, "width": 100, "height": 80, "color" : "green" },
            { "x": 110, "y": 70, "width": 70, "height": 50, "color" : "purple"},
            { "x": 200, "y": 100, "width": 50, "height": 25, "color" : "red"}];

        let svgContainer = d3.select("#myRectangles").append("svg")
            .attr("width", 300)
            .attr("height", 200)
            .style("border", "1px solid black");

        let rectangles = svgContainer.selectAll("rect")
            .data(jsonRectangles)
            .enter()
            .append('rect');

        let rectanglesAttributes = rectangles
            .attr("x", (d) => { return d.x; })
            .attr("y", (d) => { return d.y; })
            .attr("width", (d) => { return d.width; })
            .attr("height", (d) => { return d.height; })
            .style("fill", (d) =>{ return d.color; });
    }

    createEllipsis():void {
        let jsonEllipsis = [
            { "cx": 50, "cy": 20, "rx": 50, "ry": 20, "color" : "green" },
            { "cx": 120, "cy": 70, "rx": 20, "ry": 50, "color" : "purple" },
            { "cx": 200, "cy": 90, "rx": 40, "ry": 70, "color" : "red" }];

        let svgContainer = d3.select("#myEllipsis").append("svg")
            .attr("width", 300)
            .attr("height", 200)
            .style("border", "1px solid black");

        let ellipse = svgContainer.selectAll("ellipse")
            .data(jsonEllipsis)
            .enter()
            .append('ellipse');

        let ellipsesAttributes = ellipse
            .attr("cx", (d) => { return d.cx; })
            .attr("cy", (d) => { return d.cy; })
            .attr("rx", (d) => { return d.rx; })
            .attr("ry", (d) => { return d.ry; })
            .style("fill", (d) =>{ return d.color; });
    }


    createLines():void {
        let jsonLines = [
            { "x1": 0,      "y1": 0, "x2": 100, "y2": 90, width:2, "color" : "green" },
            { "x1": 150,    "y1": 10, "x2": 150, "y2": 90, width:4, "color" : "purple" },
            { "x1": 300,    "y1": 0, "x2": 200, "y2": 90, width:6, "color" : "red" }];

        let svgContainer = d3.select("#myLines").append("svg")
            .attr("width", 300)
            .attr("height", 200)
            .style("border", "1px solid black");

        let lines = svgContainer.selectAll('line')
            .data(jsonLines)
            .enter()
            .append('line');

        let linesAttributes = lines
            .attr("x1", (d) => { return d.x1; })
            .attr("y1", (d) => { return d.y1; })
            .attr("x2", (d) => { return d.x2; })
            .attr("y2", (d) => { return d.y2; })
            .attr("stroke-width", (d) => { return d.width; })
            .attr("stroke", (d) => { return d.color; });
    }
}
