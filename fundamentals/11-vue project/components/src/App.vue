<template>
  <h1>{{ msg }}</h1>
</template>

<script>
import { def } from '@vue/shared';

export default {
  name: 'App',
  data() {
    return {
      msg: 'Hello the fucking world!',
    };
  },
};
</script>
