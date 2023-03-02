let vm = Vue.createApp({
  data() {
    return {
      message: 'Hello world!',
      messageNew: 'Fucking world!',
    };
  },
  // HOOKS 💥
  beforeCreate() {
    console.log('beforeCreate() function called!', this.message);
  },
  // 在组件实例处理完所有与状态相关的选项后调用。
  created() {
    console.log('create() function called!', this.message);
  },
  // 在组件被挂载之前调用。
  // this.$el会访问模板里所有的vue的实例诶
  beforeMount() {
    console.log('beforeMount() function called!', this.$el);
  },
  // 在组件被挂载之后调用。
  mounted() {
    console.log('mounted() function called!', this.$el);
  },
  // 在数据发生任何更改时触发
  beforeUpdate() {
    console.log('beforeUpdate() function called!');
  },
  updated() {
    console.log('updated() function called!');
  },
  beforeUnmount() {
    console.log('beforeUnmount() function called!');
  },
  unmounted() {
    console.log('unmounted() function called!');
  },
});

// vue实例被挂载到id为app的元素上
vm.mount('#app');

// setTimeout(() => {
//   vm.mount('#app');
// }, 3000);

let vm2 = Vue.createApp({
  data() {
    return {
      message: 'Hello world!',
      messageNew: 'Fucking world!',
    };
  },
  // Vue without complier
  render() {
    return Vue.h('h1', this.messageNew);
  },
}).mount('#app2');
