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
          <li>
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <li>
            <a class="px-2 text-white" href="#">Manage</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'

export default {
  name: 'AppHeader',
  computed: {
    // mapStores函数接受modal.js里的数据
    ...mapStores(useModalStore)
  },
  methods: {
    toggleAuthModal() {
      // 这个时候我们要访问modal.js的isOpen的值，那我们要怎么访问呢？
      // 用pinia自带的`mapStores`函数
      // 为什么是this.modalStore?????
      this.modalStore.isOpen = !this.modalStore.isOpen
      console.log(this.modalStore.isOpen)
    }
  }
}
</script>
