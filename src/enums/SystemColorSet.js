export const app_gb = "#3fb1e3"
export const app_dcy = "#6be6c1"
export const app_yzt = "#626c91"
export const app_zrzy = "#a0a7e6"
export const app_tdsm = "#c4ebad"
export const app_sjzt = "#96dee8"

export function getSystemColors() {
    return [
        app_gb,
        app_dcy,
        app_yzt,
        app_zrzy,
        app_tdsm,
        app_sjzt
    ]
} 

export function getSystemColorsByIndex(index){
    return getSystemColors()[index]
}