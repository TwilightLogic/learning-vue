import { defineStore } from 'pinia'

export default defineStore('modal', {
  // 相当于 state: () => { return { isOpen: false } }
  state: () => ({
    isOpen: false
  }),
  getters: {
    // If isOpen is true, the class should be applied to element
    hiddenClass(state) {
      return !state.isOpen ? 'hidden' : ''
    }
  }
})
