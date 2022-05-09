import { Module } from 'vuex'
import { IRootState, ILoginState } from '../type'
import hyRequest from '@/service/index'
import LocalCache from '@/utils/cache'
import router from '@/router'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    getUserToken(state, payload) {
      console.log(payload)
      state.token = payload
    },
    getUserInfo(state, payload) {
      state.userInfo = payload
    },
    getUserMenu(state, payload) {
      state.userMenus = payload
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload) {
      //获取token与用户id
      const loginMsg: any = await hyRequest.request({
        url: '/login',
        method: 'POST',
        data: payload
      })
      const { id, token } = loginMsg.data.data
      commit('getUserToken', token)
      LocalCache.setCache('token', token)
      //获取用户信息
      const getuserInfo: any = await hyRequest.request({
        url: '/users/' + id,
        method: 'get'
      })
      const userInfo = getuserInfo.data
      commit('getUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)
      //获取用户菜单
      const getuserMenu: any = await hyRequest.request({
        url: '/role/' + userInfo.data.role.id + '/menu',
        method: 'get'
      })
      const userMenu = getuserMenu.data.data
      commit('getUserMenu', userMenu)
      LocalCache.setCache('userMenus', userMenu)
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache('token')
      if (token) {
        commit('getUserToken', token)
      }
      const userInfo = LocalCache.getCache('userInfo')
      if (userInfo) {
        commit('getUserInfo', userInfo)
      }
      const usermenus = LocalCache.getCache('usermenus')
      if (usermenus) {
        commit('getUserMenu', usermenus)
      }
    }
  }
}
export default loginModule
