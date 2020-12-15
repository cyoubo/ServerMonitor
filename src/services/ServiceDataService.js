import request from '../utils/request';
import * as requestOptionApi from "../utils/requetOpitonBuilder"

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
