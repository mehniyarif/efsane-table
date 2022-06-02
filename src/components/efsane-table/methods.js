import TableApp from "./app";
export default {
  methods:{
    getArrayValues(arr,property_list,settings = {}){
      // buranın kullanılma amacı eğer datanın içinde array gelmişse aynı stepteki
      // dataların virgülle ayrılarak birleştirilmesi veya ilk index'in alınmasıdır.
      // data: {names: [{name:"test"},{name:"test2"}]}
      // property_list = [data.names.name]
      // console "test,test2"

      let result = [];
      if (['commas', 'sum'].includes(settings.listManipulation)) {
        //propery list'i slice etmedik çünkü bu methoda verilirken edildi.
        arr.forEach((item) => {
          result = result.concat(this.getPropertyValue(item, property_list, settings));
        });
      }
      else {
        result = result.concat(this.getPropertyValue(arr[0], property_list, settings));
      }
      return result;
    },
    getPropertyValue(data, property_list, settings= {}) {
      let result = []

      if(property_list.length > 1 && data[property_list[0]]){
        if(Array.isArray(data[property_list[0]])){
          result = result.concat(this.getArrayValues(data[property_list[0]],property_list.slice(1), settings))
        }else if(property_list[0] in data){
          result = result.concat(this.getPropertyValue(data[property_list[0]], property_list.slice(1), settings))
        }
      }else{

        if(Array.isArray(data[property_list[0]])){
          result = result.concat(this.getArrayValues(data[property_list[0]],property_list.slice(1), settings))
        }else if(property_list[0] in data){
          result.push(data[property_list[0]])
        }
      }

      return result
    },
    readProperty(data, column){
      if(!data || !column.name) return null

      let propertyPath = column.name.split(".")
      let settings = {
        listManipulation:column.list_manipulation ? column.list_manipulation : 'first',
        textManipulation:column.text_manipulation ? column.text_manipulation : 'default'
      }

      let showValue = ""
      if(['sum'].includes(settings.listManipulation)){
        showValue = this.getPropertyValue(data, propertyPath, settings).reduce((a, b) => a + b, 0)
      }
      showValue =  this.getPropertyValue(data, propertyPath, settings).join(",")
      switch (settings.textManipulation) {
        case 'lower':
          return showValue.toLowerCase()
        case 'upper':
          return showValue.toUpperCase()
        case 'title':
          return this.toTitleCase(showValue)
        case 'capitalize':
          return this.toCapitalizeCase(showValue)
        default:
          return showValue
      }
    },
    setShowMenu(){
      if(parseInt(this.settings.showMenuStatus) === 1){
        this.showMenu = true
      }
    },
    clickedTable(){
      this.dragStatus = false
    },
    mouseHoverOnBody(){
      if(parseInt(this.settings.showMenuStatus) === 2){
        this.showMenu = true
      }
    },
    mouseLeaveOnBody(){
      if(parseInt(this.settings.showMenuStatus) === 2){
        this.showMenu = false
      }
    },
    toTitleCase(str) {
      return str.replace(
        /\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      );
    },
    toCapitalizeCase(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    borderVisible(ind){
      return ind && this.resizeMode
    },
    alignStyle(align){
      if(!['center','left','right'].includes(align)){
        align = 'center'
      }
      if(align === "left"){
        align = "space-around start"
      }

      if(align === "right"){
        align = "space-around end"
      }
      return {
        "place-content":align,
        "text-align":align,
        "white-space":"wrap",
        "display":"grid"
      }
    },
    dataAllSelect(){
      this.dataAllSelected = true
      this.listAllSelected = true
      this.sendDataAllSelectedMode(true)
      this.sendListAllSelectedMode(true)
    },
    openCloseResizeMode(){
      this.resizeMode =! this.resizeMode
    },
    triggerListAllSelected(event){
      this.listAllSelected = event.target.checked
      this.sendListAllSelectedMode(event.target.checked)
      if(event.target.checked){
        this.selectedIndexs = Array.from({length: this.data.length}, (_, i) => i + 1)
      }else{
        this.selectedIndexs = []
      }
    },
    listAllSelectKeyboard(){
      this.listAllSelected =! this.listAllSelected
      this.sendListAllSelectedMode(this.listAllSelected)
      if(this.listAllSelected){
        this.selectedIndexs = Array.from({length: this.data.length}, (_, i) => i + 1)
      }else{
        this.selectedIndexs = []
      }
    },
    dataAllSelectKeyboard(){
      this.listAllSelected = true
      this.dataAllSelected = true
      this.sendDataAllSelectedMode(true)
      this.sendListAllSelectedMode(true)
      this.selectedIndexs = Array.from({length: this.data.length}, (_, i) => i + 1)
    },
    listAllSelectedWatcher(event){
      if(!event.target.checked){
        this.listAllSelected = false
        this.dataAllSelected = false
        this.sendDataAllSelectedMode(false)
        this.sendListAllSelectedMode(false)
      }
      setTimeout(()=>{
        if(event.target.checked && this.selectedIndexs.length == this.data.length){
          this.listAllSelected = true
          this.sendListAllSelectedMode(true)
        }
      },100)
    },
    editColumn(column){
      let ind = this.currentColumns.findIndex(v => v.name === column.name)
      this.currentColumns[ind] = column
      this.changeColumnsLocal(this.currentColumns)
      this.increaseTableKey()
    },
    increaseTableKey(){
      this.tableKey +=1
      setTimeout(()=>{
        // tablo refresh edilirken işlemediği için async yaptık
        this.setObservers()
      },0)
    },
    changeColumnsLocal(value){
      this.currentColumns = value
      this.sendColumns(value)
      this.increaseTableKey()
    },
    makeId(){
      let length = Math.floor(Math.random() * 30)
      let result           = ["id"];
      let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        result.push(characters.charAt(Math.floor(Math.random() *
          charactersLength)));
      }
      return result.join('');
    },
    getStorage(){
      if(this.save){
        let columnsStorage = localStorage.getItem(`${this.tableName}-columns`)
        let settingsStorage = localStorage.getItem(`${this.tableName}-settings`)
        if(columnsStorage){
          this.currentColumns =  JSON.parse(atob(columnsStorage))
        }
        if(settingsStorage){
          this.setSettings(JSON.parse(atob(settingsStorage)))
        }
      }
    },
    removeSettings(){
      let columnsStorage = localStorage.getItem(`${this.tableName}-columns`)
      let settingsStorage = localStorage.getItem(`${this.tableName}-settings`)
      if(settingsStorage){
        localStorage.removeItem(`${this.tableName}-settings`)
      }
      if(columnsStorage){
        localStorage.removeItem(`${this.tableName}-columns`)
      }

      location.reload();
    },
    getCopyChilds(nodes){
      let text = []

      if(nodes && nodes.length){

        nodes.forEach(node => {
          if(node.classList && node.classList.contains("inline-works")){
            return
          }
          text.push(node.textContent)
          if(node.childNodes && node.childNodes.length){
            text.push(this.getCopyChilds(text, node.childNodes))
          }
        })
      }
      return text.join(" ").trim()
    },
    copyText(event){
      let closest =  event.target.closest(".efsane-table-td")
      let text = this.getCopyChilds(closest.childNodes)
      navigator.clipboard.writeText(text)
    },
    downloadTxt(data){
      let pom = document.createElement('a');
      let blob = new Blob([data],{type: 'text/txt;charset=utf-8;'});
      let url = URL.createObjectURL(blob);
      pom.href = url;
      let date = new Date()
      let suffix_date = date
        .toLocaleDateString(navigator.language || navigator.userLanguage, {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replace("/", "-");
      let suffix_time = date
        .toLocaleTimeString(navigator.language || navigator.userLanguage, {
          second: "2-digit",
          minute: "2-digit",
          hour: "2-digit",
          hour12: false,
        })
        .replace(":", "-");
      pom.setAttribute('download', 'download_'+suffix_date+'_'+suffix_time+'.txt');
      pom.click();
    },
    downloadText(){
      let closest =  event.target.closest(".efsane-table-td")
      let text = this.getCopyChilds(closest.childNodes)
      this.downloadTxt(text)
    },
    mouseDown(selectName, e){
      this.settings.resizing = true
      this.startPoint = e.pageX
      this.resizeSelectName = selectName
    },
    mouseUp(e){
      this.settings.resizing = false
      this.endPoint = e.pageX
    },
    mouseMove(e){
      this.endPoint = e.pageX
      if(this.settings.resizing){
        let ind = this.currentColumns.findIndex(v => v.name === this.resizeSelectName)
        let currentName = this.currentColumns[ind - 1].name
        let nextSelectName = this.currentColumns[ind].name
        let previousElement = document.getElementById(`column-${currentName}`)
        let nextElement = document.getElementById(`column-${nextSelectName}`)
        if(this.startPoint > this.endPoint){
          let diff = this.startPoint - this.endPoint
          let safeZone = 30
          if(previousElement.clientWidth - safeZone > diff){
            this.currentColumns[ind -1]['size'] = previousElement.clientWidth - diff
            this.currentColumns[ind]['size'] = nextElement.clientWidth + diff
          }
        }else{
          let diff = this.endPoint - this.startPoint
          let safeZone = 30
          if(nextElement.clientWidth - safeZone> diff){
            this.currentColumns[ind -1]['size'] = previousElement.clientWidth + diff
            this.currentColumns[ind]['size'] = nextElement.clientWidth - diff
          }
        }
        this.startPoint = this.endPoint
      }
    },
    setSettings(settings = {}){
      if(this.defaultSettings){
        settings = this.defaultSettings
      }
      Object.entries(settings).forEach(setting => {
        if(setting[0]){
          this.settings[setting[0]] = setting[1]
        }
      })
      this.sendSettings(this.settings)
    },
    clearSelected(){
      this.selected = []
      this.selectedIndexs = []
      this.dataAllSelected = false
      this.listAllSelected = false
    },
    tableTabsControl(){
      let selectedIndex = this.tableTabs.findIndex(v => v.name === 'selected')
      if((this.selected.length === 0 && selectedIndex > -1) || !this.settings.selectedTabStatus){
        this.tableTabs.splice(selectedIndex, 1)
        this.selectTab('main')
      }
      if(this.selected.length > 0 && selectedIndex === -1 && this.settings.selectedTabStatus){
        this.tableTabs.push({name:"selected",title:`Selected ${this.tableItemDefinition.toLowerCase()}`})
      }
    },
    selectTab(value){
      this.currentTab = value
    },
    scrollbarVisible() {
      if(this.$refs.tableBody.scrollHeight > this.$refs.tableBody.clientHeight){
        this.scrollWidth = 7
      }else{
        this.scrollWidth = 0
      }
    },
    shortcutApply(event){
      let controlValue = [{k:"ctrl",v:event.ctrlKey} , {k:"alt",v:event.altKey}, {k:"shift",v:event.shiftKey}].find(v => v.v)
      let currentValue = `${controlValue ? controlValue.k+'+' : ''}${event.key.toLowerCase()}`

      if(this.settings.shortcutSelectAllToggle === currentValue){
        this.listAllSelectKeyboard()
      }
      else if(this.settings.shortcutSelectFilteredAll === currentValue){
        this.dataAllSelectKeyboard()
      }

    },
    handleScroll(event){
      let firstRow = document.querySelector(`#${this.headerId}`)
      if(firstRow){firstRow.scrollLeft = event.target.scrollLeft
      }
    },
    transitionKey(row, line){
      if(!this.transitionConstField) return line
      let propertyValue =  this.readProperty(row, {name:this.transitionConstField})
      return propertyValue && propertyValue || line
    },
    openControl(row, line){
      let readMatchField = this.accordionMatchField ? this.readProperty(row, {name:this.accordionMatchField}) : line
      return this.selectedAccordions.includes(readMatchField)
    },
    displayTooltip(event, element){
      this.tooltip = element.dataset.tooltip
      let rect = element.getBoundingClientRect()
      this.tooltipPageY = rect.top
      this.tooltipPageX = rect.left
    },
    setUpTooltip(){
      let tooltipElements = Array.from(document.querySelectorAll(".efsane-tooltip"))
      tooltipElements.forEach((element)=>{
        element.addEventListener("mouseenter", (event)=>{
          this.displayTooltip(event, element)
        })
        element.addEventListener("mouseleave", ()=>{
          this.tooltip = null
        })
      })
    },
    observerTable(observerList){
      // buradaki olay column özelliği olan visibility ve visibilitCondition özelliklerine gözükecek columnları bulmaktır.
      observerList.forEach((element)=>{
        let number = element.target.dataset?.line
        if(element.isIntersecting){
          this.tableObserveObject[number+1] = this.currentData[number]
        }else{
          this.tableObserveObject[number+1] = ""
        }
      })
      let list = [...new Set(Object.values(this.tableObserveObject))]
      let tableApp = new TableApp
      let existsKeys = tableApp.generateSmartData(list, this.$scopedSlots, [],true)
      let conditions = this.currentColumns.filter(v => v.visibility === 'exists').map(v => [v.name, v.visibilityCondition || v.name])
      if(conditions?.length){
        conditions.forEach(([key,conditionKey])=>{
          if(!existsKeys.includes(conditionKey)){
            let index = existsKeys.findIndex(v => v === key)
            if(index > -1){
              existsKeys.splice(index,1)
            }
          }
        })
      }
      this.observeChangingCount +=1
      if(this.observeChangingCount > 1){
        clearTimeout(this.observeChangingTimeout)
      }
      this.observeChangingTimeout = setTimeout(()=>{
        this.visibleDataKeys= existsKeys
        this.observeChangingCount = 0
      },500)

    },
    observerHeader(observerList){
      observerList.forEach((element)=>{
        if(element.isIntersecting){
          let computedParentStyle = window.getComputedStyle(element.target)
          let computedChildrenStyle = window.getComputedStyle(element.target.children[0])
          this.headerObserveObject[element?.target?.innerText] = {
            width :parseFloat(computedChildrenStyle.width),
            character: element?.target?.innerText?.length,
            isLong:parseFloat(computedParentStyle.width) < parseFloat(computedChildrenStyle.width)
          }
        }else{
          this.headerObserveObject[element?.target?.innerText] = null
        }
      })

      this.observeChangingCount +=1
      if(this.observeChangingCount > 1){
        clearTimeout(this.observeChangingTimeout)
      }
      this.observeChangingTimeout = setTimeout(()=>{
        this.longTextExistsHeader = Object.values(this.headerObserveObject).map(v => v?.isLong || false).some(v => v)
        this.observeChangingCount = 0
      },500)
    },
    setObservers(){
      this.tableObserver?.disconnect()
      this.tableObserver  = new IntersectionObserver(this.observerTable, this.tableObserveOptions)
      this.$refs.tableBody?.childNodes.forEach((element)=>{
        if (element instanceof HTMLElement) {
          this.tableObserver.observe(element)
        }
      })
    }
  },
}
