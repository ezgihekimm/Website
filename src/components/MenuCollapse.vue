<template>
<div class="_container">
	<div id="mySidenav" class="sidenav">
		<div class="_inside_container" style="container">
			<div class="closeContainer" @click="closeNav">
				<img src="@/assets/images/close.png" alt="" class="close">
			</div>
			<img src="@/assets/images/logo.png" alt="" class="logo">
			
			<div class="title">BAU İnovasyon ve Danışmanlık A.Ş</div>

			<div class="addressTitle">Adres Bilgisi</div>
			<div class="address">Mithatpaşa Mah. Rumeli Yolu Cad. Bahçeşehir Üniversitesi Eğitim Binası Blok No: 35/24 İç Kapı No: 6 Eyüpsultan/İSTANBUL</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: "MenuCollapse",
	props: {
		toggle: {
			type: Boolean
		}
	},
	data() {
		return {
			collapsed: true
		}
	},
	watch: {
		toggle: function(newVal, oldVal) {
			console.log('collabse', newVal, oldVal)
			if(!this.collapsed) {
				this.closeNav();
			}else{
				this.openNav();
			}
		}
	},
	methods: {
		openNav() {
			document.getElementById("mySidenav").style.width = "400px";
			this.collapsed = false;
		},
		closeNav() {
			document.getElementById("mySidenav").style.width = "0";
			this.collapsed = true;
		},
	}
}
</script>

<style scoped>

.sidenav {
	height: 100%;
	width: 0;
	position: fixed;
	z-index: 101;
	top: 0;
	right: 0;
	background-color: white;
	overflow-x: hidden;
	transition: 0.8s;
	-webkit-transition: 0.8s;
	box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
	display: flex;
}

._inside_container{
	min-width: 400px;
	padding-top: 30px;
	padding-left: 60px;
	padding-right: 60px;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
}

.closeContainer{
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-bottom: 40px;
	cursor: pointer;
}

.close{
	width: 23px;
	object-fit: contain;
	display: flex;
}

.logo{
	width: 100px;
	object-fit: contain;
}

.title{
	width: 100%;
	display: flex;
	padding-top: 10px;
	font-family: 'DM Sans', sans-serif;
	font-size: 22px;
	/* font-weight: 500; */
}

.addressTitle{
	padding-top: 40px;
	width: 100%;
	display: flex;
	font-family: 'DM Sans', sans-serif;
	font-size: 18px;
	font-weight: 500;
}

.address{
	padding-top: 10px;
	width: 100%;
	display: flex;
	font-family: 'DM Sans', sans-serif;
	font-weight: 300;
	font-size: 15px;
	line-height: 30px;
}

</style>