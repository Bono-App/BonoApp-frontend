<template>
  <div class="helloworld">    
    <v-card class="mx-auto" elevation="0" max-width="900">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            
        <v-timeline-item icon="mdi-numeric-1" fill-dot  color="green accent-4">
          <span slot="opposite"><v-icon class="mr-3">mdi-account-circle</v-icon> Ingresar</span>
          <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="transition-swing" :class="`elevation-${hover ? 24 : 3}`">
                  <v-card-title class="text-h5">Lorem ipsum</v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                  </v-card-text>
                </v-card>
              </template>
          </v-hover>   
        </v-timeline-item>
        <v-timeline-item icon="mdi-numeric-2" fill-dot  color="green accent-4">
          <span slot="opposite"><v-icon class="mr-3">mdi-account-circle</v-icon> Ingresar</span>
          <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="transition-swing" :class="`elevation-${hover ? 24 : 3}`">
                  <v-card-title class="text-h5">Lorem ipsum</v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                  </v-card-text>
                </v-card>
              </template>
          </v-hover>   
        </v-timeline-item>
        <v-timeline-item icon="mdi-numeric-3" fill-dot  color="green accent-4">
          <span slot="opposite"><v-icon class="mr-3">mdi-account-circle</v-icon> Ingresar</span>
          <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="transition-swing" :class="`elevation-${hover ? 24 : 3}`">
                  <v-card-title class="text-h5">Lorem ipsum</v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                  </v-card-text>
                </v-card>
              </template>
          </v-hover>   
        </v-timeline-item>
        <v-timeline-item icon="mdi-numeric-4" fill-dot  color="green accent-4">
          <span slot="opposite"><v-icon class="mr-3">mdi-account-circle</v-icon> Ingresar</span>
          <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="transition-swing" :class="`elevation-${hover ? 24 : 3}`">
                  <v-card-title class="text-h5">Lorem ipsum</v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                  </v-card-text>
                </v-card>
              </template>
          </v-hover>   
        </v-timeline-item>
        <v-timeline-item icon="mdi-numeric-5" fill-dot  color="green accent-4">
          <span slot="opposite"><v-icon class="mr-3">mdi-account-circle</v-icon> Ingresar</span>
          <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="transition-swing" :class="`elevation-${hover ? 24 : 3}`">
                  <v-card-title class="text-h5">Lorem ipsum</v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
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
    name: 'HelloWorld',
  }
</script>

<style>
</style>