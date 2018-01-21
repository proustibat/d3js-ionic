import { MenuOptionModel } from './menu-option-model';

export class InnerMenuOptionModel {
    public static fromMenuOptionModel(option: MenuOptionModel, parent?: InnerMenuOptionModel): InnerMenuOptionModel {

        const innerMenuOptionModel = new InnerMenuOptionModel();

        innerMenuOptionModel.id = this.counter++;
        innerMenuOptionModel.iconName = option.iconName;
        innerMenuOptionModel.displayName = option.displayName;
        innerMenuOptionModel.targetOption = option;
        innerMenuOptionModel.parent = parent || null;

        innerMenuOptionModel.selected = option.selected;

        if (option.subItems) {
            innerMenuOptionModel.expanded = false;
            innerMenuOptionModel.subItemsCount = option.subItems.length;
            innerMenuOptionModel.subOptions = [];

            option.subItems.forEach((subItem) => {

                const innerSubItem = InnerMenuOptionModel.fromMenuOptionModel(subItem, innerMenuOptionModel);
                innerMenuOptionModel.subOptions.push(innerSubItem);

                // Select the parent if any
                // child option is selected
                if (subItem.selected) {
                    innerSubItem.parent.selected = true;
                    innerSubItem.parent.expanded = true;
                }

            });
        }

        return innerMenuOptionModel;
    }

    private static counter = 1;

    id: number;
    iconName: string;
    displayName: string;

    targetOption: MenuOptionModel;

    parent: InnerMenuOptionModel;

    selected: boolean;

    expanded: boolean;
    subItemsCount: number;
    subOptions: InnerMenuOptionModel[];

}
