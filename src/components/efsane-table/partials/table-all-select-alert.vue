<template>
  <div class="table-all-select-alert" v-if="tableAllSelectAlertShow" >
    <span v-if="dataAllSelected">All {{dataCount}} filtered {{tableItemDefinition.toLowerCase()}} selected</span>
    <span v-else>
        {{tableAllSelectAlertText}}
        <span @click="dataAllSelect" class="data-all-selected-button">&nbsp; Select All {{dataCount}} filtered {{tableItemDefinition.toLowerCase()}}</span>
        </span>
  </div>
</template>

<script>
export default {
  name: "table-all-select-alert",
  props:{
    tableAllSelectAlertShow:Boolean,
    dataAllSelected:Boolean,
    tableAllSelectAlertText:String,
    tableItemDefinition:String,
    dataAllSelect:{
      type:Function,
      default:()=>{}
    },
    dataCount:[String,Number],
  }
}
</script>

<style lang="scss" scoped>

.table-all-select-alert{
  height: var(--efsane-table-all-selected-alert-box-height);
  text-shadow: 1px -1px 3px rgba(0,0,0,.1);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 5px;
  border-radius: 5px;
  margin-right: auto;
  z-index: 2;
  width: 100%;
  padding-left: 10px;
}
.data-all-selected-button{
  color: #3cabea;
  cursor: pointer;
}
</style>
