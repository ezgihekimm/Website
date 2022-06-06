import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home'
import WhoAreWe from '../pages/WhoAreWe'
import OurAims from '../pages/OurAims'
import Patents from '../pages/Patents'
import Products from '../pages/Products'
import CoLink from '../pages/CoLink'
import CoLight from '../pages/CoLight'
import CoDiver from '../pages/CoDiver'
import UnderWater from '../pages/UnderWater'
import UnderSea from '../pages/UnderSea'
import Acusto from '../pages/Acusto'
import Helicopter from '../pages/Helicopter'
import ContactUs from '../pages/ContactUs'
import Human from '../pages/Human'
import Project1 from '../pages/Project1'




const routes = [
	{ path: '/', component: Home },
	{ path: '/who-are-we', component: WhoAreWe },
    { path: '/our-aims', component: OurAims},
    { path: '/patent', component: Patents},
    { path: '/products', component: Products},
    { path: '/co-link', component: CoLink},
    { path: '/co-light', component: CoLight},
    { path: '/co-diver', component: CoDiver},
    { path: '/under-water', component: UnderWater},
    { path: '/under-sea', component: UnderSea},
    { path: '/acusto', component: Acusto},
    { path: '/helicopter', component: Helicopter},
    { path: '/contact-us', component: ContactUs},
    { path: '/human', component: Human},
    { path : '/Project1', component:Project1}

]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router