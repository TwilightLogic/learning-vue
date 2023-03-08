<template>
  <button type="button" @click="onClickAge">Update Age</button>
  <p>The user is {{ age }} years old</p>
  <p>ageDoubled(): {{ ageDoubled }}</p>
</template>

<script>
export default {
  name: 'User',
  props: ['age'],
  // ⬇️ 从组件发出的事件数组，添加了`age-change`事件
  // 用emits：仅当我们需要对任何props的值进行改变时才需要此过程
  emits: ['age-change'],
  // 这里没改变age⬇️，这是返回了一个age*2的值罢了
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      // emit: 用于声明由组件触发的自定义事件，3: 参数
      this.$emit('age-change', 3);
    },
  },
};
</script>
