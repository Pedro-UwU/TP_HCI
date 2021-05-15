<template>
  <v-card class="login">
    <v-card-title class="justify-center">
      <img src="../assets/fitnice-removebg-preview.png"  alt="logo" align="center" width="80%">
    </v-card-title>
    <v-card-text>
      <v-stepper non-linear class="transparent elevation-0" v-model="e1">
        <v-stepper-header class="elevation-0">
          <v-stepper-step
            editable
            step="1"
            color="secondary"
          >Datos de registro</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step
            editable
            step="2"
            color="secondary"
          >Datos personales</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items class="mx-n6">
          <v-stepper-content step="1">
            <v-form v-model="isValid1">
              <v-text-field
                  light
                  label="E-mail"
                  v-model="email"
                  :rules="[v => !!v || 'campo obligatorio']"
                  required
                  rounded
                  solo
                  class="text-input"
                  placeholder="E-mail"
                  background-color="white"
                  height="2.5em"
              ></v-text-field>
              <v-text-field
                  light
                  label="Nombre de usuario"
                  v-model="username"
                  :rules="[v => !!v || 'campo obligatorio']"
                  required
                  rounded
                  solo
                  class="text-input"
                  placeholder="Nombre de usuario"
                  background-color="white"
                  height="2.5em"
              ></v-text-field>
              <v-text-field
                  light
                  label="Contraseña"
                  v-model="password"
                  :type="value1 ? 'password' : 'text'"
                  :rules="[v => !!v || 'campo obligatorio']"
                  required
                  solo
                  class="text-input"
                  placeholder="Contraseña"
                  rounded
                  background-color="white"
                  height="2.5em"
                  :append-icon="value1 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="() => (value1 = !value1)"
              ></v-text-field>
              <v-text-field
                  light
                  label="Repetir contraseña"
                  v-model="confirmPassword"
                  :type="value2 ? 'password' : 'text'"
                  :rules="[confirmPasswordRules,passwordConfirmationRule,v => !!v || 'campo obligatorio']"
                  required
                  solo
                  class="text-input"
                  placeholder="Repetir contraseña"
                  rounded
                  background-color="white"
                  :append-icon="value2 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="() => (value2 = !value2)"
                  height="2.5em"
              ></v-text-field>
            </v-form>
            <v-card-actions class="justify-center">
              <v-btn
                  color="black--text quinary"
                  rounded
                  width="75%"
                  class="less-margin mt-5"
                  @click="e1 = 2"
              >
                Siguiente
                <v-icon right>mdi-arrow-right-bold</v-icon>
              </v-btn>
            </v-card-actions>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-form v-model="isValid2">
              <v-text-field
                  light
                  label="Nombre"
                  v-model="firstName"
                  :rules="[v => !!v || 'campo obligatorio']"
                  required
                  rounded
                  solo
                  placeholder="Nombre"
                  background-color="white"
                  class="text-input"
                  height="2.5em"
              ></v-text-field>
              <v-text-field
                  light
                  label="Apellido"
                  v-model="lastName"
                  :rules="[v => !!v || 'campo obligatorio']"
                  required
                  rounded
                  solo
                  class="text-input"
                  placeholder="Apellido"
                  background-color="white"
                  height="2.5em"
              ></v-text-field>
              <v-select
                background-color="white"
                class="black--text mt-n4"
                light
                :menu-props="{ offsetY: true, transition: 'slide-y-transition', closeOnClick: true, light: true,
                class: quinary }"
                single-line
                label="Género"
                rounded
                disable-lookup
                item-color="black"
                height="3.15em"
                v-model="gender"
                :items="genders"
                @change="checkGender()"
              ></v-select>
              <v-card-actions class="justify-center">
                <v-btn
                    color="black--text quinary"
                    :disabled="!(isValid1 && isValid2 && genderSelected)"
                    rounded
                    width="75%"
                    class="less-margin mt-10"
                    @click="sendRegForm(); loading = true"
                >Registrarse</v-btn>
              </v-card-actions>
              <v-card-actions class="justify-center" v-if="loading">
                <v-progress-circular
                  :indeterminate="loading"
                  :active="loading"
                  absolute
                  color="quinary"
                ></v-progress-circular>
              </v-card-actions>
            </v-form>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card-text>
  </v-card>
</template>

<script>
import {UserApi} from "../js/user";
import {UserStore} from "../store/UserStore";

export default {
  name: "RegisterForm2",

  data: () => ({
    e1: 1,
    // profileElements: [],
    loading: false,
    genderSelected: false,
    gender: null,
    value1: true,
    value2: true,
    isValid1: true,
    isValid2: true,
    email: null,
    password: null,
    firstName:null,
    lastName:null,
    username: null,
    confirmPassword: null,
    passwordRules: [v => !!v || "Password is required"],
    confirmPasswordRules: [v => !!v || "Password is required"],
    errorMessage: "",
    genders: ['Femenino','Masculino']
  }),
  computed: {
    passwordConfirmationRule() {
      return () => (this.password === this.confirmPassword) || 'las contraseñas no coinciden'
    },
  },
  methods: {
    sendRegForm() {
      let userInfo = {
        username: this.username,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        gender: ((this.gender === "Mascilino")? "male" : "female"), //TODO agregar genero
        birthdate: 1,
        email: this.email,
        phone: "123456", //TODO Agregar Telefono
        avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png",
        metadata: null
      }
      UserApi.create(userInfo, null).then(() => {
        UserStore.email = userInfo.email;
        this.$router.push('/verificationPending');
      }).catch(e => {
        if (e.code == 1) {
          this.errorMessage = "Escriba un e-mail correcto"
        } else if (e.code  ==  2){
          this.errorMessage = "Ese mail ya esta registrado"
        } else  {
          console.log(e.code);
        }
      });
    },
    checkGender() {
      this.genderSelected = (this.gender === "Masculino" || this.gender === "Femenino")
    }
  }
};
</script>

<style scoped>
.login {
  width: 400px ;
  height: 670px;
  background: #192633;
  opacity: 80%;
  border-radius: 30px;
  border: solid #BDC3c7 1px;
  align-self: center;
  margin-top: 7%;
}
.less-margin {
  margin-top: -20px;
}
.text-input >>> input{
  color: black;
}

.theme--light.v-list{
  background: #BDC3c7;
}
.v-list-item__content{
  color: black;
}
.v-list-item__text {
  color: black
}
.theme--light.v-list-item:hover:before {
  opacity: 0.30;
}
/*.cursor {*/
/*  cursor: pointer;*/
/*}*/
/*.normal-text {*/
/*  font-family: "Roboto", sans-serif !important;*/
/*  text-transform: none;*/
/*  font-weight: normal;*/
/*  font-size: 1rem !important;*/
/*  letter-spacing: 0.009375em !important;*/
/*  line-height: 1.75rem;*/
/*  box-shadow: none;*/
/*}*/
</style>