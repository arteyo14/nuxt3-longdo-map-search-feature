<template>
  <div class="container-fluid d-flex row">
    <div class="col col-container">
      <form @submit.prevent="doSearch">
        <label class="form-label">Keywords</label>
        <input class="form-control mb-3" id="search" type="text" />
        <!-- <div id="suggest"></div> -->
        <button type="submit" class="btn btn-success">ค้นหา</button>
      </form>
      <h3 class="mt-4">ผลการค้นหา</h3>
      <div id="result" class="mt-4"></div>
    </div>
    <LongdoMap @loaded="getLongdoMap" class="col map" />
  </div>
</template>

<script setup lang="ts">
import { compileScript } from "@vue/compiler-sfc";

// const searchElement = reactive(null);
const longdo = ref(null);
const map = ref<object | null>(null);

const getLongdoMap = (longdoValue: any, mapValue: any) => {
  watchEffect(() => {
    longdo.value = longdoValue;
    map.value = mapValue;
    mapValue.Search.placeholder(document.getElementById("result"));
  });
};

const doSearch = () => {
  const searchElement = document.getElementById("search");
  map.value.Search.search(searchElement.value, {
    area: document.getElementById("area")?.value,
  });
};
</script>

<style scoped>
.map {
  width: 100%;
}
.col-container {
  width: 100%;
}
#result {
  height: 70vh;
  overflow: auto;
}
/* #suggest {
  position: absolute;
  display: block;
  background-color: #fff;
  border: 1px solid #000;
  padding: 4px;
  flex-direction: column;
} */
</style>
