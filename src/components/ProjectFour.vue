<template>
    <div class=" container-fluid _container">
        <div class="head">

            <h5 class="head1">
                <div class="dot"></div> <div class="div"></div>{{$t('project4.head1')}}
            </h5>
        </div>

        <div class="_head">
            <h2>{{$t('project4.head')}}</h2>
        </div>
        <div class="info1">
            <p>
              {{$t('project4.amac')}} 
            </p>
        </div>
        <div class="row _row">
         
            <div class="col-md-6">
                    <div class="info-ul">
            <li>
                <div class="dot">1</div>
                <h4 style="width:72%">{{$t('project4.1')}}</h4>
            </li>
            <li>
                <div class="dot">2</div>
                <h4>{{$t('project4.2')}}</h4>
            </li>
            <li>
                <div class="dot">3</div>
                <h4>{{$t('project4.3')}}</h4>
            </li>
            <li>
                <div class="dot">4</div>
                <h4>{{$t('project4.4')}}</h4>
            </li>
             <li>
                <div class="dot">5</div>
                <h4>{{$t('project4.5')}}</h4>
            </li>

        </div>

            </div>
            <div class="col-md-6 video-player">
        <video class="video" width="650" controls loop muted autoplay ref="video">
          <source src="@/assets/images/video.mp4" type="video/mp4" >
        </video>
      </div>

            
        


        </div>

        




   


    </div>
</template>

 <script>
export default {
  name: "VideoPlayer",
   computed: {
    videoElement () {
      return this.$refs.video;
    }, 
  }
}
</script>


<style scoped>
    ._container {
        background-color: #121619;
        width: 100%;
        max-width: 1920px;
        padding: 5%;
        margin-bottom: 100px;
        font-family: 'DM Sans', sans-serif;
        color: aliceblue;
        
   

        


    }
    .video-player{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 5%;
        
      
        
    }
    .div
    {
        width:5px;
    }
    ._row{
        padding-top:5%;
    }

    h5 {
        color: rgb(229, 236, 243);
        font-family: 'DM Sans', sans-serif;
     
    }

    h4 {
        color: rgb(229, 236, 243);
        font-family: 'DM Sans', sans-serif;

    }

    .head1 {
        display: flex;
        justify-content: center;

    }
    ._head h2{
        width:50%;
        text-align: center;
      

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
        width: 50%
    }

    .img img {
        width: 75%;
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