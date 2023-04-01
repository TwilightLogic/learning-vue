<template>
  <div>
    <!-- 这里注册了一个user属性，App就能调用HelloWorld里面的数据了 -->
    <slot :user="user" :favorites="favorites"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      user: {
        name: 'John',
        age: 25,
      },
      favorites: ['Pizza', 'Marbles', 'Birds'],
    };
  },
};
</script>
