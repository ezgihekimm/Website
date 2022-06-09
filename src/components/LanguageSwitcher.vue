<template>
	<div class="locale-changer">
	<ul>
		<li v-for="locale in langs" :key="locale" @click="switchLocale(locale)">
			{{locale}}
		</li>
	</ul>
	</div>
</template>

<script>
export default {
	name: 'locale-changer',
	data () {
		return { langs: ['en', 'tr'] }
	},
	methods: {
		switchLocale(locale) {
			if (this.$i18n.locale !== locale) {
				this.$i18n.locale = locale;
				const to = this.$router.resolve({ params: {locale} })
				this.$router.push({path: to.path})
			}
		}
	},
}
</script>