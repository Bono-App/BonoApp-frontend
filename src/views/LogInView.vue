<template>
  <div class="login">    
    <div class="d-flex align-center mx-auto" id="sample">
      <div class="d-flex  justify-center sample2">
        <div class="d-flex flex-column">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card width="320" :class="`elevation-${hover ? 24 : 3}`" class="transition-swing">
                <v-card-title class="justify-center font-weight-black mb-1 pb-2" id="title-login">Log In</v-card-title>
                <v-card-text class="py-4">
                  <v-form ref="form" lazy-validation>
                    <v-text-field
                        dense hide-details
                        class="mb-3"
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        placeholder="example@mail.com"
                        required outlined
                    >
                      <template v-slot:append>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <v-icon v-on="on">mdi-email-outline</v-icon>
                          </template>
                          Write here the email you registered
                        </v-tooltip>
                      </template>
                    </v-text-field>
                    <v-text-field
                        dense hide-details
                        class="mb-4"
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        placeholder="*******"
                        type="password"
                        required outlined
                    >
                      <template v-slot:append>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <v-icon v-on="on">mdi-key-outline</v-icon>
                          </template>
                          Your password is not displayed
                        </v-tooltip>
                      </template>
                    </v-text-field>
                  </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn color="error"
                        class="font-weight-bold"
                        text @click="reset">
                    Reset Form
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                        class="font-weight-bold"
                        color="indigo accent-4"
                        text @click="submit">
                    Submit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-hover>
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card width="320" :class="`elevation-${hover ? 24 : 3}`" class="transition-swing mt-3">
                <v-card-actions class="pl-5">
                  Register new user
                  <v-spacer></v-spacer>
                  <v-btn text class="font-weight-bold"
                      color="indigo accent-4" to="/signin">Sign in</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-hover>
        </div>
      </div>
      <div class="d-flex align-center justify-center sample3">
        <h1 class="title-app my-0">Bono App</h1>
      </div>
    </div>
    <v-snackbar v-model="snackbar" color="error" dark>
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import LogInViewService from '@/views/LogInView.Service'
import router from "@/router";
// Desarrollado por Julio Salazar, Rody Velasquez, William's Moran, Yordy Mochcco
export default {
  name: 'LogIn',
  data: ()=>({
    snackbar: false,
    text: '',
    email: '',
    password: '',
    found: false,
    usuario: {
      id: '',
      contrasena: '',
      correo: '',
    },
    passwordRules: [
      v => !!v || 'Password is required',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    submit () {
      this.$refs.form.validate()
      let val = this.$refs.form.validate();
      let valPassword = this.password;
      console.log("Valor de formulario: ",val);

      if(val){        
        LogInViewService.getUsersByEmail(this.email)
            .then(response => {
              if (response.data.password == valPassword) {
                localStorage.setItem('user', JSON.stringify(response.data));
                console.log("User log in: ", response.data);
                router.push('/home')
              } else {
                this.snackbar = true;
                this.text = 'Wrong username or password';
              }
            })
            .catch(e => {
              this.snackbar = true;
              this.text = 'Wrong username or password';
              console.log(e);
            });
        this.reset()
      }
    },
    reset () {
      this.$refs.form.reset()
    },
  }
}
</script>

<style>
.login {
  height: 100%;
}
#title-login {
  letter-spacing: -1px;
}
#sample {
  height: 100%;
}
.sample2 {
  width: 50%;
}
.sample3 {
  width: 50%;
  height: 100%;
  background: linear-gradient(45deg, #0cb106, #123f15);
}
.title-app {
  color: white;
  font-size: 3rem;
}
</style>