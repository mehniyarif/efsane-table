<template>
  <div class="table-settings-wrapper">
    <efsane-table
      :data="tableSettings"
      :default-columns="columns"
      table-name="table-settings"
      :default-settings="settings"
      editable
      accordion
    ></efsane-table>
  </div>
</template>

<script>
export default {
  name: "settings",
  data(){
    return{
      settings:{
        tableTextColor:"#00695C",
        headerBackgroundColor:"#00695C",
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
          header:"Available Version",
          name:"available",
          size:"1fr",
          copyable:true,
          tooltip:"Available"
        }
      ],
      tableSettings:[
        {
          settingName:"tableBackgroundColor",
          type:"Hexadecimal, Color Name or RGB",
          required:false,
          name:"Table Rows Background Color",
          default:"#fff",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"tableTextColor",
          type:"Hexadecimal, Color Name or RGB",
          required:false,
          name:"Table Rows Text Color",
          default:"#343A40",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"headerBackgroundColor",
          type:"Hexadecimal, Color Name or RGB",
          required:false,
          name:"Header Background Color",
          default:"#F7F9F9",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"headerTextColor",
          type:"Hexadecimal, Color Name or RGB",
          required:false,
          name:"Header Text Color",
          default:"#343A40",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"rowHoverColor",
          type:"Hexadecimal, Color Name or RGB",
          required:false,
          name:"Row Hover Animation Background Color",
          default:"#EEEEEE",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"tooltipBackgroundColor",
          type:"Hexadecimal, Color Name or RGB",
          required:false,
          name:"Tooltip Background Color",
          default:"#343A40",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"tooltipTextColor",
          type:"Hexadecimal, Color Name or RGB",
          required:false,
          name:"Tooltip Text Color",
          default:"#ffffff",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"rowSelectedColor",
          type:"Hexadecimal, Color Name or RGB",
          required:false,
          name:"Table Row Selected Color",
          default:"#81D4FA",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"rowSelectedAccordionColor",
          type:"Hexadecimal, Color Name or RGB",
          required:false,
          name:"Table Rows Background Color While Accordion Open",
          default:"#D1C4E9",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"rowBorderTopColor",
          type:"Hexadecimal, Color Name or RGB",
          required:false,
          name:"Row Border Top Color",
          default:"#EEEEEE",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"rowBorderBottomColor",
          type:"Hexadecimal, Color Name or RGB",
          required:false,
          name:"Row Border Bottom Color",
          default:"#EEEEEE",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"rowBorderLeftColor",
          type:"Hexadecimal, Color Name or RGB",
          required:false,
          name:"Row Border Left Color",
          default:"#EEEEEE",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"rowBorderRightColor",
          type:"Hexadecimal, Color Name or RGB",
          required:false,
          name:"Row Border Right Color",
          default:"#EEEEEE",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"bodyBorderColor",
          type:"Hexadecimal, Color Name or RGB",
          required:false,
          name:"Body Border Color",
          default:"#EEEEEE",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"topbarHeight",
          type:"px",
          required:false,
          name:"Top Bar Height Size",
          default:"28px",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"headerHeight",
          type:"px",
          required:false,
          name:"Header Height Size",
          default:"30px",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"tableBodyHeight",
          type:"px, vh",
          required:false,
          name:"Table Height Size",
          default:"65vh",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"paginationHeight",
          type:"px, vh",
          required:false,
          name:"Pagination Height Size",
          default:"35px",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"rowHeight",
          type:"px",
          required:false,
          name:"Rows Height Size",
          default:null,
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"lineGap",
          type:"px",
          required:false,
          name:"Rows Gap Size",
          default:null,
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"rowScrollSize",
          type:"Number",
          required:false,
          name:"Table Scroll Width Size",
          default:2,
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"rowBorderTopSize",
          type:"Number",
          required:false,
          name:"Rows Border Top Height Size",
          default:0,
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"rowBorderBottomSize",
          type:"Number",
          required:false,
          name:"Rows Border Bottom Height Size",
          default:1,
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"rowBorderLeftSize",
          type:"Number",
          required:false,
          name:"Rows Border Left Height Size",
          default:0,
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"rowBorderRightSize",
          type:"Number",
          required:false,
          name:"Rows Border Right Height Size",
          default:0,
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"bodyBorderSize",
          type:"Number",
          required:false,
          name:"Body Border Size",
          default:1,
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"showMenuStatus",
          type:"Number",
          required:false,
          name:"Show Menu Status",
          default:2,
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"rowHoverStatus",
          type:"Boolean",
          required:false,
          name:"Rows Hover Status",
          default:true,
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"rowSelectedColorStatus",
          type:"Boolean",
          required:false,
          name:"Rows Selected Color Status",
          default:true,
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"rowScrollStatus",
          type:"Boolean",
          required:false,
          name:"Table Scroll Status",
          default:false,
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"selectedTabStatus",
          type:"Boolean",
          required:false,
          name:"Selected Tab Status",
          default:true,
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"firstRowBorderTop",
          type:"Boolean",
          required:false,
          name:"First Row Border Top Status",
          default:false,
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"lastRowBorderBottom",
          type:"Boolean",
          required:false,
          name:"Last Row Border Top Status",
          default:false,
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"resizing",
          type:"Boolean",
          required:false,
          name:"Resizing Status",
          default:false,
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"shortcutSelectAllToggle",
          type:"String",
          required:false,
          name:"Select All Shortcut",
          default:"alt+q",
          description:"",
          available:"1.1.0"
        },
        {
          settingName:"shortcutSelectFilteredAll",
          type:"String",
          required:false,
          name:"Select All Filtered Data Shortcut",
          default:"shift+f",
          description:"",
          available:"1.1.0"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.table-settings-wrapper{
  width: 90%;
  margin-inline: 5%;
}
</style>
