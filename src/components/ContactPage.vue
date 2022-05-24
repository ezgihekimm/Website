<template>
    <div class="container-fluid us">
        <div class="row head">
            <div>
                <h1 class="mb-5"   style="font-size:55px">Bize Ulaşın</h1>
            </div>

            <div class="img mt-5">
                <img src="@/assets/images/engin2.jpg" alt="">
            </div>
           


        </div>
       <yazi> </yazi>
       <div class="row head2 mb-5">
           <div class="col-md-3 info">

           </div>
           
       </div>
    </div>
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
.head2{
    padding: 5%;
}
    .us {
        font-family: 'DM Sans', sans-serif;

    }
    .head{
        padding: 5%;
   
    }

    .img img {
        width: 100%;
        height: 65vh;
    }
    .info{
        background-color: #F2F4F8;
        width: 35%;
        height: 40vh;
          }
</style>