<template>
  <div id="technological-partener-section">
    <b-container fluid="md">
      <b-row class=" mt-5">
        <b-col class="title_section" md="6">
          <h2>
            <b-icon icon="caret-right-fill" aria-hidden="true"></b-icon>
            Conoce nuestro aliado tecnológico
          </h2>
          <a href="https://cafeto.co/" target="_blank">
            <g-image
              id="poweredBy"
              center
              alt="Example image"
              src="../assets/images/PoweredBy.png"
            />
          </a>
        </b-col>
      </b-row>
      <b-row class="mt-5 padding-form-section">
        <b-col class="title_form_section" md="6">
          <h2 class="mb-0">
            Contáctanos
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
          <b-form @submit="OnSubmit" @reset="onReset" inline>
            <b-row class="mt-2">
              <b-col md="6">
                <label class="sr-only mb-1" for="Name">Nombre Completo</label>
                <b-form-input
                  id="Name"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  v-model="form.name"
                  required
                >
                </b-form-input>
              </b-col>
              <b-col md="6">
                <label class="sr-only mb-1" for="Compañia">Compañia</label>
                <b-form-input
                  id="Compañia"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  v-model="form.company"
                  required
                >
                </b-form-input>
              </b-col>
            </b-row>
            <b-row class="mt-2">
              <b-col md="6">
                <label class="sr-only mb-1" for="Email">
                  Correo Electrónico
                </label>
                <b-form-input
                  v-model="form.email"
                  id="Email"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  type="email"
                  required
                >
                </b-form-input>
              </b-col>
              <b-col md="6">
                <label class="sr-only mb-1" for="Asunto">Asunto</label>
                <b-form-input
                  id="Asunto"
                  v-model="form.subject"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  placeholder=""
                  required
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
                  v-model="form.message"
                  required
                ></b-form-textarea>
              </b-col>
            </b-row>
            <b-row align-h="end">
              <b-col md="5">
                <b-button class="w-100" type="submit" variant="dark">
                  Enviar
                </b-button>
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
        name: "NameTest",
        company: "TestCafeto",
        email: "testcafeto@testemail.com",
        subject: "Testsubject",
        message: "Hola Design Alter esto es un test",
      },
    };
  },
  methods: {
    async postData(url = "https://api.sendinblue.com/v3/smtp/email") {
      var myHeaders = new Headers();
      myHeaders.append(
        "api-key",
        "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"
      );
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "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",
        "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"
      );
      var bodyEmail = JSON.stringify({
        name: this.form.name,
        subject: "[Contacto Pagina web - Design alter]",
        sender: {
          name: "DesignAlterWeb",
          email: "juanjosecastrocruz@gmail.com",
        },
        to: [
          {
            email: "da-support@cafetosoftware.com",
            name: "Juanjo",
          },
        ],
        templateId: 2,
        params: {
          NOMBRE: this.form.name,
          COMPANY: this.form.company,
          SUBJECT: this.form.subject,
          SMS: this.form.email,
          MESSAGE: this.form.message,
        },
      });
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: myHeaders,
        body: bodyEmail,
      });
      return response.json();
    },

    OnSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      this.postData().then((data) => {
        console.log(data);
      });
    },
    onReset(event) {
      event.preventDefault();
      (this.form.name = ""),
        (this.form.company = ""),
        (this.form.email = ""),
        (this.form.subject = ""),
        (this.form.message = "");
    },
  },
};
</script>
