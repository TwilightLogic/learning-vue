<template>
  <h1 v-if="age > 25">{{ msg }}</h1>
  <p v-else>You must be 25 years or older to view this message</p>
</template>

<script>
export default {
  name: 'Greeting',
  props: ['age'],
  data() {
    return {
      msg: 'Hello the fucking world!',
    };
  },
};
</script>

<!-- 加上scoped标签：样式只会应用于Greeting组件本身 -->
<!-- lang='scss' 为项目添加sass-->
<style scoped lang="scss">
/* 我们用sass ⬇️*/
h1:hover {
  color: darken(#cc4444, 15%);
}
/* 
    h1 {
    color: aquamarine;
    } 
*/
</style>
