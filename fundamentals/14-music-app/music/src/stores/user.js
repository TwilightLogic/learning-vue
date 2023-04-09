// 如果用户已经登陆，那我们就在nav栏将`login / register`改成`log out`
import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => {
    return {
      userLoggedIn: false
    }
  },
  // We will define logic in actions if the changes affects store/state
  // 因为register函数里面有修改firebase数据库的功能，所以register()是actions
  actions: {
    async register(values) {
      await auth.createUserWithEmailAndPassword(values.email, values.password)

      await usersCollection.add({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country
      })

      this.userLoggedIn = true
    }
  }
})
