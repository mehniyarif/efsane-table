export default {
  async created(){
    await this.getStorage()
    this.setSettings()
    this.sendColumns(this.currentColumns)
    window.addEventListener('keyup', this.shortcutApply);
    this.setShowMenu()
  },
  mounted(){
    this.scrollbarVisible()
    this.setObservers()
  },
  destroyed(){
    window.removeEventListener('keyup', this.shortcutApply);
  },
  updated(){
    this.setUpTooltip()
    this.scrollbarVisible()
  }
}
