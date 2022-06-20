<template>
  <div class="login">    
    <div class="d-flex align-center mx-auto" id="sample">
      <div class="d-flex justify-center sample2">
        <v-hover>
            <template v-slot:default="{ hover }">
              <v-card width="300" :class="`elevation-${hover ? 24 : 3}`" class="transition-swing">
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
      </div>
      <div class="d-flex align-center justify-center sample3">
        <h1 class="title-app my-0">Bono App</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data: ()=>({
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
  background: linear-gradient(45deg, #098a05, #1B5E20);
}
.title-app {
  color: white;
  font-size: 3rem;
}
</style>