<template>
<div>
  <efsane-table :default-columns="columns"
                :data="tabledatas"
                save
                editable
                dynamic
                table-name="demo">

  </efsane-table>
</div>
</template>

<script>
import LocalApi from "@/views/overview/data/localApi";
export default {
  name: "index.vue",
  mixins:[LocalApi],
  data(){
    return{
      columns:[
      {
        type:"data",
        header:"Position",
        name:"position",
        size:"1fr"
      },
      {
        type:"data",
        header:"Logo",
        name:"team.crestUrl",
        size:"100",
        usage:"image-src"
      },
      {
        type:"data",
        header:"Team Name",
        name:"team.name",
        size:"3fr"
      },
      {
        type:"data",
        header:"Played",
        name:"playedGames",
        size:"100"
      },
      {
        type:"data",
        header:"Won",
        name:"won",
        size:"100"
      },
      {
        type:"data",
        header:"Draw",
        name:"draw",
        size:"100"
      },
      {
        type:"data",
        header:"Lost",
        name:"lost",
        size:"100"
      },
      {
        type:"data",
        header:"GF",
        name:"goalsFor",
        size:"100"
      },
      {
        type:"data",
        header:"GA",
        name:"goalsAgainst",
        size:"100"
      },
      {
        type:"data",
        header:"test",
        name:"test",
        size:"100"
      },
      {
        type:"data",
        header:"GD",
        name:"goalDifference",
        size:"100"
      },
      {
        type:"data",
        header:"Points",
        name:"points",
        size:"100"
      }
    ],
    }
  }
}
</script>

<style scoped>

</style>
