import request from '@/request/index'

export function getUser() {
    return request({
        url: '/user/list',
        method: 'get'
    })
}

export function uploadFile(data: any) {
    return request({
        url: '/upload/file',
        data,
        method: 'post'
    })
}