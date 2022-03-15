<template>
<div class="table-wrapper">
  <efsane-table
    :data="tabledatas[line]"
    dynamic
    save
    editable
    table-name="leages"
    :default-columns="columns"
  >

  </efsane-table>
</div>
</template>

<script>
import LocalApi from "@/views/turkey-super-leage/data/localApi";
export default {
  name: 'turkey-super-leage',
  mixins:[LocalApi],
  data(){
    return{
      leages:[],
      line:0,
      tables: [],
      columns:[
        {
          header: "#",
          name:"position",
          size:"60",
          type:"data"
        },
        {
          header: "Logo",
          name:"team.crestUrl",
          size:"100",
          type:"data",
          usage:"image-src"
        },
        {
          header: "Team Name",
          name:"team.name",
          size:"1fr",
          type:"data"
        },
        {
          header: "Game",
          name:"playedGames",
          size:"60",
          type:"data"
        },
        {
          header: "Won",
          name:"won",
          size:"60",
          type:"data"
        },
        {
          header: "Draw",
          name:"draw",
          size:"60",
          type:"data"
        },
        {
          header: "Lost",
          name:"lost",
          size:"60",
          type:"data"
        },
        {
          header: "Goal",
          name:"goalsFor",
          size:"60",
          type:"data"
        },
        {
          header: "Goal Against",
          name:"goalsAgainst",
          size:"60",
          type:"data"
        },
        {
          header: "Goal Difference",
          name:"goalDifference",
          size:"60",
          type:"data"
        },
        {
          header: "Point",
          name:"points",
          size:"60",
          type:"data"
        },
      ],
      filters:{}
    }
  },
  created () {
    this.fetchData()
    setInterval(()=>{
      if(this.line === 2){
        this.line = 0
        return
      }
      this.line +=1
    },2000)
  },
  methods:{
    fetchData(){

      this.$store.dispatch('leage/fetchLeage', '2021/standings').then((response)=>{
        this.leages = response.data.standings[0].table
      })
    }
  }
}
</script>

<style scoped>
  .table-wrapper{
    margin-inline: 100px;
  }
</style>
