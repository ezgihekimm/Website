<template>
	<Header />
    <ProjectSecond/>
    <Yazi/>
	<Footer />
</template>

<script>

import Header from '../components/Header'
import ProjectSecond from '../components/ProjectSecond'
import Yazi from '../components/Yazi.vue'
import Footer from '../components/Footer'


export default {
	name: 'App',
	components: {
		Header,
        ProjectSecond,
        Yazi,
		Footer,
	},
}
</script>