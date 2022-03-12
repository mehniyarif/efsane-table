<template>
<div class="dynamic-column-setting "  v-click-outside="close" :style="cssVariables">
  <svg class="dynamic-column-setting-dropdown-icon"   xmlns="http://www.w3.org/2000/svg" @click="show=!show" width="20" height="20" viewBox="0 0 24 24"><title >Columns Settings</title><path fill="#cdcdcd" d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>
  <div class="dynamic-column-setting-dropdown" v-if="show">
      <div class="dynamic-column-setting-dropdown-header">{{formStatus === 'list' ? 'Columns Menu' : formStatus === 'add' ? 'Add Column' : 'Remove Column'}}</div>
      <div class="dynamic-column-setting-dropdown-items-container" v-if="formStatus === 'list'">
        <div v-for="(column, key) in generateColumns" :key="key" class="dynamic-column-setting-item">
          <svg :class="{'selected':selectedColumns.includes(column.name)}" @click.stop="showForm(column.name)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.166 16.943l1.4 1.4-4.622 4.657h-2.944l6.166-6.057zm11.768-6.012c2.322-2.322 4.482-.457 6.066-1.931l-8-8c-1.474 1.584.142 3.494-2.18 5.817-3.016 3.016-4.861-.625-10.228 4.742l9.6 9.6c5.367-5.367 1.725-7.211 4.742-10.228z"/></svg>
          <span>{{ showLabel(column) }}
            <svg class="help" v-if="column.type === 'slot'" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><title>Custom {{ showLabel(column) }} Field</title><path d="M256 80a176 176 0 10176 176A176 176 0 00256 80z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="28"/><circle cx="250" cy="348" r="20"/></svg>
          </span>
        </div>
      </div>
      <div class="dynamic-column-setting-dropdown-form" v-else-if="formStatus === 'add'">
        <efsane-input v-model="newColumn.header" name="header" data-vv-name="Header" label="Header"> </efsane-input>
        <efsane-input v-model="newColumn.tooltip" name="tooltip" data-vv-name="Tooltip" label="Tooltip"> </efsane-input>
        <efsane-select v-model="newColumn.align" name="align"  label="Align" :options="alignOptions" label-property="label" value-property="name"> </efsane-select>
        <efsane-select v-model="newColumn.type" name="type" disabled label="Type" :options="typeOptions" label-property="label" value-property="name"> </efsane-select>
        <efsane-select v-model="newColumn.list_manipulation" name="list" label="List Manipulation" :options="listManipulation" label-property="label" value-property="name"> </efsane-select>
        <efsane-select v-model="newColumn.text_manipulation" name="text" label="Text Manipulation" :options="textManipulation" label-property="label" value-property="name"> </efsane-select>
        <efsane-select v-model="location" name="location" label="Column Location" :options="locations" label-property="label" value-property="name"> </efsane-select>
        <efsane-switch v-model="newColumn.copyable" name="copyable"  label="Copyable"> </efsane-switch>
        <efsane-switch v-model="newColumn.downloadable" name="downloadable"  label="Downloadable"> </efsane-switch>

        <div class="dynamic-column-setting-dropdown-form-footer">
          <table-button color="info" :disabled="formValid" @click.stop="addColumn">Apply</table-button>
          <table-button color="light" @click.stop="formStatus='list'">Cancel</table-button>
        </div>

      </div>
        <div class="dynamic-column-setting-dropdown-form" v-else-if="formStatus === 'remove'">
          <div class="dynamic-column-setting-dropdown-form-remove-alert">Are you sure you want to remove this column?</div>
          <div class="dynamic-column-setting-dropdown-form-footer">
            <table-button color="warning" @click.stop="removeColumn">Remove</table-button>
            <table-button color="light" @click.stop="formStatus='list'">Cancel</table-button>
          </div>
          </div>
  </div>
</div>
</template>

<script>
import TableButton from "./table-button"
import EfsaneSelect from "./efsane-select"
import EfsaneSwitch from "./efsane-switch"
import EfsaneInput from "./efsane-input"
import Directives from "../directives"
export default {
  name: "dynamic-column-setting",
  components: {
    TableButton,
    EfsaneSelect,
    EfsaneSwitch,
    EfsaneInput
  },
  mixins:[Directives],
  props:{
    dataKeys:{
      type:Array,
      default:function(){
        return []
      }
    },
    changeColumnsLocal:{
      type:Function,
      required:false
    },
    increaseTableKey:{
      type:Function,
      required:false
    },
    typeOptions:{
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
    columns:{
      type:Array,
      default:function(){
        return []
      }
    },
  },
  data(){
    return{
      show:false,
      formStatus:'list',
      selectedColumnName:null,
      location:"__FIRST__",
      newColumn:{
        header:null,
        tooltip:null,
        align:'center',
        type:null,
        name:null,
        copyable:false,
        downloadable:false,
        size:'1fr',
        list_manipulation:'first',
        text_manipulation:'default'
      },

    }
  },
  computed:{
        formValid(){
            return !this.newColumn.header
        },
        selectedColumns(){
          return this.columns.map(v => v.name)
        },
        locations(){
          let locations = [
            {
              label:"Make First Column",
              name:"__FIRST__"
            }
          ]
          this.columns.map(column => {
            locations.push({
              name:column.name,
              label: `After ${this.showLabel(column)}`
            })
          })
          return locations
        },
        generateColumns(){
          let result = []
          result = result.concat(this.columns)
          this.dataKeys.forEach(prefix => {
            if(!this.columns.find(v => v.name === prefix)){
              result.push({
                name:prefix,
                type: prefix.startsWith("__") ? 'slot' : 'data'
              })
            }
          })
          return result
        },
        cssVariables(){
          return{
              "--dynamic-column-setting-max-height": this.formStatus === 'list' ? "40vh" : "70vh"
          }
        }
  },
  watch:{
    selectedColumnName(newValue){
      if(!['checkbox','row_number','action'].includes(newValue)){
        this.newColumn.type = 'data'
      }else if(newValue.startsWith("__")){
        this.newColumn.type = 'slot'
      }else{
        this.newColumn.type = newValue
      }
    }
  },
  methods:{
    close(){
      this.show=false
    },
    async addColumn(){
      this.newColumn.name = this.selectedColumnName
      this.newColumn.type = this.selectedColumnName.startsWith("__") ? 'slot' : 'data'
      if(['checkbox','row_number','action'].includes(this.selectedColumnName)){
        this.newColumn.type = this.selectedColumnName
      }
      let newColumns = []
      if(this.location === '__FIRST__'){
        newColumns = [this.newColumn, ...this.columns]
      }else{
        let indexColumn = this.columns.findIndex(v => v.name === this.location)
        if(indexColumn > -1){
          newColumns = [...this.columns.slice(0,indexColumn+1), this.newColumn, ...this.columns.slice(indexColumn+1, this.columns.length)]
        }
      }

      newColumns.map(column => {
        if(!["checkbox","action","row_number","slot"].includes(column.type) && !this.isSmaller60Px(column.size)){
          column.size = "1fr" // columnslar değiştiği için hepsini sıfırlıyoruz
        }
      })
      this.changeColumnsLocal(newColumns)
      this.formStatus = 'list'
      this.selectedColumnName = null
    },
    isSmaller60Px(size){
      if(size.toString().search('%') > -1) return false
      if(size.toString().search('fr') > -1) return false
      return parseInt(size.toString().replace('px', '').trim()) < 60;
    },
    removeColumn(){
      let newColumns = this.columns.filter(v => v.name !== this.selectedColumnName)
      newColumns.map(column => {
          if(!["checkbox","action","row_number","slot"].includes(column.type) && !this.isSmaller60Px(column.size)) {
            column.size = "1fr"  // columnslar değiştiği için hepsini sıfırlıyoruz
          }
      })
      this.changeColumnsLocal(newColumns)
      this.formStatus = 'list'
      this.selectedColumnName = null
    },
    showValue(name){
      return this.toTitleCase(name.replace(/([A-Z])/g, " $1").replace(/__/g, '').replace(/\./g,' / ').replace(/_/g, ' '));
    },
    showLabel(column){
        let showValue = column.name.startsWith("__") ? `${this.showValue(column.name)}` : this.showValue(column.name)
        if(column.header){
          if(showValue === column.header){
            return column.header
          }
          return `${column.header} (${showValue})`
        }
        return showValue
    },
    toTitleCase(str) {
      return str.replace(
        /\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      );
    },
    showForm(name){
      this.selectedColumnName = name
      if(!this.selectedColumns.includes(name)){
          this.newColumn.header = this.showValue(name)
          this.formStatus = 'add'
      }else{
        this.formStatus = 'remove'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .dynamic-column-setting{
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
      .dynamic-column-setting-dropdown-icon path{
          fill: #fff;
      }
    }
  }
  .dynamic-column-setting-dropdown{
    position: absolute;
    max-height: var(--dynamic-column-setting-max-height);
    min-width: 250px;
    border-radius: 5px;
    z-index: 54000;
    background-color: #fff;
    box-shadow: -5px 7px 12px rgba(0,0,0,.2);
    right: -12px;
    top: 30px;
    overflow-y: scroll;
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
  .dynamic-column-setting-dropdown-header{
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

  .dynamic-column-setting-dropdown-items-container{
    position: relative;
    height: 100%;
    width: 100%;
  }

  .dynamic-column-setting-item{
    padding: 3px;
    display: flex;
    justify-content: left;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,.1);
    overflow: hidden;
    font-family: soleil,sans-serif;
    white-space: nowrap;
    font-size: 1.15em;
    height: 35px;
    &.selected,
    &:hover{
      background-color: #F7F9F9;
    }
    svg:not(.help){
      margin-inline: 15px;
      &.selected,
      &:hover{
        path{
          fill:#337AB7;
        }
      }
    }
    svg path{
      fill: rgba(0,0,0,.1);
    }
  }
  .dynamic-column-setting-dropdown-form{
    padding-block:10px ;
    padding-inline:20px ;
    display: grid;
    place-content: center;
  }
  .dynamic-column-setting-dropdown-form-footer{
    display: flex;
    padding-top: 10px;
    place-content: space-around;
  }
  .dynamic-column-setting-dropdown-form-remove-alert{
    font-family: soleil,sans-serif;
    padding-inline: 4px;
    padding-block: 8px;
    font-weight: 500;
  }
</style>
