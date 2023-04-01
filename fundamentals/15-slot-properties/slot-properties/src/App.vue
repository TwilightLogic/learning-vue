<template>
  <div id="app">
    <!-- 如果App要用HelloWorld给的数据，这里就要用v-slot，并且注册一个别名：v `v-slot="v"` -->
    <!-- 新版本：可以用#来代替v-slot，然后在#后面写个default，别名也省略了 -->
    <hello-world #default="{ user, favorites }">
      <p>Hello {{ user.name }}. You like {{ favorites[0] }}, right?</p>
    </hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>
