import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: "Chicken Momo",
        price: 200,
        location: "Italian, Cafe",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        image: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        isAddedToCart: false,
        qty: 1,
      },
      {
        id: 2,
        title: "Spicy Mexican",
        price: 150,
        location: "Italian, Cafe",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        image: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        isAddedToCart: false,
        qty: 1,
      },
      {
        id: 3,
        title: "Break Fast",
        price: 300,
        location: "Italian, Cafe",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        image: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        isAddedToCart: false,
        qty: 1,
      },
      {
        id: 4,
        title: "Cafe Badilico",
        price: 500,
        location: "Italian, Cafe",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        isAddedToCart: false,
        qty: 1,
      },
      {
        id: 5,
        title: "Chicken Momo",
        price: 200,
        location: "Italian, Cafe",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        image: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        isAddedToCart: false,
        qty: 1,
      },
      {
        id: 6,
        title: "Spicy Mexican",
        price: 150,
        location: "Italian, Cafe",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        image: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        isAddedToCart: false,
        qty: 1,
      },
      {
        id: 7,
        title: "Break Fast",
        price: 300,
        location: "Italian, Cafe",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        image: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        isAddedToCart: false,
        qty: 1,
      },
      {
        id: 8,
        title: "Cafe Badilico",
        price: 500,
        location: "Italian, Cafe",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        isAddedToCart: false,
        qty: 1,
      },
    ],
  },
  mutations: {
    calcQty: (state, item) => {
      state.products.forEach((el) => {
        if (item.id === el.id) {
          el.qty = item.qty;
        }
      });
    },
    addToCart: (state, id) => {
      state.products.forEach((el) => {
        if (id === el.id) {
          el.isAddedToCart = true;
        }
      });
    },
    removeFromCart: (state, id) => {
      state.products.forEach((el) => {
        if (id === el.id) {
          el.isAddedToCart = false;
        }
      });
    },
  },
  getters: {
    productsAdded: (state) => {
      return state.products.filter((el) => {
        return el.isAddedToCart;
      });
    },  
  },
  actions: {},
  modules: {},
});
