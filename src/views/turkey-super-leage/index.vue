<template>
<div>
  <efsane-table
    :data="leages"
    dynamic
    save
    table-name="leages"
    :default-columns="columns"
  >

  </efsane-table>
</div>
</template>

<script>
export default {
  name: 'turkey-super-leage',
  data(){
    return{
      leages:[],
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

</style>
