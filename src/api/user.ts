import request from '@/request/index'

export function getUser(data:any) {
    return request({
        url: '/user/list',
        method: 'get',
        data,
    })
}

export function uploadFile(data: any) {
    return request({
        url: '/upload/file',
        data,
        method: 'post'
    })
}