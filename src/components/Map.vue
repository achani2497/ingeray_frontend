<template>
    <div>
        <h3 class="text-xl">Nuestra ubicacion</h3>
        <g-map
            :center="coordinates"
            :zoom="zoom"
            style="width: 100%; height:350px"
            ref="mapRef"
            @dragend="handleDrag">
            <g-marker
                :position="coordinates"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
            />
        </g-map>

    </div>
</template>
<script>
export default {
    data(){
        return{
            map: null,
            coordinates:{
                lat: -34.58590454671179, 
                lng: -58.47395043769114
            },
            zoom: 17
        }
    },
    created: function(){
        
        if(localStorage.zoom){
            this.zoom = parseInt(localStorage.zoom)
        }
    },
    mounted: function(){
        this.$refs.mapRef.$mapPromise.then(map => this.map = map)
    },
    computed: {
        mapCoordinates(){
            if(!this.map){
                return {
                    lat: 0,
                    lgn: 0
                }
            }
            return {
                lat: this.map.getCenter().lat().toFixed(4),
                lng: this.map.getCenter().lng().toFixed(4)
            }
        }
    },
    methods:{
        handleDrag: function(){
            let center = {
                lat: this.map.getCenter().lat(),
                lng: this.map.getCenter().lng()
            }
            let zoom = this.map.getZoom()

            localStorage.center = JSON.stringify(center)
            localStorage.zoom = zoom
        }
    }
}
</script>