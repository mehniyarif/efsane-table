<template>
    <div id="efsane-tooltip-wrapper" :style="styles" v-if="tooltip">
      <span>{{tooltip}}</span>
    </div>
</template>

<script>
export default {
  name: "efsane-tooltip",
  props:{
    tooltip:String,
    pageY:[String,Number],
    pageX:[String,Number],
  },
  computed:{
    styles(){
      return {
        "--efsane-tooltip-page-x": this.pageX + "px",
        "--efsane-tooltip-page-y": this.pageY + "px"
      }
    }
  }
}
</script>

<style lang="scss" >

#efsane-tooltip-wrapper{
  position: fixed;
  top: calc(var(--efsane-tooltip-page-y) + var(--efsane-table-row-height));
  left: var(--efsane-tooltip-page-x);
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  transition: visibility;
  transition-delay: 1s;
  align-items: center;
  background: var(--efsane-tooltip-background-color);
  border-radius: 3px;
  color: var(--efsane-tooltip-text-color);
  font-family: soleil,sans-serif;
  font-size: 14px;
  font-weight: 500;
  z-index:9999999999;
  animation: .4s fadeIn;
  padding-inline: 5px;
  animation-fill-mode: forwards;
  visibility: hidden;
  span{
    line-height: var(--efsane-table-row-height);
    min-height: var(--efsane-table-row-height);
    min-width: 75px;
    max-width: 500px;
  }
}
@keyframes fadeIn {
  99% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
</style>
