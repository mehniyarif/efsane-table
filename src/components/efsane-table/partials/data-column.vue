<template>
  <span class="data-column">
      {{readProperty(data, column)}}
      <slot></slot>
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
  }
}
</script>

<style lang="scss" scoped>
  .data-column{
    position: relative;
  }
</style>
