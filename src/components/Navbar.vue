<template>
  <v-app-bar app>
    <div class="logo d-flex align-center">
      <h1><router-link to="/" class="error--text">Logo</router-link></h1>
    </div>

    <v-spacer></v-spacer>

    <v-btn to="/" text class="mr-2">
      <span>Home</span>
    </v-btn>
    <v-btn to="/cart" text>
      <span>Cart</span>
    </v-btn>
    <v-spacer></v-spacer>

    <v-btn
      @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      text
      class="mr-2"
    >
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-badge
          bordered
          overlap
          color="error"
          :content="
            $store.getters.productsAdded.length
              ? $store.getters.productsAdded.length
              : '0'
          "
        >
          <v-btn v-bind="attrs" v-on="on" text>
            <v-icon>mdi-cart</v-icon>
          </v-btn>
        </v-badge>
      </template>

      <v-card>
        <v-card-title class="headline">Mini Cart</v-card-title>

        <v-card-text v-if="$store.getters.productsAdded.length">
          <div
            class="item d-flex align-center mt-4"
            v-for="product in $store.getters.productsAdded"
            :key="product.id"
          >
            <div class="img">
              <v-img
                alt="Product"
                class="shrink mr-2 rounded-circle"
                :src="product.image"
                transition="scale-transition"
                rounded
                width="80"
                height="80"
              />
            </div>
            <div class="details container container--fluid">
              <div class="d-flex align-center justify-space-between ">
                <h3 class="mb-0">{{ product.title }}</h3>
                <p class="primary--text mb-0 font-weight-bold">
                  {{ "$" + product.price }}
                  <v-btn
                    fab
                    text
                    small
                    color="error"
                    class="ml-2"
                    @click="removeFromCart(product.id)"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </p>
              </div>
            </div>
          </div>
        </v-card-text>
        <v-card-text v-else>No Products Added</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="primary" text to="/cart" @click="dialog = false">
            Check out
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    removeFromCart(id) {
      this.$store.commit("removeFromCart", id);
    },
  },
};
</script>
<style lang="scss" scoped>
.logo {
  a {
    text-decoration: none;
  }
}
</style>
