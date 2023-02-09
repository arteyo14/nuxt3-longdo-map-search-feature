<template>
  <div class="container-fluid mt-3">
    <div class="d-flex row mx-2">
      <div class="col-lg-7">
        <table class="table .table-hover">
          <thead class="thead-dark">
            <tr class="text-center">
              <th>ID</th>
              <th>KM Start</th>
              <th>KM End</th>
              <th>Lat</th>
              <th>Lon</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) of data"
              :key="item.id"
              class="text-center"
              :class="{ 'table-active': dataSelected === item.id }"
              @click="
                () => {
                  //   positionStore.changePosition(item);
                  toggleDataSelected(item);
                }
              "
              style="cursor: pointer"
            >
              <td>{{ item.id }}</td>
              <td>{{ item.kmStart }}</td>
              <td>{{ item.kmEnd }}</td>
              <td>{{ item.lat }}</td>
              <td>{{ item.lon }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-lg-5">
        <LongdoMap @loaded="mapLoaded" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import data from "~~/public/data/data";
import Line from "~~/public/data/line";
import { usePositionStore } from "~/store/roadData";
import { map } from "~~/types/global";

const positionStore = usePositionStore();

const dataSelected = ref<number | null>(null);

// import "heatmap.js";
// import "../plugins/longdomap-heatmap/longdomap-heatmap";

const toggleDataSelected = (item: any) => {
  dataSelected.value = item.id;
  positionStore.changePosition(item);
};

const mapLoaded = (longdoValue: object, mapValue: map.value.Map) => {
  watchEffect(() => {
    if (mapValue) {
      mapValue.location({
        lon: positionStore.positions.lon,
        lat: positionStore.positions.lat,
      });
    }
    mapValue.zoom(18);
  });

  const line = data.map((item) => {
    return { lon: item.lon, lat: item.lat };
  });
};
</script>

<style scoped>
.table-active {
  background-color: #20c997;
  color: #fff;
}
</style>
