<template>
	<Header />
    <ProjectFirst/>
    <Yazi/>
	<Footer />
</template>

<script>

import Header from '../components/Header'
import ProjectFirst from '../components/ProjectFirst'
import Yazi from '../components/Yazi.vue'
import Footer from '../components/Footer'


export default {
	name: 'App',
	components: {
		Header,
        ProjectFirst,
        Yazi,
		Footer,
	},
}
</script>