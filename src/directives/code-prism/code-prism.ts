import {ChangeDetectorRef, Directive, ElementRef, Renderer, Renderer2} from '@angular/core';
import * as Prism from 'prismjs';

@Directive({
    selector: '[code-prism]'
})
export class CodePrismDirective {

    el:any;

    constructor(public elementRef: ElementRef, public renderer: Renderer2, private changeDetector: ChangeDetectorRef) {
        console.log('Hello CodePrismDirective Directive');
    }

    ngOnInit(){
        console.log('NGONINIT');
        // this.changeDetector.detach();
        console.log(this.elementRef.nativeElement.outerHTML);
        console.log(this.elementRef.nativeElement.innerHTML);

        let content = this.elementRef.nativeElement.innerHTML;
        let language = this.elementRef.nativeElement.getAttribute('code-prism');

        this.el = this.renderer.createElement('pre');
        this.renderer.appendChild(this.el, this.renderer.createText(content));
        this.renderer.addClass(this.el, 'prism');
        this.renderer.addClass(this.el, 'language-' + language);
        this.renderer.setAttribute(this.el, 'data-prism-language', language);

        this.renderer.insertBefore(this.elementRef.nativeElement.parentElement, this.el, this.elementRef.nativeElement);

        this.elementRef.nativeElement.remove();

        // this.highlightCodes();
    }

    highlightCodes():void {

        console.log('HIGHLIGHT ', this.el, this.el.getAttribute('data-prism-language'));

        let block = this.el;

        // codeBlocks.forEach(block => {

            let innerHTML = block.innerHTML;

            // console.log('********************************** ', block.getAttribute('data-prism-language'));

            // if(block.getAttribute('data-prism-language') === 'javascript') {
            //     console.log('REMOVE TEXTAREA');
            //     console.log(block.querySelector('textarea').innerHTML);
            //     innerHTML = block.querySelector('textarea').innerHTML;
            // }


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
        // });


    }


}
