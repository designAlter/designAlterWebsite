<template>
  <b-container fluid="md" id="strategic-alliance-container" class="mt-5 strategic-alliance-container">
    <b-row>
      <b-col md="12" class="title-section">
        <h1><span class="second-color-title">Alianza</span> Estratégica</h1>
        <hr class=" mx-auto hr-title" />
      </b-col>
    </b-row>
    <b-row class="margin-from-title">
      <b-col class="text-center" sm="5">
        <g-image
          alt="Example image"
          src="../assets/images/DesignalterLogo.png"
        />
        <ReadMoreComponent
          :buttonTextReadLess="buttonTextReadLess1"
          :buttonTextReadMore="buttonTextReadMore1"
          :previewMessage="previewMessage1"
          :secondText="secondText1"
          :id_section="id_section1"
        />
      </b-col>
      <b-col id="image-plus" class=" text-center mt-3" sm="2">
        <g-image alt="Example image" src="../assets/images/PlusIcon.png" />
      </b-col>
      <b-col class="text-center" sm="5">
        <g-image alt="Example image" src="../assets/images/CafetoLogo.png" />
        <ReadMoreComponent
          :buttonTextReadLess="buttonTextReadLessB2"
          :buttonTextReadMore="buttonTextReadMoreB2"
          :previewMessage="previewMessageB2"
          :secondText="secondTextB2"
          :id_section="id_sectionB2"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ReadMoreComponent from "~/layouts/ReadMore-component.vue";
export default {
  name: "StrategicAlliance",
  components: { ReadMoreComponent },

  data() {
    return {
      buttonTextReadLess1: "Leer menos",
      buttonTextReadMore1: "Leer más",
      previewMessage1:`DesignalterGroup es un cluster regional de planificación,
      arquitectura, diseño, tecnología e innovación social promovido por una
      cultura creativa. La compañía está orientada a impactar`,
      secondText1:`una gran variedad de territorios, comunidades y empresas. La firma opera desde Miami, Cartagena y Panamá.`,
      id_section1: 'designAlterDescription',
      buttonTextReadLessB2: "Leer menos",
      buttonTextReadMoreB2: "Leer más",
      previewMessageB2:`Cafeto Software es una Empresa de Tecnología especializada en
      transformación digital para empresas globales a través de servicios de
      consultoría en desarrollo de software`,
      secondTextB2:`mediante nuestro marco denominado Dream.Build.Boost el cual cuenta como base, nuestra experiencia tecnológica apoyada por nuestros ingenieros de alta calidad`,
      id_sectionB2: 'cafetoDescription'
    };
  },
};
</script>
