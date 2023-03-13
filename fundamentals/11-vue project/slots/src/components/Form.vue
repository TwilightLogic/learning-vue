<template>
  <form>
    <div class="help">
      <slot name="help"></slot>
    </div>
    <div class="fields">
      <slot name="fields"></slot>
    </div>
    <div class="buttons">
      <slot name="buttons"></slot>
    </div>
    <!-- 如果父组件没传content过来，就会使用我们自定义的slot默认内容 -->
    <!-- <slot>No form to render</slot> -->
    <slot></slot>
  </form>
</template>

<script>
export default {};
</script>
