import { NgModule } from '@angular/core';
import { CommonHeaderComponent } from './common-header/common-header';
import { FooterLinksComponent } from './footer-links/footer-links';
import { ExpandableComponent } from './expandable/expandable';
@NgModule({
    declarations: [CommonHeaderComponent,
    FooterLinksComponent,
    ExpandableComponent],
    imports: [],
    exports: [CommonHeaderComponent,
    FooterLinksComponent,
    ExpandableComponent]
})
export class ComponentsModule {}
