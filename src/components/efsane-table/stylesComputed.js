export default {
  computed:{
    styles(){
      let rowHeight = this.settings.rowHeight || this.rowHeight
      let lineGap = this.settings.lineGap || 0
      let allSelectedAlertBoxHeight = this.tableAllSelectAlertShow ? this.settings.topbarHeight : "0px"
      return {
        "--efsane-table-all-selected-alert-box-height": allSelectedAlertBoxHeight,
        "--efsane-table-body-height": this.settings.tableBodyHeight,
        "--efsane-table-row-height": `${rowHeight}px`,
        "--efsane-table-line-gap": `${lineGap}px`,
        "--efsane-table-row-font-size": `${Math.ceil(rowHeight * 0.4)}px`,
        "--efsane-table-column-sizes": this.columnSizes,
        "--efsane-table-header-column-sizes": `${this.columnSizes} minmax(0, ${this.scrollWidth}px)`,
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
        "--efsane-row-selected-accordion-color": this.accordion
          ? this.settings.rowSelectedAccordionColor
          : "none",
        "--efsane-row-scroll-animation": this.settings.rowScrollStatus
          ? `translateY(${this.settings.rowScrollSize}px)`
          : "none",
        "--efsane-row-border-top": this.settings.rowBorderTopSize
          ? `${this.settings.rowBorderTopSize}px solid ${this.settings.rowBorderTopColor}`
          : "none",
        "--efsane-first-row-border-top": this.settings.firstRowBorderTop
          ? `${this.settings.rowBorderTopSize}px solid ${this.settings.rowBorderTopColor}`
          : "none",
        "--efsane-row-border-bottom": this.settings.rowBorderBottomSize
          ? `${this.settings.rowBorderBottomSize}px solid ${this.settings.rowBorderBottomColor}`
          : "none",
        "--efsane-last-row-border-bottom": this.settings.lastRowBorderBottom
          ? `${this.settings.rowBorderBottomSize}px solid ${this.settings.rowBorderBottomColor}`
          : "none",
        "--efsane-row-border-left": this.settings.rowBorderLeftSize
          ? `${this.settings.rowBorderLeftSize}px solid ${this.settings.rowBorderLeftColor}`
          : "none",
        "--efsane-row-border-right": this.settings.rowBorderRightSize
          ? `${this.settings.rowBorderRightSize}px solid ${this.settings.rowBorderRightColor}`
          : "none",
        "--efsane-table-body-border": this.settings.bodyBorderSize
          ? `${this.settings.bodyBorderSize}px solid ${this.settings.bodyBorderColor}`
          : "none",
        "--efsane-table-topbar-height": this.settings.topbarHeight,
        "--efsane-table-header-height": `${this.settings.headerHeight}px`,
        "--efsane-pagination-height": this.settings.paginationHeight,
        "--efsane-tooltip-background-color": this.settings.tooltipBackgroundColor,
        "--efsane-tooltip-text-color": this.settings.tooltipTextColor,
        "--efsane-table-border-top-left-radius": this.hideHeader ?  "5px" : "0",
        "--efsane-table-border-top-right-radius": this.hideHeader ?  "5px" : "0",
        "--efsane-table-column-border-right": this.dragStatus ?   "none" : "3px solid transparent",
        "--efsane-table-scrollbar-width": `${this.scrollWidth}px`,
      };
    }
  }
}
