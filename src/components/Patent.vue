<template>
    <div class="container-fluid con">

        <div class="row _patent">
            <div class="col-md-12 head">

                <h1>Patentler</h1>
               
            </div>
       
            <hr style="color:aliceblue">
        </div>

        <div class="row _patent">
            <div class="col-md-12 head">
                <div class="dot">1</div>
                <h2>{{$t('patent.patent1')}}</h2>
            </div>
                  <div class="button" style="font-weight:bold">Yazılım</div>
                  <div class="button" style="font-weight:bold">Optik</div>
            <hr style="color:aliceblue">
        </div>

        <div class="row _patent">
            <div class="col-md-12 head">
                <div class="dot">2</div>
                <h2>{{$t('patent.patent2')}}</h2>
            </div>
            <hr style="color:aliceblue">
        </div>

        <div class="row _patent">
            <div class="col-md-12 head">
                <div class="dot">3</div>
                <h2>{{$t('patent.patent3')}}</h2>
            </div>
            <hr style="color:aliceblue">
        </div>

        <div class="row _patent">
            <div class="col-md-12 head">
                <div class="dot">4</div>
                <h2>{{$t('patent.patent4')}}</h2>
            </div>
            <hr style="color:aliceblue">
        </div>

        <div class="row _patent">
            <div class="col-md-12 head">
                <div class="dot">5</div>
                <h2>{{$t('patent.patent5')}}</h2>
            </div>
            <hr style="color:aliceblue">
        </div>

        <div class="row _patent">
            <div class="col-md-12 head">
                <div class="dot">6</div>
                <h2>{{$t('patent.patent6')}}</h2>
            </div>
            <hr style="color:aliceblue">
        </div>

        <div class="row _patent">
            <div class="col-md-12 head">
                <div class="dot">7</div>
                <h2>{{$t('patent.patent7')}}</h2>
            </div>
            <hr style="color:aliceblue">
        </div>

        <div class="row _patent">
            <div class="col-md-12 head">
                <div class="dot">8</div>
                <h2>{{$t('patent.patent8')}}</h2>
            </div>
            <hr style="color:aliceblue">
        </div>

        <div class="row _patent">
            <div class="col-md-12 head">
                <div class="dot">9</div>
                <h2>{{$t('patent.patent9')}}</h2>
            </div>
            <hr style="color:aliceblue">
        </div>

        <div class="row _patent">
            <div class="col-md-12 head">
                <div class="dot">10</div>
                <h2>{{$t('patent.patent10')}}</h2>
            </div>
            <hr style="color:aliceblue">
        </div>

    </div>

    <Yazi></Yazi>



</template>




<script>

 import Yazi from './Yazi.vue'

    export default {
        components: {
            Yazi
        },

    }
</script>



<style scoped>
    .head h1 {
        font-family: "DM Sans", sans-serif;
        font-weight: 500;
        color: aliceblue;
        font-size: 45px;
        -ms-word-wrap: break-word;
        word-wrap: break-word;


    }

    .head h2 {
        color: aliceblue;
        font-family: "DM Sans", sans-serif;
        font-weight: 500;
        font-size: 26px;
        -ms-word-wrap: break-word;
        word-wrap: break-word;
    }

    .head {


        display: flex;
        justify-content: start;
    }

    ._patent {


        width: 100%;
        height: 20vh;
        display: flex;
        align-items: center;


    }
    .button {
       border: 1px solid white;
        border-radius: 40px;
        border-color: white;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
        padding: 15px 32px;
        color:white;
        width: 7%;
        max-height: 30px;
       font-family: "DM Sans", sans-serif;
      margin-left: 5px;
     

         }


    .con {

        width: 100%;
        height: 230vh;
        background-color: #121619;
        margin-bottom: 100px;
        padding-left: 100px;
        padding-right: 100px;
        




    }

    .dot {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid white;
        border-radius: 100px;
        min-width: 23px;
        min-height: 23px;
        margin-right: 10px;
        font-size: 14px;
        color: white;
    }

    .head:after {
        content: '';
        position: absolute;
        width: 50%;
        transform: scaleX(0);
        height: 1px;
        bottom: 0;
        left: 0;
        background-color:
           aliceblue;
        transform-origin: bottom right;
        transition: transform 1s ease-out;
    }

    .head:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    .head {
      
        position: relative;
        color:
          aliceblue
    }
</style>