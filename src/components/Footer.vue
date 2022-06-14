<template>
    <div class="_container" id="footer1">
               <div class="item">
                 <h4 class="baslik">
                    {{ $t('footer.bau')}} <h4 class="baslik mb-5">{{ $t('footer.bau1')}}</h4>
                </h4>
                
               
            </div>

            <div class="item">
                 <p class="info"><span style="color:aliceblue"> {{$t('footer.telefon')}} </span>+90 212 381 0970</p>
               
                <p class="info">  <span style="color:aliceblue">{{$t('footer.adres1')}}</span>{{$t('footer.adres')}}</p>
            </div>
       

     
       
         
                               
    
            <div class="" id="info">
                <h5 class="baslik ">{{ $t('footer.sosyal')}}</h5>

            </div>
            
            <div class="_logo" id="item1">

                  <img class="logo" src="@/assets/images/logo1.png" >


            </div>
        </div>


</template>
<script>
    export default {
        name: 'Footer'      
    }
</script>


<style scoped>
    ._container {
        width: 100%;
        max-width: 1900px;
        background-color: #121619;
        font-family: 'DM Sans', sans-serif;
        padding: 5%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
       
        }

.head{
    width: 100%;
    max-width: 100px;
}
.head1{
    width: 100%;
    max-width: 142px;
}
.item{
    width: 300px;
}



    .baslik {
        color: rgb(233, 229, 229);
        font-weight: bolder;
        font-family: 'DM Sans', sans-serif;

    }

    .logo {
        
        width:200px;
        height: 100px;
    }

    .info {
        color: rgb(184, 184, 184);
        font-size: 15px;
     
    }
    .item1{
      
    }





  
</style>