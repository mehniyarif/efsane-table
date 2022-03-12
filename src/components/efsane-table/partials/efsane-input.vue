<template>
  <div class="efsane-input-container" >
    <label v-if="label" :for="id">
          <span>
              {{label}}
          </span>

    </label>
    <input class="efsane-input"
           :ref="id"
           @focus="focusWarning = true; isFocus=true"
           @input="(e)=>{$emit('input',e.target.value)}"
           v-click-outside="()=>{focusWarning = false}"
           :disabled="disabled"
           :name="name"
           :id="id"
           :type="type"
           :placeholder="placeholder"
           :value="value">
  </div>
</template>

<script>
import Directives from '../directives'

export default {
  mixins:[Directives],
  props:{
    type:{
      type:String,
      default:"text"
    },
    label:{
      type:String,
      default:""
    },
    name:{
      type:String,
      default:""
    },
    placeholder:{
      type:String,
      default:""
    },
    disabled:{
      type:Boolean,
      default:false
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
    errorHandle(){
      return (!this.value || this.errors.has(this.name))
    }
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900&display=swap");
.efsane-input-container{
  display: inline-block;
  outline: none;
  text-transform: none;
  text-decoration: none;
  label{
    font-size: .85rem;
    color: rgba(0,0,0,.7);
    padding-left: .7rem;
  }
}
.efsane-input{
  border-radius: 5px;
  display: block;
  height: 36px;
  font-size: .9rem;
  font-family: 'Poppins','Sans Serif';
  box-sizing: border-box;
  color: rgba(0,0,0,0.7);
  border: 1px solid rgba(0,0,0,0.2);
  transition: all .3s ease;
  background-color: #fff;
  padding-left: .7rem;
  width: 100%;
  &:focus{
    border: 1px solid #607b8b;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }
}
</style>
