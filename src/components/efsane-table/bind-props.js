export default {
  computed:{
      efsaneTableWrapper(){
        return {
          style:this.styles,
          key:this.tableKey,
          class:"efsane-table-wrapper",
          id:"efsane-table-wrapper"
        }
      }
  }
}
