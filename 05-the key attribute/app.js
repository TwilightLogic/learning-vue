let vm = Vue.createApp({
  data() {
    return {
      people: [
        {
          name: 'John',
          message: 'Hello world!',
        },
        {
          name: 'Rick',
          message: 'I like pie.',
        },
        {
          name: 'Amy',
          message: 'Skydiving is fun!',
        },
      ],
    };
  },
  methods: {
    move() {
      // this.people.shift()这个返回被删除的元素
      const first = this.people.shift();

      // first进入队尾
      this.people.push(first);
    },
  },
}).mount('#app');

console.log('😃');
