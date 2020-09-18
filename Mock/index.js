var Mock = require('mockjs')
var list = Mock.mock({
    'listdata|10': [{
    "title":"@ctitle",
    "id":"@id",
    "children|10":[ {
            "name":"@cname",
            "id":"@id",
            "img":"@image(100x100,@color)",
            "jq":'10',
            "sl":0,
        }
    ]
    }]
})
module.exports={
    list
}
console.log(list)
