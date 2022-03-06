<template>
  <div class="column-edit-container" v-click-outside="close" :style="cssVariables">
    <div class="column-edit" >
      <svg class="column-edit-dropdown-icon" @click="show=!show" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path   fill="#cdcdcd" d="M18 13.45l2-2.023v4.573h-2v-2.55zm-11-5.45h1.743l1.978-2h-3.721v2zm1.361 3.216l11.103-11.216 4.536 4.534-11.102 11.218-5.898 1.248 1.361-5.784zm1.306 3.176l2.23-.472 9.281-9.378-1.707-1.707-9.293 9.388-.511 2.169zm3.333 7.608v-2h-6v2h6zm-8-2h-3v-2h-2v4h5v-2zm13-2v2h-3v2h5v-4h-2zm-18-2h2v-4h-2v4zm2-6v-2h3v-2h-5v4h2z"/></svg>
      <div class="column-edit-dropdown" v-if="show">
          <div class="column-edit-dropdown-header">{{ this.showValue(columns[ind].name) }}</div>
          <div class="column-edit-dropdown-form" >
            <efsane-input v-if="!['checkbox'].includes(columnData.type)" v-model="columnData.header" name="header" data-vv-name="Header" label="Header"> </efsane-input>
            <efsane-input v-if="!['checkbox'].includes(columnData.type)" v-model="columnData.tooltip" name="tooltip" data-vv-name="Tooltip" label="Tooltip"> </efsane-input>
            <efsane-select v-model="columnData.align" name="align"  label="Align" :options="alignOptions" label-property="label" value-property="name"> </efsane-select>
            <efsane-select v-model="columnData.type" name="type" disabled label="Type" :options="typeOptions" label-property="label" value-property="name"> </efsane-select>
            <efsane-select v-if="!['checkbox', 'action', 'row_number', 'slot'].includes(columnData.type)" v-model="columnData.list_manipulation" name="type" label="List Manipulation" :options="listManipulation" label-property="label" value-property="name"> </efsane-select>
            <efsane-select v-if="!['checkbox', 'action', 'row_number', 'slot'].includes(columnData.type)" v-model="columnData.text_manipulation" name="type" label="Text Manipulation" :options="textManipulation" label-property="label" value-property="name"> </efsane-select>
            <efsane-switch v-if="!['checkbox', 'action'].includes(columnData.type)" v-model="columnData.copyable" name="copyable"  label="Copyable"> </efsane-switch>
            <efsane-switch v-if="!['checkbox', 'action', 'row_number'].includes(columnData.type)" v-model="columnData.downloadable" name="downloadable"  label="Downloadable"> </efsane-switch>

            <div class="column-edit-dropdown-form-footer">
              <table-button color="info" :disabled="formValid" @click.stop="changeColumn">Apply</table-button>
              <table-button color="light" @click.stop="show=false">Cancel</table-button>
            </div>

          </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableButton from "./table-button"
export default {
  name: "column-edit",
  components:{
    TableButton
  },
  props:{
    columns:{
      type:Array,
      default:function(){
        return []
      }
    },
    textManipulation:{
      type:Array,
      default:function(){
        return []
      }
    },
    typeOptions:{
      type:Array,
      default:function(){
        return []
      }
    },
    listManipulation:{
      type:Array,
      default:function(){
        return []
      }
    },
    alignOptions:{
      type:Array,
      default:function(){
        return []
      }
    },
    editColumn:{
      type:Function,
      required:false
    },
    ind:Number
  },
  data(){
    return{
      show:false,
      columnData:{
        header:this.columns[this.ind].header,
        tooltip:this.columns[this.ind].tooltip,
        align:this.columns[this.ind].align || 'center',
        type:this.columns[this.ind].type,
        name:this.columns[this.ind].name,
        size:this.columns[this.ind].size || '1fr',
        list_manipulation:this.columns[this.ind].list_manipulation || 'first',
        text_manipulation:this.columns[this.ind].text_manipulation || 'default',
        copyable:this.columns[this.ind].copyable || false,
        downloadable:this.columns[this.ind].downloadable || false
      }
    }
  },
  computed:{
        formValid(){
            return !this.columnData.header
        },
        cssVariables(){
          return{
            "--column-edit-dropdown-max-height": "70vh"
          }
        }
  },
  methods:{
    close(){
      this.show=false
    },
    changeColumn(){
      this.editColumn(this.columnData)
      this.close()
    },
    showValue(name){
      return this.toTitleCase(name.replace(/_/g, ' ').replace(/\./g,' / '));
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
  .column-edit-container{
    height: 30px;
    width: 30px;
  }
  .column-edit{
    position: relative;
    margin-right: 10px;
    display: grid;
    place-content: center;
    height: 30px;
    width: 30px;
    &.selected,
    &:hover{
      background-color: rgba(0,0,0,.1);
      border-radius: 50%;
      svg{
        cursor: pointer;
      }
      .column-edit-dropdown-icon path{
          fill: #fff;
      }
    }
  }
  .column-edit-dropdown{
    position: absolute;
    max-height: var(--column-edit-dropdown-max-height);
    min-width: 250px;
    border-radius: 5px;
    z-index: 54000;
    background-color: #fff;
    box-shadow: -5px 7px 12px rgba(0,0,0,.2);
    right: -12px;
    top: 30px;
    overflow-y: scroll;
    cursor: default;
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
  .column-edit-dropdown-header{
    height: 35px;
    border-bottom: 1px solid rgba(0,0,0,.1);
    font-family: soleil,sans-serif;
    font-weight: 500;
    padding-left: 10px;
    padding-top: 10px;
    background-color: #fff;
    position: sticky;
    z-index:99999;
    top: 0px;
    left: 0;
  }

  .column-edit-dropdown-items-container{
    position: relative;
    height: 100%;
    width: 100%;
  }
  .column-edit-dropdown-form{
    padding-block:10px ;
    padding-inline:20px ;
    display: grid;
    place-content: center;
  }
  .column-edit-dropdown-form-footer{
    display: flex;
    padding-top: 10px;
    place-content: space-around;
  }
</style>
