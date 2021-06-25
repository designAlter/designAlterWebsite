<template>
  <footer class="footer-design-alter">
    <b-container fluid="md">
      <b-row>
        <b-col sm="6">
          <p>Calle de la chicheria #  38-72</p>
          <p>Cartagena de Indias</p>
          <p>Colombia</p>
          <div class="icons-footer">
            <a v-if="instagram" href="#">
              <b-icon icon="instagram" aria-hidden="true"></b-icon>
            </a>
            <a v-if="linkedin" href="#">
              <b-icon icon="linkedin" aria-hidden="true"></b-icon>
            </a>
          </div>
        </b-col>
        <b-col sm="6">
          <h4>Design alter Foundation:</h4>
          <p><span v-if="DesignAlteContactName">{{DesignAlteContactName}}</span><a v-if="DesignAlterContactPhone" :href ='`tel:${DesignAlterContactPhone}`'>{{DesignAlterContactPhone}}</a></p>
          <h4>Cafeto Software:</h4>
          <p><span v-if="CafetoSalesName">{{ CafetoSalesName }} </span> <a v-if="CafetoSalesemail" :href ='`mailto:${CafetoSalesemail}`'>{{CafetoSalesemail}}</a></p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
  import {
    INSTAGRAMURL,
    LINKEDINURL,
    CafetoSalesName,
    CafetoSalesemail,
    DesignAlteContactName,
    DesignAlterContactPhone,
} from "../../static/variables.json";
export default {
  name: "Footer",
  data(){
    return{
      instagram: INSTAGRAMURL,
      linkedin: LINKEDINURL,
      CafetoSalesName:CafetoSalesName,
      CafetoSalesemail:CafetoSalesemail,
      DesignAlteContactName:DesignAlteContactName,
      DesignAlterContactPhone:DesignAlterContactPhone,
    }
  }
}
</script>