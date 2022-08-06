<template>
    <div class="inge-shadow-down flex flex-col">
        <div class="banner" :style="`background-image: ${bannerName}`"></div>
        <div class="banner-content flex flex-col">
            <div id="banner-section-title">
                <slot name="title"></slot>
            </div>
            <div id="banner-section-stuff">
                <slot name="stuff"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['bannerName']
}
</script>

<style>
.banner{
    background-image: var(--image-url);
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 0;
    padding-top: calc((864/2872)*100%);
}
.banner-content{
    padding: 2rem 4rem 4rem;
    background-color: white;
}
@media screen and (max-width: 900px){
    .banner-content{
        padding: 2rem 3rem;
    }
}
@media screen and (max-width: 650px) {
    .banner-content{
        padding: 1rem;
    }
}
@media screen and (max-width: 414px) {
}
</style>