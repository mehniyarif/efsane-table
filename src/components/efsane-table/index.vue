<template>
  <div class="efsane-table-wrapper" id="efsane-table-wrapper" :style="styles" :key="tableKey" @click="clickedTable">
    <table class="efsane-table-container" @mousemove="mouseMove" @mouseup="mouseUp">
        <table-topbar v-if="editable" :data-keys="dataKeys" :table-tabs="tableTabs" :select-tab="selectTab" :current-tab="currentTab">
          <table-all-select-alert slot="table-all-select-alert"  :table-all-select-alert-show="tableAllSelectAlertShow"
                                  :data-all-selected="dataAllSelected"
                                  :table-all-select-alert-text="tableAllSelectAlertText"
                                  :table-item-definition="tableItemDefinition"
                                  :data-count="dataCount"
                                  :data-all-select="dataAllSelect">
          </table-all-select-alert>
          <reload-button v-if="reload" slot="reload-button" :reload="reloadFunction" ></reload-button>
          <resize-mode-button  slot="resize-mode-button" :resize-mode="openCloseResizeMode" :settings="settings" ></resize-mode-button>
          <table-settings slot="table-settings"  :actions="currentActions" :shortcuts="shortcuts" :increase-table-key="increaseTableKey" :remove-settings="removeSettings" :settings="settings" :change-columns-local="changeColumnsLocal" :columns="currentColumns"></table-settings>
          <dynamic-column-setting v-if="dynamic" slot="dynamic-column-setting" :align-options="alignOptions" :type-options="typeOptions" :list-manipulation="listManipulation" :text-manipulation="textManipulation" :data-keys="dataKeys" :increase-table-key="increaseTableKey" :change-columns-local="changeColumnsLocal" :columns="currentColumns"></dynamic-column-setting>
        </table-topbar>

        <table-header :columns="currentColumns" :table-offset.sync="currentOffset" :table-order.sync="tableOrder" :drag-status.sync="dragStatus" :current-tab="currentTab" :resize-mode="settings.colResize" :align-style="alignStyle" :text-manipulation="textManipulation" :align-options="alignOptions" :type-options="typeOptions"  :list-manipulation="listManipulation" :list-all-selected="listAllSelected" :edit-column="editColumn" :change-columns="changeColumnsLocal" :mouse-down="mouseDown" :trigger-list-all-selected="triggerListAllSelected"></table-header>

        <tbody class="efsane-table-body">
              <tr class="efsane-table-tr" :class="{'selected':selectedIndexs.includes(line + 1) || currentTab === 'selected'}" v-for="(row, line) in currentData" :key="line">
                <label :key="ind" v-for="(column,ind) in currentColumns" :for="'checkbox-'+line">
                  <span class="efsane-table-td"  :id="'column-'+column.name" :style="alignStyle(column.align)">
                      <data-column v-if="column.type === 'data'"  :data="row" :column="column"></data-column>
                      <row-number v-if="column.type === 'row_number'"  :ind="line" ></row-number>
                      <checkbox type="checkbox" v-if="column.type === 'checkbox' && currentTab !== 'selected'" :name="'checkbox-'+line">
                        <input slot="checkbox-input" type="checkbox" :value="line + 1" v-model="selectedIndexs" @input="listAllSelectedWatcher" :id="'checkbox-'+line" />
                      </checkbox>
                      <span  v-if="column.type === 'slot'" >
                        <slot  :name="column.name" :slot-scope="row"></slot>
                      </span>
                      <span class="inline-works" v-if="!settings.colResize">
                        <copy-area v-if="column.copyable" @click="copyText"></copy-area>
                        <download-area v-if="column.downloadable" @click="downloadText"></download-area>
                      </span>
                      <span v-if="borderVisible(ind)" class="efsane-table-td-border" @mousedown="mouseDown(column.name,$event)" ></span>
                    </span>
                </label>
              </tr>
          <tr v-if="!data || !data.length" class="no-data-row">No Data Available</tr>
        </tbody>

        <div class="efsane-table-footer" v-if="lazyLoadFlag">
          <pagination v-if="pagination && currentTab !== 'selected'" :data-count="dataCount" :offset.sync="currentOffset" :limit="limit"></pagination>
          <table-count-draw v-if="dataCount && dataCount > 1" :data-count="dataCount" :name="tableItemDefinition" :offset="currentOffset" :limit="limit" :selectedLen="tableSelectedCount"></table-count-draw>
        </div>
        <slot name="footer"></slot>

    </table>


  </div>
</template>

<script>
//components
import TableHeader from './partials/table-header.vue'
import TableTopbar from './partials/table-topbar.vue'
import DataColumn from './partials/data-column.vue'
import DynamicColumnSetting from "./partials/dynamic-column-setting.vue";
import ResizeModeButton from "./partials/resize-mode-button.vue"
import ReloadButton from "./partials/reload-button.vue"
import Checkbox from "./partials/checkbox.vue"
import RowNumber from "./partials/row-number.vue"
import CopyArea from "./partials/copy-area.vue"
import DownloadArea from "./partials/download-area.vue"
import TableSettings from "./partials/table-settings.vue"
import Pagination from "./partials/pagination.vue"
import TableCountDraw from "./partials/table-count-draw.vue"
import TableAllSelectAlert from "./partials/table-all-select-alert.vue";
//mixins
import Computed from "./computed.js";
import StylesComputed from "./stylesComputed.js";
import Watch from "./watch.js";
import Data from "./data.js";
import LocalApi from "./localApi.js";
import Provide from "./provide.js";
import Emits from "./emits.js";
import Methods from "./methods.js";
import LifecycleMethods from "./lifecycleMethods.js";
export default {
  components: {
    TableTopbar,
    TableHeader,
    DataColumn,
    DynamicColumnSetting,
    ResizeModeButton,
    ReloadButton,
    Checkbox,
    RowNumber,
    CopyArea,
    DownloadArea,
    TableSettings,
    Pagination,
    TableCountDraw,
    TableAllSelectAlert
  },
  mixins: [Computed,StylesComputed,Watch,Data,LocalApi,Provide,Emits,Methods, LifecycleMethods],
  props:{
    data:{
      type:Array,
      required:false
    },
    settingsData:{
      type:Object,
      default:null
    },
    dynamic:Boolean,
    save:Boolean,
    reload:Boolean,
    pagination:Boolean,
    editable:Boolean,
    outputType:{
      type:String,
      default:"default"  // other option: ["base64"]
    },
    dataCount:{
      type:[String,Number],
      default:0
    },
    ordering:{
      type:String,
      default:null
    },
    limit:{
      type:[String,Number],
      default:25
    },
    paginationOffset:{
      type:[String,Number],
      default:0
    },
    rowHeight:{
      type:[String,Number],
      default:35
    },
    tableName:{
      type:String,
      default:"efsane2022Table"  // other option: ["base64"]
    },
    tableItemDefinition:{
      type:String,
      default:"items"
    },
    columns:{
      type:Array,
      default:function(){
        return []
      }
    },
    reloadFunction:{
      type:Function,
      default:function(){
        return false
      }
    },
    defaultColumns:{
      type:Array,
      default:function(){
        return []
      }
    },
    actions:{
      type:Array,
      default:function(){
        return []
      }
    },
    defaultActions:{
      type:Array,
      default:function(){
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "css/reboot";
  .efsane-table-wrapper{
      position: relative;
     /* min-height: var(--efsane-table-wrapper-height); */
  }
  .efsane-table-container{
    position: relative;
    display: block;
    border-collapse: unset;
    border-spacing:0;
    -webkit-border-vertical-spacing:0;
    inset: 0;
  }
  .efsane-table-body{
    max-height: var(--efsane-table-body-height);
    overflow-y: scroll;
    overflow-x: hidden;
    display: grid;
    background-color: var(--efsane-table-background-color);
    -webkit-box-shadow: 1px 1px 1px rgba(0,0,0,.1);
    box-shadow: 1px 1px 1px rgba(0,0,0,.1);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    scrollbar-width: thin;
    scrollbar-color: #ccc;
    position: relative;
    border-bottom: 5px solid var(--efsane-table-background-color);
    border-left: 7px solid #ccc;

    &::before{
      content: "";
      background-color: rgba(0,0,0,.1);
      width: 1px;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
    }

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #ddd;
    }
  }
  .efsane-table-tr{
    display: grid;
    grid-template-columns:var(--efsane-table-column-sizes);
    &:not(:nth-last-child(1)){
      border-bottom: var(--efsane-row-border);
    }
    &.selected:hover,
    &.selected *{
      background-color: var(--efsane-row-selected-color);
      .inline-works{
        background-color: var(--efsane-row-selected-color);
      }
    }
    &:hover:not(.selected){
      background-color: var(--efsane-row-hover-color);
      transform: var(--efsane-row-scroll-animation);
    }
    &:hover{
      .inline-works{
        display: flex;
        background-color: var(--efsane-row-hover-color);
      }
    }
  }
  .efsane-table-td{
    overflow: hidden;
    position: relative;
    color: var(--efsane-table-text-color);
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: var(--efsane-table-row-font-size);
    height: var(--efsane-table-row-height);

  }
  .efsane-table-td-border{
    width: 0;
    height: 100%;
    background-color: transparent;
    border-inline: 5px solid transparent;
    cursor: col-resize;
    position: absolute;
    right: 0;
    top: 0;
    &::before{
      content: "";
      position: absolute;
      left: 1px;
      top: 0;
      width: 1px;
      height: 100%;
      background-color: rgba(0,0,0,.1);
    }
  }
  .no-data-row{
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .efsane-table-footer{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .efsane-tooltip {
    display: inline;
    position: relative;
  }
  .efsane-tooltip:hover:after{
    display: -webkit-flex;
    display: flex;
    transition-delay: 3s;
    transition-property: all;
    -webkit-justify-content: center;
    justify-content: center;
    background: #444;
    border-radius: 8px;
    color: #fff;
    content: attr(efsane-title);
    margin: 15px auto 0;
    font-family: soleil,sans-serif;
    font-size: 14px;
    font-weight: 500;
    padding: 5px;
    position: absolute;
    z-index:9999999999;
    right: 5px;
    min-width: 75px;
    white-space: nowrap;
  }
  .efsane-tooltip:hover:before{
    border: solid;
    border-color: #444 transparent;
    border-width:  0 9px 18px 9px;
    transition-delay: 3s;
    transition-property: all;
    content: "";
    right: 45%;
    top: 30px;
    z-index:9999999999;
    position: absolute;
  }


  svg[title]{
    bottom: 100%;  /* At the top of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 0px;
    border-style: solid;
    border-color: transparent transparent black transparent !important;
  }

  .inline-works{
    display: none;
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
    height: 100%;
  }
</style>
