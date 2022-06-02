<template>
  <div class="efsane-table-pagination-container" v-if="pags.length > 1" :style="cssVariables">
    <span class="efsane-table-item-pagination-direction" @click="leftDirection" >
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 512 512"><title>Previous Page</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"/></svg>
    </span>
    <span class="efsane-table-item-pagination" @click="enterPagItem(pag.value)" v-for="(pag,key) in pags" :key="key" :class="{'show':pag.show}">
      {{pag.value}}
    </span>
    <span class="efsane-table-item-pagination-direction" @click="rightDirection" >
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 512 512"><title>Next Page</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144"/></svg>
    </span>
  </div>
</template>

<script>
export default {
  props:{
    offset:{
      default:0,
      type:[Number,String]
    },
    limit:{
      default:25,
      type:[Number,String],
      required:true
    },
    dataCount:{
      type:[String,Number],
      default:0
    },
    wishLength:{
      default:7,
      type:[Number,String],
      required:false
    },

  },
  data(){
    return{
      pags:[{value:1,show:true}],
      totalPage:1,
      currentPage:1,
      //eğer invalid değerler çıktığında cleanlist istenen sayıda eleman alamazsa seçili öğeden kaç çıkarılaarak eleman alınacağını belirtir.
      negativeDiff: 0
    }
  },
  computed:{
    cssVariables(){
      return{
        "--pagination-width":(30 * (this.totalPage > this.wishLength-1 ? this.wishLength : this.totalPage)) + "px",
        "--container-width":((30 * ((this.totalPage > this.wishLength-1 ? this.wishLength : this.totalPage) + 2)) + (this.totalPage * 2) + 10) + "px"
      }
    },
    currectOffset(){
      return (this.currentPage - 1) * this.limit
    }
  },
  created(){
    this.createPags()
  },
  methods:{
    createPags(){
      //liste uzunluğu en fazla 7 olacak şekilde
      this.totalPage = Math.ceil(this.dataCount / this.limit)
      this.pags = []
      let cleanList = []
      //temel bir liste ile başlıyoruz
      let lists = []
      for (let i = 0; i < this.wishLength; i++) {
        lists.push(i+1)
      }
      //eğer seçili eleman üstteki listenin sağ yarısına geçmişse veya yoksa yeni bir liste oluşturuyoruz
      if(this.currentPage > Math.ceil(this.wishLength / 2) && this.totalPage > this.wishLength){
        lists = [1]
        for (let i = 0; i < this.wishLength - 2 ; i++) {
          if(i % 2){
            lists.push(this.currentPage + (this.negativeDiff))
          }else{
            lists.push(this.currentPage - (this.negativeDiff))
            this.negativeDiff += 1
          }
        }
        this.negativeDiff = 0
      }
      //invalid değerleri ayıklıyoruz
      lists.map((item)=>{
        if(item < this.totalPage){
          cleanList.push(item)
        }
      })
      //liste uzunluğu this.wishLength'nin altındaysa geçerli elemanlar ekliyoruz
      if(this.totalPage > this.wishLength && cleanList.length < this.wishLength){
        let diff = (this.wishLength -1) - cleanList.length
        for (let i = 1; i < diff+1; i++) {
          let pushData = this.currentPage - (this.negativeDiff + i)
          //eğer eklenecek değer listede yoksa ekle
          if(!cleanList.includes(pushData)){
            cleanList.push(pushData)
          }
        }
      }
      if((this.totalPage > this.wishLength && this.currentPage > Math.ceil(this.wishLength / 2)) || (this.totalPage < this.wishLength)){
        cleanList.push(this.totalPage)
      }

      cleanList.sort(function(a, b){return a-b})

      for (let i = 0; i < cleanList.length; i++) {
        this.pags.push({
          value:cleanList[i],
          show: this.currentPage == (cleanList[i])
        })
      }
    },
    pauseEvent(e){
      if(e.stopPropagation) e.stopPropagation();
      if(e.preventDefault) e.preventDefault();
      return false;
    },
    enterPagItem(value){
      this.pauseEvent(value)
      this.currentPage = value
      this.$emit('update:offset',this.currectOffset)
      this.createPags()
    },
    rightDirection(){
      this.currentPage = this.currentPage === this.totalPage ? this.totalPage : this.currentPage + 1
      this.$emit('update:offset',this.currectOffset)
      this.createPags()
    },
    leftDirection(){
      this.currentPage = this.currentPage === 1 ? 1 : this.currentPage - 1
      this.$emit('update:offset',this.currectOffset)
      this.createPags()
    }
  },
  watch:{
    limit:"createPags",
    offset(newValue){
      if(!newValue){
        this.currentPage= 1
        this.$emit('update:offset',0)
      }
      this.createPags()
    },
    dataCount:"createPags"
  }
}
</script>

<style lang="scss">
.efsane-table-pagination-container{
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: max-content;
  height: var(--efsane-pagination-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 10px;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
}

.efsane-table-pagination-content{
  width: max-content;
  height: 100%;
  display: flex;
  padding-inline: 3px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.efsane-table-item-pagination{
  height: 30px;
  min-width: 30px;
  width: max-content;
  display: flex;
  margin-left: 2px;
  margin-right: 2px;
  padding-inline: 3px;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  align-items: center;
  border-radius: .65rem;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.3rem;
  background-color: #fff;
  &.show{
    background-color: #337ab7;
    border-radius: 25%;
    color: #fff;
  }
  &:not(.show):hover{
    color: #337ab7;
  }
}

.efsane-table-item-pagination-direction{
  height: 30px;
  width: 30px;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  padding-inline: 3px;
  justify-content: center;
  border-radius: .65rem;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  cursor: pointer;
  font-size: 1.3rem;
  background-color: #fff;
  &.show{
    background-color: #337ab7;
    border-radius: 25%;
    color: #fff;
  }
  &:hover{
    background-color: #337ab7;
    color: #fff;
  }
}
</style>
