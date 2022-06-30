<template>
	<div class="_container" @click="openNav">
		<div class="burger" :class="{active: clicked, white: transparent, black: !transparent}"></div>
	</div>
</template>

<script>
export default {
	name: "Burger",
	props: {
		transparent: {
			type: Boolean
		}
	},
	data() {
		return {
			clicked: false
		}
	},
	methods: {
		openNav() {
			// this.clicked = !this.clicked
			this.$emit('toggleMenu')
		}
	}
}
</script>

<style scoped>

._container{
	width: 40px;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}

.burger {
  display: flex;
  transition: all 250ms ease-out;
  cursor: pointer;
  width: 40px;
}

.white:before, .white:after {
	background: white;
}

.black:before, .black:after {
	background: black;
}

.burger:before, .burger:after {
  content: '';
  width: 40px;
  height: 2px;
  position: absolute;
  transition: all 250ms ease-out;
  will-change: transform;
}

.burger:before {
  transform: translateY(-6px);
}

.burger:after {
  transform: translateY(6px);
}

.active.burger:before {
  transform: translateY(0) rotate(45deg);
}

.active.burger:after {
  transform: translateY(0) rotate(-45deg);
} 







</style>