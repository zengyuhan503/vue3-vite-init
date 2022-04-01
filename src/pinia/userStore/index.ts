import { defineStore } from 'pinia'
interface info {
  id?: number,
  name?: string,
  mail?: string,
  phone?: number,
  role?: number
}
const userStore = defineStore({
  id: 'user',
  state: () => ({
    info: {}
  }),
  getters: {
    getInfo(): info {
      return this.info
    }
  },
  actions: {
    setInfo(info: info) {
      this.info = info
    }
  }
})
export default userStore
