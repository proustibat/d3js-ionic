import { Component, ElementRef, ViewChild } from '@angular/core';
import * as Prism from 'prismjs';

@Component({
    selector: 'page-group-element',
    templateUrl: 'group-element.html',
})
export class GroupElementPage {

    @ViewChild('myCode') myCode;

    constructor(private elementRef:ElementRef) {}

    ionViewDidLoad() {
        // this.highlightCodes();
    }

    highlightCodes():void {

        let codeBlocks = this.elementRef.nativeElement.querySelectorAll('pre');

        codeBlocks.forEach(block => {

            let innerHTML = block.innerHTML;

            console.log('********************************** ', block.getAttribute('data-prism-language'));

            if(block.getAttribute('data-prism-language') === 'javascript') {
                console.log('REMOVE TEXTAREA');
                console.log(block.querySelector('textarea').innerHTML);
                innerHTML = block.querySelector('textarea').innerHTML;
            }


            let highlightedHTML = Prism.highlight(innerHTML, Prism.languages[block.getAttribute('data-prism-language')])
                // .replace(/^\s\s*/, '')
                .replace(/\s\s*$/, ''); // delete spaces at the end of the block


            let spacesToCancel = highlightedHTML.search(/\S|$/);

            block.innerHTML = '';

            let lines = highlightedHTML.split('\n');

            lines.forEach(line => {
                console.log('############ ', line.length);

                let spacesAtStart = line.search(/\S|$/);
                if(spacesAtStart >= spacesToCancel) {
                    line = line.slice(spacesToCancel);
                }
                else {
                    line = line.slice(spacesAtStart);
                }

                block.innerHTML += line + '\n';
            })
        });


    }

}
