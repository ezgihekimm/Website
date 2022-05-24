<template>
    <div class="container-fluid who">
        <div class="row">
            <div class="col-md-6 img pe-md-4">
                <img src="@/assets/images/engin2.jpg">
            </div>

            <div class="col-md-6 info ps-md-4">
                <div class="d-block d-sm-block d-md-none" style="height: 30px"></div>
                <h2 class="about">Biz Kimiz?</h2>
                <p class="info1">
                    BAU A.Ş.; ilk etapta 2008 yılında Bahçeşehir Üniversitesi bünyesinde Teknoloji Geliştirme Birimi
                    olarak faaliyetlerine başladı. Sonrasında 2012 yılında ise Proje Geliştirme Birimi ismini alarak 1.1
                    M Euro bütçe ile “Denizaltı Helikopter Arasında Güvenli Elektro Optik Haberleşme Sistemi” adlı
                    Savunma Sanayi Müsteşarlığı tarafından desteklenen Teknoloji Kazanım projesini yürüttü. 2016 yılında
                    ilk defa BAU A.Ş. adını alarak faaliyetlerini Teknopark İstanbul mevkiine taşıdı. 2016 senesinde
                    başka bir Savunma Sanayi Müsteşarlığı tarafından desteklenen İTÜ Nova ortaklığı ile Teknoloji
                    Kazanım projesini yürüttü. 2018 yılında Ar-Ge Merkezi başvurusu yapmak için Teknopark İstanbul’dan
                    ayrılarak Nakkaştepe Yerleşkesinde bulunan şimdiki binasına taşındı. 2018 yılından bu yana yapılan 2
                    tamamlanmış 2 devam etmekte olan TÜBİTAK Projelerini yürütmektedir.
                    BAU A.Ş. 23 personel, 8 farklı bölüm, 4 tamamlanmış 2 devam etmekte olan proje 4 prototip ve 10 adet
                    patent ile Türkiye’nin askeri ve sivil alanda teknolojik ihtiyaçlarını karşılamak için alanında
                    lider olmak için çalışmalarına devam etmektedir.
                </p>
                <h2 class="History">Tarihçe:</h2>
                <div class="info2">
                    <ul class="info-ul">
                        <li>
                            <div class="dot">1</div>
                            2005-2012 Bahçeşehir Üniversitesi Proje Geliştirme Birimi – Beşiktaş / İSTANBUL
                        </li>
                        <li>
                            <div class="dot">2</div>
                            2012-2016 Bahçeşehir Üniversitesi ARGE ve İnovasyon Projeleri Koordinatörlüğü- Beşiktaş /
                            İSTANBUL
                        </li>
                        <li>
                            <div class="dot">3</div>
                            2016-Halen BAU İnovasyon ve Danışmanlık A.Ş. Üsküdar/ İSTANBUL
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'WhoAreWe'
    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;

    }

    .who {
        width: 100%;
        color: rgb(255, 255, 255);
        background: linear-gradient(-45deg, #E8B892, #6170B1, #E2B48E, #6170B1);
        background-size: 400% 400%;
        position: relative;
        animation: change 10s ease-in-out infinite;
        padding: 5%;
        font-family: 'DM Sans', sans-serif;
    }

    .img {
        display: flex;
        justify-content: center;
    }

    .img img {
        width: 100%;
        height: auto;
        object-fit: cover;
        transition: transform .2s;

    }


    .info {
        color: black;
    }

    .info .head:before {
        content: '\25cb\a0';
        font-size: 11px;
    }

    .about {
        font-size: 50px;

        padding-bottom: 20px;
    }

    .info1 {

        padding-bottom: 60px;
    }

    .History {

        padding-bottom: 20px;
    }



    .info-ul {


        list-style: none;
    }

    .info-ul li {
        display: flex;
        padding-bottom: 5px;
    }

    .info-ul li {
        display: flex;
        align-items: center;
        padding-bottom: 15px;
    }

    .info-ul li .dot {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        border-radius: 100px;
        min-width: 23px;
        min-height: 23px;
        margin-right: 10px;
        font-size: 14px;
    }

    @keyframes change {
        0% {
            background-position: 0 50%;
        }

        50% {
            background-position: 50% 50%;
        }

        100% {
            background-position: 0 50%;
        }
    }
</style>