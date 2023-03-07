<template>
  <h3>Hey!</h3>
  <greeting></greeting>
  <!-- 我们在父组件设置的age值，可以在下面标签给一个attribute值，然后再传入数据即可 -->
  <!-- 第一个age来自于User，第二个age是来自App的数据 -->
  <user :age="age"></user>
</template>

<script>
import Greeting from '@/components/Greeting.vue';
import User from '@/components/User.vue';

export default {
  name: 'App',
  components: {
    // 组件名: 组件
    // Greeting: Greeting
    Greeting,
    User,
  },
  data() {
    return {
      age: 20,
    };
  },
};
</script>
