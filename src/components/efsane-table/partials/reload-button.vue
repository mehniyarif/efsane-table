<template>
<button class="reload-button-container" :disabled="disabledButton" @click="disabledControl">
  <svg xmlns="http://www.w3.org/2000/svg" class="reload-button-icon" width="20" height="20" viewBox="0 0 512 512"><title>Reload Table</title><path d="M320 146s24.36-12-64-12a160 160 0 10160 160" fill="none" style="stroke: #cdcdcd;"  stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="42"/><path fill="none" stroke="currentColor" style="stroke: #cdcdcd;" stroke-linecap="round" stroke-linejoin="round" stroke-width="42" d="M256 58l80 80-80 80"/></svg>
</button>
</template>

<script>
export default {
  name: "reload-button",
  props:{
    settings:Object,
    reload:{
      type:Function,
      default:null
    },
    resizeMode:{
      type:Function,
      default:null
    },
  },
  data(){
    return{
      disabledButton:false
    }
  },
  methods:{
    disabledControl(){
      if(!this.disabledButton){
        this.disabledButton = true
        this.reload()
        setTimeout(()=>{
          this.disabledButton = false
        },3000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .reload-button-container{
    position: relative;
    display: grid;
    place-content: center;
    height: 30px;
    width: 30px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    background-color: var(--efsane-header-background-color);
    border:none;
    &:active{
      background-color: var(--efsane-header-background-color);
      border-radius: 50%;
      animation: rotate .1s normal;
      svg{
        cursor: pointer;
        background-color: var(--efsane-header-background-color);
      }
      .reload-button-icon path{
        stroke: rgba(0,0,0,.1);
      }
    }
  }
  @keyframes rotate{
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn);
    }
  }
</style>
