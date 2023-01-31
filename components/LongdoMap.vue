<template>
  <div id="map">Loading...</div>
</template>
<script lang="ts" setup>
const emit = defineEmits(["loaded"]);

const scriptMap = ref<HTMLScriptElement | null>(
  document.createElement("script")
);
const longdoMapApiKey = "f38639d33e37f4e422cd8085d997d55f";

const addMapScript = () => {
  scriptMap.value.id = "script-longdo-map";
  scriptMap.value.src = `https://api.longdo.com/map/?key=${longdoMapApiKey}`;
  document.head.appendChild(scriptMap.value);
  scriptMap.value.onload = () => {
    const longdo = window.longdo;
    const map = new longdo.Map({
      placeholder: document.getElementById("map"),
    });
    map.Event.bind("ready", () => {
      emit("loaded", longdo, map);
    });

    //wms tms
    wmsLayer(longdo, map);
    tmsLayer(longdo, map);

    //create menuBar
    map.Ui.add(
      new longdo.MenuBar({
        dropdown: [{ label: "WMS" }, { label: "TMS" }, { label: "clear" }],
        dropdownLabel: "WMS & TMS",
        change: menuChange,
      })
    );
  };
};

function menuChange(item1: any /* item2: any, item3: any */) {
  if (item1.label == "WMS" || showTMS.value == true) {
    showWMS.value = !showWMS.value;
    showTMS.value = false;
  } else if (item1.label == "TMS" || showWMS.value == true) {
    showTMS.value = !showTMS.value;
    showWMS.value = false;
  }

  if (item1.label == "clear") {
    showTMS.value = false;
    showWMS.value = false;
  }
  // if (item2) {
  //   showTMS.value = !showTMS.value;
  // }
  // if (item3) {
  //   (showWMS.value = false), (showTMS.value = false);
  // }
}

const showWMS = ref(false);
const showTMS = ref(false);

const wmsLayer = (longdo: any, map: any) => {
  const wms = new longdo.Layer("bluemarble_terrain", {
    type: longdo.LayerType.WMS,
    url: "https://ms.longdo.com/mapproxy/service",
    zoomRange: { min: 1, max: 18 },
    refresh: 180,
    opacity: 0.5,
    weight: 10,
  });

  watchEffect(() => {
    if (showWMS.value) {
      map.Layers.add(wms);
    } else {
      map.Layers.remove(wms);
    }
  });
};

const tmsLayer = (longdo: any, map: any) => {
  const tms = new longdo.Layer("bluemarble_terrain", {
    type: longdo.LayerType.WMTS_REST,
    url: "https://ms.longdo.com/mapproxy/wmts",
    srs: "GLOBAL_WEBMERCATOR",
  });

  watchEffect(() => {
    if (showTMS.value) {
      map.Layers.add(tms);
    } else {
      map.Layers.remove(tms);
    }
  });
};

onBeforeMount(() => {
  addMapScript();
});

onBeforeUnmount(() => {
  const allScript = document.getElementsByTagName("script");
  const scriptLongdoMap = document.getElementById("script-longdo-map");
  for (let i in allScript) {
    if (allScript[i].src === "https://api.longdo.com/map/js/martinez.min.js") {
      allScript[i].parentNode?.removeChild(allScript[i]);
      scriptLongdoMap?.parentNode?.removeChild(scriptLongdoMap);
    }
  }
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 90vh;
}
</style>
