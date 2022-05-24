<template>
    <p class="yazi1">
        <span>BAU İNOVASYON VE DANIŞMANLIK A.Ş.*/ BAU İNOVASYON VE DANIŞMANLIK A.Ş.*/ BAU İNOVASYON VE
            DANIŞMANLIK A.Ş.*/ BAU İNOVASYON VE DANIŞMANLIK A.Ş.*/ BAU İNOVASYON VE DANIŞMANLIK A.Ş.*/ BAU İNOVASYON VE
            DANIŞMANLIK A.Ş.*/ BAU İNOVASYON VE DANIŞMANLIK A.Ş.*/ BAU İNOVASYON VE DANIŞMANLIK A.Ş.*/ BAU İNOVASYON VE
            DANIŞMANLIK A.Ş.*/ BAU İNOVASYON VE DANIŞMANLIK A.Ş.*/ BAU İNOVASYON VE DANIŞMANLIK A.Ş.*/ BAU İNOVASYON VE
            DANIŞMANLIK A.Ş.*/ BAU İNOVASYON VE DANIŞMANLIK A.Ş.*/ BAU İNOVASYON VE DANIŞMANLIK A.Ş.*/ BAU İNOVASYON VE
            DANIŞMANLIK A.Ş.*/
        </span>
    </p>
</template>
<script>
    export default {
        name: 'Yazi'
    }
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Tourney:wght@100&display=swap');

    .yazi1 {
        width: 100%;
        overflow: hidden;
        color: rgb(70, 69, 69);
        font-family: 'Tourney', cursive;
        font-size: 90px;
    }

    @keyframes marquee {
        0% {
            transform: translate(0, 0);
        }

        100% {
            transform: translate(-100%, 0);
        }
    }

    .yazi1 span {
        display: inline-block;
        animation: marquee 300s linear infinite;
    }

    .yazi1 {
        width: 100%;
        white-space: nowrap;
    }
</style>