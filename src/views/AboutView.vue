<template>
  <div class="about">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card max-width="500" :class="`elevation-${hover ? 24 : 3}`" class="transition-swing mx-auto px-4 py-3" >
          <h3 class="mx-4 pt-4">About App</h3>
          <v-card-text class="font-weight-medium text--primary text-justify pt-1">
            Esta aplicación Web, permite implementar la metodología de cálculo del flujo de caja e indicadores financieros (Precio, VAN, TIR bonista, duración, duración modificada, convexidad) de un bono corporativo, visto desde la perspectiva de un bonista o inversor.
            <br><br>      
            Funciona de forma indistinta para cualquier moneda, para tasas nominales o efectivas y para los métodos Americano o Inglés, Alemán y Francés            
            <br><br>
            Hecho por un equipo de 4 estudiantes universitarios de las carreras de Ingenieria de Software y Sistemas.
            <ul>
              <li>Julio Salazar - Frontend Developer      </li>
              <li>Rody Velasquez - Beta Tester  </li>
              <li>William's Moran - Algorithm Developer  </li>
              <li>Yordy Mochcco - Backend Developer      </li>
            </ul>
          </v-card-text>
        </v-card>
      </template>
    </v-hover> 
  </div>
</template>

<script>
// Desarrollado por Julio Salazar, Rody Velasquez, William's Moran, Yordy Mochcco

export default {
  name: 'AboutView',
}
</script>