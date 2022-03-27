<template>
<button class="resize-mode-button-container" :class="{'selected':settings.resizeMode}" @click="openCloseResizeMode">
  <svg  class="resize-mode-button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <title>Change Column Sizes</title> <path fill="#cdcdcd" d="M0 0v24h24v-24h-24zm2 6h9v16h-9v-16zm20 16h-9v-16h9v16z"/></svg>
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
    height: 30px;
    width: 30px;
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
