<template>
  <div class="about">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card max-width="500" :class="`elevation-${hover ? 24 : 3}`" class="transition-swing mx-auto px-4 py-3" >
          <h3 class="mx-4 pt-4">About App</h3>
          <v-card-text class="font-weight-medium text--primary text-justify pt-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            <br><br>      
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <br><br>
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.      
          </v-card-text>
        </v-card>
      </template>
    </v-hover> 
  </div>
</template>

<script>

export default {
  name: 'AboutView',
}
</script>