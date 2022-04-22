import TableApp from "./app";
export default {
  computed:{
    dataKeys(){
      let tableApp = new TableApp
      let specialColumns = ['row_number','checkbox']
      if(this.accordion){
        specialColumns.push('more')
      }
      return tableApp.generateSmartData(this.data, this.$scopedSlots, specialColumns)
    },
    tableAllSelectAlertText(){
        return `All ${this.selected.length} ${this.tableItemDefinition.toLowerCase()} on this page have been selected.  `
    },
    lazyLoad(){
      return (this.data)
    },
    autoVisibility(){
      return this.settings.autoVisibility
    },
    visibleColumns(){
        if(this.autoVisibility){
          return this.currentColumns.filter(v => v?.visibility !== 'exists' || (v?.visibility === 'exists' && this.visibleDataKeys.includes(v?.name)))
        }else{
          return this.currentColumns
        }
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
      if(this.visibleColumns && this.visibleColumns.length){
        this.visibleColumns.forEach(column => {
          if(column.size && !isNaN(column.size - 1)){
            size +=  `minmax(0, ${column.size}px) `
          }else if(column.size){
            size +=  `minmax(0, ${column.size}) `
          }else{
            size +=  " minmax(0, 1fr) "
          }
        })
      }

      return size
    }
  }
}
