<template>
	<Header />
    <project-four/>
	<Footer />
</template>

<script>

import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectFour from '../components/ProjectFour.vue'


export default {
	name: 'App',
	components: {
		Header,
		Footer,
        ProjectFour,
	},
}
</script>