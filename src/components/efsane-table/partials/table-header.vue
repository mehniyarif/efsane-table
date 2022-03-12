<template>
  <tr class="efsane-table-header drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent="onDragOver" @dragleave.prevent="onDragLeave">
    <template v-for="(column, key) in columns"   >
      <span class="efsane-table-th" @click="selectHeader(column)" :style="alignStyle(column.align)" :draggable="resizeMode" :key="key" :dragKey="key" :class="{'drag-el':resizeMode}"  @dragend="endDrag($event, column)" @dragstart="startDrag($event, column)">
        <span v-if="!resizeMode || dragStatus" >
          <span v-if="['data','slot','row_number'].includes(column.type)">{{column.header}}</span>
          <checkbox v-if="column.type === 'checkbox' && currentTab !== 'selected'" :name="'checkbox-all'" >
            <input slot="checkbox-input" type="checkbox" :value="listAllSelected"  :checked="listAllSelected" @input="triggerListAllSelected" :id="'checkbox-all'" />
          </checkbox>
          <column-order :column="column" :table-order="tableOrder" v-if="showOrderIcon(column)"></column-order>
        </span>
        <column-edit v-else :columns="columns" :text-manipulation="textManipulation" :edit-column="editColumn" :align-options="alignOptions" :type-options="typeOptions" :list-manipulation="listManipulation"  :ind="key"></column-edit>
      </span>

    </template>
  </tr>
</template>

<script>
import Checkbox from "./checkbox"
import ColumnEdit from "./column-edit"
import ColumnOrder from "./column-order"
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
    currentTab:String,
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
    typeOptions:{
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
    alignStyle:{
      type:Function,
      required:false
    },
    triggerListAllSelected:{
      type:Function,
      required:false
    },
    resizeMode:Boolean
  },
  methods:{
    selectHeader(column){
      if(this.resizeMode)
        return

      if(column.type === 'data'){
        if(this.tableOrder === column.name){
          this.$emit('update:table-order',`-${column.name}`)
          this.$emit('update:table-offset', 0)
        }else if (this.tableOrder === `-${column.name}`){
          this.$emit('update:table-order',null)
        }
        else{
          this.$emit('update:table-order',column.name)
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
    display: grid;
    grid-template-columns:var(--efsane-table-column-sizes);
    padding-right: 8px;
    border-top-left-radius: 5px;
    background-color:var(--efsane-header-background-color);
    box-shadow: 0 -1px 3px rgba(0,0,0,.1);
    min-height: min-content;
    height: var(--efsane-table-header-height);
    line-height: var(--efsane-table-header-height);
    padding-block: 5px;
    max-height: max-content;
    white-space: nowrap;
    word-break: keep-all;
    color: var(--efsane-header-text-color);
    font-family: soleil,sans-serif;
    border-inline: 1px solid rgba(0,0,0,.1);
    font-weight: 500;
    margin-bottom: 1px;
  }
  .efsane-table-th{
    position: relative;
    cursor: pointer;
    background-color:var(--efsane-header-background-color);
    &.drag-el{
      &:nth-child(even){
        border-inline: 1px dashed rgba(0,0,0,.2);
      }
    }
    & > span {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  .drag-el {
    background-color: var(--efsane-header-background-color);
    cursor: move;
  }
</style>
