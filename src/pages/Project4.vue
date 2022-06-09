<template>
	<Header />
    <project-four/>
    <Yazi/>
	<Footer />
</template>

<script>

import Header from '../components/Header'
import Yazi from '../components/Yazi.vue'
import Footer from '../components/Footer'
import ProjectFour from '../components/ProjectFour.vue'


export default {
	name: 'App',
	components: {
		Header,
        Yazi,
		Footer,
        ProjectFour,
	},
}
</script>