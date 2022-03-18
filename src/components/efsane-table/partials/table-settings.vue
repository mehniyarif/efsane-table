<template>
  <div class="table-setting "  v-click-outside="close" :style="cssVariables">
    <svg xmlns="http://www.w3.org/2000/svg" class="table-setting-dropdown-icon" @click="show=!show" width="24" height="24" viewBox="0 0 512 512"><title>Table Settings</title><path fill="#cdcdcd" stroke="#cdcdcd" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"/><circle cx="336" cy="128" r="32" fill="none" stroke="#bbb" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="176" cy="256" r="32" fill="none" stroke="#bbb" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="336" cy="384" r="32" fill="none" stroke="#bbb" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
    <div class="table-setting-dropdown" v-if="show">
      <div class="table-setting-dropdown-header"><span>Table Settings</span>
        <svg @click.stop="menuStatus='list'" v-if="!['list'].includes(menuStatus)" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><title>Back</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M249.38 336L170 256l79.38-80M181.03 256H342"/><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
      </div>
      <div class="table-setting-dropdown-menu-container">
        <div class="table-setting-dropdown-menu-item" :class="{'selected':menuStatus === 'design'}" v-if="['list','design'].includes(menuStatus)" @click.stop="menuStatus='design'"><span>Design</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><title>Design</title><path d="M414.11 153.82C429.66 264.4 345.85 357.09 282.54 366s-169.48-57.5-185-167.68a159.82 159.82 0 11316.53-44.49z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M236.06 308.05c-32.83-13-67.08-43.1-82.27-85.46M367.7 495.78c-32.83-13-63.31-40.06-78.5-82.41" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M266.71 368.21l-9.17 49.61 63.31-8.9-22.49-45.16-31.65 4.45z"/></svg></div>
        <div class="table-setting-dropdown-menu-item" :class="{'selected':menuStatus === 'animation'}" v-if="['list','animation'].includes(menuStatus)" @click.stop="menuStatus='animation'"><span>Animation</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"  viewBox="0 0 512 512"><title>Animation</title><rect fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" x="280.48" y="122.9" width="63.03" height="378.2" rx="31.52" transform="rotate(-45 312.002 311.994)"/><path d="M178.38 178.38a31.64 31.64 0 000 44.75L223.25 268 268 223.25l-44.87-44.87a31.64 31.64 0 00-44.75 0z"/><path stroke="currentColor" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" d="M48 192h48M90.18 90.18l33.94 33.94M192 48v48M293.82 90.18l-33.94 33.94M124.12 259.88l-33.94 33.94"/></svg></div>
        <div class="table-setting-dropdown-menu-item" :class="{'selected':menuStatus === 'actions'}" v-if="['list','actions'].includes(menuStatus)" @click.stop="menuStatus='actions'" ><span>Actions</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><title>Actions</title><path d="M32 145.52v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113C45 123.8 32 132.24 32 145.52zM260.57 145.52v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113c-10.64-6.47-23.63 1.97-23.63 15.25z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg></div>
        <div class="table-setting-dropdown-menu-item" :class="{'selected':menuStatus === 'themes'}" v-if="['list','themes'].includes(menuStatus)" @click.stop="menuStatus='themes'" ><span>Themes</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"  viewBox="0 0 512 512"><title>Themes</title><path d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7 77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58zM173 253c86 81 175 129 292 147" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg></div>
        <div class="table-setting-dropdown-menu-item" :class="{'selected':menuStatus === 'shortcuts'}" v-if="['list','shortcuts'].includes(menuStatus)" @click.stop="menuStatus='shortcuts'" ><span>Shortcuts</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"  viewBox="0 0 512 512"><title>Shortcuts</title><path d="M145.61 464h220.78c19.8 0 35.55-16.29 33.42-35.06C386.06 308 304 310 304 256s83.11-51 95.8-172.94c2-18.78-13.61-35.06-33.41-35.06H145.61c-19.8 0-35.37 16.28-33.41 35.06C124.89 205 208 201 208 256s-82.06 52-95.8 172.94c-2.14 18.77 13.61 35.06 33.41 35.06z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M343.3 432H169.13c-15.6 0-20-18-9.06-29.16C186.55 376 240 356.78 240 326V224c0-19.85-38-35-61.51-67.2-3.88-5.31-3.49-12.8 6.37-12.8h142.73c8.41 0 10.23 7.43 6.4 12.75C310.82 189 272 204.05 272 224v102c0 30.53 55.71 47 80.4 76.87 9.95 12.04 6.47 29.13-9.1 29.13z"/></svg></div>        <!--        design-->
        <div class="table-setting-dropdown-menu-item" :class="{'selected':menuStatus === 'settings'}" v-if="['list','settings'].includes(menuStatus)" @click.stop="menuStatus='settings'" ><span>Settings</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><title>Settings</title><path d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg></div>
         <div class="table-setting-dropdown-menu-subitem" v-if="['design'].includes(menuStatus)">
          <span>Table Header Background Color</span>
          <color-picker v-model="settings.headerBackgroundColor"></color-picker>
        </div>
        <div class="table-setting-dropdown-menu-subitem" v-if="['design'].includes(menuStatus)">
          <span>Table Header Text Color</span>
          <color-picker v-model="settings.headerTextColor"></color-picker>
        </div>
        <div class="table-setting-dropdown-menu-subitem" v-if="['design'].includes(menuStatus)">
          <span>Table Row Background Color</span>
          <color-picker v-model="settings.tableBackgroundColor"></color-picker>
        </div>
        <div class="table-setting-dropdown-menu-subitem" v-if="['design'].includes(menuStatus)">
          <span>Table Row Text Color</span>
          <color-picker v-model="settings.tableTextColor"></color-picker>
        </div>
        <div class="table-setting-dropdown-menu-subitem" v-if="['design'].includes(menuStatus)">
          <span>Row Border Bottom</span>
          <efsane-switch v-model="settings.rowBorderStatus" name="row-hover-status" :label="settings.rowBorderStatus ? 'Show' : 'Hide'"> </efsane-switch>
        </div>
        <div class="table-setting-dropdown-menu-subitem" v-if="['design'].includes(menuStatus) && settings.rowBorderStatus">
          <span>Row Border Bottom Color</span>
          <color-picker v-model="settings.rowBorderColor"></color-picker>
        </div>
        <div class="table-setting-dropdown-menu-subitem" v-if="['design'].includes(menuStatus)">
          <span>Row Height</span>
          <efsane-select v-model="settings.rowHeight" style="width: 65px;" :options="[20,22,24,26,28,30,32,34,36,38,40,45,50,55,60,70,75]"></efsane-select>
        </div>
        <div class="table-setting-dropdown-menu-subitem" v-if="['design'].includes(menuStatus) && settings.rowBorderStatus">
          <span>Row Border Bottom Size</span>
          <efsane-select v-model="settings.rowBorderSize" style="width: 65px;" :options="[1,2,3,4]"></efsane-select>
        </div>
        <!--        Animation-->
        <div class="table-setting-dropdown-menu-subitem" v-if="['animation'].includes(menuStatus)">
          <span>Row Change Color On Hover</span>
          <efsane-switch v-model="settings.rowHoverStatus" name="row-hover-status" :label="settings.rowHoverStatus ? 'Show' : 'Hide'"> </efsane-switch>
        </div>
        <div class="table-setting-dropdown-menu-subitem" v-if="['animation'].includes(menuStatus) && settings.rowHoverStatus">
          <span>Row Hover Color</span>
          <color-picker v-model="settings.rowHoverColor"></color-picker>
        </div>
        <div class="table-setting-dropdown-menu-subitem" v-if="['animation'].includes(menuStatus)">
          <span>Row Change Color On Selected</span>
          <efsane-switch v-model="settings.rowSelectedColorStatus" name="row-hover-status" :label="settings.rowSelectedColorStatus ? 'Show' : 'Hide'"> </efsane-switch>
        </div>
        <div class="table-setting-dropdown-menu-subitem" v-if="['animation'].includes(menuStatus) && settings.rowSelectedColorStatus">
          <span>Row Selected Color</span>
          <color-picker v-model="settings.rowSelectedColor"></color-picker>
        </div>
        <div class="table-setting-dropdown-menu-subitem" v-if="['animation'].includes(menuStatus) && accordion">
          <span>Row Selected Accordion Color</span>
          <color-picker v-model="settings.rowSelectedAccordionColor"></color-picker>
        </div>
        <div class="table-setting-dropdown-menu-subitem" v-if="['animation'].includes(menuStatus)">
          <span>Row Scroll On Hover</span>
          <efsane-switch v-model="settings.rowScrollStatus" name="row-hover-status" :label="settings.rowScrollStatus ? 'Show' : 'Hide'"> </efsane-switch>
        </div>
        <div class="table-setting-dropdown-menu-subitem" v-if="['animation'].includes(menuStatus) && settings.rowScrollStatus">
          <span>Row Scroll Size</span>
          <efsane-select v-model="settings.rowScrollSize" style="width: 65px;" :options="[-3,-2,-1,1,2,3,4,5]"></efsane-select>
        </div>
        <!--        actions-->
        <div class="table-setting-dropdown-menu-subitem" v-if="['actions'].includes(menuStatus)">
          <span @click="ActionModalShow = true">New Action Column</span>
        </div>
        <template v-for="(action,key) in actions">
          <div :key="key" class="table-setting-dropdown-menu-subitem" v-if="['actions'].includes(menuStatus)">
            <span >{{ action.header }}</span>
            <span class="action-inline-menu">
                  <svg xmlns="http://www.w3.org/2000/svg" class="action-edit-icon" viewBox="0 0 24 24" width="22" height="22"  stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" ><title>Edit Action</title><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="action-delete-icon" viewBox="0 0 24 24" width="22" height="22"  stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" ><title>Delete Action</title><polyline  points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </span>
          </div>
        </template>
        <!--        themes-->
        <div class="table-setting-dropdown-menu-subitem" v-if="['themes'].includes(menuStatus)">
          <span>Coming Soon</span>
        </div>
        <!--        settings-->
        <div class="table-setting-dropdown-menu-subitem" v-if="['settings'].includes(menuStatus)">
          <span>Selected Tab</span>
          <efsane-switch v-model="settings.selectedTabStatus" name="row-hover-status" :label="settings.selectedTabStatus ? 'Show' : 'Hide'"> </efsane-switch>
        </div>
        <div class="table-setting-dropdown-menu-subitem" v-if="['settings'].includes(menuStatus)">
          <span @click="removeSettings" >Reset Table Settings</span>
        </div>
        <!--        shortcuts-->
        <div class="table-setting-dropdown-menu-subitem" v-if="['shortcuts'].includes(menuStatus)">
          <span>Select / Unselect All</span>
          <efsane-select v-model="settings.shortcutSelectAllToggle" style="width: 85px;" value-property="value" label-property="label" :options="shortcuts"></efsane-select>
        </div>
        <div class="table-setting-dropdown-menu-subitem" v-if="['shortcuts'].includes(menuStatus)">
          <span>Select All Filtered Data</span>
          <efsane-select v-model="settings.shortcutSelectFilteredAll" style="width: 85px;" value-property="value" label-property="label" :options="shortcuts"></efsane-select>
        </div>
      </div>
    </div>
    <actions-popup  :show.sync="ActionModalShow"></actions-popup>
  </div>
</template>

<script>
import ColorPicker from "./color-picker.vue"
import ActionsPopup from "./actions-popup.vue";
import Directives from "../directives.js"
import EfsaneSelect from "./efsane-select.vue"
import EfsaneSwitch from "./efsane-switch.vue"
export default {
  name: "table-setting",
  mixins:[Directives],
  components: {
    ActionsPopup,
    ColorPicker,
    EfsaneSelect,
    EfsaneSwitch
  },
  props:{
    changeColumnsLocal:{
      type:Function,
      required:false
    },
    removeSettings:{
      type:Function,
      required:false
    },
    accordion:Boolean,
    settings:Object,
    increaseTableKey:{
      type:Function,
      required:false
    },
    columns:{
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
    shortcuts:{
      type:Array,
      default:function(){
        return []
      }
    },
  },
  data(){
    return{
      show:false,
      menuStatus:'list',
      ActionModalShow:false
    }
  },
  computed:{
    cssVariables(){
      return{
        "--table-setting-max-height": this.menuStatus === 'list' ? "40vh" : "70vh"
      }
    }
  },
  methods:{
    close(){
      this.show=false
    },
  },
  watch:{
    createActionModalShow(newValue){
      if(newValue){
        this.close()
      }else{
        this.show = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.table-setting{
  position: relative;
  margin-left: 2px;
  display: grid;
  place-content: center;
  height: 30px;
  width: 30px;
  &:hover{
    background-color: rgba(0,0,0,.1);
    border-radius: 50%;
    svg{
      cursor: pointer;
    }
    .table-setting-dropdown-icon path{
      fill: #fff;
    }
  }
}
.table-setting-dropdown{
  position: absolute;
  max-height: var(--table-setting-max-height);
  min-width: 400px;
  border-radius: 5px;
  z-index: 54000;
  background-color: #fff;
  box-shadow: -15px 20px 60px rgba(0,0,0,.3);
  right: 0;
  top: 30px;
  scrollbar-width: thin;
  scrollbar-color: #ccc;


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
.table-setting-dropdown-header{
  border-radius: 5px;
  height: 35px;
  border-bottom: 1px solid rgba(0,0,0,.1);
  font-family: soleil,sans-serif;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  position: sticky;
  z-index:54001;
  padding-top: 5px;
  top: 0;
  left: 0;
  span{
    padding-left: 10px;
  }
  svg{
    margin-right: 5px;
  }
}

.table-setting-dropdown-menu-container > {
  position: relative;
  height: var(--table-setting-max-height);
  width: 100%;
  counter-reset: section;
  & > .table-setting-dropdown-menu-item{
    position: absolute;
    counter-increment: section;
  }
}

.table-setting-dropdown-menu-item{
  width: calc(100% + 20px);
  height: 40px;
  display: flex;
  border-left: 1px solid rgba(0,0,0,.1);
  background-color: #fff;
  border-radius: 20px 3px 3px 20px;
  transform: translateX(-20px);
  cursor: pointer;
  top: calc(counter(section integer) * 40px);
  &:not(:nth-last-child(1)){
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  &.selected,
  &:hover{
    background-color: #F7F9F9;
  }
  span{
    margin-left: auto;
    margin-right: 10px;
    align-self: center;
    padding-left: 20px;
    height: 40px;
    color: rgba(0,0,0,.5);
    font-weight: 600;
    line-height: 40px;
    display: inline-flex;
    order: 2;
  }
  svg{
    margin-right: auto;
    margin-left: 10px;
    align-self: center;
  }
}
.table-setting-dropdown-menu-subitem{
  width: calc(100% - 20px);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 20px 3px 3px 20px;
  padding-inline: 5px;
  top: calc(counter(section integer) * 40px);
  &:not(:nth-last-child(1)){
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  span{
    cursor: pointer;
  }
}
.action-inline-menu{
  margin-left: auto;
  margin-right: 3px;
  .action-edit-icon{
    stroke: #1e7777;
    margin-right: 5px;
    &:hover{
      border: 3px solid rgba(0,0,0,.1);
      border-radius: 50%;
      opacity: .7;
    }
  }
  .action-delete-icon{
    stroke: #d03737;
    &:hover{
      border: 3px solid rgba(0,0,0,.1);
      border-radius: 50%;
      opacity: .7;
    }
  }

}
</style>
