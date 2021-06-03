<template>
  <Layout>
    <HeaderDatum />
    <WhatIsDatum />
    <StrategicAlliance />
    <MasterPlan />
  </Layout>
</template>

<script>

import StrategicAlliance from '~/components/da-section-strategic-alliance.vue'
import WhatIsDatum from "../components/What-is-datum";
import HeaderDatum from "../components/Header-datum";
import MasterPlan from "../components/Master-plan";

    
export default {
  components: { StrategicAlliance, MasterPlan, WhatIsDatum, HeaderDatum },
  metaInfo: {
    title: 'Hello, world!'
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
