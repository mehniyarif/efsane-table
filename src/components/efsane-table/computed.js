import TableApp from "./app";
export default {
  computed:{
    dataKeys(){
      let tableApp = new TableApp
      let specialColumns = ['row_number','checkbox']
      if(this.accordion){
        specialColumns.push('more')
      }
      return tableApp.generateSmartData(this.data, this.$scopedSlots, specialColumns,false)
    },
    tableAllSelectAlertText(){
      return `All ${this.selected.length} ${this.tableItemDefinition.toLowerCase()} on this page have been selected.  `
    },
    lazyLoad(){
      return !!this.data.length
    },
    autoVisibility(){
      return this.settings.autoVisibility
    },
    visibleColumns(){
      if(this.autoVisibility){ // TODO: burada conditional columna göre işlem yapılacak
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
          let hidden = [`minmax(0, ${column.size}px) `, `minmax(0, ${column.size}) `, " minmax(0, 1fr) "]
          let auto = [`minmax(150px, ${column.size}px) `, `minmax(150px, ${column.size}) `, " minmax(150px, 1fr) "]
          let selectedOverflow = this.widthOverflow === "auto" ? auto : hidden
          if(column.size && !isNaN(column.size - 1)){
            size +=  selectedOverflow[0]
          }else if(column.size){
            size +=  selectedOverflow[1]
          }else{
            size +=  selectedOverflow[2]
          }
        })
      }

      return size
    }
  }
}
