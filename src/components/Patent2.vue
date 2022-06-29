<template>
<div class="_container">
    <div class="first">
        <h1 class="title">Patentler</h1>
        <ul class="info-ul">
            <li>
                <div class="dot">1</div>
                <h5>{{$t('patent.patent1')}}</h5>
            </li>
            <li>
                <div class="dot">2</div>
                <h5>{{$t('patent.patent2')}}</h5>
            </li>
            <li>
                <div class="dot">3</div>
                <h5>{{$t('patent.patent3')}}</h5>

            </li>
            <li>
                <div class="dot">4</div>
                <h5>{{$t('patent.patent4')}}</h5>
            </li>
            <li>
                <div class="dot">5</div>
                <h5>{{$t('patent.patent5')}}</h5>
            </li>
            <li>
                <div class="dot">6</div>
                <h5>{{$t('patent.patent6')}}</h5>
            </li>
            <li>
                <div class="dot">7</div>
                <h5>{{$t('patent.patent7')}}</h5>
            </li>
            <li>
                <div class="dot">8</div>
                <h5>{{$t('patent.patent8')}}</h5>
            </li>
            <li>
                <div class="dot">9</div>
                <h5>{{$t('patent.patent9')}}</h5>
            </li>
            <li>
                <div class="dot">10</div>
                <h5>{{$t('patent.patent10')}}</h5>
            </li>
        </ul>

    </div>

  

</div>
</template>

<script>

</script>

<style scoped>
.test
{
    background-color:red;
    width: 100%;
    height: 300px;
}
.row
{
    width: 100%;
    height: 200px;
    background-color: aqua;
}
._container {
    width: 100%;
    height: 100vh;
    position: relative;
    font-family: 'DM Sans', sans-serif;
    padding: 5%;
    display: flex;
    flex-direction: row

}

.title {
    font-size: 50px;
    text-align: start;
    padding-top: 10%;
    padding-left: 5%;
    padding-bottom: 10%;


}

.first {
    width: 40%;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
}

.info-ul li .dot {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 100px;
    min-width: 23px;
    min-height: 23px;
    margin-right: 7px;
    font-size: 14px;
 
}

.info-ul li {
    display: flex;
    align-items: center;
    padding-bottom: 10px;


}
</style>
