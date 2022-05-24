<template>
<div class="container">
    

    <a @click="openNav()" class="header-menu-toggle" href="#0">

        <i class="fa-solid fa-bars" style="margin-left:20px; color:white; font-size:25px"></i>
        <span class="header-menu-text">Menu</span>

    </a>

    <div id="mySidenav" class="sidenav">
        <div class="container" style="width:250px;">

            <div class="row" style="margin-bottom:60px">

                <div class="col d-flex justify-content-start ms-4">
                    <h3 class="">YÖNLENDİRME</h3>
                </div>
                <div class="col d-flex justify-content-end"> <a href="javascript:void(0)" class="closebtn" style="height:20px; width:20px" @click="closeNav()">&times;</a></div>

            </div>

            <div class="row ">
                <div class="col-md-12 d-flex justify-content-start ms-4">
                    <a href="#">HAKKIMIZDA</a>
                </div>

            </div>

            <div class="row ">
                <div class="col-md-12 d-flex justify-content-start ms-4">
                    <a href="#">HEDEFLERİMİZ</a>
                </div>

            </div>
            <div class="row ">
                <div class="col-md-12 d-flex justify-content-start ms-4">
                    <a href="#">PATENTLER</a>
                </div>

            </div>
            <div class="row ">
                <div class="col-md-12 d-flex justify-content-start ms-4">
                    <a href="#">ÜRÜNLER</a>
                </div>

            </div>
            <div class="row ">
                <div class="col-md-12 d-flex justify-content-start ms-4">
                    <a href="#">PROJELER</a>
                </div>

            </div>
            <div class="row ">
                <div class="col-md-12 d-flex justify-content-start ms-4">
                    <a href="#">BİZE ULAŞIN</a>
                </div>

            </div>

            <div class="row ">
                <div class="col-md-12 d-flex justify-content-start ms-4">
                    <a href="#">İLETİŞİM</a>
                </div>

            </div>
        </div>

    </div>

</div>
</template>

<script>
export default {

    methods: {

        openNav() {
            document.getElementById("mySidenav").style.width = "250px";

        },
        closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        },

    }
}
</script>

<style scoped>
body {
    font-family: "Lato", sans-serif;
}

.sidenav {
    height: 100%;
    /* 100% Full-height */
    width: 0;
    /* 0 width - change this with JavaScript */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Stay on top */
    top: 0;
    /* Stay at the top */
    right: 0;
    background-color: #050303;
    /* Black*/
    overflow-x: hidden;
    /* Disable horizontal scroll */
    padding-top: 60px;
    /* Place content 60px from the top */
    transition: 0.8s;
    -webkit-transition: 0.8s;
    /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {

    text-decoration: none;
    font-size: 15px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    display: block;
    transition: 0.3s;
    line-height: 60px;
    font-family: "Montserrat", sans-serif;
}

.sidenav h3 {

    color: #5aa3f1;
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1rem;
    line-height: 25px;

}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
    color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
    font-size: 33px;
    line-height: 25px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
    transition: margin-left .5s;
    padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }

    .sidenav a {
        font-size: 18px;
    }
}

.header-menu-text {
    display: block;
    position: absolute;
    top: 0;
    left: -70px;
    width: 70px;
    padding-left: 12px;
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    font-weight: 600;

}

.header-menu-toggle {
    position: fixed;
    right: 60px;
    top: 24px;
    height: 42px;
    width: 42px;
    line-height: 42px;
    font-family: "Montserrat", sans-serif;
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: .3rem;
    color:#5aa3f1;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
}
</style>
