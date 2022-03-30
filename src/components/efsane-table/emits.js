global.Buffer = global.Buffer || require("buffer").Buffer;
export default {
  methods:{
    sendColumns(value){
      let objJsonStr = JSON.stringify(value);
      let base64Value = Buffer.from(objJsonStr).toString("base64");
      if(this.outputType === 'base64'){
        value = base64Value
      }
      this.$emit('columns', value)
      if(this.save){
        localStorage.setItem(`${this.tableName}-columns`, base64Value)
      }
    },
    sendActions(value){
      let objJsonStr = JSON.stringify(value);
      let base64Value = Buffer.from(objJsonStr).toString("base64");
      if(this.outputType === 'base64'){
        value = base64Value
      }
      this.$emit('actions', value)
      if(this.save){
        localStorage.setItem(`${this.tableName}-actions`, base64Value)
      }
    },
    sendListAllSelectedMode(value){
      this.$emit('update:list-all-selected', value)
      if(value){
        this.$emit('list-all-selected-trigger', value)
      }
    },
    sendDataAllSelectedMode(value){
      this.$emit('update:data-all-selected', value)
      if(value){
        this.$emit('data-all-selected-trigger', value)
      }
    },
    sendSelectedData(value){
      this.$emit('input', value)
    },
    sendPaginationOffset(value){
      this.$emit('update:pagination-offset', value)
      this.$emit('change-offset', value)
    },
    sendTableOrder(value){
      this.$emit('update:ordering', value)
      this.$emit('change-ordering', value)
    },
    sendSettings(value){
      let objJsonStr = JSON.stringify(value);
      let base64Value = Buffer.from(objJsonStr).toString("base64");
      if(this.outputType === 'base64'){
        value = base64Value
      }
      this.$emit('settings', value)
      if(this.save){
        localStorage.setItem(`${this.tableName}-settings`, base64Value)
      }
    },
  }
}
