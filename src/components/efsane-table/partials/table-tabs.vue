<template>
<div class="efsane-table-tabs-container" v-if="tableTabs.length">
  <span class="efsane-table-tab" v-for="(tab,key) in tableTabs" @click="selectTab(tab.name)" :class="{'selected':currentTab === tab.name}" :key="key">{{ tab.title }}
    <svg v-if="currentTab === tab.name" @click.stop="selectTab('main')" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512"><title>{{`Close ${tab.title } Tab`}}</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
  </span>
</div>
</template>

<script>
export default {
  name: "table-tabs",
  props:{
    tableTabs:{
      type:Array,
      default:()=>{return []}
    },
    selectTab:{
      type:Function,
      default:()=>{return []}
    },
    currentTab:String
  }
}
</script>

<style lang="scss" scoped>
  .efsane-table-tabs-container{
    display: flex;
    background-color: var(--efsane-header-background-color);
    border-inline: 1px solid rgba(0,0,0,.1);
    border-top: 1px solid rgba(0,0,0,.1);
    box-shadow: 0 -1px 3px rgba(0,0,0,.1);
    margin-left: auto;
    border-top-left-radius: 15px;

    .efsane-table-tab{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      text-align: center;
      width: max-content;
      padding-inline: 10px;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      &.selected{
        color: #48656c;
        font-weight: 500;
      }
    }
  }

</style>
