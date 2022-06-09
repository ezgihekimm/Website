<template>
	<div class="_container_inside" :class="{'_fixed': fixed, '_relative': relative, '_transparent': transparent}">
		<div class="logo">
			<img src="@/assets/images/logo.png" style="height: 60px">
		</div>
		<div class="list">
			<ul>
				<li class="home">
					<router-link :to="linkCreator(this.$i18n.locale, '')" custom v-slot="{ navigate, href, isExactActive }">
						<a :href="linkCreator(this.$i18n.locale, href)" @click="navigate" class="menu-item">
							<i :class="[isExactActive == true ? 'fa-solid' : 'fa-regular', 'fa-circle']"></i>
							{{ $t('header.anasayfa')}}
						</a>
					</router-link>
				</li>

				<li class="about">
					<router-link :to="linkCreator(this.$i18n.locale, 'hakkimizda')" custom v-slot="{ navigate, href, isExactActive }">
						<a :href="href" @click="navigate" class="menu-item">
							<i :class="[isExactActive == true ? 'fa-solid' : 'fa-regular', 'fa-circle']"></i>
							{{ $t('header.hakkimizda')}}
						</a>
					</router-link>

					<div class="down-content1">
						<div class="content">
						<router-link :to="linkCreator(this.$i18n.locale, 'who-are-we')" custom v-slot="{ navigate, href }">
							<a :href="linkCreator(this.$i18n.locale, href)" @click="navigate">
								{{ $t('header.bizkimiz')}}
							</a>
						</router-link>
						</div>
						 <div class="content">
						<router-link :to="linkCreator(this.$i18n.locale, 'our-aims')" custom v-slot="{ navigate, href }">
							<a :href="linkCreator(this.$i18n.locale, href)" @click="navigate">
								{{ $t('header.hedeflerimiz')}}
							</a>
						</router-link>
						</div>
				  <div class="content">
						<router-link :to="linkCreator(this.$i18n.locale, 'patent')" custom v-slot="{ navigate, href }">
							<a :href="linkCreator(this.$i18n.locale, href)" @click="navigate">
								{{ $t('header.patent')}}
							</a>
						</router-link>
						</div>

					</div>
				</li>

				<li class="ürün">
					<router-link :to="linkCreator(this.$i18n.locale, 'products')" custom v-slot="{ navigate, href }">
						<a :href="href" @click="navigate" class="menu-item">
							<i :class="[isExactActive == true ? 'fa-solid' : 'fa-regular', 'fa-circle']"></i>
							{{ $t('header.urunler')}}
						</a>
					</router-link>
					<div class="down-content2">
						
						<div class="content">

							<router-link :to="linkCreator(this.$i18n.locale, 'co-link')" custom v-slot="{ navigate, href }">
								<a :href="linkCreator(this.$i18n.locale, href)" @click="navigate">
									coLink
								</a>
							</router-link>
							</div>

							<div class="content">
							<router-link :to="linkCreator(this.$i18n.locale, 'co-light')" custom v-slot="{ navigate, href }">
								<a :href="linkCreator(this.$i18n.locale, href)" @click="navigate">
									coLighting
								</a>
							</router-link>
							</div>

						<div class="content">
							<router-link :to="linkCreator(this.$i18n.locale, 'co-diver')" custom v-slot="{ navigate, href }">
								<a :href="linkCreator(this.$i18n.locale, href)" @click="navigate">
									coDiver
								</a>
							</router-link>

						</div>
					</div>
				</li>

				<li class="proje">
					<router-link :to="linkCreator(this.$i18n.locale, 'projects')" custom v-slot="{ navigate, href }">
						<a :href="href" @click="navigate" class="menu-item">
							<i :class="[isExactActive == true ? 'fa-solid' : 'fa-regular', 'fa-circle']"></i>
							{{ $t('header.projeler')}}
						</a>
					</router-link>
					<div class="down-content3">

						<div class="content">

							<router-link :to="linkCreator(this.$i18n.locale, 'Project1')" custom v-slot="{ navigate, href }">
								<a :href="linkCreator(this.$i18n.locale, href)" @click="navigate">
									{{ $t('header.sualtı')}}
								</a>
							</router-link>

							</div>


							<div class="content">
							<router-link :to="linkCreator(this.$i18n.locale, 'Project2')" custom v-slot="{ navigate, href }">
								<a :href="linkCreator(this.$i18n.locale, href)" @click="navigate">
									{{ $t('header.denizaltı')}}
								</a>
							</router-link>
							</div>

							<div class="content">
							<router-link :to="linkCreator(this.$i18n.locale, 'Acusto')" custom v-slot="{ navigate, href }">
								<a :href="linkCreator(this.$i18n.locale, href)" @click="navigate">
									{{ $t('header.akusto')}}
								</a>
							</router-link>
							</div>
							<div class="content">
							<router-link :to="linkCreator(this.$i18n.locale, 'Projetct4')" custom v-slot="{ navigate, href }">
								<a :href="linkCreator(this.$i18n.locale, href)" @click="navigate">
									{{ $t('header.helikopter')}}
								</a>
							</router-link>
						</div>

					</div>
				</li>

				<li class="biz">
					
					<router-link :to="linkCreator(this.$i18n.locale, 'contact-us')" custom v-slot="{ navigate, href }">
						<a :href="href" @click="navigate" class="menu-item">
							<i :class="[isExactActive == true ? 'fa-solid' : 'fa-regular', 'fa-circle']"></i>
							{{ $t('header.bize')}}
						</a>
					</router-link>
				

					<div class="down-content4">
						<div class="content">

						<router-link :to="linkCreator(this.$i18n.locale, 'human')" custom v-slot="{ navigate, href }">
							<a :href="linkCreator(this.$i18n.locale, href)" @click="navigate">
								{{ $t('header.insan')}}
							</a>
						</router-link>
						</div>


					</div>
				</li>

			</ul>

		</div>

		<div>
			<language-switcher />
		</div>

		<div class="menu-icon">
			MENU
		</div>
	</div>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue'

export default {
	name: "HeaderInside",
	props: {
		fixed: {
			type: Boolean
		},
		relative: {
			type: Boolean
		},
		transparent: {
			type: Boolean
		}
	},
	components: {
		LanguageSwitcher
	},
	methods: {
		linkCreator: function (locale, route) {
			let result = '/'+locale+'/'
			var str = route.toLowerCase()
			result += str
			return result
		}
	}
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
		document.getElementsByClassName("_fixed")[0].style.top = "0";
	} else {
		document.getElementsByClassName("_fixed")[0].style.top = "-70px";
	}
}

</script>

<style sccoped>

._container_inside{
	display: flex;
	flex-direction: row;
	flex-grow: 1;
	padding-left: 5%;
	padding-right: 5%;
	height: 70px;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	z-index: 100;
	transition: background 0.5s;
}

._relative{
	position: relative;
	top: 0;
	right: 0;
	left: 0;
	background-color: white !important;
	border-bottom: 1px solid rgb(170, 161, 161);
}

._fixed{
	position: fixed;
	transition: top 0.3s;
	top: -70px;
	background-color: white !important;
}

._transparent{
	position: fixed;
	transition: top 0.3s;
	top: 0;
	background-color: transparent !important;
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


._transparent .list ul li a.menu-item {
	color: white !important;
}

.list ul li a.menu-item {
	color: black;
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


.down-content1 a,
.down-content2 a,
.down-content3 a,
.down-content4 a {
	color: black !important;
	text-decoration: none;
	display: block;
	font-family: 'DM Sans', sans-serif;
	display: inline-block;
	background-image: linear-gradient(#2b2b2b, #2b2b2b);
	background-size: 0% 1px;/*                        ↓ y position of underline. you can change as 50% to see it. */
	background-position: 0% 100%;
	background-repeat: no-repeat;
	transition: background 0.3s linear;


	
	
	


}
.content{
	padding: 10px;
}


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
	font-size: 14px;
	padding: 20px;
   

}



.down-content1 a:hover{
	background-size: 100% 1px;
}

.down-content2 a:hover{
	background-size: 100% 1px;
}

.down-content3 a:hover{
	background-size: 100% 1px;
}
.down-content4 a:hover{
	background-size: 100% 1px;
}


.list .about:hover .down-content1 {
	display: block;


}



.list .ürün:hover .down-content2 {
	display: block;
}



.list .proje:hover .down-content3 {
	display: block;
}



.list .biz:hover .down-content4 {
	display: block;
}


@media (max-width: 1026px) {
	.list {
		display: none;
	}
}
 
</style>