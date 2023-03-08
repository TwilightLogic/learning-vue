<template>
  <button type="button" @click="onClickAge">Update Age</button>
  <p>The user is {{ age }} years old</p>
  <p>ageDoubled(): {{ ageDoubled }}</p>
</template>

<script>
export default {
  name: 'User',
  // Validating props
  props: {
    age: {
      type: Number,
      // ⬇️ 如果一个组件需要用到User这个组件，需要传入一个Number类型的age
      // required: true,

      // 我们也可以为age设置一个初始值(📒：如果age的type是一个Object/Array，下面的default要设成function)
      default: 20,

      // 也可以自定义一个validator()
      validator(value) {
        return value < 130;
      },
    },
  },
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
