import TableApp from "./app";
export default {
  computed:{
    dataKeys(){
      let tableApp = new TableApp
      return tableApp.generateSmartData(this.data, this.$scopedSlots)
    },
    tableAllSelectAlertText(){
        return `All ${this.selected.length} ${this.tableItemDefinition.toLowerCase()} on this page have been selected.  `
    },
    lazyLoad(){
      return (this.data)
    },
    currentData(){
      if(this.currentTab === 'selected'){
        return this.selected
      }
      return this.data
    },
    tableAllSelectAlertShow(){
      return this.lazyLoadFlag &&  this.data && this.dataCount > this.data.length && this.selected.length === this.data.length
    },
    tableSelectedCount(){
      if(this.dataAllSelected){
        return this.dataCount
      }
      return this.selected.length
    },
    columnSizes(){
      let size = ""
      if(this.currentColumns && this.currentColumns.length){
        this.currentColumns.forEach(column => {
          if(column.size && !isNaN(column.size - 1)){
            size +=  `${column.size}px `
          }else if(column.size){
            size +=  `minmax(0, ${column.size}) `
          }else{
            size +=  " 1fr "
          }
        })
      }
      return size
    }
  }
}
