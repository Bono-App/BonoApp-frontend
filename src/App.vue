<template>
  <v-app>
    <h1 class="mx-auto mt-4">💵 Bono App</h1>
      <v-card class="mx-auto mt-3 mb-5" outlined>
        <v-tabs class="align-center" color="green darken-4">
          <v-tab to="/">Home</v-tab>
          <v-tab to="/about">About</v-tab>
          <v-tab to="/registerbono">Register Bono</v-tab>
          <v-tab to="/bondlist">Bono List</v-tab>
        </v-tabs>
      </v-card>      
    <router-view/>
  </v-app>
</template>

<style lang="scss">
h1 {
  font-family: Montserrat;
  font-weight: bold;
  letter-spacing: -3px;
  word-spacing: 8px;
}

#app {
  font-family: Arial, sans-serif,;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #F3F5F6;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
