<template>
    <div class="_container">
        <div class="Head">

            <h1 style="color:aliceblue">Patentler</h1>
            <hr style="color:aliceblue">
        </div>


        <div class=" _patent">
            <div class="head">
                <div class="dot">1</div>

                <h2>{{$t('patent.patent1')}}</h2>

            </div>
            <div class="_button">
                <div class="button" style="font-weight:bold">Yazılım</div>
                <div class="button" style="font-weight:bold">Optik</div>

            </div>

            <hr style="color:aliceblue">
        </div>



        <div class=" _patent">
            <div class=" head">
                <div class="dot">2</div>
                <h2>{{$t('patent.patent2')}}</h2>
            </div>
            <div class="_button">
                <div class="button" style="font-weight:bold">Yazılım</div>
                <div class="button" style="font-weight:bold">Optik</div>
            </div>
            <hr style="color:aliceblue">
        </div>

        <div class="_patent">
            <div class=" head">
                <div class="dot">3</div>
                <h2>{{$t('patent.patent3')}}</h2>
            </div>
            <div class="_button">
                <div class="button" style="font-weight:bold">Yazılım</div>
                <div class="button" style="font-weight:bold">Optik</div>
            </div>
            <hr style="color:aliceblue">
        </div>

        <div class=" _patent">
            <div class=" head">
                <div class="dot">4</div>
                <h2>{{$t('patent.patent4')}}</h2>
            </div>
            <div class="_button">
                <div class="button" style="font-weight:bold">Yazılım</div>
                <div class="button" style="font-weight:bold">Optik</div>
            </div>
            <hr style="color:aliceblue">
        </div>

        <div class=" _patent">
            <div class="head">
                <div class="dot">5</div>
                <h2>{{$t('patent.patent5')}}</h2>
            </div>
            <div class="_button">
                <div class="button" style="font-weight:bold">Yazılım</div>
                <div class="button" style="font-weight:bold">Optik</div>
            </div>
            <hr style="color:aliceblue">

        </div>

        <div class="_patent">
            <div class="head">
                <div class="dot">6</div>
                <h2>{{$t('patent.patent6')}}</h2>
            </div>
            <div class="_button">
                <div class="button" style="font-weight:bold">Yazılım</div>
                <div class="button" style="font-weight:bold">Optik</div>
            </div>
            <hr style="color:aliceblue">
        </div>

        <div class="_patent">
            <div class="head">
                <div class="dot">7</div>
                <h2>{{$t('patent.patent7')}}</h2>
            </div>
            <div class="_button">
                <div class="button" style="font-weight:bold">Yazılım</div>
                <div class="button" style="font-weight:bold">Optik</div>
            </div>
            <hr style="color:aliceblue">
        </div>

        <div class=" _patent">
            <div class="head">
                <div class="dot">8</div>
                <h2>{{$t('patent.patent8')}}</h2>
            </div>
            <div class="_button">
                <div class="button" style="font-weight:bold">Yazılım</div>
                <div class="button" style="font-weight:bold">Optik</div>
            </div>
            <hr style="color:aliceblue">
        </div>

        <div class=" _patent">
            <div class="head">
                <div class="dot">9</div>
                <h2>{{$t('patent.patent9')}}</h2>
            </div>
            <div class="_button">
                <div class="button" style="font-weight:bold">Yazılım</div>
                <div class="button" style="font-weight:bold">Optik</div>
            </div>
            <hr style="color:aliceblue">


        </div>

        <div class=" _patent">
            <div class=" head">
                <div class="dot">10</div>
                <h2>{{$t('patent.patent10')}}</h2>
            </div>
            <div class="_button">
                <div class="button" style="font-weight:bold">Yazılım</div>
                <div class="button" style="font-weight:bold">Optik</div>
            </div>
            <hr style="color:aliceblue">
        </div>

    </div>






</template>




<script>
    

    export default {
        components: {

        },

    }
</script>



<style scoped>
    ._container {
        width: 100%;
        background-color: #121619;
        margin-bottom: 100px;
        padding: 0px 0px;
        display: flex;
        flex-direction: column;
        padding: 5%;
    }
   

    .Head {
        background-color: #121619;
        width: 100%;
        display: flex;
        align-content: center;
        padding-bottom: 4%;

    }

    ._button {
        display: flex;

    }

    .Head h1,
    .head h1 {
        font-family: "DM Sans", sans-serif;
        font-weight: 500;
        color: rgb(0, 0, 0);
        font-size: 60px;
        -ms-word-wrap: break-word;
        word-wrap: break-word;
    }

    ._patent {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-bottom: 2%;
    }

    .button {
        border: 1px solid white;
        border-radius: 40px;
        border-color: white;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
        color: white;
        width: 7%;
        font-family: "DM Sans", sans-serif;
        margin-left: 5px;
        margin-bottom: 10px;
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

    .head {
        min-width: 160px;
        z-index: 1;
        font-size: 14px;
        justify-content: start;
        padding-bottom: 2%;
    }


    .head h2 {
        color: aliceblue;
        text-decoration: none;
        font-family: 'DM Sans', sans-serif;
        background-image: linear-gradient(aliceblue, aliceblue);
        background-size: 0% 1px;
        background-position: 0% 100%;
        background-repeat: no-repeat;
        transition: background 0.3s linear;
        font-weight: 500;
        font-size: 26px;
        -ms-word-wrap: break-word;
        word-wrap: break-word;
        
    }

    .head h2:hover {
        background-size: 100% 1px;
    }
</style>