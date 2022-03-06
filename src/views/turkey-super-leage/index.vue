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
      ]
    }
  },
  created () {
    this.fetchData()
  },
  methods:{
    fetchData(){
      this.$store.dispatch('leage/fetchLeages').then((response)=>{
        this.leages = response.data.competitions
      })
    }
  }
}
</script>

<style scoped>

</style>
