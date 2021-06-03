<template>
  <Layout>
    <HeaderDatum/>
    <WhatIsDatum/>
  </Layout>
</template>

<script>
import WhatIsDatum from "../components/What-is-datum";
import HeaderDatum from "../components/Header-datum";
export default {
  components: { WhatIsDatum, HeaderDatum },
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
