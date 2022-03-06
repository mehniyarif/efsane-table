<template>
  <span class="efsane-table-header-order-icon">
    <svg v-if="showDown" xmlns="http://www.w3.org/2000/svg" width="18" height="18"  viewBox="0 0 512 512"><title>Sorted A to Z by {{column.header}}</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 328l144-144 144 144"/></svg>
    <svg v-if="showUp" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512"><title>Sorted Z to A by {{column.header}}</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/></svg>
  </span>
</template>

<script>
export default {
  name: "column-order",
  props:{
    tableOrder:{
      type:String,
      default:null
    },
    column:Object
  },
  computed:{
    showUp(){
      let orderName = this.tableOrder ? this.tableOrder.replace('-', '') : null
      if(this.column.name === orderName && this.tableOrder.startsWith('-')){
        return true
      }
      return false
    },
    showDown(){
      if(this.column.name === this.tableOrder){
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
  .efsane-table-header-order-icon{
    padding-top: 4px;
    cursor: pointer;
  }
</style>
