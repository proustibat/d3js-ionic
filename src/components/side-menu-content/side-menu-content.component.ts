// Angular
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core'; // tslint:disable-line

// Ionic
import { Events, Platform } from 'ionic-angular';

// Models
import { SideMenuSettings } from './models/side-menu-settings';
import { MenuOptionModel } from './models/menu-option-model';
import { SideMenuRedirectEvent, SideMenuRedirectEventData } from './models/side-menu-redirect-events';
import { InnerMenuOptionModel } from './models/inner-menu-option-model';

@Component({
    selector: 'side-menu-content',
    templateUrl: 'side-menu-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SideMenuContentComponent {

    // Main inputs
    public menuSettings: SideMenuSettings;
    public menuOptions: MenuOptionModel[];
    public collapsableItems: InnerMenuOptionModel[] = [];

    // Outputs: return the selected option to the caller
    @Output() selectOption = new EventEmitter<any>();

    // Private properties
    private selectedOption: InnerMenuOptionModel;

    @Input('options')
    set options(value: MenuOptionModel[]) {
        if (value) {
            // Keep a reference to the options
            // sent to this component
            this.menuOptions = value;
            this.collapsableItems = new Array<InnerMenuOptionModel>();

            // Map the options to our internal models
            this.menuOptions.forEach((option) => {

                const innerMenuOption = InnerMenuOptionModel.fromMenuOptionModel(option);
                this.collapsableItems.push(innerMenuOption);

                // Check if there's any option marked as selected
                if (option.selected) {
                    this.selectedOption = innerMenuOption;
                } else if (innerMenuOption.subItemsCount) {
                    innerMenuOption.subOptions.forEach((subItem) => {
                        if (subItem.selected) {
                            this.selectedOption = subItem;
                        }
                    });
                }
            });
        }
    }

    @Input('settings')
    set settings(value: SideMenuSettings) {
        if (value) {
            this.menuSettings = value;
            this.mergeSettings();
        }
    }

    constructor(private platform: Platform,
                private eventsCtrl: Events,
                private cdRef: ChangeDetectorRef) {

        // Handle the redirect event
        this.eventsCtrl.subscribe(SideMenuRedirectEvent, (data: SideMenuRedirectEventData) => {
            this.updateSelectedOption(data);
        });
    }

    ngOnDestroy() {
        this.eventsCtrl.unsubscribe(SideMenuRedirectEvent);
    }

    // ---------------------------------------------------
    // PUBLIC methods
    // ---------------------------------------------------

    // Send the selected option to the caller component
    public select(option: InnerMenuOptionModel): void {
        if (this.menuSettings.showSelectedOption) {
            this.setSelectedOption(option);
        }

        // Return the selected option (not our inner option)
        this.selectOption.emit(option.targetOption);
    }

    // Toggle the sub options of the selected item
    public toggleItemOptions(targetOption: InnerMenuOptionModel): void {

        if (!targetOption) return;

        // If the accordion mode is set to true, we need
        // to collapse all the other menu options
        if (this.menuSettings.accordionMode) {
            this.collapsableItems.forEach((option) => {
                if (option.id !== targetOption.id) {
                    option.expanded = false;
                }
            });
        }

        // Toggle the selected option
        targetOption.expanded = !targetOption.expanded;
    }

    // Reset the entire menu
    public collapseAllOptions(): void {
        this.collapsableItems.forEach((option) => {
            if (!option.selected) {
                option.expanded = false;
            }

            if (option.subItemsCount) {
                option.subOptions.forEach((subItem) => {
                    if (subItem.selected) {
                        // Expand the parent if any of
                        // its childs is selected
                        subItem.parent.expanded = true;
                    }
                });
            }
        });

        // Update the view since there wasn't
        // any user interaction with it
        this.cdRef.detectChanges();
    }

    // Get the proper indentation of each option
    public get subOptionIndentation(): string {
        if (this.platform.is('ios')) return this.menuSettings.subOptionIndentation.ios;
        if (this.platform.is('windows')) return this.menuSettings.subOptionIndentation.wp;
        return this.menuSettings.subOptionIndentation.md;
    }

    // Get the proper height of each option
    public get itemHeight(): number {
        if (this.platform.is('ios')) return this.menuSettings.itemHeight.ios;
        if (this.platform.is('windows')) return this.menuSettings.itemHeight.wp;
        return this.menuSettings.itemHeight.md;
    }

    // ---------------------------------------------------
    // PRIVATE methods
    // ---------------------------------------------------

    // Method that set the selected option and its parent
    private setSelectedOption(option: InnerMenuOptionModel) {
        if (!option.targetOption.component) return;

        // Clean the current selected option if any
        if (this.selectedOption) {
            this.selectedOption.selected = false;
            this.selectedOption.targetOption.selected = false;

            if (this.selectedOption.parent) {
                this.selectedOption.parent.selected = false;
                this.selectedOption.parent.expanded = false;
            }

            this.selectedOption = null;
        }

        // Set this option to be the selected
        option.selected = true;
        option.targetOption.selected = true;

        if (option.parent) {
            option.parent.selected = true;
            option.parent.expanded = true;
        }

        // Keep a reference to the selected option
        this.selectedOption = option;

        // Update the view if needed since we may have
        // expanded or collapsed some options
        this.cdRef.detectChanges();
    }

    // Update the selected option
    private updateSelectedOption(data: SideMenuRedirectEventData): void {

        if (!data.displayName) {
            return;
        }

        let targetOption;

        this.collapsableItems.forEach((option) => {
            if (option.displayName.toLowerCase() === data.displayName.toLowerCase()) {
                targetOption = option;
            } else if (option.subItemsCount) {
                option.subOptions.forEach((subOption) => {
                    if (subOption.displayName.toLowerCase() === data.displayName.toLowerCase()) {
                        targetOption = subOption;
                    }
                });
            }
        });

        if (targetOption) {
            this.setSelectedOption(targetOption);
        }
    }

    // Merge the settings received with the default settings
    private mergeSettings(): void {
        const defaultSettings: SideMenuSettings = {
            accordionMode: false,
            itemHeight: {
                ios: 50,
                md: 50,
                wp: 50
            },
            arrowIcon: 'ios-arrow-down',
            showSelectedOption: false,
            selectedOptionClass: 'selected-option',
            indentSubOptionsWithoutIcons: false,
            subOptionIndentation: {
                ios: '16px',
                md: '16px',
                wp: '16px'
            }
        };

        if (!this.menuSettings) {
            // Use the default values
            this.menuSettings = defaultSettings;
            return;
        }

        const ms = this.menuSettings;
        if (!ms.itemHeight) {
            ms.itemHeight = defaultSettings.itemHeight;
        } else {
            const defIos = this.isDefinedAndPositive(ms.itemHeight.ios);
            const defMd = this.isDefinedAndPositive(ms.itemHeight.md);
            const defWp = this.isDefinedAndPositive(ms.itemHeight.wp);
            const heightIos = defIos ? ms.itemHeight.ios : defaultSettings.itemHeight.ios;
            const heightMd = defMd ? ms.itemHeight.md : defaultSettings.itemHeight.md;
            const heightWp = defWp ? ms.itemHeight.wp : defaultSettings.itemHeight.wp;
            ms.itemHeight.ios = heightIos;
            ms.itemHeight.md = heightMd;
            ms.itemHeight.wp = heightWp;
        }
        const shSeOpt = 'showSelectedOption';
        ms[shSeOpt] =  this.isDefined(ms[shSeOpt]) ? ms[shSeOpt] : defaultSettings[shSeOpt];

        const accModOpt = 'accordionMode';
        ms[accModOpt] = this.isDefined(ms[accModOpt]) ? ms[accModOpt] : defaultSettings[accModOpt];

        const arrIco = 'arrowIcon';
        ms[arrIco] = this.isDefined(ms[arrIco]) ? ms[arrIco] : defaultSettings[arrIco];

        const selOptClass = 'selectedOptionClass';
        ms[selOptClass] = this.isDefined(ms[selOptClass]) ? ms[selOptClass] : defaultSettings[selOptClass];

        const suOptInd = 'subOptionIndentation';
        ms[suOptInd] = this.isDefined(ms[suOptInd]) ? ms[suOptInd] : defaultSettings[suOptInd];

        const indSuOptWIco = 'indentSubOptionsWithoutIcons';
        ms[indSuOptWIco] = this.isDefined(ms[indSuOptWIco]) ? ms[indSuOptWIco] : defaultSettings[indSuOptWIco];

        if (!ms[suOptInd]) {
            ms[suOptInd] = defaultSettings[suOptInd];
        } else {
            const suOpInd = 'subOptionIndentation';
            ms[suOpInd].ios = this.isDefined(ms[suOpInd].ios) ? ms[suOpInd].ios : defaultSettings[suOpInd].ios;
            ms[suOpInd].md = this.isDefined(ms[suOpInd].md) ? ms[suOpInd].md : defaultSettings[suOpInd].md;
            ms[suOpInd].wp = this.isDefined(ms[suOpInd].wp) ? ms[suOpInd].wp : defaultSettings[suOpInd].wp;
        }
    }

    private isDefined(property: any): boolean {
        return property !== null && property !== undefined;
    }

    private isDefinedAndPositive(property: any): boolean {
        return this.isDefined(property) && !isNaN(property) && property > 0;
    }
}
