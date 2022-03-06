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
      },
      deep:true
    },
    currentColumns:{
      handler(newValue){
        this.sendColumns(newValue)
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
    },
    tableOrder(newValue){
      this.sendTableOrder(newValue)
    },
    tableAllSelectAlertShow(newValue){
      if(!newValue){
        this.dataAllSelected = false
        this.sendDataAllSelectedMode(false)
      }
    },
    lazyLoad(){
      this.lazyLoadFlag = true
    }
  }
}
