<template>
    <div class="container-fluid _con">
        <ul class="slides ">
            <li>

                <img :src="images[currentImage]" width="400" height="500"><br /><br />
            </li>
        </ul>



    </div>
    <button @click="previousImage" class="btn btn-primary"
        :disabled="currentImage === 0">Previous</button>
    <button @click="nextImage" class="btn btn-primary"
        :disabled="currentImage === (images.length - 1)">Next</button>

</template>

<script>
    export default {
        name: 'Slider',
        data: function () {
            return {
                images: [

                    require('../assets/images/dalgıc.jpeg'),
                    require('../assets/images/gemi2.jpeg'),
                    require('../assets/images/mühendis.jpeg'),
                    require('../assets/images/yetenk.jpeg'),

                ],
                currentImage: 0,
                disabled: false

            }
        },
        methods: {
            nextImage: function (e) {
                if (this.currentImage !== (this.images.length - 1))

                    this.currentImage++;

            },

            previousImage: function (e) {
                if (this.currentImage !== 0)
                    this.currentImage--;
            }
        }
       
    }
</script>

<style>
    .slides img {
        width: 100%;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    ._con {
        display: flex;
        justify-content: center;
        margin: 0 0;
        padding-right: 0px;
        padding-left: 0px;

    }

    .slides {
        overflow: hidden;
        width: 100%;
        height: 100vmin;
        padding-right: 0px;
        padding-left: 0px;
    }

    .slides li {
        width: 100%;
        height: 100vmin;
        position: absolute;
        z-index: 1;
        padding-right: 0px;
        padding-left: 0px;

    }

    .slides img {
        height: 100vmin;
        object-fit: cover;
        object-position: top;
        animation: slide 2s ease 0s 1 normal;

    }

    .slides li:target {
        z-index: 3;
        animation: slide 2s ease 0s 1 normal;


    }

    @keyframes slide {
        0% {
            transform: translateY(-100%);
        }

        100% {
            transform: translateY(0%);
        }

    }

    @keyframes hidden {
        0% {
            z-index: 2;
        }

        100% {
            z-index: 2;
        }
    }
</style>