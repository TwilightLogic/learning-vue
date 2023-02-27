// mount('#app') -> 将application插入到id为app的元素中
// vm = view model
const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Logic',
      middleName: '',
      lastName: 'Wixx',
      url: 'https://www.google.com',
      raw_url: '<a href="https://www.google.com">Google</a>',
      age: 20,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName(message, event) {
      // console.log(message);

      // 获取当前输入框对象中的值
      this.lastName = event.target.value;
    },
  },
  computed: {
    // 要从实例中访问数据，我们需要用到this关键字
    // 记得不要用箭头函数，因为代理机制所以会导致this关键字用不了
    fullName() {
      console.log('fullName computed property  was called!');

      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    },
  },
}).mount('#app');

// setTimeout(() => {
//   // 相当于 vm.data.firstName，但Vue帮我们做了代理
//   vm.firstName = 'luu';
// }, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: 'Wixx',
//       lastName: 'Logic',
//     };
//   },
// }).mount('#app2');
