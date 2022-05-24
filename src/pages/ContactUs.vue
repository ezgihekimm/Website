<template>
	<Header /> 
    <ContactPage />
	<Footer />
</template>

<script>

import Header from '../components/Header'
import ContactPage from '../components/ContactPage.vue'
import Footer from '../components/Footer'

export default {
	name: 'App',
	components: {
		Header,
        ContactPage,
		Footer,
	},
}
</script>
ContactHome