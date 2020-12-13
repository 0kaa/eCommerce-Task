<template>
  <v-container>
    <v-row>
      <v-col
        v-for="product in $store.state.products"
        :key="product.id"
        cols="6"
        lg="3"
        md="4"
        sm="6"
      >
        <v-card :id="product.id">
          <v-img height="250" :src="product.image"></v-img>

          <v-card-title>{{ product.title }}</v-card-title>

          <v-card-text>
            <div class="my-2 subtitle-1">
              {{ "$" + product.price }} • {{ product.location }}
            </div>

            <div>
              {{ product.description }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="
                snackbar = true;
                textProduct(product.title);
                addToCart(product.id);
              "
              v-if="!product.isAddedToCart"
            >
              Add To Cart
            </v-btn>
            <v-btn
              color="error"
              text
              @click="removeFromCart(product.id)"
              v-else
            >
              Remove
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar">
      {{ productTitle }} Added to Cart
      <template v-slot:action="{ attrs }">
        <v-btn color="error" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      selection: 1,
      snackbar: false,
      productTitle: "",
    };
  },
  methods: {
    textProduct(title) {
      this.productTitle = title;      
    },
    addToCart(id) {
      this.text = this.$store.commit("addToCart", id);
    },
    removeFromCart(id) {
      this.$store.commit("removeFromCart", id);
    },
  },
};
</script>
