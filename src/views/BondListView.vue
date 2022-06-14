<template>
  <div class="bondlist">
    <div class="d-flex flex-wrap justify-center mx-5">
      
      <v-dialog persistent v-if="dialog" v-model=itemSelect width="500">
        <v-card>
          <v-card-title>
            Lorem ipsum
            <v-spacer></v-spacer>
            {{ itemSelect.id }}
          </v-card-title>
          <v-divider></v-divider>

          <v-expansion-panels accordion flat>
            <v-expansion-panel v-for="(item,i) in 5" :key="i">
              <v-expansion-panel-header>Item</v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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

      <template v-for="bono in fakebonoslist">
        <div :key="bono.id">
          <v-hover v-slot="{ hover }">
            <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 20 : 3" width="300" class="transition-swing my-3 mx-4">
              <v-card-title>
                {{bono.name}}
                <v-spacer></v-spacer>
                {{bono.id}}
              </v-card-title>
              <div class="font-weight-medium px-4 pt-1 pb-2 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae laudantium maxime, id consequatur neque accusantium quia.
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
export default {
    name: 'BondList',
    data: () => ({
      dialog: false,
      fakebonoslist: [
        {
          id: 1,
          name: 'LoremIpsum',
          content: 150,
        },
        {
          id: 2,
          name: 'LoremIpsum',
          content: 350,
        },
        {
          id: 3,
          name: 'LoremIpsum',
          content: 250,
        },
        {
          id: 4,
          name: 'LoremIpsum',
          content: 250,
        },
        {
          id: 5,
          name: 'LoremIpsum',
          content: 250,
        },
        {
          id: 6,
          name: 'LoremIpsum',
          content: 250,
        },
        {
          id: 7,
          name: 'LoremIpsum',
          content: 250,
        },
        {
          id: 8,
          name: 'LoremIpsum',
          content: 250,
        },
        {
          id: 9,
          name: 'LoremIpsum',
          content: 250,
        }
      ],
    }),
    methods: {
      openDialog(data){
        this.itemSelect = data,
        this.dialog=true
      },
      cancelDialog(){
        this.dialog=false
      }
    }
}
</script>

<style>

</style>