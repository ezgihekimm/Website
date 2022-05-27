<template>
	<Header />
   <our-aims />
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
import OurAims from '../components/OurAims'

import Footer from '../components/Footer'

export default {
	name: 'App',
	components: {
		Header,
		OurAims,
        
		Footer,
	},
}
</script>