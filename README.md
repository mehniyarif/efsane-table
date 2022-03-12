# Efsane Table

## Efsane Table setup
For Vue 2 Framework. Please start using it from version 1.1.0 is currently under development.
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
