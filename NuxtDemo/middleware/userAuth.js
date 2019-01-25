import {getToken} from '~/utils/cookie'

export default function ({route, req, res, redirect}) {

  let redirectURL = '/login';
  var token = getToken()

  console.log('userAuth='+token)

  //需要进行权限判断的页面开头
  if (!token) {
   // redirect(redirectURL)
  }
}
