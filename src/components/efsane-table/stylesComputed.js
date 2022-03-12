export default {
  computed:{
    styles(){
      let rowHeight = this.settings.rowHeight || this.rowHeight
      let allSelectedAlertBoxHeight = this.tableAllSelectAlertShow ? this.settings.topbarHeight : "0px"
      return {
        "--efsane-table-all-selected-alert-box-height": allSelectedAlertBoxHeight,
        "--efsane-table-wrapper-height": `calc(${this.settings.tableBodyHeight} + ${this.settings.topbarHeight} + ${this.settings.headerHeight} + ${this.settings.paginationHeight} + ${allSelectedAlertBoxHeight} + 25px)`,
        "--efsane-table-body-height": this.settings.tableBodyHeight,
        "--efsane-table-row-height": `${rowHeight}px`,
        "--efsane-table-row-font-size": `${Math.ceil(rowHeight * 0.4)}px`,
        "--efsane-table-column-sizes": this.columnSizes,
        "--efsane-table-background-color": this.settings.tableBackgroundColor,
        "--efsane-header-background-color":
          this.settings.headerBackgroundColor,
        "--efsane-table-text-color": this.settings.tableTextColor,
        "--efsane-header-text-color": this.settings.headerTextColor,
        "--efsane-row-hover-color": this.settings.rowHoverStatus
          ? this.settings.rowHoverColor
          : "none",
        "--efsane-row-selected-color": this.settings.rowSelectedColorStatus
          ? this.settings.rowSelectedColor
          : "none",
        "--efsane-row-scroll-animation": this.settings.rowScrollStatus
          ? `translateY(${this.settings.rowScrollSize}px)`
          : "none",
        "--efsane-row-border": this.settings.rowBorderStatus
          ? `${this.settings.rowBorderSize}px solid ${this.settings.rowBorderColor}`
          : "none",
        "--efsane-table-topbar-height": this.settings.topbarHeight,
        "--efsane-table-header-height": `${this.settings.headerHeight}px`,
        "--efsane-pagination-height": this.settings.paginationHeight,
      };
    }
  }
}
