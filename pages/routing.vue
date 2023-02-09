<script setup lang="ts">
const routingResult = (longdoValue: any, mapValue: any) => {
  mapValue.Route.placeholder(document.getElementById("result"));

  // const Marker = new longdoValue.Marker(
  //   { lon: 100.538316, lat: 13.764953 },
  //   { title: "Victory monument", detail: "I'm here" }
  // );

  // mapValue.Route.add(Marker);
  // mapValue.Route.add({ lon: 100, lat: 15 });
  mapValue.Route.enableContextMenu();
  mapValue.Route.auto(true);
  mapValue.Route.search();
};
</script>
<template>
  <div class="container-fluid d-flex gap-4 justify-content-center">
    <div id="result">loading...</div>
    <LongdoMap id="map" @loaded="routingResult" />
  </div>
</template>

<style scoped>
#map {
  width: 55%;
}

#result {
  width: 100%;
  max-height: 54rem;
  overflow: auto;
}
</style>
