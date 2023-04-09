<template>
  <!-- Registration Form -->
  <div
    class="text-white text-center font-bold p-4 rounded mb-4"
    v-if="reg_show_alert"
    :class="reg_alert_variant"
  >
    {{ reg_alert_msg }}
  </div>
  <vee-form :validation-schema="schema" @submit="register" :initial-values="userData">
    <!-- Name -->
    <div class="mb-3">
      <label class="inline-block mb-2">Name</label>
      <vee-field
        name="name"
        type="text"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Name"
      />
      <!-- 下面的name表示error message要输出的地方 -->
      <ErrorMessage class="text-red-600" name="name" />
    </div>
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        name="email"
        type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Age -->
    <div class="mb-3">
      <label class="inline-block mb-2">Age</label>
      <vee-field
        name="age"
        type="number"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      />
      <ErrorMessage class="text-red-600" name="age" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field name="password" :bails="false" v-slot="{ field, errors }">
        <input
          type="password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Password"
          v-bind="field"
        />
        <div class="text-red-600" v-for="error in errors" :key="error">
          {{ error }}
        </div>
      </vee-field>
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Confirm Password</label>
      <vee-field
        name="confirm_password"
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Confirm Password"
      />
      <ErrorMessage class="text-red-600" name="confirm_password" />
    </div>
    <!-- Country -->
    <div class="mb-3">
      <label class="inline-block mb-2">Country</label>
      <!-- 因为vee-field默认是一个input的tag，所以这里用as属性来覆写这个tag -->
      <vee-field
        as="select"
        name="country"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      >
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
        <option value="Antarctica">Antarctica</option>
      </vee-field>
      <ErrorMessage class="text-red-600" name="country" />
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <vee-field
        name="tos"
        type="checkbox"
        value="1"
        class="w-4 h-4 float-left -ml-6 mt-1 rounded"
      />
      <label class="inline-block">Accept terms of service</label>
      <ErrorMessage class="text-red-600 block" name="tos" />
    </div>
    <!-- We will not submit the form if it is submitting -->
    <!-- 初学者开发时容易不注意垃圾表单的提交 -->
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      :disabled="reg_in_submission"
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
// 确保从源目录导入文件的一个简单的方法就是用@符号(webpack)
// 当我们文件有很多层嵌套，我们就不必向上移动好多层目录
// import { auth, usersCollection } from '@/includes/firebase'
import useUserStore from '@/stores/user'
import { mapActions } from 'pinia'

export default {
  name: 'RegisterForm',
  data() {
    return {
      schema: {
        name: 'required|min:3|max:10|alpha_spaces',
        email: 'required|min:3|max:100|email',
        age: 'required|min_value:18|max_value:100',
        password: 'required|min:9|max:100|excluded:password',
        // confirmed: @password 指定了password这个name的值要和confirm_password这个name的值相同
        confirm_password: 'password_mismatch:@password',
        country: 'required|country_excluded:Antarctica',
        tos: 'tos'
      },
      userData: {
        country: 'USA'
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: 'bg-blue-500',
      reg_alert_msg: 'Please wait! Your account is being created.'
    }
  },
  computed: {
    // ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  methods: {
    ...mapActions(useUserStore, {
      // 因为user.js有register()，这里也有register()，所以这里起了个别名
      createUser: 'register'
    }),
    // 注册函数是处理submit的地方
    async register(values) {
      this.reg_in_submission = true
      this.reg_show_alert = true
      this.reg_alert_variant = 'bg-blue-500'
      this.reg_alert_msg = 'Please wait! Your account is being created.'

      // 我们已经在上面添加了alert的数据
      // 但是这里我们希望使用firebase发送数据 ⬇️
      // firebase.auth().createUserWithEmailAndPassword()返回一个对象，其中包含我们可以用来与身份验证进行通信的方法和属性
      // 这里是为了做用户身份验证
      // let userCred = null
      try {
        // 已经移动到user.js的actions里
        // firebase: User account creation can fail if the account already exists or the password is invalid.
        // ⬆️ 所以如果我们注册同样的账号，会直接导致异常
        // 它⬇️ 不存储其他数据，只存储了email和password
        // 如果想存储其他的数据，可以用fire store
        // userCred = await auth.createUserWithEmailAndPassword(values.email, values.password)

        // 因为user.js是没有表单提交的values数据的，我们这里会传给它
        this.createUser(values)
      } catch (error) {
        this.reg_in_submission = false
        this.reg_alert_variant = 'bg-red-500'
        this.reg_alert_msg = 'An unexpected error ocurred. Please try again later.'

        // 这个return函数会停止函数的继续执行
        return
      }

      // 这里是为了将数据写入数据库
      // 这个记录可以去firebase后台看 ⬇️
      // try {
      //   // 已经移动到user.js的actions里
      //   // add函数会向集合里添加一个document（用来描述集合中的对象），这里我们只收集我们需要的数据
      //   // await usersCollection.add({
      //   //   name: values.name,
      //   //   email: values.email,
      //   //   age: values.age,
      //   //   country: values.country
      //   // })
      // } catch (error) {
      //   this.reg_in_submission = false
      //   this.reg_alert_variant = 'bg-red-500'
      //   this.reg_alert_msg = 'An unexpected error ocurred. Please try again later.'

      //   // 这个return函数会停止函数的继续执行
      //   return
      // }

      // 登陆成功后，就讲用户的登录状态设成true
      // 因为我们要将上面nav栏的`register/login`设置成`log out`
      // 已经移动到user.js的actions里
      // this.userLoggedIn = true

      this.reg_alert_variant = 'bg-green-500'
      this.reg_alert_msg = 'Success! Your account has been created.'

      // console.log(userCred)
    }
  }
}
</script>
