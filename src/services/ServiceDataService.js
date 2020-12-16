import * as requestOptionApi from "../utils/requetOpitonBuilder"
import * as systemNames  from "../enums/SystemNameSet"
import _ from "lodash";

export async function api_querySerivceRecord(maxCount) {

    const contentType = "application/x-www-form-urlencoded";

    const info = {
        maxCount: maxCount
    }

    const queryOptions = requestOptionApi.generatePostOptions(contentType, info)

    try {
        const response = await fetch("/api_querySerivceRecord", queryOptions);
        const data = await response.json();
        return ({ data });
    } catch (err) {
        return ({ err });
    }
}

export function process_CountServiceRecordByHost(records){
    let count_dict = _.countBy(records, (value)=> value.to)
    let names = systemNames.getApplicationNames()
    let result = []
    for(let index = 1; index< names.length;index++) {
        result.push({
            name: systemNames.getApplicationNameByIndex(index),
            systemId: index,
            count : count_dict[index]!==undefined? count_dict[index]:0
        })
    }
    return result
}

export function process_FilterServiceRecordBySystemId(records, systemId){
    return _.filter(records,(value)=> value.to === systemId)
}