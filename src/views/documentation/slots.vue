<template>
  <div class="table-slots-wrapper">
    <efsane-table
      :data="tableSlots"
      :default-columns="columns"
      table-name="table-slots"
      :default-settings="settings"
      editable
      accordion
    ></efsane-table>
    <div class="sub-details">
      <details>
        <summary>This Table Codes</summary>
        <pre  v-text="exampleCodes"></pre>
      </details>
      <small>Efsane Table was used to create this table</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "slots",
  data(){
    return{
      settings:{
        headerBackgroundColor:"#ffffff",
        headerTextColor:"#F57C00"
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
          header:"Property Name",
          name:"title",
          size:"1fr",
          copyable:true,
          tooltip:"Slot Usage"
        },
        {
          type:"data",
          header:"Data Type",
          name:"type",
          size:"1fr",
          copyable:true,
          tooltip:"Data Type"
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
          header:"Available Version",
          name:"available",
          size:"1fr",
          copyable:true,
          tooltip:"Available"
        }
      ],
      tableSlots:[
        {
          title:"__more",
          type:"String",
          required:false,
          name:"Accordion",
          description:"",
          available:"1.1.0"
        },
        {
          title:"__{data_name}",
          type:"String",
          required:false,
          name:"Custom Slot",
          description:"",
          available:"1.1.0"
        }
      ],
      exampleCodes:`<template>
  <div class="table-slots-wrapper">
    <efsane-table
      :data="tableSlots"
      :default-columns="columns"
      table-name="table-slots"
      :default-settings="settings"
      editable
      accordion
    ></efsane-table>
    <div class="sub-details">
      <details>
        <summary>This Table Codes</summary>
        <pre  v-text="exampleCode"></pre>
      </details>
      <small>Efsane Table was used to create this table</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "slots",
  data(){
    return{
      settings:{
        headerBackgroundColor:"#ffffff",
        headerTextColor:"#F57C00"
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
          header:"Property Name",
          name:"title",
          size:"1fr",
          copyable:true,
          tooltip:"Slot Usage"
        },
        {
          type:"data",
          header:"Data Type",
          name:"type",
          size:"1fr",
          copyable:true,
          tooltip:"Data Type"
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
          header:"Available Version",
          name:"available",
          size:"1fr",
          copyable:true,
          tooltip:"Available"
        }
      ],
      tableSlots:[
        {
          title:"__more",
          type:"String",
          required:false,
          name:"Accordion",
          description:"",
          available:"1.1.0"
        },
        {
          title:"__{data_name}",
          type:"String",
          required:false,
          name:"Custom Slot",
          description:"",
          available:"1.1.0"
        }
      ]
    }
  }
}`
    }
  }
}
</script>

<style lang="scss" scoped>
.table-slots-wrapper{
  width: 90%;
  margin-inline: 5%;
  display: block;
  text-align: left;

  .sub-details{
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
  }
}
</style>
