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
          header: "Leage Name",
          name:"name",
          size:"1fr",
          type:"data"
        }
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
