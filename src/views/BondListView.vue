<template>
  <div class="bondlist">
    <v-card class="px-1 mx-auto mb-3" width="401" elevation="0">
      <v-chip-group v-model="amenities" mandatory class="py-0 mx-3" active-class="green--text text--darken-4">
        <p class="my-auto mr-3">Metodos:</p>
        <v-chip filter outlined>Aleman</v-chip>
        <v-chip filter outlined>Americano</v-chip>
        <v-chip filter outlined>Frances</v-chip>        
      </v-chip-group>
    </v-card>

    <div class="d-flex flex-wrap justify-center mx-5">

      <v-dialog persistent v-if="dialog" v-model=itemSelect width="500">
        <v-card>
          <v-card-title>
            Resultados bono: {{ itemSelect.id }}
            <v-spacer></v-spacer>
            {{ itemSelect.id }}
          </v-card-title>
          <v-divider></v-divider>

          <v-expansion-panels flat accordion multiple>
            <v-expansion-panel>
              <v-expansion-panel-header>Estructuración del Bono</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-simple-table dense dark class="rounded">
                  <template v-slot:default>                    
                    <tbody>
                      <tr><td>Frecuencia del cupón         </td><td>{{sampleRpta.couponFrequency}}</td></tr>
                      <tr><td>Días capitalización          </td><td>{{sampleRpta.dayCapitalization}}</td></tr>
                      <tr><td>N° Períodos pos Año          </td><td>{{sampleRpta.periodsPerYear}}</td></tr>
                      <tr><td>N° Total de Períodos por Año </td><td>{{sampleRpta.totalPeriods}}</td></tr>
                      <tr><td>Tasa efectiva anual          </td><td>{{sampleRpta.tea}}</td></tr>
                      <tr><td>Tasa efectiva periodo        </td><td>{{sampleRpta.tep}}</td></tr>
                      <tr><td>COK periodo                  </td><td>{{sampleRpta.cok}}</td></tr>
                      <tr><td>Cortes Iniciales Emisor      </td><td>{{sampleRpta.costTransmisor}}</td></tr>
                      <tr><td>Cortes Iniciales Bonista     </td><td>{{sampleRpta.costBondHolder}}</td></tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Precio Actual y Utilidad</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-simple-table dense dark class="rounded">
                  <template v-slot:default>                    
                    <tbody>
                      <tr><td>Precio Actual       </td><td>{{sampleRpta.van}}</td></tr>
                      <tr><td>Utilidad / Pérdida  </td><td>{{sampleRpta.utilityOrLose}}</td></tr>                      
                    </tbody>
                  </template>
                </v-simple-table>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Ratios de decisión</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-simple-table dense dark class="rounded">
                  <template v-slot:default>                    
                    <tbody>
                      <tr><td>Duración             </td><td>{{sampleRpta.duration}}</td></tr>
                      <tr><td>Convexidad           </td><td>{{sampleRpta.convexity}}</td></tr>                      
                      <tr><td>Total                </td><td>{{sampleRpta.total}}</td></tr>                      
                      <tr><td>Duración modificada  </td><td>{{sampleRpta.modifiedDuration}}</td></tr>                      
                    </tbody>
                  </template>
                </v-simple-table>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Indicadores de Rentabilidad</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-simple-table dense dark class="rounded">
                  <template v-slot:default>                    
                    <tbody>
                      <tr><td>TCEA Emisor             </td><td>--</td></tr>
                      <tr><td>TCEA Emisor c/Escudo    </td><td>--</td></tr>                      
                      <tr><td>TREA Bonista            </td><td>--</td></tr>                      
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
            <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 20 : 3" width="300" class="transition-swing my-3 mx-4">
              <v-card-title>
                Bono » {{bono.id}}
                <v-spacer></v-spacer>
                <v-icon class="mr-1">mdi-cash</v-icon>                
              </v-card-title>
              <div class="font-weight-medium px-4 pt-8 pb-2 text-justify">
                Fecha de emisión: {{((bono.broadcastDate).toString()).substr(0,10)}} <br>
                Emitido por usuario: {{bono.userId}}
              </div>              
              <v-card-actions>
                <v-btn depressed text color="green darken-4" class="font-weight-bold px-2" @click.stop="openDialog(bono)">Learn More</v-btn>
                <v-spacer></v-spacer>
                <span class="mr-4">BN00{{bono.id}}</span>
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
      amenities: null,
      bonoslist: [],      
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
        if(this.amenities == 0){
          this.GetGermanyBond();
        } else if(this.amenities == 1) {
          this.GetAmericanBond();
        } else {
          this.GetFrancesBond();
        }
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
      },
      GetGermanyBond(){
        BondListViewService.getGermanyBond(this.itemSelect.id)
          .then((response) => {
            this.sampleRpta = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });  
      },
      GetFrancesBond(){
        BondListViewService.getFrancesBond(this.itemSelect.id)
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