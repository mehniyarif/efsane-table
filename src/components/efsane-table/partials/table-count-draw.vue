<template>
  <div :style="cssVariables" class="efsane-table-count-draw-container">
    <div v-if="!selectedLen" class="normal-length">
      Showing <span>{{offset}}</span>  to <span>{{offsetEnd}}</span>  of <span>{{dataCount}}</span>  {{name}}
    </div>
    <div v-else class="selected-length">
      Selected <span>{{selectedLen}}</span>    of <span>{{dataCount}}</span>  {{name}}
    </div>
  </div>
</template>

<script>
export default {
  props:{
    dataCount:{
      type:[String,Number],
      default:1
    },
    offset:{
      type:[String,Number],
      default:0
    },
    limit:{
      type:[String,Number],
      default:0
    },
    selectedLen:{
      type:[String,Number],
      default:0
    },
    name:{
      type:[String,Number],
      default:"items"
    },
  },
  computed:{
    cssVariables(){
      return {
      }
    },
    totalPage(){
      return Math.ceil(this.dataCount / this.limit)
    },
    currentPage(){
      return (this.offset / this.limit) + 1
    },
    offsetEnd(){
      let basicEnd = parseInt(this.offset) + parseInt(this.limit)
      return basicEnd > this.dataCount ? this.dataCount : basicEnd
    },
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900&display=swap");
.efsane-table-count-draw-container{
  margin-block: 15px;
  font-family: 'Poppins','Sans Serif';
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-left: auto;
  margin-right: 0;

  span{
    padding: 1px 5px;
    background-color: #fcfcfc;
    border-radius: 5px;
    min-width: 20px;
  }
  .normal-length{
    span{
      color: #607B8B;
      font-weight: 600;
    }
  }
  .selected-length{
    span:nth-child(1){
      color: #18862B;
      font-weight: 600;
    }
    span:nth-child(2){
      color: #607B8B;
      font-weight: 600;
    }
  }


}
</style>
