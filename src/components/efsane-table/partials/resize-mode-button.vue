<template>
<button class="resize-mode-button-container" :class="{'selected':settings.resizeMode}" @click="openCloseResizeMode">
  <svg xmlns="http://www.w3.org/2000/svg" class="resize-mode-button-icon" width="24" height="24" viewBox="0 0 24 24"><title>Change columns location and size</title> <path fill="#cdcdcd" d="M6 13v4l-6-5 6-5v4h3v2h-3zm9-2v2h3v4l6-5-6-5v4h-3zm-4-6v14h2v-14h-2z"/></svg>
</button>
</template>

<script>
export default {
  name: "resize-mode-button",
  props:{
    settings:Object,
    openCloseResizeMode:{
      type:Function,
      default:null
    },
  }
}
</script>

<style lang="scss" scoped>
  .resize-mode-button-container{
    position: relative;
    display: grid;
    place-content: center;
    height: 28px;
    width: 28px;
    margin-right: 10px;
    background-color: var(--efsane-header-background-color);
    border:none;
    &:hover{
      background-color: rgba(0,0,0,.1);
      border-radius: 50%;
      svg{
        cursor: pointer;
      }
      .resize-mode-button-icon path{
        fill: #fff;
      }
    }
    &.selected{
      background-color: #FFC107;
      border-radius: 50%;
      animation: animate 3s linear infinite;
      svg{
        cursor: pointer;
      }
      .resize-mode-button-icon path{
        fill: #fff;
      }
    }
  }
  @keyframes animate {
    0%{
      box-shadow: 0 0 0 0 rgba(255,193,7, .7), 0 0 0 0 rgba(255,193,7, 0);
    }
    40%{
      box-shadow: 0 0 0 5px rgba(255,193,7, .7), 0 0 0 0 rgba(255,193,7, 0);
    }
    80%{
      box-shadow: 0 0 0 5px rgba(255,193,7, .7), 0 0 0 0 rgba(255,193,7, 0);
    }
    100%{
      box-shadow: 0 0 0 0 rgba(255,193,7, .7), 0 0 0 30px rgba(255,193,7, 0);
    }

  }
</style>
