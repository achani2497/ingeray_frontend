<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                  <!-- Header -->
                  <div class="modal-header" v-if="header">
                    <div class="title"><slot name="title"/></div>
                    <button type="button" @click="$emit('close')">
                        <span>&times;</span>
                    </button>
                  </div>
                  <!-- Body -->
                  <slot name="content" />

                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
  props:['header'],
  data:function(){
    return{

    }
  },
  methods:{
    
  }
}
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: fit-content;
  height: auto;
  margin: 0px auto;
  background: #FEFEFE;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: 'IngeText', Arial, Helvetica, sans-serif;
  color: black
}
.modal-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1rem 1rem 0 1rem;
}
.modal-header button{
  height: 20px;
  width: 20px;
  border-radius: 100%;
  position: absolute;
  top: 35px;
  right: 30px;
}
.modal-header span{
  position: absolute;
  top: -200%;
  left: 50%;
  font-size: 40px;
}
.modal-header h3 {
  margin-top: 0;
}
.title{
  font-size: 30px;
  color: #b0b0b0;
}
button:focus{
  outline: none;
}
</style>