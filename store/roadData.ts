import { defineStore } from "pinia";
import { Location } from "../types/global";

interface Coordinator {
  lat: number;
  lon: number;
}

export const usePositionStore = defineStore("position", () => {
  //state
  const positions = reactive<Location>({ lon: 100, lat: 16 });

  //getters
  //   const getPositions = computed(() => positions.value);

  //actions
  function changePosition(item: Coordinator) {
    positions.lon = item.lon;
    positions.lat = item.lat;
  }
  return { positions, changePosition };
});
