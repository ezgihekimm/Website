<template>
	<Header />
    <ProjectFirst/>
	<Footer />
</template>

<script>

import Header from '../components/Header'
import ProjectFirst from '../components/ProjectFirst'
import Footer from '../components/Footer'


export default {
	name: 'App',
	components: {
		Header,
        ProjectFirst,
		Footer,
	},
}
</script>