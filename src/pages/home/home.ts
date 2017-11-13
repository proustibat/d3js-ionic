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
}
