<template>
    <div class="container-fluid footer">
        <div class="row">
            <div class="col-md-3 first">
                <h5 class="baslik">
                    {{ $t('footer.bau')}} <h5 class="baslik mb-5">{{ $t('footer.bau1')}}</h5>
                </h5>
                <p class="info">Telefon: +90 212 381 0970</p>
                <p class="info">Adres: Altunizade Mah. Oymacı Sok. No: 15 34662 Üsküdar-İstanbul Bahçeşehir Koleji
                    Nakkaştepe 50.Yıl Kampüsü </p>
                <img class="logo" src="@/assets/images/logo1.png" width="150px">

            </div>
            <div class="col-md-3 second mt-4">
                <ul class="info1 ">
                    <li> {{ $t('footer.hak')}}</li>
                    <li><a href="#">biz kimiz?</a></li>
                    <li><a href="#">haberler</a></li>
                    <li><a href="#">insan kaynakları</a></li>
                   
                </ul>

            </div>
            <div class="col-md-3 third mt-4">

               <ul class="info1">
                   <li><a href="#">ürünler</a></li>
                    <li><a href="#">projeler</a></li>
                    <li><a href="#">bize ulaşın</a></li>
                    <li><a href="#">iletişim</a></li>
               </ul>


            </div>
            <div class="col-md-2 four">
                <h5 class="baslik mt-5">{{ $t('footer.sosyal')}}</h5>

            </div>
        </div>

    </div>
</template>
<script>
export default{
    name:'Footer'
}

</script>


<style scoped>
    .footer {
        width: 100%;
        height: 420px;
        background-color: #1d1d1d;
        font-family: 'DM Sans', sans-serif;
    }

    .first {

        height: 300px;
        margin-left: 100px;
        margin-top: 50px;
        text-align: justify;
    }

    .baslik {
        color: rgb(233, 229, 229);
        font-weight: bolder;
        font-family: 'DM Sans', sans-serif;

    }

    .logo {
        margin-top: 40px;
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

    .info1 {
        margin-top: 50px;
        list-style-type: none;
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

    
    
</style>