import { defineStore } from 'pinia'
const useCounterStroe = defineStore({
  id: 'counter',
  state: () => ({
    count: 0
  }),
  getters: {
    double(): number {
      return this.count++
    }
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
export default useCounterStroe
