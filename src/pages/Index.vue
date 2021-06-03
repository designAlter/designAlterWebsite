<template>
  <Layout>
    <HeaderDatum/>
    <WhatIsDatum/>
    <MasterPlan/>
  </Layout>
</template>

<script>
import WhatIsDatum from "../components/What-is-datum";
import HeaderDatum from "../components/Header-datum";
import MasterPlan from "../components/Master-plan";

export default {
  components: { MasterPlan, WhatIsDatum, HeaderDatum },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
