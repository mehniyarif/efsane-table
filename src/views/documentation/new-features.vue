<template>
  <div class="table-new-features-wrapper">
    <efsane-table
      :data="tableNewFeatures"
      :default-columns="columns"
      table-name="table-new-features"
      :default-settings="settings"
      accordion
      editable
    >
      <template slot="__more" slot-scope="slotData">
        <span>
          {{slotData.slotScope.description}}
        </span>
      </template>
    </efsane-table>
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
  name: "new-features",
  data(){
    return{
      settings:{
        tableTextColor:"#181818",
        headerBackgroundColor:"#29b3d9",
        headerTextColor:"#ffffff",
        rowHeight:"40"
      },
      columns:[
        {
          type:"more",
          header:"Description",
          name:"more",
          size:"100",
          tooltip:"Feature Description"
        },
        {
          type:"data",
          header:"Feature Title",
          name:"featureTitle",
          size:"1fr",
          copyable:true,
          tooltip:"Feature Title"
        },
        {
          type:"data",
          header:"Available Version",
          name:"available",
          size:"1fr",
          copyable:true,
          tooltip:"Available Version"
        },
      ],
      tableNewFeatures:[
        {
          featureTitle:"Conditional Columns",
          description:"If a column will only be displayed if there is data, you can solve this problem by selecting the column's visibility setting \"exists if\". If the column will appear according to another column, the name of the that column should be entered  visibility Condition.\n" +
            "Also, make sure that the \"column auto visibility\" setting is enabled in the table settings.",
          available:"1.1.3"
        }
      ],
      exampleCode:`<template>
  <div class="table-new-features-wrapper">
    <efsane-table
      :data="tableNewFeatures"
      :default-columns="columns"
      table-name="table-new-features"
      :default-settings="settings"
      accordion
      editable
    >
      <template slot="__more" slot-scope="slotData">
        <span>
          {{slotData.slotScope.description}}
        </span>
      </template>
    </efsane-table>
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
  name: "new-features",
  data(){
    return{
      settings:{
        tableTextColor:"#181818",
        headerBackgroundColor:"#29b3d9",
        headerTextColor:"#ffffff",
        rowHeight:"50"
      },
      columns:[
        {
          type:"more",
          header:"Description",
          name:"more",
          size:"100",
          tooltip:"Feature Description"
        },
        {
          type:"data",
          header:"Feature Title",
          name:"featureTitle",
          size:"1fr",
          copyable:true,
          tooltip:"Feature Title"
        },
        {
          type:"data",
          header:"Available Version",
          name:"available",
          size:"1fr",
          copyable:true,
          tooltip:"Available Version"
        },
      ],
      tableNewFeatures:[
        {
          featureTitle:"Conditional Flip Columns",
          description:"If a column will only be displayed if there is data, you can solve this problem by selecting the column's visibility setting \\"exists if\\". " +
            "Also, make sure that the \\"column auto visibility\\" setting is enabled in the table settings.",
          available:"1.1.2"
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
.table-new-features-wrapper{
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
