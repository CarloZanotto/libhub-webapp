<template>
  <v-container align-content-lg fluid class="ma-2">
    <v-row class="d-flex justify-center">
      <v-col>
        <about-us />
      </v-col>

      <v-col >
        <v-card elevation-5 class="d-flex align-start mt-2 mr-5">
          <signup-form />
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-dialog v-model="showLoginDialog" max-width="600px">
        <log-in-form />
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import AboutUs from "@/components/AboutUs.vue";
import SignupForm from "@/components/SignupForm.vue";
import LogInForm from "@/components/dialogs/LogInForm.vue";

export default {
  name: "Home",

  components: {
    SignupForm,
    AboutUs,
    LogInForm,
  },

  data: () => ({
    //
  }),
  methods: {
    login() {
      this.router.push("/login"); // IS this stil used?
    },
    hideLoginDialog() {
      this.$store.commit("hideLoginDialog");
    },
  },
  computed: {
    showLoginDialog: {
      get: function () {
        return this.$store.state.loginDialog;
      },
      set: function (value) {
        if (value) {
          this.$store.commit("showLoginDialog");
        } else {
          this.$store.commit("hideLoginDialog");
        }
      },
    },
  },
};
</script>
