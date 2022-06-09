<template>
    <div class="container-fluid containerr">
        <div class="row row1 justify-content-between ">
            <div class="col-lg pe-md-4 img ">
            </div>

            <div class="col-lg ps-md-4  info  ">
                <div class="Head">
                    <h2>{{$t('home.hakkımızda')}}</h2>
                </div>
                <hr class="line">
                <div class="contain">
                    <div class="first">
                        <span class="number">01</span>
                        <h3 class="first1">{{$t('home.bizkimiz')}}</h3>
                        <div style="display: flex; flex-grow: 1;"></div>

                        <span id="" class="material-symbols-outlined" @click="show=!show" type="button">
                            arrow_downward
                        </span>

                    </div>
                 <transition name="slide">
                        <div class="info" v-if="show" style="width:70%">

                            <p> {{ $t('home.biz')}} </p>
                            <div class="button" type="button">Daha Fazlası <span
                                    class="material-symbols-outlined arrow">
                                    north_east
                                </span></div>
                        </div>
                        </transition>
                    

                    <hr class="line">


                    <div class="second">
                        <span class="number">02</span>
                        <h3 class="second1"> {{$t('home.hedeflerimiz')}} </h3>
                        <div style="display: flex; flex-grow: 1;"></div>
                        <span class="material-symbols-outlined"  @click="show1=!show1" type="button">
                            arrow_downward
                        </span>
                    </div>
                   
                     <transition name="slide">
                        <div class="info" v-if="show1" style="width:70%">
                            <p> {{ $t('home.hedef')}} </p>
                            <div class="button" type="button">Daha Fazlası <span
                                    class="material-symbols-outlined arrow">
                                    north_east
                                </span></div>
                        </div>
                  </transition>





                    <hr class="line">

                    <div class="third">
                        <span class="number">03</span>
                        <h3 class="third1"> {{$t('home.misyon')}} </h3>
                        <div style="display: flex; flex-grow: 1;"></div>
                        <span class="material-symbols-outlined"  @click="show2=!show2" type="button">
                            arrow_downward
                        </span>
                    </div>
                  <transition name="slide">
                        <div class="info" v-if="show2" style="width:70%">
                            <p> {{ $t('home.vizyon')}} </p>

                            <div class="button" type="button"> Daha Fazlası
                                 <span
                                    class="material-symbols-outlined arrow">
                                    north_east
                                </span>

                                </div>
                        </div>
                 </transition>
                    <hr class="line">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutUs',
        data: function () {
            return {
                show: true,
                show1:false,
                show2:false,

            }
        }
    }
</script>


<style scoped>
    /* we will explain what these classes do next! */
  
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.7s ease-in-out;
}

.slide-enter-to,
.slide-leave-from {
  overflow: hidden;
  max-height: 1000px;
}

.slide-enter-from,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
    .button {
        background-color: black;
        border-radius: 40px;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
        padding: 15px 32px;
        color: white;
        width: 45%;
        max-height: 40px; 
        margin-top: 30px;
       
        }


    .info {
        margin-left: 122px;
        padding-bottom:10px
      

    }

    .containerr {
        padding: 5%;
        font-family: 'DM Sans', sans-serif;
        display: flex;
    }

    .img {
        width: 871px;
        height: 770px;
        background-color: #1d1d1d;
    }



    .row1 {
        width: 100%;
    }

    .Head {
        display: flex;
        justify-content: start;
        margin-top: 150px;
        margin-left: 100px;

    }

    .Head h2 {

        font-size: 45px;
        margin-bottom: 40px;
        letter-spacing: 1px;
    }

    .line {
        margin-left: 100px;
        width: 100%;
    }

    .first,
    .second,
    .third {
        padding-left: 100px;
        padding-top: 20px;
        padding-bottom: 10px;
        display: flex;
        align-items: center;

    }

    .number {
        display: flex;
        align-self: flex-start;
        margin-right: 10px;
        font-size: 14px;
        margin-top: 3px;
    }

    .first1,
    .second1,
    .third1 {
        display: flex;
    }


    .material-symbols-outlined {
        font-size: 25px;
        transition: transform 200ms;
        display: flex;

    }

    .button > span:hover {
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
    }

    .arrow {
        color: white;
    }
</style>