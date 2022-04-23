<template>
  <div v-bind="efsaneTableWrapperAttrs" @click="clickedTable">
    <table v-bind="efsaneTableContainerAttrs" @mousemove="mouseMove" @mouseup="mouseUp" @mouseover="mouseHoverOnBody" @mouseleave="mouseLeaveOnBody">
        <table-topbar v-if="editable" v-bind="tableTopBarAttrs">
          <table-all-select-alert slot="table-all-select-alert"  v-bind="tableAllSelectAlertAttrs"></table-all-select-alert>
          <reload-button v-if="reload" slot="reload-button" v-bind="reloadButtonAttrs" ></reload-button>
          <resize-mode-button  slot="resize-mode-button" v-bind="resizeModeButtonAttrs" ></resize-mode-button>
          <table-settings slot="table-settings" v-bind="tableSettingsAttrs"></table-settings>
          <dynamic-column-setting v-if="dynamic" slot="dynamic-column-setting" v-bind="dynamicColumnSettingAttrs"></dynamic-column-setting>
        </table-topbar>

        <table-header v-if="!hideHeader" :table-offset.sync="currentOffset" :table-order.sync="tableOrder" :drag-status.sync="dragStatus" v-bind="tableHeaderAttrs"></table-header>

        <tbody  v-bind="efsaneTableBodyAttrs" ref="tableBody">

          <component :is="transition ? 'transition-group' : 'tr'"
                     name="tr-list"
                     :data-line="line"
                     :tag="transition ? 'tr' : ''"
                     class="efsane-table-tr"  v-for="(row, line) in currentData" :key="transitionKey(row, line)">

                  <div class="row-area" :key="line"  :class="{'selected':selectedIndexs.includes(line + 1) || currentTab === 'selected' , 'select-accordion': openControl(row, line +1)}">
                    <td v-bind="efsaneTableTdAttrs" :key="ind" v-for="(column,ind) in visibleColumns" :id="'column-'+column.name" :style="alignStyle(column.align)">

                      <data-column v-if="column.type === 'data'"  :data="row" :column="column"></data-column>

                      <row-number v-if="column.type === 'row_number'"  :ind="line" ></row-number>

                      <more-column v-if="column.type === 'more' && accordion" v-bind="moreColumnAttrs" :line="line + 1" :row="row" :open="openControl(row, line +1)" :selected-accordions.sync="selectedAccordions"></more-column>

                      <checkbox v-bind="checkboxAttrs" v-if="column.type === 'checkbox' && currentTab !== 'selected'" :name="'checkbox-'+line">
                        <input slot="checkbox-input" v-bind="checkboxInputAttrs" :value="line + 1" v-model="selectedIndexs" @input="listAllSelectedWatcher" :id="'checkbox-'+line" />
                      </checkbox>

                      <span  v-if="column.type === 'slot'" >
                          <slot  :name="column.name" :slot-scope="row"></slot>
                        </span>

                      <span v-bind="inlineWorksAttrs" v-if="!resizeMode">
                          <copy-area v-if="column.copyable" @click="copyText"></copy-area>
                          <download-area v-if="column.downloadable" @click="downloadText"></download-area>
                        </span>

                      <span v-if="borderVisible(ind)" v-bind="efsaneTableTdBorderAttrs" @mousedown="mouseDown(column.name,$event)" ><span>&nbsp;</span> </span>

                    </td>
                  </div>
                  <div v-if="accordion && openControl(row, line +1)" v-bind="accordionAreaAttrs">
                    <slot  name="__more" :slot-scope="row"></slot>
                  </div>
            </component>
            <tr v-if="!data || !data.length" v-bind="noDataRowAttrs">No Data Available</tr>
        </tbody>

        <div v-bind="efsaneTableFooterAttrs" v-if="lazyLoadFlag">
          <pagination v-if="pagination && currentTab !== 'selected'" v-bind="paginationAttrs" :offset.sync="currentOffset"></pagination>
          <table-count-draw v-if="dataCount && dataCount > 1" v-bind="tableCountDrawAttrs" ></table-count-draw>
        </div>
        <slot name="footer"></slot>

    </table>

    <efsane-tooltip :tooltip="tooltip" :page-x="tooltipPageX" :page-y="tooltipPageY"></efsane-tooltip>
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
import MoreColumn from "./partials/more-column.vue"
import RowNumber from "./partials/row-number.vue"
import CopyArea from "./partials/copy-area.vue"
import DownloadArea from "./partials/download-area.vue"
import TableSettings from "./partials/table-settings.vue"
import Pagination from "./partials/pagination.vue"
import TableCountDraw from "./partials/table-count-draw.vue"
import TableAllSelectAlert from "./partials/table-all-select-alert.vue";
import EfsaneTooltip from "./partials/efsane-tooltip";
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
import BindProps from "./attrs.js";
export default {
  name:"efsane-table",
  components: {
    TableTopbar,
    TableHeader,
    DataColumn,
    DynamicColumnSetting,
    MoreColumn,
    ResizeModeButton,
    ReloadButton,
    Checkbox,
    RowNumber,
    CopyArea,
    DownloadArea,
    TableSettings,
    Pagination,
    TableCountDraw,
    TableAllSelectAlert,
    EfsaneTooltip
  },
  mixins: [Computed,StylesComputed,Watch,Data,LocalApi,Provide,Emits,Methods, LifecycleMethods, BindProps],
  props:{
    data:{
      type:Array,
      required:false
    },
    defaultSettings:{
      type:Object,
      default:null
    },
    dynamic:Boolean,
    save:Boolean,
    reload:Boolean,
    pagination:Boolean,
    accordion:Boolean,
    transition:Boolean,
    hideHeader:Boolean,
    transitionConstField:{
      type:String,
      default:null
    },
    editable:Boolean,
    accordionMatchField: {
      type:String,
      default:null
    },
    accordionMatchValue:{
      type:[String,Number,Boolean, Array],
      default:function (){return[]}
    },
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
      default:"efsaneTable"  // other option: ["base64"]
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
    background-color: transparent;
  }
  .efsane-table-container{
    position: relative;
    display: block;
    border-collapse: unset;
    background-color: transparent;
    border-spacing:0;
    -webkit-border-vertical-spacing:0;
    inset-block: 0;
  }
  .efsane-table-body{
    max-height: var(--efsane-table-body-height);
    overflow-y: auto;
    overflow-x: hidden;
    display: grid;
    background-color: transparent;
    border-radius: var(--efsane-table-border-top-left-radius) var(--efsane-table-border-top-right-radius) 5px 5px;
    scrollbar-width: thin;
    scrollbar-color: #ccc;
    position: relative;
    border: var(--efsane-table-body-border);
    padding-bottom: 3px;
    padding-right: var(--efsane-table-body-scrollbar-padding);

    &::-webkit-scrollbar {
      width: var(--efsane-table-scrollbar-width);
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
    height: 100%;
    display: block;

    &:nth-child(1){
      .row-area{
        border-top: var(--efsane-first-row-border-top)
      }
    }
    &:nth-last-child(1){
      .row-area{
        border-bottom: var(--efsane-last-row-border-bottom);
      }
    }
  }
  .row-area{
    display: grid;
    grid-template-columns:var(--efsane-table-column-sizes);
    margin-bottom: var(--efsane-table-line-gap);
    background-color: var(--efsane-table-background-color);
    border-left: var(--efsane-row-border-left);
    border-right: var(--efsane-row-border-right);
    border-top: var(--efsane-row-border-top);
    border-bottom: var(--efsane-row-border-bottom);

    &.selected:not(.select-accordion):hover,
    &.selected:not(.select-accordion) *{
      background-color: var(--efsane-row-selected-color);
    }
    &.select-accordion,
    &.select-accordion:hover{
      background-color: var(--efsane-row-selected-accordion-color);
      .row-area{
        border-bottom: 1px solid rgba(0,0,0,.1);
      }
    }
    &:hover:not(.selected):not(.select-accordion){
      background-color: var(--efsane-row-hover-color);
      transform: var(--efsane-row-scroll-animation);
    }
  }
  .accordion-area{
    background-color: var(--efsane-table-background-color);
    min-height: 45px;
    height: max-content;
    display: flex;
  }
  .efsane-table-td{
    overflow: hidden;
    position: relative;
    color: var(--efsane-table-text-color);
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: var(--efsane-table-row-font-size);
    height: var(--efsane-table-row-height);
    &:hover{
      .inline-works{
        display: flex;
        background-color: transparent;
      }
    }

  }
  .efsane-table-td-border{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 100%;
    line-height: 100%;
    cursor: col-resize;
    position: absolute;
    display: flex;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    left: 0;
    width: 1px;
    top: 0;
    span{
      height: 100%;
      line-height: 100%;
      position: relative;
      border-left: 1px dashed rgba(0,0,0,.2);
      width: 0;
    }
  }
  .no-data-row{
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--efsane-table-background-color);
  }
  .efsane-table-footer{
    display: flex;
    width: 100%;
    justify-content: space-between;
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
    left: 0;
    top: 0;
    height: 100%;
  }
  .tr-list-move{
    transition-duration: 3s;
    transition-timing-function: ease-in-out;
    background-color: #45e1e1;
    z-index: 2;
  }


</style>
