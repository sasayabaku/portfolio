<template>
  <div id="index">
    <div class="page2" data-aos="fade-up" data-aos-delay="100"><Introduce /></div>
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
  .page {
    width: 100vw;
    padding: 3rem 10rem;
    background-color: rgb(245, 245, 250);


    @media screen and (min-width: 960px) {
      padding: 3rem 10rem;
    }

    @media screen and (max-width: 960px) {
      padding: 3rem 1rem;
    }
    
  }

  .page2 {
    width: 100vw;
    padding: 3rem 10rem;
    background-color: rgb(250, 250, 250);

    @media screen and (min-width: 960px) {
      padding: 3rem 10rem;
    }

    @media screen and (max-width: 960px) {
      padding: 3rem 1rem;
    }
  }
</style>