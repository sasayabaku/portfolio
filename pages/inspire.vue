<template>
  <section class="container">
    <div>
      <h1 class="title">lotty-vue-sample</h1>

      <Lottie :options="defaultOptions" :height="400" :width="400" :animCreated="handleAnimation" />

    </div>
  </section>
</template>

<script>
import Lottie from '~/components/utils/lottie.vue';

import * as animationData from "~/assets/data.json";

export default {
  components: {
    Lottie
  },
  data() {
    return {
      defaultOptions: { animationData: animationData },
      animationSpeed: 1
    }
  },
  methods: {
    handleAnimation: (anim) => {
      this.anim = anim;
    }
  }
}
</script>
