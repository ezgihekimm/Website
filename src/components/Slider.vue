<template>
<div class="container-fluid _con">
	<ul class="slides">

		<li v-for="(slide, index) in images" :key="index" :class="{active: currentImage == index, noactive: currentImage != index}">
			<img :src="slide.img">
			<div class="sliderTextContainer">
				<div class="sliderTitle" :class="{activeTitle: currentImage == index, noactiveTitle: currentImage != index}">
					<div>{{slide.title}}</div>
				</div>
			</div>
		</li>

	</ul>
</div>

<a href="#" @click="previousImage">Geri</a>
<a href="#" @click="nextImage">Ileri</a>
</template>

<script>
export default {
	name: 'Slider',
	data: function () {
		return {

			images: [{
					title: 'BAUMIND klsjdkjklsjdkldjskldljklsjadklsjsljkdjsakldadjksadjakljaskdasjdkl1',
					img: require('../assets/images/slider/h9-img-02.jpg')
				},
				{
					title: 'BAUMIND 2',
					img: require('../assets/images/slider/h9-img-03.jpg')
				},
				{
					title: 'BAUMIND 3',
					img: require('../assets/images/slider/h9-rev-img-01.jpg')
				},
			],
			currentImage: 0,
			disabled: false,

		}
	},
	methods: {
		nextImage(e) {
			e.preventDefault();
			if (this.currentImage < this.images.length - 1) {
				this.currentImage++;
			} else {
				this.currentImage = 0;
			}
		},
		previousImage(e) {
			e.preventDefault();
			if (this.currentImage > 0) {
				this.currentImage--;
			} else {
				this.currentImage = this.images.length - 1;
			}
		},
		// auto incerement currentImage every 3 seconds
		autoIncrement() {
			setInterval(() => {
				if (this.currentImage < this.images.length - 1) {
					this.currentImage++;
				} else {
					this.currentImage = 0;
				}
			}, 5000);
		}
	},

	mounted() {
		this.autoIncrement();
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


/* Slider Title */

.sliderTextContainer {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 800px;
	padding-top: 10px;
	padding-bottom: 10px;
	/* background: red; */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	z-index: 2;
	overflow: hidden;
}
.sliderTitle {
	width: 100%;
	background-color: transparent;
	text-align: center;
	color: #fff;
	font-size: 2rem;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 2px;
	z-index: 4;
	display: flex;
	justify-content: center;
	align-items: center;
}

.activeTitle {
	z-index: 6;
	animation: slideTitle 4s ease 0s 1 normal;
}

.noactiveTitle {
	animation: hiddenTitle 2s 1;
}

@keyframes slideTitle {
	0% {
		transform: translateY(300%);
	}

	100% {
		transform: translateY(0%);
	}
}

@keyframes hiddenTitle {
	0% {
		z-index: 4;
	}

	100% {
		z-index: 4;
	}
}


</style>
