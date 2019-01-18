import request from '@/utils/request'

export function getProduct (params) {
  return request({
    url: '../../static/test.json',
    method: 'get',
    params: params
  })
}

