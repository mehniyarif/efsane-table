<template>
  <div class="efsane-input-container" :style="cssVariables">
    <label :for="id"  v-if="label">
          <span>
              {{label}}
          </span>

    </label>
    <div class="efsane-inputs-container">
      <select class="efsane-select -select"
              :disabled="disabled"
              :ref="id"
              :value="value && value.toString()"
              @focus="focusWarning = true; isFocus=true"
              @input="(e)=>{$emit('input',e.target.value)}"
              v-click-outside="()=>{focusWarning = false}" >
        <slot name="firstOption"></slot>
        <slot name="secondOption"></slot>
        <option :value="setValue(item)" v-for="(item,key) in options" :selected="value && setValue(item) == value" :key="key">{{setLabel(item)}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import Directives from '../directives.js'

export default {
  mixins:[Directives],
  props:{
    label:{
      type:String,
      default:""
    },
    name:{
      type:String,
      default:""
    },
    labelProperty:{
      type:[String,Array],
      default:""
    },
    valueProperty:{
      type:[String,Array],
      default:""
    },
    options:{
      type:Array,
      default:function(){
        return []
      }
    },
    placeholder:{
      type:String,
      default:""
    },
    disabled:{
      type:Boolean,
      default:false
    },
    height:{
      type:String,
      default:"36px"
    },
    value:{},
    validate:{
      type:String,
      default:""
    },
    required:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      id:this.makeId(10),
      focusWarning:false,
      isFocus:false
    }
  },
  computed:{
    requiredColor(){
      return !this.value && this.isFocus ? '#ed1c25' : this.focusWarning ? '#e9b611' : '#607b8b'
    },
    cssVariables(){
      return{
        "--efsane-input-height": this.height ? this.height : "36px"
      }
    },
  },
  methods:{
    makeId(length) {
      let result           = [];
      let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        result.push(characters.charAt(Math.floor(Math.random() *
          charactersLength)));
      }
      return result.join('');
    },
    setValue(value){
      if(this.valueProperty){
        if(Array.isArray(this.valueProperty)){
          switch (this.valueProperty.length) {
            case 1:
              return value[this.valueProperty[0]].toString()
            case 2:
              return value[this.valueProperty[0]][this.valueProperty[1]].toString()
            default:
              return value;
          }

        }
        return value[this.valueProperty] && value[this.valueProperty].toString()
      }else{
        return value
      }
    },
    setLabel(value){
      if(this.labelProperty){
        if(Array.isArray(this.labelProperty)){
          switch (this.labelProperty.length) {
            case 1:
              return value[this.valueProperty[0]].toString()
            case 2:
              return value[this.valueProperty[0]][this.labelProperty[1]].toString()
            default:
              return value;
          }

        }
        return value[this.labelProperty].toString()
      }else{
        return value
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900&display=swap");
.efsane-input-container{
  display: inline-block;
  outline: none;
  position: relative;
  text-transform: none;
  text-decoration: none;
  width: 100%;
  label{
    font-size: .85rem;
    color: rgba(0,0,0,.7);
    padding-left: .7rem;
  }
}
.efsane-inputs-container{
  width: 100%;
  position: relative;
}
.efsane-select{
  border-radius: 5px;
  z-index: 1;
  display: flex;
  height: var(--efsane-input-height);
  transition: all 0.3s ease-in-out;
  font-size: .9rem;
  font-family: 'Poppins','Sans Serif';
  box-sizing: border-box;
  border: 1px solid rgba(0,0,0,0.2);
  background-color: #fff;
  padding-left: .7rem;
  width: 100%;

  &:hover, &:focus {
    box-shadow: 0px 10px 20px -13px rgba(0, 0, 0, 0.1);
    outline: rgba(0, 0, 0, 0.1);
  }
  &.-select {
    -webkit-appearance: none;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48cGF0aCBkPSJNMjU2LDM5My42Yy0yLjgsMC01LjUtMS4xLTcuNi0zLjJMMywxMzYuM2MtNC00LjItMy45LTEwLjksMC4zLTE0LjljNC4yLTQsMTAuOS0zLjksMTQuOSwwLjNsMjQ1LjUsMjU0ICAgYzQsNC4yLDMuOSwxMC45LTAuMywxNC45QzI2MS4zLDM5Mi42LDI1OC42LDM5My42LDI1NiwzOTMuNnoiIGZpbGw9IiM2QTZFN0MiLz48cGF0aCBkPSJNMjU2LDM5My42Yy0yLjYsMC01LjMtMS03LjMtM2MtNC4yLTQtNC4zLTEwLjctMC4zLTE0LjlsMjQ1LjUtMjU0YzQtNC4yLDEwLjctNC4zLDE0LjktMC4zICAgYzQuMiw0LDQuMywxMC43LDAuMywxNC45bC0yNDUuNSwyNTRDMjYxLjUsMzkyLjUsMjU4LjgsMzkzLjYsMjU2LDM5My42eiIgZmlsbD0iIzZBNkU3QyIvPjwvZz48L3N2Zz4=');
    background-size: 18px;
    background-position: 95% center;
    background-repeat: no-repeat;
    padding-right: 5%;
  }
}

</style>
