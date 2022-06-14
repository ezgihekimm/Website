<template>
    <div class=" container-fluid _container">
   <div class="head">

            <h5 class="head1">
                <div class="dot"></div> <div class="div"></div>DAKIS
            </h5>
        </div>


        <div class="_head">
            <h2>
                
                {{$t('project2.baslik')}}</h2>
        </div>
        <div class="info1">
            <p>
                
                
                

                {{$t('project2.amac')}}
            </p>
        </div>
        <div class="row _row">



            <div class="col-md-6">
                <div class="info-ul">

                    <h5>
                         
                        {{$t('project2.bilgi')}}</h5>



                </div>
                </div>

                <div class="col-md-6">
                    <div class="img">
                        <img src="@/assets/images/denizaltı.png" alt="">
                    </div>
                </div>

            




        </div>









    </div>
</template>

<script>



</script>


<style scoped>

    ._container {
        background-color: #121619;
        width: 100%;
        height: 130vh;
        margin-bottom: 100px;
        font-family: 'DM Sans', sans-serif;
        color: aliceblue;
    }
    .div
{
    width: 5px;
}
.head1{
    letter-spacing: 2px;
    font-family: 'DM Sans', sans-serif;

}
    ._head {
       text-align: center;


    }

    ._head h2 {
        color: rgb(229, 236, 243);
        text-align: center;
        width: 50%
    }

    ._row {
        padding-top: 5%;
    }
  .dot {
        height: 5px;
        width: 5px;
        background-color: rgb(229, 236, 243);
        border-radius: 50%;
        display: inline-block;
       
    }
    h5 {
        color: rgb(229, 236, 243);
        font-family: 'DM Sans', sans-serif;
        padding-top: 50px;
        line-height: 2.3rem;
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
        width: 30%
    }

    .img img {
        width: 80%;
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