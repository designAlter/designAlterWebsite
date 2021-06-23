<template>
  <div class="section-header-datum">
    <div class="background-color-video"></div>
    <video src="../assets/video/Definicion_de_datums.mp4" autoplay loop muted playsInline
      poster="../assets/images/header-datum.png"></video>
    <b-container class="container-header">
      <div class="content-info">
        <g-image
              id="poweredBy"
              center
              alt="Example image"
              src="../assets/images/DAB.png"
            />
        <h2>DatumSuite5.0</h2>
        <p>Positioning Business Ideas</p>
        <hr>
        <h5>Digital Interactive Master Plans</h5>
      </div>
      <div class="content-icons">
        <a href="#">
          <b-icon icon="instagram" aria-hidden="true"></b-icon>
        </a>
        <a href="#">
          <b-icon icon="linkedin" aria-hidden="true"></b-icon>
        </a>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Header-datum"
}
</script>