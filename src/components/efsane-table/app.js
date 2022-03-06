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

  getObjectKeys = (obj, prefix = '') => {
    if(!obj) return []

    return Object.entries(obj).reduce((collector, [key, val]) => {
      const newKeys = [ ...collector, prefix ? `${prefix}.${key}` : key ]
      if (Object.prototype.toString.call(val) === '[object Object]') {
        const newPrefix = prefix ? `${prefix}.${key}` : key
        const otherKeys = this.getObjectKeys(val, newPrefix)
        return [ ...newKeys, ...otherKeys ]
      }
      return newKeys
    }, [])
  }

  getDataLine(obj = {}){
    if(!obj) return []

    let keys = []
    Object.entries(obj).map(item => {
      if(Array.isArray(item[1])){
        keys= keys.concat(this.addParent(item[0],this.getDataMap(item[1])))
      }else if(typeof item[1] == 'object'){
        keys= keys.concat(this.addParent(item[0],this.getObjectKeys(item[1])))
      }else{
        keys.push(item[0])
      }
    })
    return keys
  }

  getDataMap(arr = []){
    if(!arr || !arr.length) return []
    let keys = []
    arr.forEach(line => {
        keys = [... new Set(keys.concat(this.getDataLine(line)))]
    })
    return keys
  }

  generateSmartData(data = [], slots = {}){
    let slot_names = []
    Object.entries(slots).forEach(slot => {
      slot_names.push(slot[0])
    })
    if(!Array.isArray(data)){
      alert("Table Data Not Valid. Make sure data type is array")
    }
    return ['row_number','checkbox',...slot_names, ...this.getDataMap(data)]
  }


}
