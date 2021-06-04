<template>
  <b-navbar id="menu-datum-site" class="menu-datum-site" fixed="top" toggleable="lg" type="light" >
    <b-container fluid="md">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse  id="nav-collapse" class="content-menu-items" is-nav>
        <b-navbar-nav class="menu-ul">
          <b-nav-item href="#section-datum">Que es un Datum?</b-nav-item>
          <b-nav-item href="#strategic-alliance-container">Alianza Tecnológica</b-nav-item>
          <b-nav-item href="#">Planes Maestros Interactivos</b-nav-item>
          <b-nav-item href="#">Contacto</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
      let element = document.getElementById('menu-datum-site');
      this.scrolled = window.scrollY > 0;

      if ( this.scrolled === true ) {
        element.classList.add( 'scrolled' );
      } else {
        element.classList.remove( 'scrolled' );
      }
    }
  }
}
</script>