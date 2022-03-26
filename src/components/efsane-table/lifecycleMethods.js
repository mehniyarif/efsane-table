export default {
  async created(){
    await this.getStorage()
    this.setSettings()
    this.sendColumns(this.currentColumns)
    window.addEventListener('keyup', this.shortcutApply);
  },
  mounted(){
  },
  destroyed(){
    window.removeEventListener('keyup', this.shortcutApply);
  },
  updated(){
    this.setUpTooltip()
  }
}
