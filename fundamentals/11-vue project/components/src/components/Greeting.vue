<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'Greeting',
  data() {
    return {
      msg: 'Hello the fucking world!',
    };
  },
};
</script>

<!-- 加上scoped标签：样式只会应用于Greeting组件本身 -->
<style scoped>
h1 {
  color: aquamarine;
}
</style>
