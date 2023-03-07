import { createApp } from 'vue';
import App from './App.vue';
// import Greeting from '@/comments/Greeting.vue';

let vm = createApp(App);

// 注册vue的组件
// 但是一般都不这么写了 ⬇️
// vm.component('Greeting', Greeting);

vm.mount('#app');
