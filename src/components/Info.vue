<template>
    <div class="container-fluid containerr">
        <div class="row row1">
            <div class="col-md-2 acoustic">
                <div class="img" style="width:200px"><img src="@/assets/images/akustic.webp"></div>
                <div class="Head">
                    <h4 style="font-weight:bold">Akustik</h4>
                </div>
                <div class="info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum praesentium itaque, est, nemo
                        adipisci illum debitis magnam voluptates eaque eligendi sint harum, beatae minus a voluptas
                        laboriosam impedit doloribus.</p>
                </div>
            </div>
            <div class="col-md-2 optic">
                <div class="img" style="width:200px"><img src="@/assets/images/optik.png"></div>
                <div class="Head">
                    <h4 style="font-weight:bold">Optik</h4>
                </div>
                <div class="info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum praesentium itaque, est, nemo
                        adipisci illum debitis magnam voluptates eaque eligendi sint harum, beatae minus a voluptas
                        laboriosam impedit doloribus.</p>
                </div>
            </div>
            <div class="col-md-2 electric">
                <div class="img" style="width:190px"><img src="@/assets/images/elektrik.png"></div>
                <div class="Head">
                    <h4 style="font-weight:bold">Elektronik Tasarım ve Üretim</h4>
                </div>
                <div class="info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum praesentium itaque, est, nemo
                        adipisci illum debitis magnam voluptates eaque eligendi sint harum, beatae minus a voluptas
                        doloribus.</p>
                </div>
            </div>
            <div class="col-md-2 tracing">
                <div class="img" style="width:190px"><img src="@/assets/images/izleme.png"></div>
                <div class="Head">
                    <h4 style="font-weight:bold">İzleme Algılama</h4>
                </div>
                <div class="info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum praesentium itaque, est, nemo
                        adipisci illum debitis magnam voluptates eaque eligendi sint harum, beatae minus a voluptas
                        laboriosam impedit doloribus.</p>
                </div>
            </div>
            <div class="col-md-2 education">
                <div class="img" style="width:190px"><img src="@/assets/images/eğitim.png"></div>
                <div class="Head">
                    <h4 style="font-weight:bold">Danışmanlık</h4>
                </div>
                <div class="info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum praesentium itaque, est, nemo
                        adipisci illum debitis magnam voluptates eaque eligendi sint harum, beatae minus a voluptas
                        laboriosam impedit doloribus.</p>
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


    }

    .row1 {
        justify-content: space-between;
    }

    .acoustic,
    .electric,
    .education,
    .optic,
    .tracing {
        display: flex;
        flex-direction: column;
        transition: transform 250ms ease-in-out;

    }

    .acoustic:hover {
        transform: translateY(-30px);
    }

    .tracing:hover {
        transform: translateY(-30px);
    }

    .electric:hover {
        transform: translateY(-30px);
    }

    .education:hover {
        transform: translateY(-30px);
    }

    .optic:hover {
        transform: translateY(-30px);
    }


    .img {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 20px;


    }



    .img img {
        width: 60%;
        height: auto;
        object-fit: cover;
       

    }
</style>