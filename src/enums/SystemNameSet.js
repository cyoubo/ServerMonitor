export const app_gb = "重庆市耕地资源监测监管系统"
export const app_dcy = "国土调查云"
export const app_yzt = "重庆市国土空间规划实施监督应用"
export const app_zrzy = "重庆市自然资源资产动态监测系统"
export const app_tdsm = "土地全生命周期系统"
export const app_sjzt = "数据中台"

export function getApplicationNameByIndex(index){
    switch(index){
        case 0 : return app_sjzt;
        case 1 : return app_dcy;
        case 2 : return app_gb;
        case 3 : return app_tdsm
        case 4 : return app_yzt;
        case 5 : return app_zrzy;
        default : return app_sjzt;  
    }
}

/**
 * 
 */
export function getApplicationNames() {
    let names = []
    for(let index = 0; index< 6; index++){
        names.push({name: getApplicationNameByIndex(index)})
    }
    return names
}