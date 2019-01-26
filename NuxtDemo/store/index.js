import Vue from 'vue'
import Vuex from 'vuex'
import {getToken, setToken, removeToken,cookieToJson} from '~/utils/cookie'
import {encode} from '~/utils/crypto'
import {login, getAccountIncome} from '~/api/user'

Vue.use(Vuex)
const store = () => new Vuex.Store({
  state: {
    token: getToken()
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token
    }
  },
  getters: {
    token: state => {
      return state.token
    }
  }, actions: {
    nuxtServerInit({commit}, {req, res}) {
    //  console.log('nuxtServerInit')
      let cookieStr = req.headers.cookie
      if(cookieStr){
        let cookie = cookieToJson(cookieStr)
      //  console.log(cookie)
     //   console.log(cookie.jwt)
        commit('setToken', cookie.jwt)
      }
    },
    login({commit}, userInfo) {
      const userName = userInfo.username.trim()
      const password = encode(userInfo.password.trim())
      const platfromSource = 2
      return new Promise((resolve, reject) => {
        login({userName, password, platfromSource}).then((response) => {
          const data = response.data
          const obj = data.obj
          const tokenStr = obj.token
          setToken(tokenStr)
          commit('setToken', tokenStr)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
})

export default store



