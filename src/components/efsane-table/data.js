export default {
  data(){
    return{
      tableKey:0,
      startPoint:null,
      endPoint:null,
      selectName:null,
      selectedIndexs:[],
      selectedAccordions:this.accordionMatchValue && [this.accordionMatchValue].flat(),
      selected:[],
      dragStatus:false,
      scrollWidth:7,
      currentOffset:0,
      lazyLoadFlag:false,
      tooltip:null,
      tooltipPageY:null,
      tooltipPageX:null,
      tableTabs:[],
      listAllSelected:false,
      tableOrder:this.ordering,
      currentTab:"main",
      dataAllSelected:false,
      currentColumns: this.columns && this.columns.length ? this.columns : this.defaultColumns,
      currentActions:this.actions && this.actions.length ? this.actions : this.defaultActions,
      settings:{
        tableBackgroundColor:"#fff",
        tableTextColor:"#343A40",
        headerBackgroundColor:"#F7F9F9",
        headerTextColor: "#343A40",
        topbarHeight:"28px",
        headerHeight:"30px",
        rowHeight:null,
        lineGap:null,
        rowHoverStatus:true,
        rowSelectedColorStatus:true,
        rowScrollStatus:false,
        selectedTabStatus:true,
        rowHoverColor:"#EEEEEE",
        tooltipBackgroundColor:"#343A40",
        tooltipTextColor:"#ffffff",
        rowSelectedColor:"#81D4FA",
        rowSelectedAccordionColor:"#D1C4E9",
        rowScrollSize:2,
        rowBorderTopColor:"#EEEEEE",
        rowBorderTopSize:0,
        rowBorderBottomColor:"#EEEEEE",
        rowBorderBottomSize:1,
        rowBorderLeftSize:0,
        rowBorderLeftColor:"#EEEEEE",
        rowBorderRightSize:0,
        rowBorderRightColor:"#EEEEEE",
        bodyBorderSize:0,
        bodyBorderColor:"#EEEEEE",
        tableBodyHeight:"65vh",
        paginationHeight:"35px",
        resizing:false,
        resizeMode:false,
        shortcutSelectAllToggle:"alt+q",
        shortcutSelectFilteredAll:"shift+f",
      }
    }
  }
}
