<script>
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import { latLng } from "leaflet";
import data from "../data.json";
import data2 from "../titik_longsor.json";

export default {
  name: "App",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      zoom: 14.5,
      center: L.latLng(-7.61542, 112.61973),
      url: "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      kelompokData: data,
      kelompokData2: data2
    };
  },
  methods: {
    createLatLng(latitude, longitude) {
      return latLng(latitude, longitude);
    },
    getMarkerIcon(color) {
      return L.icon({
        iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
      });
    },
  },
};
</script>

<template>
  <div id="maps">
    <router-link to="/">
      <b-button variant="success" style="padding-right: 100px;">Home</b-button>
    </router-link>
    <button>Mojokerto</button>
    <div style="padding-bottom: 5px;"></div>
    <div style="height: 610px; width: 100%">
      <l-map :zoom="zoom" :center="center" style="height: 100%">
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-marker v-for="(data, kelompok) in kelompokData" :key="kelompok" :lat-lng="createLatLng(data.latitude, data.longitude)" :icon="getMarkerIcon(data.color)">
          <l-popup>
            <div>
              <p>Kelurahan {{ kelompok }}</p>
              <p>Jumlah Penduduk: {{ data.penduduk }} Jiwa</p>
            </div>
          </l-popup>
        </l-marker>
        <l-marker v-for="(data2, kelompok2) in kelompokData2" :key="kelompok2" :lat-lng="createLatLng(data2.latitude, data2.longitude)" :icon="getMarkerIcon(data2.color)">
          <l-popup>
            <div>
              <p>{{ kelompok2 }}</p>
              <p>Latitude : {{ data2.latitude }}</p>
              <p>Longitude : {{ data2.longitude }}</p>
            </div>
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<style>
#maps {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 10px;
}
</style>
