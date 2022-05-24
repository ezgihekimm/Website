<template>
	<Header :transparent="true" />
	<Slider />
	<Yazi />
    <about-home/>
    <ContactHome/>
	<Footer />
</template>

<i18n>
{
  "en": {
    "kaan2": "hello world!"
  },
  "tr": {
    "kaan2": "TR hello world!"
  }
}
</i18n>

<script>

import Header from '../components/Header'
import Slider from '../components/Slider'
import Yazi from '../components/Yazi'
import AboutHome from '../components/AboutHome.vue'
import ContactHome from '../components/ContactHome.vue'
import Footer from '../components/Footer'



export default {
	name: 'App',
	components: {
		Header,
		Slider,
		Yazi,
        ContactHome,
        AboutHome,
		Footer

	},
}
</script>
