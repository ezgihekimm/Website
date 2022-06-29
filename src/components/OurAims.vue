<template>
<div class="container-fluid us">
    <div class="row head">

        <div>
            <h1 class="animate__animated animate__fadeInLeft mb-4" style="font-size:50px;">
                {{$t('aims.hedeflerimiz')}}
            </h1>
        </div>

        <div class="img mt-1">
            <img src="@/assets/images/engin2.jpg" alt="">
        </div>

    </div>

    <div class="info2">
        <h2 class="head1">{{$t('aims.hedeflerimiz')}}</h2>
        <ul class="info-ul p-5">
            <li>
                <div class="dot">1</div>
                {{$t('aims.amac1')}}
            </li>
            <li>
                <div class="dot">2</div>
                {{$t('aims.amac2')}}
            </li>
            <li>
                <div class="dot">3</div>
                {{$t('aims.amac3')}}
            </li>
        </ul>
    </div>

</div>
</template>

<script>
import 'animate.css'

export default {
    components: {

    },

}
</script>

<style scoped>
.us {
    padding-top: 10px;
}

.head1 {
    display: flex;
    justify-content: center;

}

.History {

    padding-bottom: 20px;
}

.head2 {
    padding: 5%;
}

.us {
    font-family: 'DM Sans', sans-serif;

}

.head {
    padding: 5%;
    color: rgb(46, 46, 46);
    font-weight: bolder;

}

.info2 {
    padding-bottom: 5%;

}

.img img {
    width: 100%;
    height: 65vh;
}

.info-ul li {
    display: flex;
    align-items: center;
    padding-bottom: 50px;
    font-size: large;
}

.info {
    background-color: #F2F4F8;
    width: 35%;
    height: 40vh;
}

.info-ul li .dot {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 100px;
    min-width: 23px;
    min-height: 23px;
    margin-right: 10px;
    font-size: 14px;
}
</style>
