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
                <label class="sr-only mb-1" for="Name">Nombre Completo*</label>
                <b-form-input
                  id="Name"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  v-model="form.name"
                  required
                >
                </b-form-input>
              </b-col>
              <b-col md="6">
                <label class="sr-only mb-1" for="Compañia">Compañia*</label>
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
                  Correo Electrónico*
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
                <label class="sr-only mb-1" for="Asunto">Asunto*</label>
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
                <label class="sr-only mb-1" for="Mensaje">Mensaje*</label>
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
              <b-col md="6">
                <a href="" @click="showModal('modalPrivacyPolice')" >Politica de privacidad</a>
              </b-col>
               <b-modal id="modalPrivacyPolice" ref="modalPrivacyPolice" modal-class="modal-products-services" size="xl" centered
                 hide-footer hide-header>
                  <div class="d-block content-modal-services">
                      <h2>Politica de privacidad</h2>
                      <p>
                        La presente Política de Privacidad establece los términos en que usa y protege la información que es 
                        proporcionada por sus usuarios al momento de utilizar su sitio web.  Designalterboutique está comprometida 
                        con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal 
                        con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se emplea de acuerdo con los 
                        términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser 
                        actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse 
                        que está de acuerdo con dichos cambios.
                      </p>

                      <h3>Información que es recogida</h3>
                      <p>Nuestro sitio web podrá recoger información personal por ejemplo: Nombre,  información de contacto como
                          su dirección de correo electrónico e información demográfica. Así mismo, cuando sea necesario, podrá ser 
                          requerida información específica para procesar algún pedido o realizar una entrega o facturación.</p>

                      <h3>Uso de la información recogida</h3>
                      <p>Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente 
                        para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios.  
                        Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, 
                        nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindar algún  
                        beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados 
                        en cualquier momento. está altamente comprometido para cumplir con el compromiso de mantener su información segura.
                         Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado
                      </p>

                      <h3>Cookies</h3>
                      <p>Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, 
                        al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita 
                        las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerse 
                        individualmente y por tanto brindarte el mejor servicio personalizado de su web.Nuestro sitio web emplea las cookies para 
                        poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis 
                        estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento 
                        desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estas no dan acceso a 
                        información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente . Usted puede 
                        aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para 
                        tener un mejor servicio web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se 
                        declinan es posible que no pueda utilizar algunos de nuestros servicios.
                      </p>

                      <h3>Enlaces a Terceros</h3>
                      <p>Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted dé clic en estos 
                        enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos 
                        responsables de los términos de privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios 
                        están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted 
                        está de acuerdo con estas.
                      </p>

                      <h3>Control de su información personal</h3>
                      <p>En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a 
                        nuestro sitio web.  Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar 
                        la opción de recibir información por correo electrónico.  En caso de que haya marcado la opción de recibir nuestro boletín o
                         publicidad usted puede cancelarla en cualquier momento. Esta compañía no venderá, cederá ni distribuirá la información personal 
                         que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial. DesignalterBoutique se 
                         reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.
                      </p>
                    </div>
                </b-modal>
              <b-col md="6">
                <div class="w-100" id="recaptcha"></div>
                <b-button id="submitButton" class="w-100 g-recaptcha" type="submit" variant="dark">
                   <b-spinner id="spinner-button" variant="success" label=""></b-spinner> Enviar
                </b-button>
                <b-alert id="sucess-alert" variant="success" show>Listo! pronto nos pondremos en contacto contigo</b-alert>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import {
  SENDIBLUE_APIKEY,
  SITE_KEY_REACAPTCHA,
} from "../../static/variables.json";

export default {
  data() {
    return {
      form: {
        name: "",
        company: "",
        email: "",
        subject: "",
        message: "",
      },
      site_key: SITE_KEY_REACAPTCHA,
    };
  },

  mounted(){
    window.onloadCallback = function() {
      document.getElementById('submitButton').disabled = true;
      grecaptcha.render('recaptcha',{
        'sitekey' : SITE_KEY_REACAPTCHA,
        'callback' : verifyCallback,
        'theme' : 'ligth'
      })
    };
    window.verifyCallback = function() {
          document.getElementById('submitButton').disabled = false;
    };
  },
    
  methods: {
    showModal( id ) {
       this.$refs[ id ].show();
    },
    async postData(url = "https://api.sendinblue.com/v3/smtp/email") {
      var myHeaders = new Headers();
      myHeaders.append("api-key", SENDIBLUE_APIKEY);
      myHeaders.append("Content-Type", "application/json");
      var bodyEmail = JSON.stringify({
        name: this.form.name,
        subject: "[Contacto Pagina web - Design alter]",
        sender: {
          name: "Design Alter Website",
          email: "designalterboutique@gmail.com",
        },
        to: [
          {
            email: "designalterboutique@gmail.com",
            name: "Design Alter Website",
          },
          {
            email: this.form.email,
            name: this.form.name,
          },
        ],
        templateId: 1,

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
        cache: "no-cache",
        headers: myHeaders,
        body: bodyEmail,
      });
      return response.json();
    },

    OnSubmit(event) {
      event.preventDefault();
      var SpinnerButton  = document.getElementById(`spinner-button`);
      SpinnerButton.style.display="inline-block";
      this.postData().then((data) => {
        var alertsuccess = document.getElementById(`sucess-alert`);
        alertsuccess.style.display ="block";
        SpinnerButton.style.display="none";
      });
        this.onReset(event);
    },
    
    onReset(event) {
      event.preventDefault();
      this.form.name = "",
      this.form.company = "",
      this.form.email = "",
      this.form.subject = "",
      this.form.message = "";
    },



    execute () {
      window.grecaptcha.execute(this.widgetId)
    },
    reset () {
      window.grecaptcha.reset(this.widgetId)
    },
    render () {
      if (window.grecaptcha) {
        this.widgetId = window.grecaptcha.render('g-recaptcha', {
          sitekey: this.sitekey,
          size: 'invisible',
          // the callback executed when the user solve the recaptcha
          callback: (response) => {
            // emit an event called verify with the response as payload
            this.$emit('verify', response)
            // reset the recaptcha widget so you can execute it again
            this.reset() 
          }
        })
      }
    }




  },
};
</script>
