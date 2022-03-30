<template>
<div class="efsane-table-modal-mask" v-if="show">
  <div class="efsane-table-modal-wrapper">
    <span class="close-button" @click="close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg></span>
  </div>
</div>
</template>

<script>
export default {
  name: "table-modal",
  props:{
    show:Boolean
  },
  methods:{
    close(){
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" >
  .efsane-table-modal-mask{
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 52005;
    background-color: rgba(0,0,0,.4);
  }
  .efsane-table-modal-wrapper{
    position: relative;
    border-radius: 6px;
    box-shadow: -10px 30px 50px rgba(0,0,0,.4);
    border: 1px solid rgba(0,0,0,.4);
    width: 40vw;
    height: 30vh;
    z-index: 99999;
    background-color: #fff;
  }
  .close-button{
    position: absolute;
    height: 35px;
    width: 35px;
    right: -8px;
    display: grid;
    place-content: center;
    top: -8px;
    z-index: 999999;
    cursor: pointer;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: -2px 2px 5px rgba(0,0,0,.2);
    &:hover{
      transform: translate(-7px, 7px);
      transition-property: transform;
      transition-duration: .3s;
      background-color: #fff;
      svg{
        transition-property: width, height;
        transition-duration: .3s;
        width: 20px;
        height: 20px;
      }
    }
  }
</style>
