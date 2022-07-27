<template>
    <div class="title-container flex flex-col" 
        :style="`font-size:${fontSize}px; color:${active?'white':'#0076a5'}`">
        <span class="title" v-if="title"> {{title}} </span>
        <span class="sub-title" v-if="subtitle"> {{subtitle}} </span>
    </div>
</template>
<script>
export default {
    props:['title', 'subtitle', 'fontSize', 'active']
}
</script>
<style scoped>
    .sub-title{
        font-family: 'IngeTextBold', Arial, Helvetica, sans-serif;
    }
    .title, .sub-title{
        text-align: left;
        line-height: 33px;
    }
@media screen and (max-width: 414px) {
    .title-container{
        font-size: 20px!important;
    }
    .title, .sub-title{
        text-align: left;
        line-height: 20px;
    }

}
</style>