<template>
  <div id="index">
    <div class="page"><Landing /></div>    
    <Skillsets />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

import Landing from '~/components/landing';
import Skillsets from '@/components/skillsets';

export default {
  components: {
    Logo,
    VuetifyLogo,
    Landing,
    Skillsets
  }
}
</script>

<style lang="scss" scoped>
  .page {
    width: 100vw;
    padding: 3rem 0;
    background-color: rgb(245, 245, 250);
  }
</style>