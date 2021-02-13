<template>
  <div id="index">
    <div class="page2"><Introduce /></div>
    <div class="page"><Landing /></div> 
    <div class="page2"><Activity /></div>
    <div class="page"><Skillsets /></div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

import Landing from '~/components/landing';
import Skillsets from '@/components/skillsets';
import Introduce from '@/components/intro';
import Activity from '@/components/landing/activity';

export default {
  components: {
    Logo,
    VuetifyLogo,
    Landing,
    Skillsets,
    Introduce,
    Activity
  }
}
</script>

<style lang="scss" scoped>
  #index {
    margin: 0 3rem;
  }

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