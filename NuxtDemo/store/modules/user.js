import {login, getAccountIncome} from '~/api/login'
import {encode} from '~/utils/crypto'
import {getToken, setToken,removeToken} from '@/utils/auth'



const state = () => ({
  token: getToken()
})

const mutations = {
  setToken: (state, token) => {
    state.token = token
  }
}
const actions = {
  // 登录
  login({commit}, userInfo) {
    const userName = userInfo.username.trim()
    const password = encode(userInfo.password.trim())
    const platfromSource = 2
    return login({userName, password, platfromSource}).then((response) => {
      const data = response.data
      const obj = data.obj
      const tokenStr = obj.token
      setToken(tokenStr)
      commit('setToken', tokenStr)
    })

  },
  getAccountIncome() {
    console.log('getAccountIncome='+getToken())
    return getAccountIncome().then((res) => {
      console.log(res)

    })
  }
}
const getters = {
  token: state => {
    return state.token
  }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
