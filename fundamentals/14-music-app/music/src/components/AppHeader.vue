<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">Music</a>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <!-- 当用户点击Login / Register时，应该跳转页面 -->
          <!-- 如果isOpen是真值，那就跳转页面 -->
          <li v-if="!userStore.userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <!-- 因为没办法添加多个v-else，所以给他们一个template标签就好了 -->
          <template v-else>
            <li>
              <a class="px-2 text-white" href="#">Manage</a>
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="userStore.signOut">Logout</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'
// 这里导入一个user.js来查看用户登录状态
import useUserStore from '@/stores/user'

export default {
  name: 'AppHeader',
  computed: {
    // mapStores函数接受modal.js里的数据
    ...mapStores(useModalStore, useUserStore)
  },
  methods: {
    toggleAuthModal() {
      // 这个时候我们要访问modal.js的isOpen的值，那我们要怎么访问呢？
      // 用pinia自带的`mapStores`函数
      this.modalStore.isOpen = !this.modalStore.isOpen
    }
  }
}
</script>
