import Mock from 'mockjs'

// mock方法,详细的可以看官方文档
const Random = Mock.Random

export default [
    {
        url: '/upload/file',
        type: 'post',
        response: (config: any) => {

            return {
                code: 200,
                data: {
                    name: 'file',
                    url: Random.image('200x100', '#50B347', '#FFF', 'Mfile')
                }
            }
        }
    },
    {
        url: '/user/list',
        type: 'get',
        response: () => {

            let list = Array.from({length: 100}, () => {
                return {
                    uid: Random.id(),
                    name: Random.cname(),
                    email: Random.email(),
                    address: Mock.mock('@county(true)'),
                    phone: Random.string('number', 10),
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
    }
]