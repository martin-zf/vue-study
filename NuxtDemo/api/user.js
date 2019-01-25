import request from './http'
export function login(params){
  return request.post('/auth/login',params)

}
export function getAccountIncome() {
  return request.get('finance-accounts/my-account-income')
}
