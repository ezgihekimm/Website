<template>
	<div class="container-fluid _con">
		<ul class="slides">
			<li :class="{active: currentImage == 0, noactive: currentImage != 0}">
				<img :src="images[0]" id="slide1">
			</li>
			<li :class="{active: currentImage == 1, noactive: currentImage != 1}">
				<img :src="images[1]" id="slide2">
			</li>
			<li :class="{active: currentImage == 2, noactive: currentImage != 2}">
				<img :src="images[2]" id="slide3">
			</li>
			<li :class="{active: currentImage == 3, noactive: currentImage != 3}">
				<img :src="images[3]" id="slide4">
			</li>
		</ul>
	</div>
	
	<a @click="previousImage" >Geri</a>
	<a @click="nextImage">Ileri</a>
	

</template>

<script>
	export default {
		name: 'Slider',
		data: function () {
			return {
				images: [
					require('../assets/images/dalgıc.jpeg'),
					require('../assets/images/gemi2.jpeg'),
					require('../assets/images/mühendis.jpeg'),
					require('../assets/images/yetenk.jpeg'),
				],
				currentImage: 0,
				disabled: false

			}
		},
		methods: {
			nextImage(e){
				e.preventDefault();
				if(this.currentImage < this.images.length - 1){
					this.currentImage++;
				}
				else{
					this.currentImage = 0;
				}
			},
			previousImage(e){
				e.preventDefault();
				if(this.currentImage > 0){
					this.currentImage--;
				}
				else{
					this.currentImage = this.images.length - 1;
				}
			}
		}
	   
	}
</script>

<style>

	*,
	*::before,
	*::after {
		box-sizing: inherit;
		margin: 0;
		padding: 0;
	}

	._con {
		display: flex;
		justify-content: center;
		margin: 0 0;
		padding-right: 0px;
		padding-left: 0px;
	}

	.slides {
		overflow: hidden;
		width: 100%;
		height: 100vh;
		padding-right: 0px;
		padding-left: 0px;
	}

	.slides li {
		width: 100%;
		height: 100vmin;
		position: absolute;
		z-index: 1;
		padding-right: 0px;
		padding-left: 0px;
	}

	.slides img {
		width: 100%;
		height: 100vmin;
		object-fit: cover;
		object-position: top;

	}

	.slides li.active {
		z-index: 3;
		animation: slide 2s ease 0s 1 normal;
	}

	.slides li.noactive {
		animation: hidden 2s 1;
	}

	@keyframes slide {
		0% {
			transform: translateY(-100%);
		}

		100% {
			transform: translateY(0%);
		}

	}

	@keyframes hidden {
		0% {
			z-index: 2;
		}

		100% {
			z-index: 2;
		}
	}
</style>