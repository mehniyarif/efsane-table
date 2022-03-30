<template>
  <label class="efsane-switch-checkbox" :for="'efsane-switch'+id">
    {{label}}
    <input type="checkbox" :checked="value" @change="changeValue" :id="'efsane-switch'+id"/>
    <span class="efsane-switch-custom-checkbox">
      <span class="efsane-checkbox-first-line"></span>
      <span class="efsane-checkbox-second-line"></span>
  </span>
  </label>
</template>

<script>
export default {
  name: "efsane-switch",
  props:{
    value:Boolean,
    label:{
      type:String,
      default:""
    }
  },
  data(){
    return {
      id:this.makeId(10)
    }
  },
  methods:{
    changeValue(e){
      this.$emit('input', e.target.checked)
    },
    makeId(length) {
      let result           = ['id'];
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
.efsane-switch-checkbox{
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  font-size: .85rem;
  margin-block: 10px;
  font-weight: 400;
  line-height: 18px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;

  [type=checkbox] {
    opacity: 0;
    position: absolute;

    &:checked ~ .efsane-switch-custom-checkbox {
      .efsane-checkbox-first-line,
      .efsane-checkbox-second-line {
        &:before {
          height: 100%;
        }
      }

      .efsane-checkbox-first-line {
        &:before {
          transition: height 150ms ease-in-out 0ms;
        }
      }

      .efsane-checkbox-second-line {
        &:before {
          transition: height 150ms ease-in-out 150ms;
        }
      }
    }
  }


  .efsane-switch-custom-checkbox {
    margin-inline: 5px;
    width: 18px;
    height: 18px;
    border: 1px solid #ccc;
    background: #fff;
    box-shadow: inset 1px 1px 1px 1px rgba (0, 0, 0, .1);
    border-radius: 3px;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    vertical-align: middle;

    .efsane-checkbox-first-line,
    .efsane-checkbox-second-line {
      display: block;
      width: 3px;
      position: absolute;

      &:before {
        position: relative;
        width: 100%;
        height: 0;
        content: '';
        display: block;
        background: #337ab7;
        border-radius: 3px;
      }
    }

    .efsane-checkbox-first-line {
      height: 8px;
      transform: rotate(-45deg);
      top: 4px;
      left: 4px;

      &:before {
        transition: height 150ms ease-in-out 150ms;
      }
    }

    .efsane-checkbox-second-line {
      height: 15px;
      transform: rotate(225deg);
      bottom: 4px;
      left: 12px;

      &:before {
        transition: height 150ms ease-in-out 0ms;
      }
    }
  }
}
</style>
