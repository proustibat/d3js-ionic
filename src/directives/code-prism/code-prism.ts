import {ChangeDetectorRef, Directive, ElementRef, Renderer, Renderer2} from '@angular/core';
import * as Prism from 'prismjs';

@Directive({
    selector: 'textarea[code-prism]'
})
export class CodePrismDirective {

    el:any;
    content:string;
    language:string;

    constructor(public elementRef: ElementRef, public renderer: Renderer2, private changeDetector: ChangeDetectorRef) {
        console.log('Hello CodePrismDirective Directive');
    }

    ngOnInit(){
        this.content = this.elementRef.nativeElement.value;
        this.language = this.elementRef.nativeElement.getAttribute('code-prism');

        this.el = this.renderer.createElement('pre');
        this.renderer.appendChild(this.el, this.renderer.createText(this.content));
        // this.el.innerHTML = content;
        this.renderer.addClass(this.el, 'prism');
        this.renderer.addClass(this.el, 'language-' + this.language);
        this.renderer.setAttribute(this.el, 'data-prism-language', this.language);

        this.renderer.insertBefore(this.elementRef.nativeElement.parentElement, this.el, this.elementRef.nativeElement);

        this.elementRef.nativeElement.remove();

        this.highlightCode();
    }

    highlightCode():void {
        let newContent = '';
        let highlightedHTML = Prism.highlight(this.content, Prism.languages[this.language])
            // .replace(/^\s\s*/, '') // delete spaces at the start of the block
            .replace(/\s\s*$/, ''); // delete spaces at the end of the block

        let spacesToCancel = highlightedHTML.search(/\S|$/);

        let lines = highlightedHTML.split('\n');

        lines.forEach((line, index) => {
            let spacesAtStart = line.search(/\S|$/);
            if(spacesAtStart >= spacesToCancel) {
                line = line.slice(spacesToCancel);
            }
            else {
                line = line.slice(spacesAtStart);
            }
            newContent += line + '\n';
        });

        this.el.innerHTML = newContent;
    }
}
