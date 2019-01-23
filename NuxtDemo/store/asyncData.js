import request from '~/service/index'

export const state = () => ({
  info: {}
})

export const actions = {
  async loadData({commit}) {
    return await request.get('https://api.myjson.com/bins/1ha2kw')
  }

}
