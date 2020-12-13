<template>
  <v-container>
    <v-snackbar v-model="snackbar">
      Item Removed
      <template v-slot:action="{ attrs }">
        <v-btn color="error" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-row>
      <v-col cols="12" md="8">
        <div class="products-list">
          <h1>Shopping Cart</h1>
          <div
            class="product d-flex align-center justify-space-between"
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
                width="100%"
                height="100%"
              />
            </div>
            <h2 class="title">{{ product.title }}</h2>
            <div class="qty">
              <v-btn
                text
                fab
                @click="
                  product.qty--;
                  calcQty(product);
                "
              >
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <v-text-field
                class="qty-input text-center"
                v-model="product.qty"
                type="number"
                dense
                outlined
                hide-details
                @change="calcQty(product)"
              ></v-text-field>

              <v-btn
                text
                fab
                @click="
                  product.qty++;
                  calcQty(product);
                "
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
            <div class="price">{{ "$" + product.price * product.qty }}</div>
            <div class="delete-product">
              <v-btn
                fab
                text
                small
                class="ml-2"
                @click="
                  snackbar = true;
                  removeFromCart(product.id);
                "
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </div>
          <h2
            class="text-center my-5"
            v-if="!$store.getters.productsAdded.length"
          >
            No Products Added
          </h2>
          <div class="actions d-flex align-items-center justify-space-between">
            <v-btn text to="/" color="primary">
              <v-icon>mdi-chevron-left</v-icon>
              <span>Continue Shopping</span>
            </v-btn>
            <h2><span>Subtotal:</span> {{ "$" + totalPrice }}</h2>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <div class="card-details">
          <h1>Card Details</h1>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    dark
                    value="Giga Tamarashvili"
                    label="Name on Card"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    dark
                    placeholder="**** **** **** ****"
                    type="password"
                    label="Card Number"
                  ></v-text-field>
                </v-col>
                <v-col cols="8">
                  <label>Expiration date</label>
                  <v-row>
                    <v-col cols="6">
                      <v-select dark :items="items" placeholder="mm"></v-select>
                    </v-col>
                    <v-col cols="6">
                      <v-select
                        dark
                        :items="items"
                        placeholder="yyyy"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="4">
                  <label>CVV</label>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        dark
                        placeholder="XXX"
                        type="password"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12">
                  <v-btn color="primary" block x-large elevation="0"
                    >Check Out</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Cart",
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    snackbar: false,
  }),
  methods: {
    calcQty(item) {
      this.$store.commit("calcQty", item);
    },
    removeFromCart(id) {
      this.$store.commit("removeFromCart", id);
    },
  },
  computed: {
    totalPrice() {
      if (this.$store.getters.productsAdded.length > 0) {
        return this.$store.getters.productsAdded
          .map((item) => item.price * item.qty)
          .reduce((total, amount) => total + amount);
      } else {
        return 0;
      }
    },
  },
};
</script>

<style lang="scss">
.theme--dark {
  .product {
    border-bottom: 1px solid #252525 !important;
  }
}
.products-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    margin-bottom: 50px;
    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .product {
    margin-bottom: 20px;
    border-bottom: 1px solid #e2e2e2;
    padding-bottom: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
      padding-bottom: 100px;
    }
    .title {
      flex: 0 0 20%;
      @media (max-width: 768px) {
        margin-bottom: 20px;
      }
    }
    .img {
      width: 150px;
      height: 150px;

      @media (max-width: 768px) {
        margin-bottom: 20px;
      }
    }
    .qty {
      display: flex;
      align-items: center;
      flex: 0 0 10%;
      @media (max-width: 768px) {
        margin-bottom: 20px;
      }
      .qty-input {
        width: 100px !important;
        margin: 0 10px;

        input {
          text-align: center;
        }
      }
    }
    .price {
      flex: 0 0 10%;
      @media (max-width: 768px) {
        margin-bottom: 20px;
      }
    }
  }
  .actions {
    margin-top: 40px;
  }
}
.card-details {
  background-color: #272727;
  border-radius: 10px;
  padding: 20px;
  color: #fff;
  @media (max-width: 768px) {
    margin-top: 60px;
  }
}
</style>
