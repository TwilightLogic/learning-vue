<template>
  <form>
    <!-- 如果父组件没传content过来，就会使用我们自定义的slot默认内容 -->
    <slot>No form to render</slot>
  </form>
</template>

<script>
export default {};
</script>
