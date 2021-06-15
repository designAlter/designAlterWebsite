<template>
  <div id="section-master-plan-datum" class="section-master-plan-datum">
    <b-container class="container-master-plan-datum" fluid="md">
      <b-row>
        <b-col class="master-datum-data" md="6">
          <h2>
            <b-icon icon="caret-right-fill" aria-hidden="true"></b-icon>
            Plan maestro interactivo <span>en curso</span>
          </h2>
          <p>Corredor de innovación turística para el espacio público urbano y rural de Fusagasuga.
            El plan maestro interactivo, TourDatum, incluye e integra, en una experiencia digital para manejar desde su
            dispositivo inteligente los recorridos urbanos y rurales, los destinos naturales y construidos, los módulos
            de desarrollo económico y las experiencias inmersas de emprendimiento.</p>
          <g-link href="tourdatum_para_Fusagasuga_Plan_Maestro.pdf" size="md" class="mb-2"
                target="_blank"  download="Tourdatum para Fusagasuga-Plan Maestro de Espacios Publicos Ditigal">
            <b-icon icon="chevron-right" aria-hidden="true"></b-icon>
            Saber más
          </g-link>
          <div class="master-datum-img">
            <g-image center alt="Tour Datum" src="../assets/images/TourDatum.png"/>
            <h4>TourDatum</h4>
          </div>
        </b-col>
        <b-col class="master-image" md="6">
          <g-image center alt="Cell Phone Master Datum" src="../assets/images/cell_phone_master.png"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Master-plan"
}
</script>