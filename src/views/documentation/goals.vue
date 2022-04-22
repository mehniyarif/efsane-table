<template>
  <div class="table-goals-wrapper">
    <efsane-table
      :data="tableGoals"
      :default-columns="columns"
      table-name="table-goals"
      :default-settings="settings"
      editable
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
  name: "goals",
  data(){
    return{
      settings:{
        tableTextColor:"#37474F",
        headerBackgroundColor:"#388E3C",
        headerTextColor:"#ffffff",
        rowHeight:"50"
      },
      columns:[
        {
          type:"data",
          header:"Goal Title",
          name:"goalTitle",
          size:"1fr",
          copyable:true,
          tooltip:"Goal Title"
        },
        {
          type:"data",
          header:"Goal Description",
          name:"description",
          size:"3fr",
          copyable:true,
          tooltip:"Goal Description"
        },
        {
          type:"data",
          header:"Target Version",
          name:"target",
          size:"1fr",
          copyable:true,
          tooltip:"Target Version"
        },
      ],
      tableGoals:[
        {
          goalTitle:"Self Ordering",
          description:"The Table will can sort the data without backend",
          target:"1.2.0"
        },
        {
          goalTitle:"Data Types",
          description:"The Table Columns can be different types likes Date, Datetime, Number, Link, Phone, Zipcode etc.",
          target:"1.2.0"
        },
        {
          goalTitle:"Data Types Method",
          description:"The Data Types can modification like Date Format for Date Type or can add target attribute for Link Type",
          target:"1.2.0"
        },
        {
          goalTitle:"Actions",
          description:"The Table can give to user some action API's and users can create own action columns",
          target:"1.2.0"
        },
        {
          goalTitle:"Alerts",
          description:"The Table can give to user some alert Icons, Prefixs, Styles and users can create own alerts",
          target:"1.2.0"
        },
        {
          goalTitle:"Data Tree Tooltip",
          description:"The Table can show data tree in tooltip if columns data object in objects or array in arrays or etc.",
          target:"1.2.0"
        },
        {
          goalTitle:"Conditional Flip Columns",
          description:"The Table can calculate column condition and then show correct data in column",
          target:"1.2.0"
        },
        {
          goalTitle:"Detail Tabs",
          description:"The Table can separate selected items with multi tabs alson this tabs may under or over table",
          target:"1.2.0"
        },
        {
          goalTitle:"Multi Mission Header",
          description:"Header shouldn't contain only data header also can be contain different contents or actions buttons",
          target:"1.2.0"
        },
        {
          goalTitle:"Table Themes",
          description:"The Table can customize different themes",
          target:"1.2.0"
        }
      ],
      exampleCode:``
    }
  }
}
</script>

<style lang="scss" scoped>
.table-goals-wrapper{
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
