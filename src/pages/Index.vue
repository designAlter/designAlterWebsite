<template>
  <Layout>
    <HeaderDatum />
    <WhatIsDatum />
    <StrategicAlliance />
    <MasterPlan />
    <TechnologicalPartner />
  </Layout>
</template>

<script>

import StrategicAlliance from '~/components/Strategic-alliance'
import WhatIsDatum from "../components/What-is-datum";
import HeaderDatum from "../components/Header-datum";
import MasterPlan from "../components/Master-plan";
import TechnologicalPartner from "../components/Technological_partner";

    
export default {
  components: { StrategicAlliance, MasterPlan, WhatIsDatum, HeaderDatum, TechnologicalPartner },
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
