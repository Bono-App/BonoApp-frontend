<template>
  <div class="registerbono">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card class="pa-8 mx-auto transition-swing" :class="`elevation-${hover ? 20 : 3}`" max-width="500">
          <h3 class="font-weight-bold pt-0 mb-4">Register Bono</h3>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field class="mb-3" :rules="rules" dense outlined  clearable hide-details  v-model="valorNominal"        label="Valor Nominal"      ></v-text-field>
            <v-text-field class="mb-3" :rules="rules" dense outlined  clearable hide-details  v-model="vc"                  label="Valor Comercial" ></v-text-field>
            <v-text-field class="mb-3" :rules="rules" dense outlined  clearable hide-details  v-model="fechaInicio"         label="Fecha de inicio"    placeholder="2019-02-03T00:00:00"></v-text-field>
            <v-text-field class="mb-3" :rules="rules" dense outlined  clearable hide-details  v-model="anios"               label="Años"    ></v-text-field>
            <v-select   class="mb-3" :rules="rules" clearable outlined hide-details dense   v-model="frecuenciaBonos"     label="Frecuencia del cupón" :items="fb"          ></v-select>
            <v-combobox   class="mb-3" :rules="rules" clearable outlined hide-details dense   v-model="deudor"              label="Deudor" :items="clientes"            ></v-combobox>
            <v-combobox   class="mb-3" :rules="rules" clearable outlined hide-details dense   v-model="tasa"                label="Tasa" :items="tasas"                ></v-combobox>
            <v-combobox   class="mb-3" :rules="rules" clearable outlined hide-details dense   v-model="entidadFinanciera"   label="Entidad Financiera" :items="entidadesFinancieras"   ></v-combobox>
            <v-text-field class="mb-3" :rules="rules" dense outlined  clearable hide-details  v-model="lugarGiro"           label="Lugar de giro"      ></v-text-field>
            <v-text-field class="mb-3" :rules="rules" dense outlined  clearable hide-details  v-model="pagoTextual"         label="Pago textual"       ></v-text-field>
            <v-divider class="mt-5 mb-3"></v-divider>
            <v-card-actions>
              <v-btn outlined color="red" @click="reset">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn outlined color="indigo accent-4" :disabled="!valid" @click="createNewBills">Submit</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </template>
    </v-hover>    
    <v-snackbar v-model="snackbar" color="success" dark>
      Creo letra exitosamente
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
    name: 'RegisterBono',
    data: () => ({
        snackbar: false,
        valid: true,
        acreedor: '',
        deudor: '',
        tasa: null,
        entidadFinanciera: null,
        valorNominal: '',
        vc: '',
        fechaInicio: '',
        anios: '',
        lugarGiro: '',
        pagoTextual: '',
        fb: ['Mensual', 'Bimestral', 'Trimestral', 'Cuatrimestral', 'Semestral', 'Anual'],
        clientes: [],
        tasas: [],
        entidadesFinancieras: [],
        rules: [
        v => !!v || 'This field is required',
        ],
    }),
    methods: {
    createNewBills () {
      if(this.$refs.form.validate()) {
          let charAcreedor = this.acreedor[0];
          let charDeudor = this.deudor[0];
          let charTasa = this.tasa[0];
          let charEf = this.entidadFinanciera[0];
          let idLogged = localStorage.getItem('user');
        const Bills = {
          idAcreedor: { id: charAcreedor[0] },
          idDeudor:   { id: charDeudor[0] },
          idTasa:     { id: charTasa[0] },
          idEf:       { id: charEf[0] },
          idUsuario:  { id: idLogged },
          valor_Nominal: this.valorNominal,
          vc: this.vc,
          Fecha_Inicio: this.fechaInicio,
          lugar_Giro: this.lugarGiro,
          pago_textual: this.pagoTextual,
        };        
        console.log("new letter:", Bills);
        this.snackbar = true;
        this.reset();
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style>

</style>