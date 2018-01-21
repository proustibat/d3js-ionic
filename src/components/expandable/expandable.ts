import {Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';

@Component({
    selector: 'expandable',
    templateUrl: 'expandable.html'
})

export class ExpandableComponent {

    @ViewChild('expandWrapper', { read: ElementRef }) expandWrapper;

    @Input('expanded')    expanded      = false;
    @Input('button')      hasButton     = true;
    @Input('showText')    showBtnTxt    = 'Show more';
    @Input('hideText')    hideBtnTxt    = 'Show less';
    @Input('btnColor')    btnColor      = 'dark';

    constructor(public renderer: Renderer2) {
        console.log('Hello ExpandableComponent Component');
    }

    expand() {
        this.expanded = !this.expanded;
    }
}
