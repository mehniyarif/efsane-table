<template>
  <div class="svg-picker "  v-click-outside="close" :style="cssVariables">
    <span class="svg-picker-dropdown-icon" @click="show=!show" v-html="svgContent(selectedSVG)">
    </span>
    <div class="svg-picker-dropdown" v-if="show">
      <div class="svg-picker-dropdown-header">
        <span>SVG Picker</span>
        <svg @click.stop="close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
      </div>
      <div class="svg-picker-dropdown-items-container" >
        <span class="svg-picker-item" :class="{'selected': icon.name === value }" v-for="(icon,key) in icons" @click="selectSVG(icon)" :key="key" v-html="svgContent(icon)"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Data from "../localApi.js"
import Directives from '../directives.js'
export default {
  mixins:[Data, Directives],
  name: "svg-picker",
  props:{
    value:{
      type:String,
      default:"tag"
    }
  },
  data(){
    return{
      show:false

    }
  },
  computed:{
    cssVariables(){
      return{
        "--svg-picker-max-height": this.formStatus === 'list' ? "40vh" : "70vh"
      }
    },
    selectedSVG(){
      return this.icons.find(v => v.name === this.value)
    }
  },
  methods:{
    close(){
      this.show=false
    },
    selectSVG(icon){
      this.$emit('input',icon.name)
      this.close()
    },
    svgContent(variation){
      return variation.svg.replace("__WIDTH__",24).replace("__HEIGHT__",24).replace("__TITLE__",this.showValue(variation.name))
    },
    showValue(name){
      return this.toTitleCase(name.replace(/-/g, ' '));
    },
    toTitleCase(str) {
      return str.replace(
        /\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      );
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-picker{
  position: relative;
  margin-right: 10px;
  display: grid;
  place-content: center;
  height: 30px;
  width: 30px;
  &:hover{
    background-color: rgba(0,0,0,.1);
    border-radius: 50%;
    svg{
      cursor: pointer;
    }

  }
}
.svg-picker-dropdown-icon {
  display: grid;
  place-content: center;
  cursor: pointer;
  svg path{
    fill: #cdcdcd;
  }
}
.svg-picker-dropdown{
  position: absolute;
  max-height: var(--svg-picker-max-height);
  min-width: 350px;
  border-radius: 5px;
  z-index: 9999;
  background-color: #fff;
  box-shadow: -15px 20px 60px rgba(0,0,0,.3);
  right: -12px;
  top: 30px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: #ccc;


  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ddd;
  }
}
.svg-picker-dropdown-header{
  border-bottom: 1px solid rgba(0,0,0,.1);
  font-family: soleil,sans-serif;
  font-weight: 500;
  background-color: #fff;
  position: sticky;
  z-index:99999;
  top: 0;
  left: 0;
  right: 0;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid rgba(0,0,0,.1);
  svg{
    cursor: pointer;
    &:hover{
      opacity: .7;
    }
  }
}

.svg-picker-dropdown-items-container{
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: 5px;
}

.svg-picker-item{
  padding: 5px;
  cursor: pointer;
  display: inline-flex;
  height: 30px;
  width: 30px;
  align-items: center;
   &:hover{
      opacity: .7;
    }

  &.selected{
    padding: 5px;
    background-color: rgba(0,0,0,.3);
    border-radius: 50%;
    svg{
      cursor: pointer;
    }

  }
}

</style>
