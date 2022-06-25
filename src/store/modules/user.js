import { getUserInfo } from '@/api/home'
// import md5 from 'md5'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant/index'
import router from '@/router'

// import { setTimeStamp } from '@/utils/auth'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    logout() {
      // resetRouter()

      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/home')
    },
    async getUserInfo(context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    }
    // 登录
    // login(context, userInfo) {
    //   const { username, password } = userInfo
    //   return new Promise((resolve, reject) => {
    //     login({
    //       username,
    //       password: md5(password)
    //     })
    //       .then((data) => {
    //         // 保存登录时间
    //         setTimeStamp()
    //         this.commit('user/setToken', data.token)
    //         router.push('/')
    //         resolve()
    //       })
    //       .catch((err) => {
    //         reject(err)
    //       })
    //   })
    // }
  }
}
