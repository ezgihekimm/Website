<template>
	<Header /> 
	<Map />
    <ContactPage />
	<Footer />
</template>

<script>

import Header from '../components/Header'
import ContactPage from '../components/ContactPage.vue'
import Map from '../components/Map.vue'
import Footer from '../components/Footer'

export default {
	name: 'App',
	components: {
		Header,
        ContactPage,
		Map,
		Footer,
	},
}
</script>
