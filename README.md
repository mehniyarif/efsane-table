# Efsane Table

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" alt="vue 2" width="200"/>

For ***Vue 2*** Framework. ***Please start using it from version 1.1.0 is currently under development.***

**[Show Demo and Detail Documentation](https://efsanetable.herokuapp.com/)**

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
props
* data (type:Array, required: Yes)
* table-name (type:String, required: Yes)
* ordering (type:String, required: No)
* table-item-definition (type:String, required: No, default: "items")
* dynamic (type:Boolean, required: No)
* save (type:Boolean, required: No)
* reload (type:Boolean, required: No)
* reload-function (type:Function, required: No)
* pagination (type:Boolean, required: No)
* data-count (type:Number, required: Yes)
* limit (type:Number, required: No)
* row-height (type:Number, required: No)
* pagination-offset (type:Number, required: No)
* editable (type:Boolean, required: No)
* outputType (type:String, required: No, choices= "base64" , "default")
* default-columns (type:Array, required: Yes)
  * Example
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
