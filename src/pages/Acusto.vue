<template>
	<Header  />
	<Patent2 />
	<Footer />
</template>

<script>

import Header from '../components/Header'
import Patent2 from '../components/Patent2'
import Footer from '../components/Footer'

export default {
	name: 'App',
	components: {
		Header,
	    Patent2,
		Footer,
	},
}
</script>