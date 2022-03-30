<template>
  <div class="table-setting-color-picker" @click.stop="show=!show" :style="cssVariables" v-click-outside="close">
    <div class="container" v-if="show" >
    <div class="material-color-picker" >
        <div class="left-panel" @click.stop>
            <ol class="color-selector" >
                <li v-for="(color, key) in colors" :key="key">
                    <input name="material-color" :id="'color'+color.color"   type="radio" :value="color.color" v-model="selectedColor">
                    <label :for="'color'+color.color"  :title="color.color" :style="{ 'color': color.variations[4].hex }"></label>
                </li>
            </ol>
        </div>
        <div class="right-panel" >
            <div class="color-palette-wrapper" :class="{ 'js-active': selectedColor === color.color }" v-for="(color, key) in colors" :key="key">
                <h2 class="color-palette-header">{{color.color}}
                  <svg xmlns="http://www.w3.org/2000/svg" @click.stop="close" width="24" height="24" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
                </h2>
                <ol class="color-palette"  >
                    <li id="clipboardItem" :class="{'color-white':ind > 3}" v-for="(variation, ind) in color.variations" @click.stop="selectColor(variation.hex)" :key="ind" class="item" :style="{ 'background-color': variation.hex }">
                        <span >{{variation.weight}}</span>
                        <span  >{{variation.hex}}</span>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import Data from "../localApi.js"
import Directives from '../directives.js'
export default {
  name: "color-picker",
  mixins:[Data, Directives],
  data(){
      return{
        selectedColor:"Red",
        show:false
      }
  },
  props:{
    value:{}
  },
  computed:{
    cssVariables(){
      return {
        "--color-picker-selected-color":this.value || "#fff"
      }
    }
  },
  methods:{
    selectColor(hex){
      this.$emit('input',hex)
      this.close()
    },
    close(){
      this.show = false
    },
    checkValue(){
      this.colors.forEach(color => {
        color.variations.forEach(variation => {
          if(variation.hex === this.value){
            this.selectedColor = color.color
          }
        })
      })
    }
  },
  created() {
    this.checkValue()
  },
  watch:{
    value(){
      this.checkValue()
    }
  }
}
</script>

<style lang="scss" scoped>
  .table-setting-color-picker{
    background-color: var(--color-picker-selected-color);
    position: relative;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,.4);
    height: 30px;
    width: 30px;
    border-radius: 4px;
    transition: border-radius 200ms ease-in-out 0s;
  }
  .material-color-picker {
    position: absolute;
    right: 0;
    top: -50px;
    z-index: 2;
    display: flex;
    width: 350px;
    margin: 0 auto;
    background-color: white;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 5px;
    box-shadow: 0 15px 30px rgba(0,0,0,.1);

    & .left-panel {
      z-index: 2;
    }

    & .right-panel {
      position: relative;
      flex-grow: 1;
      overflow: hidden;
    }
  }

  .color-selector {
    display: flex;
    flex-direction: column;
    padding: 1em 0;
    border-right: 0.25em solid #efefef;

    li{

      list-style-type: none;
    }

    input[type='radio'] {
      display: none;
    }

    label {
      position: relative;
      display: inline-block;
      padding: 5px 10px;
      cursor: pointer;

      &:before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        padding: 8px;
        background-color: currentColor;
        border-radius: 50%;
      }

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        padding: 8px;
        border: 3px solid;
        border-radius: 50%;

        transition: padding 250ms;
      }
    }

    input[type='radio']:checked + label:after {
      padding: 12px;
    }
  }

  .color-palette-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);

    display: flex;
    flex-direction: column;
    padding: 16px;

    &.js-active {
      transform: translateX(0);
    }
  }

  .color-palette-header {
    display: flex;
    justify-content: space-between;
    margin: 0 0 10px;
    font-weight: 400;
    color: #757575;
  }

  .color-palette {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .item {
      position: relative;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      flex-grow: 1;

      margin: 10px 0;
      padding: 0 5px;
      border-radius: 0.25em;
      font-family: "Roboto Mono", monospace;

      transition: transform 250ms;
      cursor: pointer;
      &.color-white{
        color: #fff;
      }

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .copied-indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    opacity: 0;
    transition: all 250ms;

    &.js-copied {
      transform: translate(-50%, -50%);
      opacity: 0.75;
    }
  }
</style>
