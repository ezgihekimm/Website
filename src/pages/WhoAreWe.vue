<template>
	<Header />
	<who-are-we/>
    <yazi/>
	<Footer />
</template>

<script>

import Header from '../components/Header'
import WhoAreWe from '../components/WhoAreWe.vue'
import Footer from '../components/Footer'
import Yazi from '../components/Yazi.vue'

export default {
	name: 'App',
	components: {
		Header,
		WhoAreWe,
        Yazi,
		Footer,

	},
}
</script>

<style>

</style>
