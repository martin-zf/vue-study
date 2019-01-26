import Cookies from 'js-cookie'

const TokenKey = 'jwt'

export function getToken() {

  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function cookieToJson(cookieStr) {
  let cookieArr = cookieStr.split(";");
  let obj = {}
  cookieArr.forEach((i) => {
    let j = i.trim()
    let arr = j.split("=");
    obj[arr[0]] =arr[1];
  });
  return obj
}
