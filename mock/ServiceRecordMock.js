import Mock from "mockjs"

export default {
    "POST /api_querySerivceRecord/": (req, res) => {
        return res.status(200).json(Mock.mock({
            'status': true,
            'msg': "",
            'data|10-25': [{
                name: "@cname",
                time: "@datetime",
                host: "@ip",
                from: 1,
                to: "@integer(2, 5)"
            }]
        }))

    }

}
