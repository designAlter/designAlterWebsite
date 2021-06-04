<template>
  <Layout>
    <HeaderDatum/>
    <WhatIsDatum/>
    <StrategicAlliance />
    <ProductsServices/>
    <MasterPlan/>
  </Layout>
</template>

<script>

import StrategicAlliance from '~/components/Strategic-alliance'
import WhatIsDatum from "~/components/What-is-datum";
import HeaderDatum from "~/components/Header-datum";
import MasterPlan from "~/components/Master-plan";
import ProductsServices from "~/components/Products-services";

    
export default {
  components: { MasterPlan, WhatIsDatum, ProductsServices, HeaderDatum, StrategicAlliance },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
