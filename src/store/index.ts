import { createStore } from 'vuex'
import login from './login/login'
import { IRootState } from './type'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'xuan'
    }
  },
  mutations: {},
  modules: {
    login
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export default store
