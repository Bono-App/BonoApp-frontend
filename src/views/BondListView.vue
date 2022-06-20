<template>
  <div class="bondlist">
    <div class="d-flex flex-wrap justify-center mx-5">
      
      <v-dialog persistent v-if="dialog" v-model=itemSelect width="500">
        <v-card>
          <v-card-title>
            Resultados bono: {{ itemSelect.name }}
            <v-spacer></v-spacer>
            {{ itemSelect.id }}
          </v-card-title>
          <v-divider></v-divider>

          <v-expansion-panels flat accordion multiple>
            <v-expansion-panel v-for="(item,i) in sectionResult" :key="i">
              <v-expansion-panel-header>{{item.name}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-simple-table dense dark class="rounded">
                  <template v-slot:default>                    
                    <tbody>
                      <tr v-for="(area,a) in item.areas" :key="a">
                        <td>{{area}}</td>
                        <td>{{itemSelect.nominalValue}}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="green darken-4" class="font-weight-bold" @click="cancelDialog">
              Ok
            </v-btn>            
          </v-card-actions>
        </v-card>
      </v-dialog>

      <template v-for="bono in bonoslist">
        <div :key="bono.id">
          <v-hover v-slot="{ hover }">
            <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 20 : 3" width="330" class="transition-swing my-3 mx-4">
              <v-card-title>
                {{bono.userId}}
                <v-spacer></v-spacer>
                {{bono.id}}
              </v-card-title>
              <div class="font-weight-medium px-4 pt-1 pb-2 text-justify">
                Selecionar un de los siguientes metodos para calcular los resultados de este bono:
              </div>
              <div>
                <v-chip-group v-model="amenities" mandatory class="py-0 px-4" active-class="green--text text--darken-4">
                  <v-chip filter outlined>Aleman</v-chip>
                  <v-chip filter outlined>Americano</v-chip>
                  <v-chip filter outlined>Frances</v-chip>        
                </v-chip-group>
              </div>
              <v-card-actions>
                <v-btn depressed text color="green darken-4" class="font-weight-bold px-2" @click.stop="openDialog(bono)">Learn More</v-btn>
                <v-spacer></v-spacer>
                <v-icon class="mr-1">mdi-cash</v-icon>
              </v-card-actions>
            </v-card>
          </v-hover>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import BondListViewService from '@/views/BondListView.Service';
export default {
    name: 'BondList',
    data: () => ({
      dialog: false,
      bonoslist: [],
      sectionResult: [
        {
          name: "Estructuración del Bono",
          areas: [
            "Frecuencia del cupón",
            "Días capitalización",
            "N° Períodos pos Año",
            "N° Total de Períodos por Año",
            "Tasa efectiva anual",
            "Tasa efectiva semestral",
            "COK Semestral",
            "Cortes Iniciales Emisor",
            "Cortes Iniciales Bonista",
            ]
        },
        {
          name: "Precio Actual y Utilidad",
          areas: [
            "Precio Actual",
            "Utilidad / Pérdida"
          ]
        },
        {
          name: "Ratios de decisión",
          areas: [
            "Duración",
            "Convexidad",
            "Total",
            "Duración modificada"
          ]
        },
        {
          name: "Indicadores de Rentabilidad",
          areas: [
            "TCEA Emisor",
            "TCEA Emisor c/Escudo",
            "TREA Bonista",
          ]
        }
      ],
      sampleRpta: null,
    }),
    created(){
      BondListViewService.getAllBond()
      .then((response) => {
        this.bonoslist = response.data.map(this.getDisplayBond);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    },
    methods: {
      openDialog(data){
        this.itemSelect = data;
        this.GetAmericanBond();
        this.dialog=true;
      },
      cancelDialog(){
        this.dialog=false
      },
      getDisplayBond(sampleBond){
        return {
          id: sampleBond.id,
          nominalValue: sampleBond.nominalValue,
          commercialValue: sampleBond.commercialValue,
          numberAnios: sampleBond.numberAnios,
          couponFrequency: sampleBond.couponFrequency,
          dayByAnios: sampleBond.dayByAnios,
          rateType: sampleBond.rateType,
          capitalization: sampleBond.capitalization,
          interestRate: sampleBond.interestRate,
          discount: sampleBond.discount,
          incomeTax: sampleBond.incomeTax,
          broadcastDate: sampleBond.broadcastDate,
          prima: sampleBond.prima,
          structure: sampleBond.structure,
          placement: sampleBond.placement,
          floatation: sampleBond.floatation,
          cavali: sampleBond.cavali,
          userId: sampleBond.userId
        };
      },
      GetAmericanBond(){
        BondListViewService.getAmericanBond(this.itemSelect.id)
          .then((response) => {
            this.sampleRpta = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });  
      }    
    }
}
</script>

<style>

</style>