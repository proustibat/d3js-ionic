import {Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';

@Component({
    selector: 'expandable',
    templateUrl: 'expandable.html'
})

export class ExpandableComponent {

    @ViewChild( 'expandWrapper', { read: ElementRef } ) expandWrapper;

    @Input( 'expanded' )    expanded:boolean    = false;
    @Input( 'button' )      hasButton:boolean   = true;
    @Input( 'showText' )    showBtnTxt:string   = 'Show more';
    @Input( 'hideText' )    hideBtnTxt:string   = 'Show less';
    @Input( 'btnColor' )    btnColor:string     = 'dark';

    constructor(public renderer: Renderer2) {
        console.log( 'Hello ExpandableComponent Component' );
    }

    expand() {
        this.expanded = !this.expanded;
    }
}
