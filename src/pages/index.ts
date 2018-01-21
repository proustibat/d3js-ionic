import { HomePage } from '../pages/home/home';
import { InstallationPage } from './installation/installation';
import { BasicElementsPage } from '../pages/basic-elements/basic-elements';
import { BasicShapesPage } from '../pages/basic-shapes/basic-shapes';
import { PathsSvgPage } from '../pages/paths-svg/paths-svg';
import { DynamicSvgCoordPage } from '../pages/dynamic-svg-coord/dynamic-svg-coord';
import { ScalesPage } from '../pages/scales/scales';
import { GroupElementPage } from './group-element/group-element';
import { GroupElementD3Page } from './group-element-d3/group-element-d3';
import { TextElementPage } from './text-element/text-element';
import { AxesPage } from './axes/axes';
import { MenuOptionModel } from '../components/side-menu-content/models/menu-option-model';

export const PagesList = [
    { component: HomePage,              title: 'Home' },
    { component: InstallationPage,      title: 'Installation' },
    { component: BasicElementsPage,     title: 'Basic SVG Elements' },
    { component: BasicShapesPage,       title: 'Basic Shapes' },
    { component: PathsSvgPage,          title: 'SVG Paths' },
    { component: DynamicSvgCoordPage,   title: 'Dynamic coordinate space' },
    { component: ScalesPage,            title: 'Scales' },
    { component: GroupElementPage,      title: 'Group Element (SVG Part.)' },
    { component: GroupElementD3Page,    title: 'Group Element (D3 Part.)' },
    { component: TextElementPage,       title: 'SVG Text Element' },
    { component: AxesPage,              title: 'D3.js Axes' },
];

export const Menu: MenuOptionModel[] = [
    {
        displayName: 'Home',
        iconName: 'home',
        component: HomePage,
        selected: true
    }, {
        displayName: 'Beginners',
        subItems: [{
            displayName: 'Installation',
            component: InstallationPage,
        }, {
            displayName: 'Basic SVG Elements',
            component: BasicElementsPage,
        }, {
            displayName: 'Basic Shapes',
            component: BasicShapesPage,
        }, {
            displayName: 'SVG Paths',
            component: PathsSvgPage
        }, {
            displayName: 'Dynamic coordinate space',
            component: DynamicSvgCoordPage,
        }, {
            displayName: 'Scales',
            component: ScalesPage,
        }, {
            displayName: 'Group Element (SVG Part.)',
            component: GroupElementPage
        }, {
            displayName: 'Group Element (D3 Part.)',
            component: GroupElementD3Page,
        }, {
            displayName: 'SVG Text Element',
            component: TextElementPage,
        }, {
            displayName: 'D3.js Axes',
            component: AxesPage
        }]
    }
];

export const Pages = PagesList.map((page) => {
    return page.component;
});

export const RootPage = HomePage;
