<script setup lang="ts">
import { useAPIStore } from "~~/store/api";
import { Product } from "~/types/global";

//useFetch from vueuse
const {
  data: test,
  pending,
  error,
  refresh,
} = await useFetch<Product[]>("https://fakestoreapi.com/products?limit=5");

//State management using pinia
const store = useAPIStore();
onMounted(store.getProducts);
</script>
<template>
  <div class="d-flex justify-content-center gap-4 w-100">
    <div class="d-flex flex-col justify-content-center items-center h-100">
      <p v-if="store.loading">loading...</p>
      <ul v-else>
        <h1>By Pinia Store</h1>
        <li v-for="(item, index) of store.products" :key="index">
          <p>{{ item.title }}$</p>
          <p>{{ item.price }}$</p>
        </li>
      </ul>
    </div>
    <hr />
    <div class="d-flex flex-col justify-content-center items-center h-100">
      <p v-if="pending">loading...</p>
      <h1 v-else-if="error">Something went wrong!</h1>
      <ul v-else>
        <h1>By useFetch</h1>
        <li v-for="(item, index) of test" :key="index">
          <p>{{ item.title }}</p>
          <p>- {{ item.price }}$</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
