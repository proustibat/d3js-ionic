import { HomePage }             from '../pages/home/home';
import { BasicElementsPage }    from '../pages/basic-elements/basic-elements';
import { BasicShapesPage }      from '../pages/basic-shapes/basic-shapes';
import { PathsSvgPage }         from '../pages/paths-svg/paths-svg';
import { DynamicSvgCoordPage }  from '../pages/dynamic-svg-coord/dynamic-svg-coord';
import { ScalesPage }           from '../pages/scales/scales';
import { GroupElementPage }     from "./group-element/group-element";

export const PagesList = [
    { component: HomePage,              title: 'Home' },
    { component: BasicElementsPage,     title: 'Basic SVG Elements' },
    { component: BasicShapesPage,       title: 'Basic Shapes' },
    { component: PathsSvgPage,          title: 'SVG Paths' },
    { component: DynamicSvgCoordPage,   title: 'Dynamic coordinate space' },
    { component: ScalesPage,            title: 'Scales' },
    { component: GroupElementPage,      title: 'Group Element' },
];

export const Pages = PagesList.map(page=> {
   return page.component;
});

export const RootPage = HomePage;