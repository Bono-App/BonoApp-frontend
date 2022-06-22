<template>
  <div class="home">
    <v-card class="mx-auto" elevation="0" max-width="900" color="#F3F5F6">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            
        <v-timeline-item icon="mdi-numeric-1" fill-dot  color="green darken-4">
          <span slot="opposite" class="font-weight-bold"><v-icon class="mr-3">mdi-account-circle</v-icon> Ingresar</span>
          <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="transition-swing" :class="`elevation-${hover ? 24 : 3}`">
                  <v-card-title class="text-h5">Ingresar como usuario</v-card-title>
                  <v-card-text class="text-justify">
                    Registrarte con tu nombre, apellidos, email y contraseña para obtener una cuenta con la cual luego ingresar a la plataforma y crear bonos. 
                  </v-card-text>
                </v-card>
              </template>
          </v-hover>   
        </v-timeline-item>
        <v-timeline-item icon="mdi-numeric-2" fill-dot  color="green darken-4">
          <span slot="opposite" class="font-weight-bold">Regitrar<v-icon class="ml-3">mdi-cash</v-icon></span>
          <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="transition-swing" :class="`elevation-${hover ? 24 : 3}`">
                  <v-card-title class="text-h5">Registrar nuevo Bono</v-card-title>
                  <v-card-text class="text-justify">
                    Para registrar un nuevo bono debe ingresar todos los campos requeridos para crear el mismo, Valor Nominal, Valor Comercial, Años, Frecuencia del cupón y otros datos.
                  </v-card-text>
                </v-card>
              </template>
          </v-hover>   
        </v-timeline-item>
        <v-timeline-item icon="mdi-numeric-3" fill-dot  color="green darken-4">
          <span slot="opposite" class="font-weight-bold"><v-icon class="mr-3">mdi-calculator-variant</v-icon>Calcular</span>
          <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="transition-swing" :class="`elevation-${hover ? 24 : 3}`">
                  <v-card-title class="text-h5">Calcular resultados del Bono</v-card-title>
                  <v-card-text class="text-justify">
                    Visualizar una lista de los bonos creados por usted, para luego seleccionar el metodo con el cual calcular los datos del bono, ya sea Aleman, Americano o Frances.
                  </v-card-text>
                </v-card>
              </template>
          </v-hover>   
        </v-timeline-item>
        <v-timeline-item icon="mdi-numeric-4" fill-dot  color="green darken-4">
          <span slot="opposite" class="font-weight-bold">Visualizar<v-icon class="ml-3">mdi-book-open-variant</v-icon></span>
          <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="transition-swing" :class="`elevation-${hover ? 24 : 3}`">
                  <v-card-title class="text-h5">Visualizar tabla de datos del Bono</v-card-title>
                  <v-card-text class="text-justify">
                    En cada tarjeta de bono podra seleccionar "Learn More" para visualizar los datos calculados dependiendo del metodo seleccionado anterioremente, divido por Estructuración del Bono, Precio Actual y Utilidad, Ratios de decisión y Inidicadores de Rentabilidad.
                  </v-card-text>
                </v-card>
              </template>
          </v-hover>   
        </v-timeline-item>             
      </v-timeline>  
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>
