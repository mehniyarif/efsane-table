<template>
  <span class="data-column" :data-tooltip="column.tooltip" :class="{'efsane-tooltip':column.tooltip}">
      <img v-if="usage === 'image-src'" :src="readValue" :alt="readValue" class="data-column-image">
      <span v-else>
            {{readValue}}
            <slot></slot>
      </span>
  </span>
</template>

<script>
import Methods from "../methods.js";
import Data from "../data.js";
export default {
  mixins:[Methods, Data],
  props:{
    data:Object,
    column:Object
  },
  computed:{
    readValue(){
      return this.readProperty(this.data, this.column)
    },
    usage(){
      return this.column && this.column.usage ? this.column.usage : null
    }
  }
}
</script>

<style lang="scss" scoped>
  .data-column{
    position: relative;
  }
  .data-column-image{
    height: calc(var(--efsane-table-row-height) * .8 );
    width: calc(var(--efsane-table-row-height) * .8 );
  }
</style>
