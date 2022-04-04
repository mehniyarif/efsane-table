# Efsane Table

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" alt="vue 2" width="200"/>

For ***Vue 2*** Framework. 

Version ***1.1.0***  is Released 🎉✨

**[Show Demo and Detail Documentation](https://efsanetable.herokuapp.com/)**

Draggable Columns
<img  class="image-container" fetchpriorty="high" alt="Draggable Columns" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-draggable.gif">
Dynamic Columns From Data
<img  class="image-container" fetchpriorty="high" alt="Dynamic Columns From Data" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-dynamic-columns.gif">
Resizable Columns
<img  class="image-container" loading="lazy" decoding="async" fetchpriorty="low"   alt="Resizable Columns" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-resizable-columns.gif">
Editable Columns
<img  class="image-container" loading="lazy" decoding="async" fetchpriorty="low"  alt="Editable Columns" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-editable-columns.gif">
Editable Design
<img  class="image-container" loading="lazy" decoding="async" fetchpriorty="low" alt="Editable Design" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-editable-design.gif">

## Efsane Table setup
```
npm install efsane-table
```
main.js (globally component)
```
import EfsaneTable from 'efsane-table'
Vue.component('EfsaneTable',EfsaneTable);
```
usage
```
<efsane-table
    :data="tableData"
    :default-columns="columns"
    table-name="orders"
>
</efsane-table>
```
***Default Columns***

Example Definition

  ```
          [{
            header: "Name",
            name:"name",
            size:"60",
            copyable:true,
            list_manipulation:"first",
            text_manipulation:"upper",
            downloadable:true,
            type:"data"
          },{
            header: "Position",
            name:"position",
            size:"60",
            type:"slot"
          },{
            header: "#",
            name:"row_number",
            size:"60",
            type:"row_number"
          },{
            header: "#",
            name:"checkbox",
            size:"60",
            type:"checkbox"
          },
          {
            header: "Logo",
            name:"team.logo",
            size:"1fr",
            type:"data",
            usage:"image-src"
          }]
  ```
  
***Props***

<table>
<thead>
<tr>
<th>Prop Name</th>
<th>Data Type</th>
<th>Required</th>
<th>Sync Modifier</th>
<th>Default Value</th>
<th>Description</th>
<th>Available Version</th>
<th>options</th>
</tr>
</thead>
<tbody>
<tr>
<td>table-name</td>
<td>String</td>
<td>true</td>
<td>false</td>
<td>efsaneTable</td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>data</td>
<td>Array</td>
<td>true</td>
<td>false</td>
<td></td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>default-settings</td>
<td>Object</td>
<td>true</td>
<td>false</td>
<td></td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>dynamic</td>
<td>Boolean</td>
<td>false</td>
<td>false</td>
<td>false</td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>save</td>
<td>Boolean</td>
<td>false</td>
<td>false</td>
<td>false</td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>reload</td>
<td>Boolean</td>
<td>false</td>
<td>false</td>
<td>false</td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>pagination</td>
<td>Boolean</td>
<td>false</td>
<td>false</td>
<td>false</td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>accordion</td>
<td>Boolean</td>
<td>false</td>
<td>false</td>
<td>false</td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>accordion-match-value</td>
<td>String,Number,Boolean, Array</td>
<td>false</td>
<td>false</td>
<td></td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>transition</td>
<td>Boolean</td>
<td>false</td>
<td>false</td>
<td>false</td>
<td></td>
<td>Not Yet</td>
<td></td>
</tr>
<tr>
<td>transition-const-field</td>
<td>String</td>
<td>false</td>
<td>false</td>
<td></td>
<td></td>
<td>Not Yet</td>
<td></td>
</tr>
<tr>
<td>hide-header</td>
<td>Boolean</td>
<td>false</td>
<td>false</td>
<td>false</td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>editable</td>
<td>Boolean</td>
<td>false</td>
<td>false</td>
<td></td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>output-type</td>
<td>String</td>
<td>false</td>
<td>false</td>
<td>default</td>
<td></td>
<td>1.1.0</td>
<td>default, base64</td>
</tr>
<tr>
<td>data-count</td>
<td>Number</td>
<td>false</td>
<td>false</td>
<td>0</td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>limit</td>
<td>Number</td>
<td>false</td>
<td>false</td>
<td>25</td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>ordering</td>
<td>String</td>
<td>false</td>
<td>true</td>
<td></td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>pagination-offset</td>
<td>String</td>
<td>false</td>
<td>true</td>
<td>0</td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>table-item-definition</td>
<td>String</td>
<td>false</td>
<td>false</td>
<td>items</td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>columns</td>
<td>Array</td>
<td>false</td>
<td>false</td>
<td></td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>reload-function</td>
<td>Function</td>
<td>false</td>
<td>false</td>
<td></td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>default-columns</td>
<td>Array</td>
<td>false</td>
<td>false</td>
<td></td>
<td></td>
<td>1.1.0</td>
<td></td>
</tr>
<tr>
<td>actions</td>
<td>Array</td>
<td>false</td>
<td>false</td>
<td></td>
<td></td>
<td>Not Yet</td>
<td></td>
</tr>
<tr>
<td>default-actions</td>
<td>Array</td>
<td>false</td>
<td>false</td>
<td></td>
<td></td>
<td>Not Yet</td>
<td></td>
</tr>
</tbody>
</table>

    
  ***Emits***

<table>
<thead>
<tr>
<th>Emit Usage</th>
<th>Emit Name</th>
<th>Required</th>
<th>Return Type</th>
<th>Description</th>
<th>Available</th>
</tr>
</thead>
<tbody>
<tr>
<td>columns</td>
<td>Columns</td>
<td>false</td>
<td>Array or Base64 String</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>actions</td>
<td>Actions</td>
<td>false</td>
<td>Array or Base64 String</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>list-all-selected-trigger</td>
<td>All Selected List</td>
<td>false</td>
<td>Boolean</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>data-all-selected-trigger</td>
<td>All Selected Filtered List</td>
<td>false</td>
<td>Boolean</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>input</td>
<td>Selected Data</td>
<td>false</td>
<td>Array</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>change-offset</td>
<td>Selected Data</td>
<td>false</td>
<td>Number</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>change-ordering</td>
<td>Ordering Data Property Name</td>
<td>false</td>
<td>String</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>settings</td>
<td>Settings Object</td>
<td>false</td>
<td>Object</td>
<td></td>
<td>1.1.0</td>
</tr>
</tbody>
</table>

***Table Settings***

Example Settings (All Default Values)
```
settings:{
        tableBackgroundColor:"#fff",
        tableTextColor:"#343A40",
        headerBackgroundColor:"#F7F9F9",
        headerTextColor: "#343A40",
        topbarHeight:"28px",
        headerHeight:"30px",
        rowHeight:null,
        lineGap:null,
        rowHoverStatus:true,
        rowSelectedColorStatus:true,
        rowScrollStatus:false,
        selectedTabStatus:true,
        rowHoverColor:"#EEEEEE",
        tooltipBackgroundColor:"#343A40",
        tooltipTextColor:"#ffffff",
        rowSelectedColor:"#81D4FA",
        rowSelectedAccordionColor:"#D1C4E9",
        rowScrollSize:2,
        rowBorderTopColor:"#EEEEEE",
        rowBorderTopSize:0,
        firstRowBorderTop:false,
        rowBorderBottomColor:"#EEEEEE",
        rowBorderBottomSize:1,
        lastRowBorderBottom:false,
        showMenuStatus:2,
        rowBorderLeftSize:0,
        rowBorderLeftColor:"#EEEEEE",
        rowBorderRightSize:0,
        rowBorderRightColor:"#EEEEEE",
        bodyBorderSize:1,
        bodyBorderColor:"#EEEEEE",
        tableBodyHeight:"65vh",
        paginationHeight:"35px",
        resizing:false,
        shortcutSelectAllToggle:"alt+q",
        shortcutSelectFilteredAll:"shift+f",
      }
```
<table>
<thead>
<tr>
<th>Setting Usage Name</th>
<th>Type</th>
<th>Required</th>
<th>Setting Name</th>
<th>Default Vlaue</th>
<th>Description</th>
<th>Available Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>tableBackgroundColor</td>
<td>Hexadecimal, Color Name or RGB</td>
<td>false</td>
<td>Table Rows Background Color</td>
<td>#fff</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>tableTextColor</td>
<td>Hexadecimal, Color Name or RGB</td>
<td>false</td>
<td>Table Rows Text Color</td>
<td>#343A40</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>headerBackgroundColor</td>
<td>Hexadecimal, Color Name or RGB</td>
<td>false</td>
<td>Header Background Color</td>
<td>#F7F9F9</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>headerTextColor</td>
<td>Hexadecimal, Color Name or RGB</td>
<td>false</td>
<td>Header Text Color</td>
<td>#343A40</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>rowHoverColor</td>
<td>Hexadecimal, Color Name or RGB</td>
<td>false</td>
<td>Row Hover Animation Background Color</td>
<td>#EEEEEE</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>tooltipBackgroundColor</td>
<td>Hexadecimal, Color Name or RGB</td>
<td>false</td>
<td>Tooltip Background Color</td>
<td>#343A40</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>tooltipTextColor</td>
<td>Hexadecimal, Color Name or RGB</td>
<td>false</td>
<td>Tooltip Text Color</td>
<td>#ffffff</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>rowSelectedColor</td>
<td>Hexadecimal, Color Name or RGB</td>
<td>false</td>
<td>Table Row Selected Color</td>
<td>#81D4FA</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>rowSelectedAccordionColor</td>
<td>Hexadecimal, Color Name or RGB</td>
<td>false</td>
<td>Table Rows Background Color While Accordion Open</td>
<td>#D1C4E9</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>rowBorderTopColor</td>
<td>Hexadecimal, Color Name or RGB</td>
<td>false</td>
<td>Row Border Top Color</td>
<td>#EEEEEE</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>rowBorderBottomColor</td>
<td>Hexadecimal, Color Name or RGB</td>
<td>false</td>
<td>Row Border Bottom Color</td>
<td>#EEEEEE</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>rowBorderLeftColor</td>
<td>Hexadecimal, Color Name or RGB</td>
<td>false</td>
<td>Row Border Left Color</td>
<td>#EEEEEE</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>rowBorderRightColor</td>
<td>Hexadecimal, Color Name or RGB</td>
<td>false</td>
<td>Row Border Right Color</td>
<td>#EEEEEE</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>bodyBorderColor</td>
<td>Hexadecimal, Color Name or RGB</td>
<td>false</td>
<td>Body Border Color</td>
<td>#EEEEEE</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>topbarHeight</td>
<td>px</td>
<td>false</td>
<td>Top Bar Height Size</td>
<td>28px</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>headerHeight</td>
<td>px</td>
<td>false</td>
<td>Header Height Size</td>
<td>30px</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>tableBodyHeight</td>
<td>px, vh</td>
<td>false</td>
<td>Table Height Size</td>
<td>65vh</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>paginationHeight</td>
<td>px, vh</td>
<td>false</td>
<td>Pagination Height Size</td>
<td>35px</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>rowHeight</td>
<td>px</td>
<td>false</td>
<td>Rows Height Size</td>
<td></td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>lineGap</td>
<td>px</td>
<td>false</td>
<td>Rows Gap Size</td>
<td></td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>rowScrollSize</td>
<td>Number</td>
<td>false</td>
<td>Table Scroll Width Size</td>
<td>2</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>rowBorderTopSize</td>
<td>Number</td>
<td>false</td>
<td>Rows Border Top Height Size</td>
<td>0</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>rowBorderBottomSize</td>
<td>Number</td>
<td>false</td>
<td>Rows Border Bottom Height Size</td>
<td>1</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>rowBorderLeftSize</td>
<td>Number</td>
<td>false</td>
<td>Rows Border Left Height Size</td>
<td>0</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>rowBorderRightSize</td>
<td>Number</td>
<td>false</td>
<td>Rows Border Right Height Size</td>
<td>0</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>bodyBorderSize</td>
<td>Number</td>
<td>false</td>
<td>Body Border Size</td>
<td>1</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>showMenuStatus</td>
<td>Number</td>
<td>false</td>
<td>Show Menu Status</td>
<td>2</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>rowHoverStatus</td>
<td>Boolean</td>
<td>false</td>
<td>Rows Hover Status</td>
<td>true</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>rowSelectedColorStatus</td>
<td>Boolean</td>
<td>false</td>
<td>Rows Selected Color Status</td>
<td>true</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>rowScrollStatus</td>
<td>Boolean</td>
<td>false</td>
<td>Table Scroll Status</td>
<td>false</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>selectedTabStatus</td>
<td>Boolean</td>
<td>false</td>
<td>Selected Tab Status</td>
<td>true</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>firstRowBorderTop</td>
<td>Boolean</td>
<td>false</td>
<td>First Row Border Top Status</td>
<td>false</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>lastRowBorderBottom</td>
<td>Boolean</td>
<td>false</td>
<td>Last Row Border Top Status</td>
<td>false</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>resizing</td>
<td>Boolean</td>
<td>false</td>
<td>Resizing Status</td>
<td>false</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>shortcutSelectAllToggle</td>
<td>String</td>
<td>false</td>
<td>Select All Shortcut</td>
<td>alt+q</td>
<td></td>
<td>1.1.0</td>
</tr>
<tr>
<td>shortcutSelectFilteredAll</td>
<td>String</td>
<td>false</td>
<td>Select All Filtered Data Shortcut</td>
<td>shift+f</td>
<td></td>
<td>1.1.0</td>
</tr>
</tbody>
</table>

***Goals***

<table>
<thead>
<tr>
<th>Goal Title</th>
<th>Description</th>
<th>Target Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>Self Ordering</td>
<td>The Table will can sort the data without backend</td>
<td>1.2.0</td>
</tr>
<tr>
<td>Data Types</td>
<td>The Table Columns can be different types likes Date, Datetime, Number, Link, Phone, Zipcode etc.</td>
<td>1.2.0</td>
</tr>
<tr>
<td>Data Types Method</td>
<td>The Data Types can modification like Date Format for Date Type or can add target attribute for Link Type</td>
<td>1.2.0</td>
</tr>
<tr>
<td>Actions</td>
<td>The Table can give to user some action API&#39;s and users can create own action columns</td>
<td>1.2.0</td>
</tr>
<tr>
<td>Alerts</td>
<td>The Table can give to user some alert Icons, Prefixs, Styles and users can create own alerts</td>
<td>1.2.0</td>
</tr>
<tr>
<td>Data Tree Tooltip</td>
<td>The Table can show data tree in tooltip if columns data object in objects or array in arrays or etc.</td>
<td>1.2.0</td>
</tr>
<tr>
<td>Conditional Flip Columns</td>
<td>The Table can calculate column condition and then show correct data in column</td>
<td>1.2.0</td>
</tr>
<tr>
<td>Detail Tabs</td>
<td>The Table can separate selected items with multi tabs alson this tabs may under or over table</td>
<td>1.2.0</td>
</tr>
<tr>
<td>Multi Mission Header</td>
<td>Header shouldn&#39;t contain only data header also can be contain different contents or actions buttons</td>
<td>1.2.0</td>
</tr>
<tr>
<td>Table Themes</td>
<td>The Table can customize different themes</td>
<td>1.2.0</td>
</tr>
</tbody>
</table>


