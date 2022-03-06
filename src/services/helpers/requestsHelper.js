export default class requestsHelper{
    constructor(data,alias,works){
        let defaultWorks = []
        defaultWorks['custom_start_date'] = "convertTimestamp"
        defaultWorks['custom_end_date'] = "convertTimestamp"
        defaultWorks['expected_ship_date'] = "convertTimestamp"
        defaultWorks['marketplace_created'] = "convertTimestamp"
        defaultWorks['status_updated_at'] = "convertTimestamp"
        defaultWorks['updated'] = "convertTimestamp"
        defaultWorks['expected_ship_date'] = "convertTimestamp"
        defaultWorks['startDate'] = "convertTimestamp"
        defaultWorks['endDate'] = "convertTimestamp"
        defaultWorks['shipStartDate'] = "convertTimestamp"
        defaultWorks['shipEndDate'] = "convertTimestamp"
        defaultWorks['ship_date'] = "convertTimestamp"
        this.addTimezoneFieds = ['status_updated_at','updated','marketplace_created']

        this.data = data
        this.alias = alias || []
        this.works = works || defaultWorks
    }

    createQueryset(){
        let queryset = ""
        if(this.data){
            Object.entries(this.data).forEach((value)=>{
                //eğer değişmesi gereken bir isim varsa
                if(value[1]){
                    if(Object.keys(this.alias).includes(value[0])){
                        //eğer value bir arrayse ve functiondan dönen değer varsa
                        if(Array.isArray(value[1])){
                            if(this.querysetWorkControl(value[0],value[1]).length){
                                queryset += `&${this.alias[value[0]]}=${this.querysetWorkControl(value[0],value[1]).join(",")}`
                            }

                        }else{
                        //value için çalışması gerekn bir function varsa
                        queryset += `&${this.alias[value[0]]}=${this.querysetWorkControl(value[0],value[1])}`
                        }
                    }else{
                        //eğer value bir arrayse ve functiondan dönen değer varsa
                        if(Array.isArray(value[1])){
                            if(this.querysetWorkControl(value[0],value[1]).length){
                                queryset += `&${value[0]}=${this.querysetWorkControl(value[0],value[1]).join(",")}`
                            }

                        }else{
                            //value için çalışması gerekn bir function varsa
                            queryset += `&${value[0]}=${this.querysetWorkControl(value[0],value[1])}`
                        }
                    }

                    if(this.addTimezoneFieds.includes(value[0])){
                      queryset += `,${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
                    }
                }


            })

        }
        return queryset.replace("&","?")
    }

    createQuerysetObject(){
        let search = this.createQueryset().substring(1);
        return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    }

    querysetWorkControl(name,value){
        if(Array.isArray(value) && Object.keys(this.works).includes(name)){
            let newArr = []
            value.map((item)=>{
                if(item){
                    try {
                        newArr.push(this[this.works[name]](item))
                    }catch{
                        newArr.push(item)
                    }
                }
            })
            return newArr
        }else{
            if(Object.keys(this.works).includes(name)){
                try {
                    return this[this.works[name]](value)
                }catch{
                    return value
                }
            }else{
                return value
            }
        }

    }

    convertTimestamp(value){
        return parseInt((new Date(value).getTime() / 1000).toFixed(0))
    }
}
