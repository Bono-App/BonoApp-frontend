<template>
  <v-app>
    <h1 class="mx-auto mt-8">💵 Bono App</h1>
    <nav class="mx-auto">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/registerbono">Register Bono</router-link>
    </nav>
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
