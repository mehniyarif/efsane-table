export default {
  data(){
    return{
      headerId:this.makeId(),
      tableObserveOptions: {
        root: document.querySelector('#efsane-table-content-wrapper'),
        rootMargin: '0px',
        threshold: 0
      },
      headerObserveOptions: {
        root: document.querySelector(`#${this.headerId}`),
        rootMargin: '0px',
        threshold: 0
      },
      tableObserveObject:{},
      headerObserveObject:{},
      tableObserver:null,
      headerObserver:null,
      longTextExistsHeader:false,
      visibleDataKeys:[],
      observeChangingTimeout:null,
      observeChangingCount:0,
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
      resizeMode:false,
      listAllSelected:false,
      tableOrder:this.ordering,
      showMenu:false,
      currentTab:"main",
      dataAllSelected:false,
      currentColumns: this.columns && this.columns.length ? this.columns : this.defaultColumns || [],
      currentActions:this.actions && this.actions.length ? this.actions : this.defaultActions,
      settings:{
        tableBackgroundColor:"#fff",
        tableTextColor:"#343A40",
        headerBackgroundColor:"#F7F9F9",
        headerTextColor: "#343A40",
        autoVisibility:true,
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
        firstRowBorderTop:false,
        rowBorderBottomColor:"#EEEEEE",
        rowBorderBottomSize:1,
        lastRowBorderBottom:false,
        showMenuStatus:2,
        rowBorderLeftSize:0,
        rowBorderLeftColor:"#EEEEEE",
        rowBorderRightSize:0,
        rowBorderRightColor:"#EEEEEE",
        bodyBorderSize:1,
        bodyBorderColor:"#EEEEEE",
        tableBodyHeight:"65vh",
        paginationHeight:"35px",
        resizing:false,
        shortcutSelectAllToggle:"alt+q",
        shortcutSelectFilteredAll:"shift+f",
      }
    }
  }
}
