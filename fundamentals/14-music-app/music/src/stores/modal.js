import { defineStore } from 'pinia'

export default defineStore('modal', {
  state: () => ({
    isOpen: false
  })
  // ⬆️ 相当于 state: () => { return { isOpen: false } }
})
