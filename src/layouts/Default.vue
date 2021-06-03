<template>
  <div class="layout">
    <Header/>
    <slot/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";
export default {
  components: { Header, Footer },
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
