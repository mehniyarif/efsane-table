<template>
<div v-if="show" class="actions-popup-container" :style="cssVariables">
    <div class="actions-popup-header">
      <span>{{ title }}</span>
      <svg @click.stop="close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
    </div>
  <div class="actions-popup-body">

    <div class="action-info-container">
      <efsane-input v-model="actionColumn.header" name="header" data-vv-name="Header" label="Header"> </efsane-input>
      <efsane-select class="gap-select" v-model="actionColumn.gap" name="gap" data-vv-name="Gap" label="Gap of Icons" :options="[1,2,3,4,5,6,7,8,9]"> </efsane-select>
    </div>

    <div class="actions-container">
      <button class="add-action" @click.stop="addAction">Add</button>
      <table>
        <tr>
          <th>Icon</th>
          <th>Color</th>
          <th>Size</th>
          <th colspan="3">Tooltip</th>
          <th colspan="3">Action</th>
          <th ></th>
        </tr>
        <tr v-for="(act,key) in actions" :key="key" class="action-row">
          <td class="action-row-svg-icon"><svg-picker v-model="act.svgName"></svg-picker></td>
          <td class="action-row-svg-color"><color-picker v-model="act.color"></color-picker></td>
          <td class="action-row-select"> <select v-model="act.size" name="size" placeholder="Size">
            <option v-for="(option,optInd) in [12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]" :key="optInd" :value="option">{{option}}</option>
          </select> </td>
          <td class="action-row-input" colspan="3"> <input v-model="act.tooltip" name="tooltip" placeholder="Enter Tooltip"/> </td>
          <td class="action-row-select" colspan="3"><select v-model="act.methodName" name="methodName" >
            <option :value="null" disabled>Select Action</option>
            <option v-for="(option,optInd) in actionMethods" :key="optInd" :value="option.name">{{option.label}}</option>
          </select> </td>
          <td class="action-row-button"><button class="remove" @click.stop="removeAction(key)">Remove</button> </td>
        </tr>
      </table>
    </div>
  </div>

  <div class="actions-popup-preview">
    <span v-for="(icon,key) in actions" :key="key" v-html="svgContent(icon)"></span>
  </div>
  <button class="save-button" @click.stop="saveAction">Save</button>
</div>
</template>

<script>
import ColorPicker from "./color-picker"
import SvgPicker from "./svg-picker"
import Data from "../localApi"
import EfsaneInput from "./efsane-input"
import EfsaneSelect from "./efsane-select"
export default {
  name: "actions-popup",
  mixins:[Data],
  components:{
    ColorPicker,
    SvgPicker,
    EfsaneInput,
    EfsaneSelect
  },
  props:{
    show:Boolean,
    title:{
      type:String,
      default:"New Action"
    },
  },
  data(){
      return{
        actionColumn:{
          header:null,
          gap:0
        },
        actions:[
          {
            tooltip:null,
            svgName:"dots",
            methodName:null,
            color:"#000",
            size:"24"
          }
        ]
      }
  },
  computed:{
      cssVariables(){
          return {
            "--efsane-table-actions-popup-icons-gap": `${this.actionColumn.gap || 0}px`
          }
      }
  },
  methods:{
    close(){
      this.$emit('update:show', false)
    },
    addAction(){
        this.actions.push({
          tooltip:null,
          svgName:"dots",
          methodName:null,
          color:"#000",
          size:"24"
        })
    },
    saveAction(){
      this.close()
    },
    removeAction(index){
        this.actions.splice(index,1)
    },
    svgContent(icon){
      let currentIcon = this.icons.find(v => v.name === icon.svgName)
      return currentIcon.svg.replace("__WIDTH__",icon.size).replace("__HEIGHT__",icon.size).replace("__TITLE__",icon.tooltip || currentIcon.name).replace("__ICON_COLOR__",`${icon.color}`)
    },
  },
}
</script>

<style lang="scss" scoped>
  .actions-popup-container{
    position: absolute;
    right: -12px;
    top: 30px;
    display: block;
    min-height: 40vh;
    z-index: 99999;
    width: 550px;
    background-color: #fff;
    box-shadow: -15px 20px 60px rgba(0,0,0,.3);
    border-radius: 5px 5px 10px 10px;
  }
  .actions-popup-header{
    height: 35px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid rgba(0,0,0,.1);
    svg{
      cursor: pointer;
      &:hover{
        opacity: .7;
      }
    }
  }
  .actions-popup-body{
    height: 100%;
  }
  .action-info-container{
    display: flex;
    margin: 15px;
    .gap-select{
      width: 100px;
      margin-left: 5px;
    }
  }
  .actions-container{
    display: block;
    margin: 15px;
    text-align: right;
    .add-action{
      height: 35px;
      width: 100px;
      margin-left: auto;
      margin-right: 0;
      outline: none;
      border: 1px solid rgba(0,0,0,.1);
      border-radius: 5px;
      padding: 3px 10px;
      cursor: pointer;
      background-color: #32a918;
      color: #fff;
      &:hover{
        background-color: #ddf6d9;
        color: #000;
      }
    }
    table{
      border-spacing: 10px;
    }
  }
  .action-row{
    height: 35px;

    .action-row-svg-icon{
      text-align: center;
      height: 35px;
    }

    .action-row-svg-color{
      text-align: center;
      height: 35px;
    }

    .action-row-select{
      height: 35px;
      select{
        height: 100%;
        width: 100%;
        outline: none;
        border: none;
        border-bottom: 1px solid rgba(0,0,0,.1);
      }
    }
    .action-row-button{
      height: 35px;
      .remove{
        height: 100%;
        width: 100%;
        outline: none;
        border: 1px solid rgba(0,0,0,.1);
        border-radius: 5px;
        padding: 3px 10px;
        cursor: pointer;
        background-color: #f6d9d9;
        &:hover{
          background-color: #f56262;
          color: #fff;
        }
      }
    }

    .action-row-input{
      height: 35px;
      input{
        height: 100%;
        width: 100%;
        outline: none;
        border: none;
        border-bottom: 1px solid rgba(0,0,0,.1);
      }
    }
  }

  .actions-popup-preview{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 75px;
    width: 100%;
    border-top: 1px solid rgba(0,0,0,.2);
    *{
      padding: var(--efsane-table-actions-popup-icons-gap);
      cursor: pointer;
    }
  }

  .save-button{
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 1.2em;
    width: 100%;
    cursor: pointer;
    background-color: rgba(0,0,0,.1);
    color: rgba(0,0,0,.5);
    border: none;
    outline: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    &:hover{
      background-color: #5bc244;
    }
  }
</style>
