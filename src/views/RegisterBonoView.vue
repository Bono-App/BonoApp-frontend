<template>
  <div class="registerbono">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card class="pa-8 mx-auto transition-swing" :class="`elevation-${hover ? 20 : 3}`" max-width="800">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
              <v-row>
                <v-col cols="6">
                  <h3 class="font-weight-bold pt-0 mb-4">Datos del Bono</h3>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  clearable hide-details  v-model="valorNominal"        label="Valor Nominal"      ></v-text-field>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  clearable hide-details  v-model="vc"                  label="Valor Comercial" ></v-text-field>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  clearable hide-details  v-model="anios"               label="Años"    ></v-text-field>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  clearable hide-details  v-model="vc"                  label="Valor Comercial" ></v-text-field>
                  <v-select     class="mb-3" :rules="rules" clearable outlined hide-details dense   v-model="frecuenciaBonos"     label="Frecuencia del cupón" :items="fb"          ></v-select>
                  <v-select     class="mb-3" :rules="rules" clearable outlined hide-details dense   v-model="dxa"                 label="Dias por año" :items="dxas"            ></v-select>
                  <v-combobox   class="mb-3" :rules="rules" clearable outlined hide-details dense   v-model="tipotasa"            label="Tipo de tasa de interes" :items="tasas"                ></v-combobox>
                  <v-combobox   class="mb-3" :rules="rules" clearable outlined hide-details dense   v-model="capitalizacion"   label="Capitalización" :items="capitalizacions"   ></v-combobox>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  clearable hide-details  v-model="tasaInteres"           label="Tasa de interés"      ></v-text-field>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  clearable hide-details  v-model="pagoTextual"         label="Tasa anual de descuento"       ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <h3 class="font-weight-bold pt-0 mb-4">Datos de Costes/Gastos iniciales</h3>
                  <v-text-field class="mb-3" :rules="rules" dense outlined  clearable hide-details  v-model="pagoTextual"         label="Pago textual"       ></v-text-field>
                  <!-- <v-text-field class="mb-3" :rules="rules" dense outlined  clearable hide-details  v-model="fechaEmision"         label="Fecha de emision"    placeholder="2019-02-03T00:00:00"></v-text-field> -->
                  <v-menu ref="menu"  v-model="menu"  :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y  min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field v-model="date"  label="Fecha de emision"  hide-details  readonly dense outlined  v-bind="attrs"  v-on="on"></v-text-field>
                    </template>
                    <v-date-picker  v-model="date"  no-title  scrollable>
                      <v-spacer></v-spacer>
                      <v-btn  text  color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn  text  color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>

                </v-col>
              </v-row>
            </v-container>
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
export default {
    name: 'RegisterBono',
    data: () => ({
        date: null,
        menu: false,
        snackbar: false,
        valid: true,
        dxas: [365, 350],
        tipotasa: null,
        tasa: null,
        picker: null,
        capitalizacions: ['Diaria', 'Quincenal', 'Mensual', 'Bimenstral', 'Trimestral', 'Cuatrimestral', 'Semestral', 'Anual'],
        valorNominal: '',
        capitalizacion: '',
        vc: '',
        fechaEmision: '',
        anios: '',
        emision: '',
        pagoTextual: '',
        fb: ['Mensual', 'Bimestral', 'Trimestral', 'Cuatrimestral', 'Semestral', 'Anual'],
        clientes: [],
        tasas: ['Nominal', 'Efectiva'],
        entidadesFinancieras: [],
        rules: [
        v => !!v || 'This field is required',
        ],
    }),
    methods: {
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style>

</style>