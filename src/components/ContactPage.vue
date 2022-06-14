<template>
    <div class="_container">
        <div class="info">
                <h2 class="baslik">
                    {{ $t('footer.bau')}} <h2 class="baslik mb-5">{{ $t('footer.bau1')}}</h2>
                </h2>
                <p class="info1" style="font-size:20px"> <span style="font-weight:bold">{{$t('footer.telefon')}}</span>+90 212 381 0970 </p>
                
                <div class="adress"><p class="info1" style="font-size:20px"> <span style="font-weight:bold">{{$t('footer.adres1')}}</span>{{$t('footer.adres')}}</p></div>

        </div>
        <div class="form">
            <div class="head">
                <h2>{{$t('footer.bize')}}</h2>
            </div>
            <div class="item1">
                
                <input style="border:none;" v-model="message1" placeholder="Email"/>
                <hr>
            </div>
         
            <div class="item1">
               
                <input  style="border:none" v-model="message2" placeholder="Name" />
                <hr>
            </div>
        
            <div class="item1">
            
                <textarea style="border:none;" v-model="message3" placeholder="Message"></textarea>
                  <hr>
            </div>
            
            <div class="button" @click="handleInput" type="button"> Send a Message

                <span class="material-symbols-outlined arrow">
                    north_east
                </span>

            </div>


        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message1: '',
                message2: '',
                message3: '',
             

            }
        },
        methods: {
            handleInput: function (message1,message2,message3) {
                console.log( "Mail :" + this.message1); 
                console.log( "Name :" +this.message2);
                console.log("Message :" +this.message3);
                // logs the input value
            },
        },
    }
</script>

<style scoped>
    ._container {
        display: flex;
        padding-right: 5%;
        padding-left: 5%;
        width: 100%;
        height: 100vh;
        font-family: 'DM Sans', sans-serif;
        justify-content: space-between;

    }

    .form {
        width: 50%;
        height: 100vh;
        padding: 5%;
        display: flex;
        flex-direction: column;

    }
    textarea:focus, input:focus{
    outline: none;
                 }

     .info{
         padding: 5%;
         padding-left: 0;
         padding-top: 9%;
         font-family: 'DM Sans', sans-serif;
     

                 }
                 .info1{
                     padding-bottom:3%;

                 }
               
                 .adress{
                     width: 310px;
                 }

    .form {
        width: 50%;
        height: 100vh;
        justify-content: center;

    }

    .head {
        justify-content: flex-start;
        align-items: flex-start;
        flex-grow: 0;
        padding-bottom: 7%;

    }

    .item1 {
        border: none;
        padding-bottom: 5%;
    }

    .button {
        background-color: black;
        border-radius: 40px;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
        padding: 15px;
        color: white;
        width: 180px;
        max-height: 45px;
        margin-top: 30px;

    }

    .material-symbols-outlined {
        font-size: 25px;
        transition: transform 200ms;
        display: flex;

    }

    .button>span:hover {
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
    }

    .arrow {
        color: white;
    }
</style>