import {getToken} from '~/utils/cookie'

export default function ({route, req, res, redirect,store}) {
  let redirectURL = '/login';
 // console.log('userAuth='+store.state.token)
  //需要进行权限判断的页面开头
  if (!store.state.token) {
    redirect(redirectURL)
  }
  // 可通过组件的props接收error信息
 /* if (!store.state.token) {
    error({
      message: 'cookie失效或未登录，请登录后操作',
      statusCode: 403
    })
  }*/
}
