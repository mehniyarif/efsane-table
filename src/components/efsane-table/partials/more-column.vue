<template>
<span  class="more-area">
    <span @click="closeAccordion" v-if="open" >
          <svg   xmlns="http://www.w3.org/2000/svg" height="18" width="18"  viewBox="0 0 512 512"><title>Close More</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 328l144-144 144 144"/></svg>
    </span>
    <span @click="openAccordion" v-else>
          <svg  xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512"><title>Open More</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/></svg>
    </span>
</span>
</template>

<script>
import Methods from "@/components/efsane-table/methods";

export default {
  name: "more-column",
  mixins:[Methods],
  props:{
    row:Object,
    open:Boolean,
    accordionMatchField:String,
    line:{
      type:[Number,String],
      default:null
    },
    accordionMechanic:{
      type:String,
      default:"all-open"  // other option: ["only-one"]
    },
    selectedAccordions:{
      type:Array,
      default:function (){return []}
    }
  },
  computed:{
    readMatchField(){
      return this.accordionMatchField ? this.readProperty(this.row, this.accordionMatchField) : this.line
    }
  },
  methods:{
    closeAccordion(){
      let matchValue = this.readMatchField || this.line
      let indexValue = this.selectedAccordions.findIndex(v => v === matchValue)
      this.$emit('update:selected-accordions',
        [...this.selectedAccordions.slice(0,indexValue),  ...this.selectedAccordions.slice(indexValue+1, this.selectedAccordions.length)]
      )
    },
    openAccordion(){
      let matchValue = this.readMatchField || this.line
      if(this.accordionMechanic === "only-one"){
        this.$emit('update:selected-accordions',
          [matchValue]
        )
      }else{
        this.$emit('update:selected-accordions',
          [...this.selectedAccordions, matchValue]
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .more-area, .more-area span{
    width: 100%;
    display: block;
    height: 100%;
    cursor: pointer;
  }
</style>
