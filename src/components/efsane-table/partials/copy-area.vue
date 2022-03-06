<template>
<button class="copy-area" >
  <svg xmlns="http://www.w3.org/2000/svg" class="before" @click="copy" v-if="status" width="24" height="24" viewBox="0 0 512 512"><title>Copy</title> <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  <svg v-else width="36" height="36" xmlns="http://www.w3.org/2000/svg" style="margin-top: 5px;" fill-rule="evenodd" clip-rule="evenodd"><title>Copied</title> <path   fill="#28A745" d="M24 6.278l-11.16 12.722-6.84-6 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.278zm-22.681 5.232l6.835 6.01-1.314 1.48-6.84-6 1.319-1.49zm9.278.218l5.921-6.728 1.482 1.285-5.921 6.756-1.482-1.313z"/></svg>
</button>
</template>

<script>
export default {
  name: "copy-area",
  data(){
    return{
      status:true
    }
  },
  methods:{
    copy(event){
      this.$emit('click',event)
      this.status=false
      setTimeout(()=>{
        this.status=true
      },2000)
    }
  },
}
</script>


<style lang="scss" scoped>
.copy-area{
  width: 28px;
  cursor: pointer;
  border:none;
  overflow: hidden;
  svg.before:hover{
    height: 28px;
    width: 28px;
  }
}


</style>
