# Efsane Table

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
