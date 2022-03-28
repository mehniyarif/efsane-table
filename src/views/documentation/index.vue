<template>
<div class="doc-wrapper">
  <efsane-table
    :data="docs"
    hide-header
    :default-settings="settings"
    table-name="docs"
    :default-columns="columns"
  >
    <template slot="__title" slot-scope="slotData">
      <router-link :to="slotData.slotScope.link">
          <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><title>{{slotData.slotScope.title}}</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/></svg>
      </router-link>
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
  name: 'documentation',
  data(){
    return{
      columns:[
        {
          type:"data",
          name:"title",
          size:"4fr"
        },
        {
          type:"slot",
          name:"__title",
          size:"1fr"
        }
      ],
      settings:{
        lineGap:25,
        rowBorderTopSize:1,
        rowBorderLeftSize:1,
        rowBorderRightSize:1,
        tableBackgroundColor: "#FFF8E1",
        rowHoverColor: "#FFE082"
      },
      docs:[
        {
          title:"New Features",
          link:"new-features"
        },
        {
          title:"Props",
          link:"props"
        },
        {
          title:"Slots",
          link:"slots"
        },
        {
          title:"Emits",
          link:"emits"
        },
        {
          title:"Themes",
          link:"themes"
        },
        {
          title:"Settings",
          link:"settings"
        },
      ],
      exampleCode:`
 <template>
    <efsane-table
        :data="docs"
        hide-header
        :default-settings="settings"
        table-name="docs"
        :default-columns="columns"
      >
    <template slot="__title" slot-scope="slotData">
      <router-link :to="slotData.slotScope.link">
        <transition name="fade" mode="in-out">
          <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><title>{{slotData.slotScope.title}}</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/></svg>
        </transition>
      </router-link>
    </template>
  </efsane-table>
</template>

<script>
export default {
  name: 'documentation',
  data(){
    return{
      columns:[
        {
          type:"data",
          name:"title",
          size:"4fr"
        },
        {
          type:"slot",
          name:"__title",
          size:"1fr"
        }
      ],
      settings:{
        lineGap:25,
        rowBorderTopSize:1,
        rowBorderLeftSize:1,
        rowBorderRightSize:1,
        tableBackgroundColor: "#FFF8E1",
        rowHoverColor: "#FFE082"
      },
      docs:[
        {
          title:"New Features",
          link:"new-features"
        },
        {
          title:"Props",
          link:"props"
        },
        {
          title:"Slots",
          link:"slots"
        },
        {
          title:"Emits",
          link:"emits"
        },
        {
          title:"Themes",
          link:"themes"
        },
        {
          title:"Settings",
          link:"settings"
        },
      ],
      }
      }
     `
  }
  },
}
</script>

<style lang="scss" scoped>
  .doc-wrapper{
    width: 75vw;
    padding-inline: 12.5vw;
    display: block;
    text-align: left;
    .sub-details{
      display: flex;
      justify-content: space-between;
    }
  }
</style>
