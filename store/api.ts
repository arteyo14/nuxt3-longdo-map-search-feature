import { defineStore } from "pinia";
import { Product } from "../types/global";

export const useAPIStore = defineStore("APIStore", () => {
  //state
  const products = ref<Product[]>([]);
  const loading = ref(false);

  //actions
  const getProducts = async () => {
    try {
      loading.value = true;
      const api = await fetch("https://fakestoreapi.com/products?limit=5");
      const data = await api.json();
      loading.value = false;
      products.value = data;
      console.log(products.value);
    } catch (err) {
      console.log(err);
    }
  };

  onMounted(getProducts);

  //getters
  const getData = computed(() => {
    return products.value;
  });

  return { products, loading, getProducts, getData };
});
