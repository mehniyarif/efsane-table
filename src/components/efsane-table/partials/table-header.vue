<template>
  <thead class="efsane-table-header">
    <tr  @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent="onDragOver" @dragleave.prevent="onDragLeave">
        <span v-for="(column, key) in columns"  class="efsane-table-th" @click="selectHeader(column)" :style="alignStyle(column.align)" :draggable="!settings.resizing" :key="key" :dragKey="key" :class="{'drag-el':resizeMode}"  @dragend="endDrag($event, column)" @dragstart="startDrag($event, column)">
          <span v-if="!resizeMode || dragStatus" >
            <span v-if="['data','slot','row_number','more'].includes(column.type)">{{column.header}}</span>
            <checkbox v-if="column.type === 'checkbox' && currentTab !== 'selected'" :name="'checkbox-all'" >
              <input slot="checkbox-input" type="checkbox" :value="listAllSelected"  :checked="listAllSelected" @input="triggerListAllSelected" :id="'checkbox-all'" />
            </checkbox>
            <column-order :column="column" :table-order="tableOrder" v-if="showOrderIcon(column)"></column-order>
          </span>
          <column-edit v-else :columns="columns" :usage-types="usageTypes" :text-manipulation="textManipulation" :edit-column="editColumn" :align-options="alignOptions" :list-manipulation="listManipulation"  :ind="key"></column-edit>
          <span v-if="borderVisible(key)" class="efsane-table-th-border" @mousedown="mouseDown(column.name,$event)"><span>&nbsp;</span></span>
        </span>
    </tr>
  </thead>
</template>

<script>
import Checkbox from "./checkbox.vue"
import ColumnEdit from "./column-edit.vue"
import ColumnOrder from "./column-order.vue"
export default {
  name: "table-header",
  components:{
    Checkbox,
    ColumnEdit,
    ColumnOrder
  },
  data(){
      return{
        firstDragItem:null,
        secondDragItem:null
      }
  },
  props:{
    columns:{
      type:Array,
      default:function(){
        return []
        }
    },
    usageTypes:{
      type:Array,
      default:function(){
        return []
      }
    },
    currentTab:String,
    settings:Object,
    tableOrder:{
      type:String,
      default:null
    },
    editColumn:{
      type:Function,
      required:false
    },
    changeColumns:{
      type:Function,
      required:false
    },
    listManipulation:{
      type:Array,
      default:function(){
        return []
      }
    },
    tableOffset:Number,
    textManipulation:{
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
    listAllSelected:Boolean,
    dragStatus:Boolean,
    resizeMode:Boolean,
    alignStyle:{
      type:Function,
      required:false
    },
    mouseDown:{
      type:Function,
      required:false
    },
    triggerListAllSelected:{
      type:Function,
      required:false
    }
  },
  methods:{
    borderVisible(ind){
      return ind && this.resizeMode
    },
    selectHeader(column){
      if(this.resizeMode)
        return

      if(['data', 'slot'].includes(column.type)){
        let name = column.name

        if(column.type === 'slot'){
          name = name.replace("__", "")
        }

        if(this.tableOrder === column.name){
          this.$emit('update:table-order',`-${name}`)
          this.$emit('update:table-offset', 0)
        }else if (this.tableOrder === `-${name}`){
          this.$emit('update:table-order',null)
        }
        else{
          this.$emit('update:table-order',name)
          this.$emit('update:table-offset', 0)
        }
      }
    },
    showOrderIcon(column){
      if (column.type === 'data' && !this.resizeMode)
        return true
    },
    onDrop (evt) {
      let currentElement = evt.target.closest(".efsane-table-th")
      if(currentElement.getAttribute("class").search("drop-zone") > -1)
        return
      if(currentElement.draggable)
        this.secondDragItem = currentElement
        this.changeColumns(
          this.arrayMove(
            this.columns,
            this.firstDragItem.getAttribute("dragKey"),
            this.secondDragItem.getAttribute("dragKey")
          )
        )
    },
    startDrag(evt){
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.target.style.backgroundColor = "transparent"
      this.$emit('update:drag-status',true)
      let currentElement = evt.target.closest(".efsane-table-th")
      this.firstDragItem = currentElement
    },
    endDrag(evt){
      if(evt.target.draggable)
        this.secondDragItem.style.backgroundColor = "var(--efsane-header-background-color)"
      this.secondDragItem.style.opacity = "1"
      this.secondDragItem.style.border = "var(--efsane-header-background-color)"
      this.secondDragItem.style.outline = "none"
      this.$emit('update:drag-status',false)
    },
    onDragOver(evt){
      let currentElement = evt.target.closest(".efsane-table-th")
      if(currentElement.getAttribute("class").search("drop-zone") > -1)
        return

      currentElement.style.opacity = ".8"
      currentElement.style.border = "2px dashed #ccc"
    },
    onDragLeave(evt){
      let currentElement = evt.target.closest(".efsane-table-th")
      if(currentElement.getAttribute("class").search("drop-zone") > -1)
        return
      if(currentElement.draggable)
        currentElement.style.backgroundColor = "var(--efsane-header-background-color)"
      currentElement.style.opacity = "1"
      currentElement.style.border = "none"
    },
    arrayMove(arr, old_index, new_index) {
      if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
          arr.push(undefined);
        }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      this.$emit('update:drag-status',false)
      return arr; // for testing
    }
  }
}
</script>

<style lang="scss" scoped>
  .efsane-table-header{
    border-inline: 1px solid rgba(0,0,0,.1);
    color: var(--efsane-header-text-color);
    font-family: soleil,sans-serif;
    border-bottom: 1px solid rgba(204,204,204,.2);
    border-top: none;
    display: flex;
    font-weight: 500;
    box-sizing: border-box;
    width: 100%;
    border-top-left-radius: 5px;
    background-color:var(--efsane-header-background-color);
    box-shadow: 0 -1px 1px rgba(0,0,0,.1);
    max-height: max-content;
    min-height: min-content;
    height: var(--efsane-table-header-height);
    line-height: var(--efsane-table-header-height);
    padding-block: 4px;
  }
  .efsane-table-header > tr{
    display: grid;
    width: 100%;
    grid-template-columns:var(--efsane-table-header-column-sizes);
  }
  .efsane-table-th{
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    word-break: keep-all;
    box-sizing: content-box;
    background-color:var(--efsane-header-background-color);
    & > span {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  .efsane-table-th-border{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 100%;
    line-height: 100%;
    cursor: col-resize;
    position: absolute;
    display: flex;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    left: 0;
    width: 1px;
    top: 0;
    span{
      height: 100%;
      line-height: 100%;
      position: relative;
      border-left: 1px dashed rgba(0,0,0,.2);
      width: 0;
    }
  }

  .drag-el {
    background-color: var(--efsane-header-background-color);
    cursor: move;
  }
</style>
