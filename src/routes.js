import Menu from './components/Menu.vue';
import About from './components/About.vue';
import Project from './components/Project.vue';
import CV from './components/CV.vue';


export const routes = [
	{path: '/', component: Menu},
	{path: '/about', component: About},
	{path: '/project', component: Project},
	{path: '/cv', component: CV}
];
