import {Component, Renderer2, ViewChild} from '@angular/core';

@Component({
    selector: 'common-header',
    templateUrl: 'common-header.html'
})
export class CommonHeaderComponent {

    @ViewChild('ref') refIonTitle;

    defaultTitle = 'D3.js with Ionic';

    constructor(private renderer: Renderer2) {

    }

    ngAfterViewInit() {
        const titleEl = this.refIonTitle.getElementRef().nativeElement.querySelector('.toolbar-title');
        if (titleEl.childNodes.length === 0) {
            this.renderer.appendChild(titleEl, this.renderer.createText(this.defaultTitle));
        }

    }

}
