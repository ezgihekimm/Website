<template>
	<Header />

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

import Footer from '../components/Footer'

export default {
	name: 'App',
	components: {
		Header,
        
		Footer,
	},
}
</script>