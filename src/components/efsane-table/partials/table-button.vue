<template>
<button :disabled="disabled" class="table-button" :style="cssVariables" @click="(event)=>{$emit('click',event)}">
  <span>
    <slot></slot>
  </span>
</button>
</template>

<script>
export default {
  name: "table-button",
  props:{
    disabled:Boolean,
    color:{
      type:String,
      default:'primary'
    },
    textColor:{
      type:String,
      required:false
    }
  },
  methods:{
    pickColor(color){
      let colors = ["#007BFF", "#6C757D", "#28A745", "#DC3545", "#FFC107", "#17A2B8", "#fff", "#F8F9FA", "#343A40"]
      let definitions = ["primary",  "gray", "success", "danger", "warning", "info", "white", "light", "dark"]
      let ind = definitions.findIndex(v => v == color)

      if(ind > -1){
        color = colors[ind]
      }else if(this.color.startsWith("#") || this.color.startsWith("rgb")){
        color = this.color
      }

      return color
    },
  },
  computed:{
    cssVariables(){
      let color = this.color ? this.pickColor(this.color) : "#007BFF"
      let textColor = this.textColor ? this.pickColor(this.textColor) :"#fff"

      if(["#6C757D","#FFC107", "#F8F9FA",  "#fff"].includes(color)){
        textColor = "#343A40"
      }
      return {
        "--efsane-button-color": color,
        "--efsane-button-text-color": textColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .table-button{
    background-color: var(--efsane-button-color);
    font-family: "Montserrat", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    cursor: pointer;
    transition: all .2s ease;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
    font-weight: 400;
    color: var(--efsane-button-text-color);
    padding: 0.75rem 2rem;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-transform: none;
    text-decoration: none;
    display: grid;
    place-content: center;
    &:hover{
      filter:invert(.1);
    }
  }
</style>
