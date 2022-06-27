<template>
  <div class="registerbono">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card class="px-8 pt-8 pb-5 mx-auto transition-swing" :class="`elevation-${hover ? 20 : 3}`" max-width="800">
          <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="6">
                  <h3 class="font-weight-bold pt-0 mb-4">Datos del Bono</h3>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  hide-details  v-model="valorNominal"        label="Valor Nominal"           type="number"></v-text-field>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  hide-details  v-model="valorComercial"      label="Valor Comercial"         type="number"></v-text-field>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  hide-details  v-model="anios"               label="Años"                    type="number"></v-text-field>
                  <v-select     class="mb-3" :rules="rules" dense outlined  hide-details  v-model="frecuenciaBonos"     label="Frecuencia del cupón"    :items="lsFrecuenciaCupon"></v-select>
                  <v-select     class="mb-3" :rules="rules" dense outlined  hide-details  v-model="diasAnio"            label="Dias por año"            :items="lsDiasAnio"></v-select>
                  <v-select     class="mb-3" :rules="rules" dense outlined  hide-details  v-model="tipoTasa"            label="Tipo de tasa de interes" :items="lsTipoTasa"></v-select>
                  <v-select     class="mb-3" :rules="rules" dense outlined  hide-details  v-model="capitalizacion"      label="Capitalización"          :items="lsCapitalizacion"></v-select>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  hide-details  v-model="tasaInteres"         label="Tasa de interés"         type="number"></v-text-field>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  hide-details  v-model="tasAnualDescuento"   label="Tasa anual de descuento" type="number"></v-text-field>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  hide-details  v-model="impRenta"            label="Importe a la Renta"      type="number"></v-text-field>
                  
                  <v-menu ref="menu"  v-model="menu"  :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y  min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field v-model="date"  label="Fecha de emisión"  hide-details  readonly dense outlined  v-bind="attrs"  v-on="on"></v-text-field>
                    </template>
                    <v-date-picker  v-model="date"  no-title  scrollable>
                      <v-spacer></v-spacer>
                      <v-btn  text  color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn  text  color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>

                </v-col>
                <v-col cols="6">
                  <h3 class="font-weight-bold pt-0 mb-4">Datos de Costes/Gastos iniciales</h3>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  hide-details  v-model="prima"          type="number"  label="%Prima"></v-text-field>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  hide-details  v-model="estructuracion" type="number"  label="%Estructuración"></v-text-field>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  hide-details  v-model="colocacion"     type="number"  label="%Colocación"></v-text-field>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  hide-details  v-model="flotacion"      type="number"  label="%Flotación"></v-text-field>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  hide-details  v-model="cavali"         type="number"  label="%CAVALI"></v-text-field>                  

                  <!-- <v-text-field class="mb-3" :rules="rules" dense outlined  hide-details  v-model="fechaEmision"         label="Fecha de emision"    placeholder="2019-02-03T00:00:00"></v-text-field> -->
                </v-col>
              </v-row>
            <v-divider class="mt-5 mb-3"></v-divider>
            <v-card-actions>
              <v-btn outlined color="red" @click="reset">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn outlined color="indigo accent-4" :disabled="!valid" @click="createBono">Submit</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </template>
    </v-hover>    
    <v-snackbar v-model="snackbar" color="success" dark>
      Creo Bono exitosamente
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import RegisterBonoViewService from '@/views/RegisterBonoView.Service'
// Desarrollado por Julio Salazar, Rody Velasquez, William's Moran, Yordy Mochcco
export default {
    name: 'RegisterBono',
    data: () => ({
        sampleUser: null,
        lsDiasAnio: [365, 360],
        lsCapitalizacion: ['Diaria', 'Quincenal', 'Mensual', 'Bimenstral', 'Trimestral', 'Cuatrimestral', 'Semestral', 'Anual'],
        lsFrecuenciaCupon: ['Diaria','Mensual', 'Bimestral', 'Trimestral', 'Cuatrimestral', 'Semestral', 'Anual'],
        lsTipoBono: ['Americano', 'Alemán', 'Frances'],
        lsTipoTasa: ['Nominal', 'Efectiva'],
        date: null,
        menu: false,
        snackbar: false,
        valid: true,
        valorNominal: '',
        valorComercial: '',
        anios: '',
        frecuenciaBonos: '',
        diasAnio: '',
        tipoTasa: '',
        capitalizacion: '',        
        tasaInteres: '',
        tasAnualDescuento: '',
        impRenta: '',
        prima: '',
        estructuracion: '',
        colocacion: '',
        flotacion: '',
        cavali: '',
        tipoBono: '',
        picker: null,
        rules: [v => !!v || 'This field is required'],
    }),
    mounted () {
      this.sampleEx();
    },
    methods: {
      createBono () {
        if(this.$refs.form.validate()) {
          let idLogged = localStorage.getItem('user');
          console.log("user", idLogged);
          const Bono = {
            nominalValue: parseFloat(this.valorNominal),
            commercialValue: parseFloat(this.valorComercial),
            numberAnios: parseInt(this.anios),
            couponFrequency: this.frecuenciaBonos,
            dayByAnios: this.diasAnio,
            rateType: this.tipoTasa,
            capitalization: this.capitalizacion,
            interestRate: parseFloat(this.tasaInteres),
            discount: parseFloat(this.tasAnualDescuento),
            incomeTax: parseFloat(this.impRenta),
            broadcastDate: this.date,
            prima: parseFloat(this.prima),
            structure: parseFloat(this.estructuracion),
            placement: parseFloat(this.colocacion),
            floatation: parseFloat(this.flotacion),
            cavali: parseFloat(this.cavali),            
            userId: this.sampleUser.id,
          };
          RegisterBonoViewService.createNewBono(Bono)
              .then((response) => {
                console.log("new bono:", response.data);
              })
              .catch((e) => {
                console.log("error", e);
                console.log("new bono", Bono);
              });
          this.snackbar = true;
          this.reset();
        }
      },
      sampleEx (){
        let de = localStorage.getItem('user');
        this.sampleUser = JSON.parse(de);
        console.log("Objeto User",this.sampleUser);
      },
      reset () {
        this.$refs.form.reset()
      }
  }
}
</script>

<style>

</style>