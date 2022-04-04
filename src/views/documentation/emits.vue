<template>
  <div class="table-emits-wrapper">
    <efsane-table
      :data="tableEmits"
      :default-columns="columns"
      table-name="table-emits"
      :default-settings="settings"
      editable
      accordion
    ></efsane-table>
  </div>
</template>

<script>
export default {
  name: "emits",
  data(){
    return{
      settings:{
        tableTextColor:"#0097A7",
        headerBackgroundColor:"#0097A7",
        headerTextColor:"#ffffff"
      },
      columns:[
        {
          type:"more",
          header:"Description",
          name:"more",
          size:"100",
          copyable:false,
          tooltip:"Open Description"
        },
        {
          type:"data",
          header:"Emit Name",
          name:"name",
          size:"1fr",
          copyable:true,
          tooltip:"Prop Name"
        },
        {
          type:"data",
          header:"Emit Usage",
          name:"emitName",
          size:"1fr",
          copyable:true,
          tooltip:"Prop Name"
        },
        {
          type:"data",
          header:"Return Type",
          name:"returnType",
          size:"1fr",
          copyable:true,
          tooltip:"Return Type"
        },
        {
          type:"data",
          header:"Required",
          name:"required",
          size:"1fr",
          copyable:true,
          tooltip:"Required"
        },
        {
          type:"data",
          header:"Default",
          name:"default",
          size:"1fr",
          copyable:true,
          tooltip:"Default"
        },
        {
          type:"data",
          header:"Available Version",
          name:"available",
          size:"1fr",
          copyable:true,
          tooltip:"Available"
        }
      ],
      tableEmits:[
        {
          emitName:"columns",
          name:"Columns",
          required:false,
          returnType:"Array or Base64 String",
          description:"",
          available:"1.1.0"
        },
        {
          emitName:"actions",
          name:"Actions",
          required:false,
          returnType:"Array or Base64 String",
          description:"",
          available:"1.1.0"
        },
        {
          emitName:"list-all-selected-trigger",
          name:"All Selected List",
          required:false,
          returnType:"Boolean",
          description:"",
          available:"1.1.0"
        },
        {
          emitName:"data-all-selected-trigger",
          name:"All Selected Filtered List",
          required:false,
          returnType:"Boolean",
          description:"",
          available:"1.1.0"
        },
        {
          emitName:"input",
          name:"Selected Data",
          required:false,
          returnType:"Array",
          description:"",
          available:"1.1.0"
        },
        {
          emitName:"change-offset",
          name:"Selected Data",
          required:false,
          returnType:"Number",
          description:"",
          available:"1.1.0"
        },
        {
          emitName:"change-ordering",
          name:"Ordering Data Property Name",
          required:false,
          returnType:"String",
          description:"",
          available:"1.1.0"
        },
        {
          emitName:"settings",
          name:"Settings Object",
          required:false,
          returnType:"Object",
          description:"",
          available:"1.1.0"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.table-emits-wrapper{
  width: 90%;
  margin-inline: 5%;
}
</style>
