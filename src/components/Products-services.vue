<template>
  <div class="section-products-services-datum">
    <b-container class="container-products-services" fluid="md">
      <h2>Productos y <span>Servicios</span></h2>
      <hr>
      <b-row>
        <b-col class="products-services-info" md="6">
          <p>
            El Plan Maestro Interactivo es el producto insignia de la plataforma digital DatumSuite5.0. Los planes
            Maestros son plataformas digitales desarrolladas por la alianza para recoger, almacenar y fusionar datos
            segmentados que faciliten la creación de nuevos modelos de negocios con base en la integración tecnológica
            para generar economías alternas que aceleren la recuperación de las regiones.
          </p>
        </b-col>
        <b-col class="products-services-list" md="6">
          <p>
            <b-icon icon="check-circle-fill" aria-hidden="true"></b-icon>
            Conceptualización, Planificación, Diseño y Estructuración de proyectos
          </p>
          <p>
            <b-icon icon="check-circle-fill" aria-hidden="true"></b-icon>
            Actualización
          </p>
          <p>
            <b-icon icon="check-circle-fill" aria-hidden="true"></b-icon>
            Gestión de la información
          </p>
          <p>
            <b-icon icon="check-circle-fill" aria-hidden="true"></b-icon>
            Mantenimiento
          </p>
          <p>
            <b-icon icon="check-circle-fill" aria-hidden="true"></b-icon>
            Operatividad
          </p>
        </b-col>
      </b-row>
      <b-row align-h="center" cols="1" cols-sm="3" cols-md="5" cols-lg="5">
        <b-col class="services-datum-modal">
          <g-image center alt="Real Datum"  @click="showModal('modal-RealDatum')" src="../assets/images/RealDatum.png"/>
          <h4>RealDatum</h4>
          <p>(Planes maestros interactivos)</p>
        </b-col>
        <b-modal id="modal-RealDatum" ref="modal-RealDatum" modal-class="modal-products-services" size="xl" centered
                 hide-footer hide-header>
          <div class="d-block content-modal-services">
            <b-button variant="outline-danger" block @click="hideModal('modal-RealDatum')">
              <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon>
            </b-button>
            <div class="background-color-video"></div>
            <video src="../assets/video/RealDatum.mp4" poster="../assets/images/RealDatum.jpg"
                   autoplay loop muted playsInline></video>
            <div class="modal-data">
              <h2>Real Datum</h2>
              <p>
                El plan ofrece la integración de avenidades, actividades e infraestructura complementaria dentro de
                proyectos de uso mixto sobre tierra y sobre agua.
              </p>
              <h3>Sectores Foco Promotores de proyectos de :</h3>
              <p>Entretenimiento, Hotelería, Comercial, Tecnológico, Salud, bienestar y estilo de vida, Deportes,
                Residencial.</p>
            </div>
          </div>
        </b-modal>
        <b-col class="services-datum-modal">
          <g-image center alt="Biz Datum"  @click="showModal('modal-BizDatum')" src="../assets/images/BizDatum.png"/>
          <h4>BizDatum</h4>
          <p>(Creación de nuevos negocios)</p>
        </b-col>
        <b-modal id="modal-BizDatum" ref="modal-BizDatum" modal-class="modal-products-services" size="xl" centered
                 hide-footer hide-header>
          <div class="d-block content-modal-services">
            <b-button variant="outline-danger" block @click="hideModal('modal-BizDatum')">
              <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon>
            </b-button>
            <div class="background-color-video"></div>
            <video src="../assets/video/BizDatum.mp4" poster="../assets/images/BizDatum.jpg"
                   autoplay loop muted playsInline></video>
            <div class="modal-data">
              <h2>Biz Datum</h2>
              <p>
                El plan estructura proyectos de resurgimiento económico inclusivo e integral en ámbitos urbanos y
                rurales.
              </p>
              <h3>Sectores Foco:</h3>
              <p>Sector privado, Sector público, Sectores de economía míxta, Fundaciones</p>
            </div>
          </div>
        </b-modal>
        <b-col class="services-datum-modal">
          <g-image center alt="Tour Datum" @click="showModal('modal-TourDatum')" src="../assets/images/TourDatum.png"/>
          <h4>TourDatum</h4>
          <p>(Planes maestros de turismo integrado)</p>
        </b-col>
        <b-modal id="modal-TourDatum" ref="modal-TourDatum" modal-class="modal-products-services" size="xl" centered
                 hide-footer hide-header>
          <div class="d-block content-modal-services">
            <b-button variant="outline-danger" block @click="hideModal('modal-TourDatum')">
              <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon>
            </b-button>
            <div class="background-color-video"></div>
            <video src="../assets/video/TourDatum.mp4" poster="../assets/images/TourDatum.jpg"
                   autoplay loop muted playsInline></video>
            <div class="modal-data">
              <h2>Tour Datum</h2>
              <p>
                El Datum planifica y diseña destinos turísticos integrando todos los segmentos de la industria con el
                usuario y promoviendo la ampliación de los alcances, la cobertura y el impacto empresarial.
              </p>
              <h3>Sectores Foco:</h3>
              <p>Sector transporte terrestre, Sector transporte aéreo, Sector público, Sector privado, Sectores de
                economía mixta, Industria privada, Promotores turísticos</p>
            </div>
          </div>
        </b-modal>
        <b-col class="services-datum-modal">
          <g-image center alt="Edu Datum" @click="showModal('modal-EduDatum')" src="../assets/images/EduDatum.png"/>
          <h4>EduDatum</h4>
          <p>(Diseño, tecnología y conocimiento)</p>
        </b-col>
        <b-modal id="modal-EduDatum" ref="modal-EduDatum" modal-class="modal-products-services" size="xl" centered
                 hide-footer hide-header>
          <div class="d-block content-modal-services">
            <b-button variant="outline-danger" block @click="hideModal('modal-EduDatum')">
              <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon>
            </b-button>
            <div class="background-color-video"></div>
            <video src="../assets/video/EduDatum.mp4" poster="../assets/images/EduDatum.jpg"
                   autoplay loop muted playsInline></video>
            <div class="modal-data">
              <h2>Edu Datum</h2>
              <p>
                El plan integra, a nivel académico, los conocimientos generados desde el diseño y la tecnologia con el
                pensum de otras profesiones para el enriquesimiento de sus programas.
              </p>
              <h3>EduDatum: Sectores foco desde todas las disciplinas:</h3>
              <p>Estudiantes, Profesionales, Docentes, Investigadores</p>
            </div>
          </div>
        </b-modal>
        <b-col class="services-datum-modal">
          <g-image center alt="Social Datum" @click="showModal('modal-SocialDatum')" src="../assets/images/SocialDatum.png"/>
          <h4>SocialDatum</h4>
          <p>(Desarrollo de marcas sociales)</p>
        </b-col>
        <b-modal id="modal-SocialDatum" ref="modal-SocialDatum" modal-class="modal-products-services" size="xl" centered
                 hide-footer hide-header>
          <div class="d-block content-modal-services">
            <b-button variant="outline-danger" block @click="hideModal('modal-SocialDatum')">
              <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon>
            </b-button>
            <div class="background-color-video"></div>
            <video src="../assets/video/SocialDatum.mp4" poster="../assets/images/SocialDatum.jpg"
                   autoplay loop muted playsInline></video>
            <div class="modal-data">
              <h2>Social Datum</h2>
              <p>
                El plan promueve el incremento del potencial creativo, productivo y comercial basado en la producción de
                Marcas Sociales por medio de la tecnología.
              </p>
              <h3>Sectores Foco</h3>
              <p>Sector privado, Sector Público, Sectores de economía mixta, Fundaciones</p>
            </div>
          </div>
        </b-modal>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "products-services",
  methods: {
    showModal( id ) {
      this.$refs[ id ].show()
    },
    hideModal( id ) {
      this.$refs[ id ].hide()
    },
  }
}
</script>

<style scoped>
/deep/ .modal-products-services .modal-content {
  border-radius: 28px;
  height: 640px;
  overflow: hidden;
}

/deep/ .modal-products-services .modal-content .modal-body {
  border-radius: 28px;
}

/deep/ .modal-products-services .modal-body .content-modal-services .background-color-video {
  position: absolute;
  background-color: #0F0F0F;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: .33;
  z-index: 15;
}

/deep/ .modal-products-services .modal-body .content-modal-services video {
  position: absolute;
  border-radius: 28px;
  width: 100%;
  top: 0;
  left: 0;
  height: auto;
  z-index: 10;
}

/deep/ .modal-products-services .modal-body button {
  position: relative;
  color: #ffffff;
  left: 95%;
  border: none;
  font-size: 1.5rem;
  z-index: 20;
}

/deep/ .modal-products-services .modal-body .content-modal-services .modal-data {
  position: absolute;
  color: #ffffff;
  bottom: 5%;
  padding: 0 2rem;
  z-index: 20;
}

/deep/ .modal-products-services .modal-body .content-modal-services .modal-data h2 {
  font-size: 2rem;
}

/deep/ .modal-products-services .modal-body .content-modal-services .modal-data p {
  font-size: 1.2rem;
}

@media (max-width: 1200px) {
  /deep/ .modal-products-services .modal-content {
    height: 700px;
  }

  /deep/ .modal-products-services .modal-body .content-modal-services video {
    width: 1450px;
  }
}

@media (max-width: 991px) {
  /deep/ .modal-products-services .modal-body button {
    left: 90%;
  }
}

@media (max-width: 480px) {
  /deep/ .modal-products-services .modal-body button {
    left: 85%;
  }

  /deep/ .modal-products-services .modal-body .content-modal-services .modal-data {
    padding: 0;
  }
}

</style>
