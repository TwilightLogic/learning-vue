const vm = Vue.createApp({
  data() {
    return {
      perspectiveInput: 100,
      rotateXInput: 0,
      rotateYInput: 0,
      rotateZInput: 0,
    };
  },
  methods: {
    reset() {
      (this.perspectiveInput = 100),
        (this.rotateXInput = 0),
        (this.rotateYInput = 0),
        (this.rotateZInput = 0);
    },
    async copy() {
      let text = `transform:${this.changeRotate.transform};`;
      await navigator.clipboard.writeText(text);

      alert('CSS copied to clipboard! ✨');
    },
  },
  computed: {
    changeRotate() {
      return {
        transform: `
        perspective(${this.perspectiveInput}px)
        rotateX(${this.rotateXInput}deg) 
        rotateY(${this.rotateYInput}deg) 
        rotateZ(${this.rotateZInput}deg)`,
      };
    },
  },
}).mount('#app');
