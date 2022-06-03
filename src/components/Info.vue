<template>
    <div class="container-fluid containerr">
        <div class="row row1">
            <div class="col-md-2 _info">
                <div class="img1 mb-4" style="width:300px; "><img src="@/assets/images/akustik1.png"></div>
                <div class="Head">
                    <h4 style="font-weight:bold;">{{$t('home.akustik')}}</h4>
                </div>
                <div class="info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum praesentium itaque, est, nemo
                        adipisci illum debitis </p>
                </div>
            </div>
            <div class="col-md-2 _info">
                <div class="img" style="width:200px"><img src="@/assets/images/optik1.png"></div>
                <div class="Head">
                    <h4 style="font-weight:bold;">{{$t('home.optik')}}</h4>
                </div>
                <div class="info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum praesentium itaque, est, nemo
                        adipisci illum debitis </p>
                </div>
            </div>
            <div class="col-md-2 _info">
                <div class="img" style="width:190px"><img src="@/assets/images/devre.png"></div>
                <div class="Head">
                    <h4 style="font-weight:bold;">{{$t('home.elektrik')}}</h4>
                </div>
                <div class="info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum praesentium itaque, est, nemo
                        adipisci illum debitis </p>
                </div>
            </div>
            <div class="col-md-2 _info">
                <div class="img" style="width:190px"><img src="@/assets/images/Uydu.png"></div>
                <div class="Head">
                    <h4 style="font-weight:bold;">{{$t('home.izleme')}}</h4>
                </div>
                <div class="info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum praesentium itaque, est, nemo
                        adipisci illum debitis </p>
                </div>
            </div>
            <div class="col-md-2 _info">
                <div class="img" style="width:190px"><img src="@/assets/images/sunum.png"></div>
                <div class="Head">
                    <h4 style="font-weight:bold;">{{$t('home.eğitim')}}</h4>
                </div>
                <div class="info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum praesentium itaque, est, nemo
                        adipisci illum </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>


    .containerr {

        width: 100%;
        height: 70vh;
        font-family: 'DM Sans', sans-serif;
        position: relative;
        padding: 5%;
        display: flex;
        background-color: #121619;
       


    }
    .Head{
        color:white;
        letter-spacing: 0.5px;
        text-align: center;
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
        
    }
  
    .info{
        color: rgb(183, 179, 179);
    }

    .row1 {
        justify-content: space-between;
        align-items: center;
    }

   ._info {
        display: flex;
        flex-direction: column;
        transition: transform 250ms ease-in-out;
       text-align: center;
 

    }

    ._info:hover {
        transform: translateY(-30px);
    }

    

    

    .img {

        flex-direction: row;
        align-items: center;
        padding-bottom: 30px;
        display: flex;
        justify-content: end;
      }
    .img img {
        width: 60%;
        height: auto;
        object-fit: cover;
        display: flex;
        justify-content: center;
       

    }
    .img1 {

        flex-direction: row;
        align-items: center;
        padding-bottom: 30px;
        display: flex;
        justify-content: center;
      }
    .img1 img {
        width: 60%;
        height: auto;
        object-fit: cover;
        display: flex;
        justify-content: center;
       

    }
</style>