<template>
	<div id="navbar" class="_container">
		<HeaderInside :relative="!transparent" :transparent="transparent ? true : false" />
		<HeaderInside :fixed="true" />
	</div>
</template>


<script>
	import HeaderInside from './HeaderInside.vue'

	export default {
		name: 'Header',
		props: {
			transparent: Boolean,
			default: false
		},
		components: {
			HeaderInside
		}
	}

	// window.addEventListener("scroll", function () {
	// 	let menuArea = document.getElementsByClassName('b-head-transparent')[0];
	// 	let menuItems = document.getElementsByClassName('menu-item');
	// 	let menuIcon = document.getElementsByClassName('hamburger')[0];

	// 	if (window.pageYOffset > 0) {
	// 		menuArea.classList.add('bg-head-cus');
	// 		menuIcon.classList.add('black');
	// 		for (var i = 0; i < menuItems.length; i++) {
	// 			menuItems[i].classList.add('black');
	// 		}
	// 	} else {
	// 		menuArea.classList.remove('bg-head-cus');
	// 		menuIcon.classList.remove('black');
	// 		for (var a = 0; a < menuItems.length; a++) {
	// 			menuItems[a].classList.remove('black');
	// 		}
	// 	}
	// })
</script>

<style scoped>
	._container {
		
	}

</style>