<template>
<span class="download-area">
  <svg @click="copy" xmlns="http://www.w3.org/2000/svg" width="20" height="100%" viewBox="0 0 24 24"><title>Download</title> <path d="M7 2v-2h10v2h-10zm0 4h10v-2h-10v2zm10 7v-5h-10v5h-6l11 11 11-11h-6z"/></svg>
</span>
</template>

<script>
export default {
  name: "download-area",
  methods:{
    copy(event){
      this.$emit('click',event)
    }
  }
}
</script>

<style lang="scss" scoped>
  .download-area{
    width: 25px;
    position: relative;
    overflow: hidden;
    svg{
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;
      animation: down-animate 1.5s linear infinite;
      &:hover{
        width: 24px;
        height: 24px;
      }
      path{
        fill: #28A745;
      }
    }
  }
  @keyframes down-animate {
    0%{
      top: -5%;
    }
    40%{
      top: 0%;
    }
    60%{
      top: 5%;
    }
    80%{
      top: 5%;
    }
    100%{
      top: 10%;
    }
  }
</style>
