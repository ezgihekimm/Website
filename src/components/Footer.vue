<template>
    <div class="container-fluid footer" id="footer1">
        <div class="row">
            <div class="col-md-3 first" id="item1">
                <h5 class="baslik">
                    {{ $t('footer.bau')}} <h5 class="baslik mb-5">{{ $t('footer.bau1')}}</h5>
                </h5>
                <p class="info">Telefon: +90 212 381 0970</p>
               
                <p class="info">Adres: Altunizade Mah. Oymacı Sok. No: 15 34662 Üsküdar-İstanbul Bahçeşehir Koleji
                    Nakkaştepe 50.Yıl Kampüsü </p>
                    <img class="logo" src="@/assets/images/logo1.png" >

               

            </div>
            <div class="col-md-3 second mt-4" id="info">
                <ul class="info1 " id="info1">
                    <li >
                        <router-link to="/hakkimizda" custom v-slot="{ navigate, href }">
                            <a :href="href" @click="navigate" class="menu-item">

                                {{ $t('header.hakkimizda')}}
                            </a>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/who-are-we" custom v-slot="{ navigate, href }">
                            <a :href="href" @click="navigate" class="head" >
                                {{ $t('header.bizkimiz')}}
                            </a>
                        </router-link>
                    </li>
                    <li><a href="#">haberler</a></li>
                    <li><a href="#" class="head1">insan kaynakları</a></li>
                     

                </ul>

            </div>
            <div class="col-md-3 third mt-4" id="info">

                <ul class="info1" id="info1">
                    <li >
                        <router-link to="/products" custom v-slot="{ navigate, href }">
                            <a :href="href" @click="navigate" class="menu-item">

                                {{ $t('header.urunler')}}
                            </a>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/projects" custom v-slot="{ navigate, href }">
                            <a :href="href" @click="navigate" class="menu-item">
                               
                                {{ $t('header.projeler')}}
                            </a>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/contact-us" custom v-slot="{ navigate, href }">
                            <a :href="href" class="head2" @click="navigate" >
                                
                                {{ $t('header.bize')}}
                            </a>
                        </router-link>
                    </li>
                    <li><a href="#">iletişim</a></li>
                </ul>


            </div>
            <div class="col-md-1 four" id="info">
                <h5 class="baslik ">{{ $t('footer.sosyal')}}</h5>

            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'Footer'      
    }
</script>


<style scoped>
    .footer {
        width: 100%;
        max-width: 1900px;
        background-color: #121619;
        font-family: 'DM Sans', sans-serif;
        }

    .first {
       
      padding: 5%;
    text-align: justify;
    }
.head{
    width: 100%;
    max-width: 100px;
}
.head1 , .head2{
    width: 100%;
    max-width: 142px;
}
.four{
    padding: 5%;
    width: 25%;
    max-width:650px;
}


    .baslik {
        color: rgb(233, 229, 229);
        font-weight: bolder;
        font-family: 'DM Sans', sans-serif;

    }

    .logo {
        margin-top: 40px;
        width:150px;
    }

    .info {
        color: rgb(184, 184, 184);
        margin-bottom: 8px;
        font-size: 15px;
     
    }

    .info1 li a {
        color: rgb(184, 184, 184);
        text-decoration: none;
        text-align: justify;
        margin-left: 80px;
        padding: 8px 16px;
        font-family: 'DM Sans', sans-serif;
        font-size: 15px;
        text-transform: capitalize;
    }

    .info1 li {
        color: rgb(184, 184, 184);
        text-decoration: none;
        text-align: justify;
        margin-left: 80px;
        padding: 8px 16px;
        font-family: 'DM Sans', sans-serif;
        font-size: 15px;
        text-transform: capitalize;



    }

    .info1 {
        margin-top: 50px;
        list-style-type: none;
        padding: 5%;
    }

    ul li {
        margin-bottom: 14px;
    }

    .info1 .hlink a {
        color: rgb(233, 229, 229);
        list-style: none;
        text-align: justify;
        font-size: 14px;
        font-weight: bolder;


    }

    .info1 .hlink :before {
        content: '\25cb\a0';
        font-size: 11px;
    }

    .info1 a:hover {
        color: rgb(233, 229, 229);
        ;

    }

    @media screen and ( max-width: 1200px) {
        #footer{
            width:100%;
        }
         
         #info{
             width: 100%;
             
         }
         #item1{
             width: 100%;

         }
    }
</style>