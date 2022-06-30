<template>
	<div id="navbar" class="_container">
		<HeaderInside :relative="!transparent" :transparent="transparent ? true : false" @toggleMenu="toggleMenu" />
		<HeaderInside :fixed="true" @toggleMenu="toggleMenu" />
		<MenuCollapse :toggle="toggle" />
	</div>
</template>


<script>
import HeaderInside from './HeaderInside.vue'
import MenuCollapse from './MenuCollapse.vue'

export default {
	name: 'Header',
	props: {
		transparent: Boolean,
		default: false,
	},
	data() {
		return {
			toggle: false,
		}
	},
	components: {
		HeaderInside,
		MenuCollapse
	},
	methods: {
		toggleMenu() {
			this.toggle = !this.toggle;
			console.log("header vue", this.toggle)
		}
	}
}
</script>

<style scoped>

</style>