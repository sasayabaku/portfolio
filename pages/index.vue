<template>
  <div id="index">
    <div class="page2"><Introduce /></div>
    <div class="page"><Landing /></div>    
    <div class="page2"><Skillsets /></div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

import Landing from '~/components/landing';
import Skillsets from '@/components/skillsets';
import Introduce from '@/components/intro';

export default {
  components: {
    Logo,
    VuetifyLogo,
    Landing,
    Skillsets,
    Introduce
  }
}
</script>

<style lang="scss" scoped>
  .page {
    width: 100vw;
    padding: 3rem 0;
    background-color: rgb(245, 245, 250);
  }

  .page2 {
    width: 100vw;
    padding: 3rem 0;
    background-color: rgb(250, 250, 250);
  }
</style>