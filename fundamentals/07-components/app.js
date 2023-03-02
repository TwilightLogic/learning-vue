let vm = Vue.createApp({
  // data会从component那里拿
});

vm.component('hello', {
  template: '<h1>{{message}}</h1>',
  data() {
    return {
      message: 'Hello the fucking world!',
    };
  },
});

vm.mount('#app');
