import { createRouter, createWebHistory } from 'vue-router'
import i18n from '../i18n'

import Home from '../pages/Home'
import WhoAreWe from '../pages/WhoAreWe'
import OurAims from '../pages/OurAims'
import Patents from '../pages/Patents'
import Products from '../pages/Products'
import CoLink from '../pages/CoLink'
import CoLight from '../pages/CoLight'
import CoDiver from '../pages/CoDiver'
import UnderSea from '../pages/UnderSea'
import Acusto from '../pages/Acusto'
import ContactUs from '../pages/ContactUs'
import Human from '../pages/Human'
import Project1 from '../pages/Project1'
import Project2 from '../pages/Project2'
import Project4 from '../pages/Project4'

import Root from '../components/Root'

const routes = [
	{
		path: "/",
		redirect: i18n.global.locale
	},
	{
		path: '/:locale',
		component: Root,
		beforeEnter: (to, from, next) => {
			const locale = to.params.locale;
			const supported_locales = ['tr', 'en']
			if (!supported_locales.includes(locale)) return next('tr');
			if (i18n.locale !== locale) {
				i18n.global.locale = locale;
			}
			return next()
		},
		children: [
			{ path: '', component: Home },
			{ path: 'who-are-we', component: WhoAreWe },
			{ path: 'our-aims', component: OurAims},
			{ path: 'patent', component: Patents},
			{ path: 'products', component: Products},
			{ path: 'co-link', component: CoLink},
			{ path: 'co-light', component: CoLight},
			{ path: 'co-diver', component: CoDiver},
			{ path: 'acusto', component: Acusto},
			{ path: 'contact-us', component: ContactUs},
			{ path: 'human', component: Human},
			{ path: 'Project1', component:Project1},
			{ path: 'Project2',component:Project2},
			{ path: 'Project4',component:Project4}
		],
	},
]


const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router