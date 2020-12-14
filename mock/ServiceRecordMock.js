import Mock from "mockjs"

export const serviceRecord = {
    "GET /api_querySerivceRecord/": (req, res) => {
        return res.status(200).json(Mock.mock({
            'status': true,
            'msg': "",
            'data|10-25': [{
                name: "@cname",
                time: "@date",
                host: "@ip"
            }]
        }))

    }

}
