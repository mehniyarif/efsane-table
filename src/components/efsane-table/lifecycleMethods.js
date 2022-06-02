export default {
  async created(){
    await this.getStorage()
    this.setSettings()
    this.sendColumns(this.currentColumns)
    window.addEventListener('keyup', this.shortcutApply);
    this.setShowMenu()
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll , true);
    this.scrollbarVisible()
    queueMicrotask(()=>{
      this.setObservers()
    })
  },
  destroyed(){
    window.removeEventListener('keyup', this.shortcutApply);
    window.removeEventListener('scroll', this.handleScroll);
  },
  updated(){
    this.setUpTooltip()
    this.scrollbarVisible()
  }
}
