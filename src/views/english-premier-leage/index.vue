<template>
<div class="table-wrapper">
  <efsane-table
    :data="tabledatas"
    dynamic
    save
    hide-header
    editable
    row-height="26"
    table-name="leages"
    :default-columns="columns"
  >

  </efsane-table>
</div>
</template>

<script>
import LocalApi from "@/views/english-premier-leage/data/localApi";
export default {
  name: 'english-premier-leage',
  mixins:[LocalApi],
  data(){
    return{
      leages:[],
      line:0,
      tables: [],
      columns:[
        {
          header: "Checkbox",
          name:"checkbox",
          size:"60",
          type:"checkbox"
        },
        {
          header: "Position",
          name:"position",
          size:"60",
          type:"data"
        },
        {
          header: "Logo",
          name:"team.crestUrl",
          size:"60",
          type:"data",
          usage:"image-src"
        },
        {
          header: "Club",
          name:"team.name",
          size:"1fr",
          type:"data"
        },
        {
          header: "Played",
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
          header: "Drawn",
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
          header: "GF",
          name:"goalsFor",
          size:"60",
          type:"data"
        },
        {
          header: "GA",
          name:"goalsAgainst",
          size:"60",
          type:"data"
        },
        {
          header: "GD",
          name:"goalDifference",
          size:"60",
          type:"data"
        },
        {
          header: "Points",
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
