<template>
    <div class=" container-fluid _container">
        <div class="head">

            <h5 class="head1">
                <div class="dot"></div>TÜBİTAK TEYDEB-1501
            </h5>
        </div>

        <div class="_head">
            <h2>SUALTI OPTİK SPEKTRUM ÖLÇÜM CİHAZI (coCTD)</h2>
        </div>
        <div class="info1">
            <p>
              {{$t('project1.amac')}} 
            </p>
        </div>
        <div class="row _row">
         
            <div class="col-md-4">
                    <div class="info-ul">
            <li>
                <div class="dot">1</div>
                <h4>{{$t('project1.1')}}</h4>
            </li>
            <li>
                <div class="dot">2</div>
                <h4>{{$t('project1.2')}}</h4>
            </li>
            <li>
                <div class="dot">3</div>
                <h4>{{$t('project1.3')}}</h4>
            </li>
            <li>
                <div class="dot">4</div>
                <h4>{{$t('project1.4')}}</h4>
            </li>

        </div>

            </div>
               <div class="col-md-4">
                <div class="img">
                    <img src="@/assets/images/Resim1.png" alt="">
                </div>
            </div>

            <div class="col-md-4">
                    <div class="info-ul">
            <li>
                <div class="dot">5</div>
                <h4> {{$t('project1.5')}}</h4>
            </li>
            <li>
                <div class="dot">6</div>
                <h4>{{$t('project1.6')}}</h4>
            </li>
            <li>
                <div class="dot">7</div>
                <h4>{{$t('project1.7')}}</h4>
            </li>
            <li>
                <div class="dot">8</div>
                <h4>{{$t('project1.8')}}</h4>
            </li>

        </div>
            </div>


        </div>




   


    </div>
</template>

<style scoped>
    ._container {
        background-color: #121619;
        width: 100%;
        height: 100vh;
        margin-bottom: 100px;
        font-family: 'DM Sans', sans-serif;
        color: aliceblue,


    }
    ._row{
        padding-top:5%;
    }

    h5 {
        color: rgb(229, 236, 243);
        font-family: 'DM Sans', sans-serif;
        padding-top: 50px;
    }

    h4 {
        color: rgb(229, 236, 243);
        font-family: 'DM Sans', sans-serif;

    }

    .head1 {
        display: flex;
        justify-content: center;

    }



    .img {
        display: flex;
      
        width: 100%;
        flex-direction: row;
        justify-content: center;




    }

    .info1 {
        display: flex;
        justify-content: center;

    }

    .info1 p {
        color: rgb(169, 167, 167);
        text-align: center;
        width: 20%
    }

    .img img {
        width: 70%;
    }

    ._head {
        display: flex;
        justify-content: center;
        color: rgb(229, 236, 243);
        font-family: 'DM Sans', sans-serif;
        padding-bottom: 30px;

    }

    .dot {
        height: 5px;
        width: 5px;
        background-color: rgb(229, 236, 243);
        border-radius: 50%;
        display: inline-block;
    }

    .info-ul {

        display: flex;
        flex-direction: column;
        justify-content: start;
        padding-left: 5%;
        padding-top: 3%;
    }


    .info-ul li {
        display: flex;
        align-items: center;
        padding-bottom: 50px;
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
        border: 1px solid rgb(229, 236, 243);
        border-radius: 100px;
        min-width: 20px;
        min-height: 20px;
        margin-right: 10px;
        font-size: 12px;
        color: rgb(229, 236, 243);
        background-color: #121619;
    }




    .info-ul1 {

        display: flex;
        flex-direction: column;
        width: 90%;



    }


    .info-ul1 li {
        display: flex;
        align-items: center;
        padding-bottom: 50px;
        justify-content: flex-end;


    }



    .info-ul1 li .dot {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid rgb(229, 236, 243);
        border-radius: 100px;
        min-width: 20px;
        min-height: 20px;
        margin-right: 10px;
        font-size: 12px;
        color: rgb(229, 236, 243);
        background-color: #121619;
    }
</style>