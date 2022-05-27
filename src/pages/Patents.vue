<template>
	<Header />
    <Patent />
	<Footer />
</template>

<script>

import Header from '../components/Header'
import Footer from '../components/Footer'
import Patent from '../components/Patent.vue'

export default {
	name: 'App',
	components: {
    Header,
    Footer,
    Patent
},
}
</script>

