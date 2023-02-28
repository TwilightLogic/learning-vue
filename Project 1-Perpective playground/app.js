const vm = Vue.createApp({
  data() {
    return {
      perspectiveInput: 0,
      rotateXInput: 0,
      rotateYInput: 0,
      rotateZInput: 0,
    };
  },
  computed: {
    changePerspective() {
      return {
        perspective: `${this.perspectiveInput}px`,
      };
    },
    changeRotate() {
      return {
        transform: `rotateX(${this.rotateXInput}deg) rotateY(${this.rotateYInput}deg) rotateZ(${this.rotateZInput}deg)`,
      };
    },
  },
}).mount('#app');
