export default class TableApp{
  constructor(data){
    this.data = data
  }

  makeId(length) {
    let result           = ['id'];
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() *
        charactersLength)));
    }
    return result.join('');
  }
  addParent(parent , arr) {
    let arrDataKeys = []
    arr.forEach(value => {
      arrDataKeys.push(`${parent}.${value}`)
    })
    return arrDataKeys
  }

  getObjectKeys = (obj, prefix = '', existIf=false) => {
    if(!obj) return []

    return Object.entries(obj).reduce((collector, [key, val]) => {
        if(existIf && ["",null,undefined].includes(typeof val === 'string' ? val.trim() : val)) return  collector

        const newKeys = [ ...collector, prefix ? `${prefix}.${key}` : key ]
        if (Object.prototype.toString.call(val) === '[object Object]') {
          const newPrefix = prefix ? `${prefix}.${key}` : key
          const otherKeys = this.getObjectKeys(val, newPrefix, existIf)
          return [ ...newKeys, ...otherKeys ]
        }
        return newKeys
    }, [])
  }

  getDataLine(obj = {}, existIf=false){
    if(!obj) return []

    let keys = []
    Object.entries(obj).map(([key, value]) => {
      if(existIf && ["",null,undefined].includes(typeof value === 'string' ? value.trim() : value)) return  keys

      if(Array.isArray(value)){
        keys= keys.concat(this.addParent(key,this.getDataMap(value, existIf)))
      }else if(typeof value == 'object'){
        keys= keys.concat(this.addParent(key,this.getObjectKeys(value,'', existIf)))
      }else{
        keys.push(key)
      }
    })
    return keys
  }

  getDataMap(arr = [], existIf=false){
    //existIf parametresi true ise empty string, null ve undefined değerleri olan valueların keyleri dönmez.
    if(!arr || !arr.length) return []
    let keys = []
    arr.forEach(line => {
        keys = [... new Set(keys.concat(this.getDataLine(line, existIf)))]
    })
    return keys
  }

  generateSmartData(data = [], slots = {}, special_columns = [], existIf=false){
    let slot_names = []
    Object.entries(slots).forEach(slot => {
      slot_names.push(slot[0])
    })
    if(!Array.isArray(data)){
      alert("Table Data Not Valid. Make sure data type is array")
    }
    return [...special_columns,...slot_names, ...this.getDataMap(data,existIf)]
  }


}
