import { NgModule } from '@angular/core';
import { CommonHeaderComponent } from './common-header/common-header';
import { FooterLinksComponent } from './footer-links/footer-links';
@NgModule({
	declarations: [CommonHeaderComponent,
    FooterLinksComponent],
	imports: [],
	exports: [CommonHeaderComponent,
    FooterLinksComponent]
})
export class ComponentsModule {}
