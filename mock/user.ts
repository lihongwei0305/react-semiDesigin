import Mock from 'mockjs'

// mock方法,详细的可以看官方文档
const Random = Mock.Random


export default [
    {
        url: '/user/list',
        type: 'get',
        response: (data: any) => {
            let params = JSON.parse(data.body)
            let list = Array.from({length: params.length}, () => {
                return {
                    uid: Random.id(),
                    name: Random.cname(),
                    email: Random.email(),
                    address: Mock.mock('@county(true)'),
                    phone: Random.string('number', 11),
                    age: Random.string('number', 1, 2),
                }
            })
            return {
                code: 200,
                data: [
                    ...list,
                ]
            }
        }
    },
]