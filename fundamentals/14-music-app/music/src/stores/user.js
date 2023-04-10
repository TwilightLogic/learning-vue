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
      const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password)

      // add(): will insert a document into a collection with the generated ID
      // doc(): allow us to select a document in a collection(will create one if not exist)
      // Firebase will store the document with the ID we passed in
      // set(): will add or modify existing properties in a document
      // 说人话：为了让firebase上的authentication里的uid和database里的uid相同
      await usersCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country
      })

      // Users can also upload their name and profile image
      await userCred.user.updateProfile({
        displayName: values.name
      })

      this.userLoggedIn = true
    },
    async authenticate(values) {
      // 1. Send the request to firebase with the payload data
      await auth.signInWithEmailAndPassword(values.email, values.password)

      this.userLoggedIn = true
    },
    async signOut() {
      // 无所谓，firebase会帮我们clear数据
      await auth.signOut()

      this.userLoggedIn = false
    }
  }
})
