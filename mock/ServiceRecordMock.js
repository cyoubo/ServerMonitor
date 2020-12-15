import Mock from "mockjs"

export default {
    "POST /api_querySerivceRecord/": (req, res) => {
        return res.status(200).json(Mock.mock({
            'status': true,
            'msg': "",
            'data|30-40': [{
                name: "@cname",
                time: "@datetime",
                host: "@ip",
                from: 0,
                to: "@integer(1, 5)"
            }]
        }))

    }

}
