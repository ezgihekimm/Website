<template>
	<Header />
    <ProjectSecond/>
	<Footer />
</template>

<script>

import Header from '../components/Header'
import ProjectSecond from '../components/ProjectSecond'
import Footer from '../components/Footer'


export default {
	name: 'App',
	components: {
		Header,
        ProjectSecond,
		Footer,
	},
}
</script>