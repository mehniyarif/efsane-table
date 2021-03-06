export default {
  watch:{
    selectedIndexs(newValue){
      this.selected = this.data.filter((value,key) => newValue.includes(key+1))
      this.sendSelectedData(this.selected)
      this.tableTabsControl()
    },
    settings:{
      handler(newValue){
        this.sendSettings(newValue)
        this.tableTabsControl()
        this.setShowMenu()
      },
      deep:true
    },
    currentColumns:{
      handler(newValue){
        this.sendColumns(newValue)
        queueMicrotask(()=>{
          this.setObservers()
        })
      },
      deep:true
    },
    currentActions:{
      handler(newValue){
        this.sendActions(newValue)
      },
      deep:true
    },
    currentOffset(newValue){
      this.sendPaginationOffset(newValue)
      this.clearSelected()
    },
    tableOrder(newValue){
      this.sendTableOrder(newValue)
      this.clearSelected()
    },
    tableAllSelectAlertShow(newValue){
      if(!newValue){
        this.dataAllSelected = false
        this.sendDataAllSelectedMode(false)
      }
    },
    lazyLoad(){
      this.lazyLoadFlag = true
    },
    data:{
      handler(){
        this.clearSelected()
        queueMicrotask(()=>{
          this.setObservers()
        })
      },
      deep:true
    },
    defaultColumns:{
      handler(newValue){
        if(!newValue || !newValue.length || typeof newValue[0] != "object") return
        this.currentColumns = this.columns && this.columns.length ? this.columns : this.defaultColumns || []
      },
      deep:true
    },
    columns:{
      handler(){
        this.currentColumns = this.columns && this.columns.length ? this.columns : this.defaultColumns || []
      },
      deep:true
    }
  }
}
