<template>
  <div class="bondlist">
    <div class="d-flex flex-wrap justify-center mx-5">
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
                <v-btn depressed text color="green darken-4" class="font-weight-bold px-2">Learn More</v-btn>
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
    })
}
</script>

<style>

</style>