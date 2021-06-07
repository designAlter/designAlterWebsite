<template>
  <div id="technological-partener-section">
    <b-container fluid="md">
      <b-row class=" mt-5">
        <b-col class="title_section" md="6">
          <h2>
            <b-icon icon="caret-right-fill" aria-hidden="true"></b-icon>
            Conoce nuestro aliado tecnológico
          </h2>
          <g-image
            id="poweredBy"
            center
            alt="Example image"
            src="../assets/images/PoweredBy.png"
          />
        </b-col>
      </b-row>
      <b-row class="mt-5 padding-form-section">
        <b-col class="title_form_section" md="6">
          <h2 class="mb-0">
            Cóntactanos
          </h2>
          <hr class="hr-title m-0" />
          <b-col md="8">
            <p class="mt-3">
              Déjanos tu consulta, alguien de nuestro equipo se pondrá en
              contacto
            </p>
          </b-col>
        </b-col>

        <b-col class="form_section" md="6">
          <b-form inline>
            <b-row class="mt-2">
              <b-col md="6">
                <label class="sr-only mb-1" for="Name">Name</label>
                <b-form-input id="Name" class="mb-2 mr-sm-2 mb-sm-0">
                </b-form-input>
              </b-col>
              <b-col md="6">
                <label class="sr-only mb-1" for="Compañia">Compañia</label>
                <b-form-input id="Compañia" class="mb-2 mr-sm-2 mb-sm-0">
                </b-form-input>
              </b-col>
            </b-row>
            <b-row class="mt-2">
              <b-col md="6">
                <label class="sr-only mb-1" for="Email">Email</label>
                <b-form-input
                  v-model="email"
                  id="Email"
                  class="mb-2 mr-sm-2 mb-sm-0"
                >
                </b-form-input>
              </b-col>
              <b-col md="6">
                <label class="sr-only mb-1" for="Asunto">Asunto</label>
                <b-form-input
                  id="Asunto"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  placeholder=""
                >
                </b-form-input>
              </b-col>
            </b-row>
            <b-row class="mt-2">
              <b-col>
                <label class="sr-only mb-1" for="Mensaje">Mensaje</label>
                <b-form-textarea
                  id="Mensaje"
                  size="lg"
                  class="mb-2 mr-sm-2 mb-sm-3"
                  rows="6"
                ></b-form-textarea>
              </b-col>
            </b-row>
            <b-row align-h="end">
              <b-col md="5">
                <b-button class="w-100" type="submit" variant="dark">Enviar</b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
