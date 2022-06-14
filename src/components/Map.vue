<template>
<div class="map">
    <GMapMap :center="center" :zoom="15" map-type-id="terrain" style=" height: 700px; width: 100%;">
        <GMapCluster>
            <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                :draggable="true" @click="center=m.position" />
        </GMapCluster>
    </GMapMap>
    </div>

</template>
<script>
    export default {
        name: 'App',
        data() {
            return {
                center: {
                    lat: 41.159937,
                    lng: 28.896313
                },
                markers: [{
                        position: {
                            lat: 41.159937,
                            lng: 28.896313
                        },
                    }, // Along list of clusters
                ]
            }
        }
    }
</script>

<style scoped>
.map{
    display: flex;
    flex-grow: 1;
    padding-right: 5%;
    padding-left: 5%;
    flex-direction: column;
}
</style>