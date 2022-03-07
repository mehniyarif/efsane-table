<template>
  <span class="data-column">
      <img v-if="usage === 'image-src'" :src="readValue" :alt="readValue" class="data-column-image">
      <span v-else>
        {{readValue}}
        <slot></slot>
      </span>
  </span>
</template>

<script>
import Methods from "../methods";
import Data from "../data";
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
