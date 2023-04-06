// 如果用户已经登陆，那我们就在nav栏将`login / register`改成`log out`
import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => {
    return {
      userLoggedIn: false
    }
  }
})
