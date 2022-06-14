<template>
  <div class="bondlist">
    <div class="d-flex flex-wrap justify-center mx-5">
      
      <v-dialog v-if="dialog" v-model=itemSelect width="720">
        <v-card>
          <v-card-title class="grey lighten-2 font-weight-bold">
            {{ itemSelect.id }}
          </v-card-title>
          <v-divider></v-divider>

          <div class="d-flex justify-center align-center py-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempora cum culpa facere itaque nisi eaque voluptatum, architecto maiores eum! Sed deleniti in est vitae, velit pariatur excepturi aspernatur optio.
          </div>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="red accent-4" class="font-weight-bold" @click="cancelDialog">
              Cancel
            </v-btn>
            <v-btn text color="indigo accent-4" class="font-weight-bold">
              Completed
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