<template>
  <button type="button" @click="flag = !flag">Toggle</button>
  <!-- Animating with transition CSS -->

  <!-- <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello the fucking world!!!</h2>
    <h2 v-else key="secondary">Another fuck!!!</h2>
  </transition> -->

  <!-- <transition name="zoom" type="animation" appear>
    <h2 v-if="flag">hello</h2>
  </transition> -->

  <!-- Animating with JS -->
  <!-- `:css="false"`直接跳过检查CSS动画，从而直接使用JS动画 -->
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="false"
  >
    <h2 v-if="flag">Hey suck</h2>
  </transition>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: true,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter was fired!', el);
    },
    enter(el, done) {
      console.log('enter was fired!', el);
      // 学习Web Animations API
      const animation = el.animate([{ transform: 'scale3D(0, 0, 0)' }, {}], {
        duration: 1000,
      });
      // 当animation完成时，会调用done()函数
      // Tips: 调用回调函数 done 表示过渡结束
      animation.onFinish = () => done();
    },
    afterEnter(el) {
      console.log('afterEnter was fired!', el);
    },
    beforeLeave(el) {
      console.log('beforeLeave was fired!', el);
    },
    leave(el, done) {
      console.log('leave was fired!', el);
      const animation = el.animate([{}, { transform: 'scale3D(0, 0, 0)' }], {
        duration: 1000,
      });
      animation.onFinish = () => done();
    },
    afterLeave(el) {
      console.log('afterLeave was fired!', el);
    },
  },
};
</script>

<style>
h2 {
  width: 400px;
  padding: 20px;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s linear;
}

.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}

.zoom-enter-from {
  opacity: 0;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
}

.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>
