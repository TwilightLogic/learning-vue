<template>
  <app-form>
    <template v-slot:help>
      <p>{{ help }}</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
    <!-- 因为我们在Form组件中有一个没有命名的slot，所以下面的<p></p>会自动放进slot中 -->
    <p>Dummy text</p>
  </app-form>

  <app-form>
    <template v-slot:help>
      <p>contact help text.</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="message" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </app-form>
</template>

<script>
import AppForm from './components/Form.vue';

export default {
  name: 'App',
  components: {
    AppForm,
  },
  data() {
    return {
      help: 'Idk',
    };
  },
};
</script>
