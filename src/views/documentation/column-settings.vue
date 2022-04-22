<template>
  <div class="table-settings-wrapper">
    <efsane-table
      :data="tableSettings"
      :default-columns="columns"
      table-name="table-column-settings"
      :default-settings="settings"
      editable
      accordion
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
  name: "settings",
  data(){
    return{
      settings:{
        tableTextColor:"#821dab",
        headerBackgroundColor:"#29e5c2",
        rowHeight:26,
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
          header:"Settings Name",
          name:"name",
          size:"1fr",
          copyable:true,
          tooltip:"Prop Name"
        },
        {
          type:"data",
          header:"Property Name",
          name:"settingName",
          size:"1fr",
          copyable:true,
          tooltip:"Prop Name"
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
          header:"Default",
          name:"default",
          size:"1fr",
          copyable:true,
          tooltip:"Default"
        },
        {
          type:"data",
          header:"Options",
          name:"options",
          size:"1fr",
          copyable:true,
          tooltip:"Options"
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
      tableSettings:[
        {
          settingName:"type",
          type:"String",
          required:true,
          name:"Type",
          default:"data",
          options:"data,slot,action,alert,more,checkbox,row-number",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"tooltip",
          type:"String",
          required:false,
          name:"Tooltip",
          default:"",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"header",
          type:"String",
          required:false,
          name:"Header",
          default:"[data property name as title case]",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"listManipulation",
          type:"String",
          required:false,
          name:"List Manipulation",
          default:"first",
          options:"first,comma,sum",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"size",
          type:"fr,px",
          required:true,
          name:"Size",
          default:"",
          options:"",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"size",
          type:"String(fr,px)",
          required:true,
          name:"Size",
          default:"",
          options:"",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"usage",
          type:"String",
          required:false,
          name:"Usage",
          default:"default",
          options:"default,image-src",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"copyable",
          type:"Boolean",
          required:false,
          name:"Copyable",
          default:false,
          options:"true,false",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"downloadable",
          type:"Boolean",
          required:false,
          name:"Downloadable",
          default:false,
          options:"true,false",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"textManipulation",
          type:"String",
          required:false,
          name:"Text Manipulation",
          default:"default",
          options:"default,upper,lower,title,capitalize",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"align",
          type:"String",
          required:false,
          name:"Align",
          default:"center",
          options:"left,center,right",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"visibility",
          type:"String",
          required:false,
          name:"Visibility",
          default:"always",
          options:"always,exists",
          description:"If a column will only be displayed if there is data, you can solve this problem by selecting the column's visibility setting \"exists if\". " +
            "Also, make sure that the \"column auto visibility\" setting is enabled in the table settings.",
          available:"1.1.2"
        },
      ],
      exampleCode:`<template>
  <div class="table-settings-wrapper">
    <efsane-table
      :data="tableSettings"
      :default-columns="columns"
      table-name="table-column-settings"
      :default-settings="settings"
      editable
      accordion
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
  name: "settings",
  data(){
    return{
      settings:{
        tableTextColor:"#821dab",
        headerBackgroundColor:"#29e5c2",
        headerTextColor:"#fff"
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
          header:"Settings Name",
          name:"name",
          size:"1fr",
          copyable:true,
          tooltip:"Prop Name"
        },
        {
          type:"data",
          header:"Property Name",
          name:"settingName",
          size:"1fr",
          copyable:true,
          tooltip:"Prop Name"
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
          header:"Default",
          name:"default",
          size:"1fr",
          copyable:true,
          tooltip:"Default"
        },
        {
          type:"data",
          header:"Options",
          name:"options",
          size:"1fr",
          copyable:true,
          tooltip:"Options"
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
      tableSettings:[
        {
          settingName:"type",
          type:"String",
          required:true,
          name:"Type",
          default:"data",
          options:"data,slot,action,alert,more,checkbox,row-number",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"tooltip",
          type:"String",
          required:false,
          name:"Tooltip",
          default:"",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"header",
          type:"String",
          required:false,
          name:"Header",
          default:"[data property name as title case]",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"listManipulation",
          type:"String",
          required:false,
          name:"List Manipulation",
          default:"first",
          options:"first,comma,sum",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"size",
          type:"fr,px",
          required:true,
          name:"Size",
          default:"",
          options:"",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"size",
          type:"String(fr,px)",
          required:true,
          name:"Size",
          default:"",
          options:"",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"usage",
          type:"String",
          required:false,
          name:"Usage",
          default:"default",
          options:"default,image-src",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"copyable",
          type:"Boolean",
          required:false,
          name:"Copyable",
          default:false,
          options:"true,false",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"downloadable",
          type:"Boolean",
          required:false,
          name:"Downloadable",
          default:false,
          options:"true,false",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"textManipulation",
          type:"String",
          required:false,
          name:"Text Manipulation",
          default:"default",
          options:"default,upper,lower,title,capitalize",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"align",
          type:"String",
          required:false,
          name:"Align",
          default:"center",
          options:"left,center,right",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"visibility",
          type:"String",
          required:false,
          name:"Visibility",
          default:"always",
          options:"always,exists",
          description:"If a column will only be displayed if there is data, you can solve this problem by selecting the column's visibility setting \\"exists if\\". " +
            "Also, make sure that the \\"column auto visibility\\" setting is enabled in the table settings.",
          available:"1.1.2"
        },
      ],
      exampleCode:\`\`
    }
  }
}`
    }
  }
}
</script>

<style lang="scss" scoped>
.table-settings-wrapper{
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
