<template>
  <p class="mt-5 text-describe">
  
    <span id="text-preview">
      {{ previewMessage }}
      <span :id="`dots${id_section}`">...</span>
    </span>
    <b-row class="button-row">
      <b-icon
        icon="chevron-right"
        :id="`icon-row-rigth${id_section}`"
        class="icon-row my-auto"
      >
      </b-icon>
      <b-button
        class="read-more-button"
        variant="link"
        @click="showMoreText"
        :id="`read-more-button${id_section}`"
      >
        {{ buttonTextReadMore }}
      </b-button>
    </b-row>
    <span class="dn" :id="`read-more${id_section}`">
      {{ secondText }}
    </span>
    <b-row class="button-row">
      <b-icon icon="chevron-up" :id="`icon-row-down${id_section}`" class="icon-row dn my-auto">
      </b-icon>
      <b-button
        class="read-more-button dn "
        variant="link"
        @click="showMoreText"
        :id="`read-less-button${id_section}`"
      >
        {{ buttonTextReadLess }}
      </b-button>
    </b-row>
  </p>
</template>

<script>
export default {
  name: "ReadMoreComponent",
  props: [
    "buttonTextReadLess",
    "buttonTextReadMore",
    "previewMessage",
    "secondText",
    "id_section",
  ],
  methods: {
    showMoreText() {

      var dots = document.getElementById(`dots${this.id_section}`);

      var moreText = document.getElementById(`read-more${this.id_section}`);
      var btnText = document.getElementById(`read-more-button${this.id_section}`);

      var iconRowRight = document.getElementById(`icon-row-rigth${this.id_section}`);
      var iconRowDown = document.getElementById(`icon-row-down${this.id_section}`);
      var readLessButton2 = document.getElementById(`read-less-button${this.id_section}`);

      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.style.display = "Leer más";
        moreText.style.display = "none";
        iconRowDown.style.display = "none";
        iconRowRight.style.display = "inline";
        btnText.style.display = "inline";

        readLessButton2.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.style.display = "none";
        moreText.style.display = "inline";
        iconRowRight.style.display = "none";
        iconRowDown.style.display = "inline";
        readLessButton2.style.display = "inline";
      }
    },
  },
};
</script>
