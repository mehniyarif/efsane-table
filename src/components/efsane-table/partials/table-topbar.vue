<template>
  <div class="efsane-table-topbar" :style="styles">
    <slot name="table-all-select-alert" ></slot>
    <table-tabs :table-tabs="tableTabs" :select-tab="selectTab"  :current-tab="currentTab"></table-tabs>
    <div class="efsane-right-topbar" v-if="showMenu">
      <slot name="reload-button"></slot>
      <slot name="resize-mode-button"></slot>
      <slot name="table-settings"></slot>
      <slot name="dynamic-column-setting" ></slot>
    </div>
  </div>
</template>

<script>
import TableTabs from './table-tabs.vue'
export default {
  components:{
    TableTabs
  },
  name: "table-topbar",
  props:{
    tableTabs:{
      type:Array,
    default:()=>{return []}
    },
    selectTab:{
      type:Function,
      default:()=>{return []}
    },
    currentTab:String,
    showMenu:Boolean
  },
  computed:{
    styles(){
      return {
        "--efsane-right-topbar-border-top-left-radius": this.tableTabs.length > 0 ?  "none" : "15px"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .efsane-table-topbar{
    background-color: transparent;
    position: relative;
    justify-content: flex-end;
    display: flex;
    z-index: 1;
    height: var(--efsane-table-topbar-height);
  }
  .efsane-right-topbar{
    display: flex;
    width: max-content;
    gap: 5px;
    background-color: var(--efsane-header-background-color);
    border-inline: 1px solid rgba(0,0,0,.1);
    border-top: 1px solid rgba(0,0,0,.1);
    box-shadow: 0 -1px 3px rgba(0,0,0,.1);
    border-top-left-radius: var(--efsane-right-topbar-border-top-left-radius);
    border-top-right-radius: 5px;
    padding-left: 10px;
    padding-bottom: 3px;
  }
</style>
