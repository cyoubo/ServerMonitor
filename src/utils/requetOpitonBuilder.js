export function generatePostOptions(contentType, param) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", contentType);
    myHeaders.append("Access-Control-Allow-Origin","*");
    myHeaders.append("Access-Control-Allow-Headers","Content-Type")
    myHeaders.append("Access-Control-Allow-Methods","POST,GET")
    myHeaders.append("Access-Control-Max-Age", 86400)

    let body = {}
    switch(contentType)
    {
        case "application/x-www-form-urlencoded" : body = convert2xwwwformurlencoded(param);break;
        default : param = JSON.parse(JSON.stringify(param));break;
    }

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body,
        redirect: 'follow'
    };
    
    return requestOptions;
}

function convert2xwwwformurlencoded(param){
    let urlencoded = new URLSearchParams();
    Object.keys(param).map((key)=>{ 
        urlencoded.append(key, param[key])
        return ""
    })
    return urlencoded;
}