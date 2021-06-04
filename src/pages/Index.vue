<template>
  <Layout>
    <HeaderDatum/>
    <WhatIsDatum/>
    <ProductsServices/>
    <MasterPlan/>
  </Layout>
</template>

<script>
import WhatIsDatum from "../components/What-is-datum";
import HeaderDatum from "../components/Header-datum";
import MasterPlan from "../components/Master-plan";
import ProductsServices from "../components/Products-services";

export default {
  components: { MasterPlan, WhatIsDatum, ProductsServices, HeaderDatum },
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
