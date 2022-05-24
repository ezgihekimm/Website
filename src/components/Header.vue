<template>
	<div class="b-head" :class="{'b-head-transparent': transparent}">
		<div class="logo">
			<img src="@/assets/images/logo.png" style="height: 60px">
		</div>
		<div class="list">

			<ul>

				<li class="ana">
					<router-link to="/" custom v-slot="{ navigate, href, isExactActive }">
						<a :href="href" @click="navigate" class="menu-item">
							<i :class="[isExactActive == true ? 'fa-solid' : 'fa-regular', 'fa-circle']"></i>
							{{ $t('header.anasayfa')}}
						</a>
					</router-link>
				</li>

				<li class="hak">
					<router-link to="/hakkimizda" custom v-slot="{ navigate, href, isExactActive }">
						<a :href="href" @click="navigate" class="menu-item">
							<i :class="[isExactActive == true ? 'fa-solid' : 'fa-regular', 'fa-circle']"></i>
							{{ $t('header.hakkimizda')}}
						</a>
					</router-link>

					<div class="down-content1">
						<router-link to="/who-are-we" custom v-slot="{ navigate, href }">
							<a :href="href" @click="navigate">
								{{ $t('header.bizkimiz')}}
							</a>
						</router-link>

						<router-link to="/our-aims" custom v-slot="{ navigate, href }">
							<a :href="href" @click="navigate">
								{{ $t('header.hedeflerimiz')}}
							</a>
						</router-link>

						<router-link to="/patent" custom v-slot="{ navigate, href }">
							<a :href="href" @click="navigate">
								{{ $t('header.patent')}}
							</a>
						</router-link>

					</div>
				</li>

				<li class="ürün">
					<router-link to="/products" custom v-slot="{ navigate, href }">
						<a :href="href" @click="navigate" class="menu-item">
							<i :class="[isExactActive == true ? 'fa-solid' : 'fa-regular', 'fa-circle']"></i>
							{{ $t('header.urunler')}}
						</a>
					</router-link>
					<div class="down-content2">

						<router-link to="/co-link" custom v-slot="{ navigate, href }">
							<a :href="href" @click="navigate">
								coLink
							</a>
						</router-link>


						<router-link to="/co-light" custom v-slot="{ navigate, href }">
							<a :href="href" @click="navigate">
								coLighting
							</a>
						</router-link>


						<router-link to="/co-diver" custom v-slot="{ navigate, href }">
							<a :href="href" @click="navigate">
								coDiver
							</a>
						</router-link>

					</div>
				</li>

				<li class="proje">
					<router-link to="/projects" custom v-slot="{ navigate, href }">
						<a :href="href" @click="navigate" class="menu-item">
							<i :class="[isExactActive == true ? 'fa-solid' : 'fa-regular', 'fa-circle']"></i>
							{{ $t('header.projeler')}}
						</a>
					</router-link>
					<div class="down-content3">

						<router-link to="/under-water" custom v-slot="{ navigate, href }">
							<a :href="href" @click="navigate">
								{{ $t('header.sualtı')}}
							</a>
						</router-link>



						<router-link to="/under-sea" custom v-slot="{ navigate, href }">
							<a :href="href" @click="navigate">
								{{ $t('header.denizaltı')}}
							</a>
						</router-link>


						<router-link to="/acusto" custom v-slot="{ navigate, href }">
							<a :href="href" @click="navigate">
								{{ $t('header.akusto')}}
							</a>
						</router-link>

						<router-link to="/helicopter" custom v-slot="{ navigate, href }">
							<a :href="href" @click="navigate">
								{{ $t('header.helikopter')}}
							</a>
						</router-link>

					</div>
				</li>

				<li class="biz">
	                <router-link to="/contact-us" custom v-slot="{ navigate, href }">
						<a :href="href" @click="navigate" class="menu-item">
							<i :class="[isExactActive == true ? 'fa-solid' : 'fa-regular', 'fa-circle']"></i>
							{{ $t('header.bize')}}
						</a>
					</router-link>

					<div class="down-content4">

						<router-link to="/human" custom v-slot="{ navigate, href }">
							<a :href="href" @click="navigate">
								{{ $t('header.insan')}}
							</a>
						</router-link>


					</div>
				</li>

			</ul>

		</div>

		<div>
			<language-switcher />
		</div>

		<div class="menu-icon">
			<input class="menu-trigger hidden" id="togglenav" type="checkbox" />
			<label class="burger-wrapper" for="togglenav">
				<div class="hamburger"></div>
			</label>
		</div>

	</div>
</template>


<script>
	import LanguageSwitcher from './LanguageSwitcher.vue'

	export default {
		name: 'Header',
		props: {
			transparent: Boolean
		},
		components: {
			LanguageSwitcher
		},
		created() {
			// props are exposed on `this`
		}
	}

	window.addEventListener("scroll", function () {
		let menuArea = document.getElementsByClassName('b-head-transparent')[0];
		let menuItems = document.getElementsByClassName('menu-item');
		let menuIcon = document.getElementsByClassName('hamburger')[0];

		if (window.pageYOffset > 0) {
			menuArea.classList.add('bg-head-cus');
			menuIcon.classList.add('black');
			for (var i = 0; i < menuItems.length; i++) {
				menuItems[i].classList.add('black');
			}
		} else {
			menuArea.classList.remove('bg-head-cus');
			menuIcon.classList.remove('black');
			for (var a = 0; a < menuItems.length; a++) {
				menuItems[a].classList.remove('black');
			}
		}
	})
</script>

<style scoped>
	.b-head {
		padding-left: 5%;
		padding-right: 5%;
		height: 70px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: black !important;
		position: relative;
		top: 0;
		right: 0;
		left: 0;
		z-index: 100;
		transition: background 0.5s;
	}

	.b-head-transparent {
		position: fixed !important;
		background-color: transparent !important;
	}

	.bg-head-cus {
		background-color: white;
	}

	.logo {
		display: flex;
		height: 70px;
		justify-content: center;
		align-items: center;
	}

	.list {
		display: flex;
		flex-grow: 1;
		justify-content: center;
		align-items: center;
		color: black;
	}

	.menu-icon {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.list ul {
		margin: 0;
		padding: 0;
	}

	.list ul li a.menu-item {
		color: rgb(255, 255, 255);
		text-decoration: none;
		font-family: 'DM Sans', sans-serif;
		font-size: 16px;
		display: flex;
		flex-direction: row;
		align-items: center;
		transition: color 0.5s;
	}

	.list ul li a.black {
		color: rgb(51, 50, 50);
	}

	.list ul li a i {
		font-size: 6px;
		padding-right: 5px;
	}

	.list ul li {
		list-style: square;
		display: inline-block;
		color: rgb(16, 17, 18);
		margin-right: 20px;
		margin-left: 15px;
	}

	.down-content a,
	.down-content1 a,
	.down-content2 a,
	.down-content3 a,
	.down-content4 a {
		color: black !important;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		font-family: 'DM Sans', sans-serif;


	}

	.down-content,
	.down-content1,
	.down-content2,
	.down-content3,
	.down-content4 {
		display: none;
		position: absolute;
		background-color: #ffffff;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		min-width: 160px;
		z-index: 1;
		padding: 20px;
		font-size: 14px;
	}


	.down-content a:hover {
		background-color: #ddd;
	}

	.list .ana:hover .down-content {
		display: block;
	}


	.down-content1 a:hover {
		background-color: #ddd;
	}

	.list .hak:hover .down-content1 {
		display: block;
	}


	.down-content2 a:hover {
		background-color: #ddd;
	}

	.list .ürün:hover .down-content2 {
		display: block;
	}

	.down-content3 a:hover {
		background-color: #ddd;
	}

	.list .proje:hover .down-content3 {
		display: block;
	}


		.down-content4 a:hover {
		background-color: #ddd;
	}

	.list .biz:hover .down-content4 {
		display: block;
	}






	@media (max-width: 1026px) {
		.list {
			display: none;
		}
	}

	.burger-wrapper {
		cursor: pointer;
		width: 40px;
		height: 42px;
	}

	.burger-wrapper .hamburger {
		background: white;
		width: 40px;
		height: 1px;
		position: relative;
		transition: background 10ms 300ms ease;
		transform: translateY(20px);
	}

	.burger-wrapper .black {
		background: black;
	}

	.burger-wrapper .black:before,
	.burger-wrapper .black:after {
		background: black !important;
	}

	.burger-wrapper .hamburger:before,
	.burger-wrapper .hamburger:after {
		transition: top 300ms 350ms ease, transform 300ms 50ms ease;
		position: absolute;
		background: white;
		width: 40px;
		height: 1px;
		content: "";
	}

	.burger-wrapper .hamburger:before {
		top: -10px;
	}

	.burger-wrapper .hamburger:after {
		top: 10px;
	}


	.menu-trigger:checked~.burger-wrapper .hamburger {
		background: transparent;
	}

	.menu-trigger:checked~.burger-wrapper .hamburger:after,
	.menu-trigger:checked~.burger-wrapper .hamburger:before {
		transition: top 300ms 50ms ease, transform 300ms 350ms ease;
		top: 0;
	}

	.menu-trigger:checked~.burger-wrapper .hamburger:before {
		transform: rotate(45deg);
	}

	.menu-trigger:checked~.burger-wrapper .hamburger:after {
		transform: rotate(-45deg);
	}

	.hidden {
		display: none;
	}
</style>