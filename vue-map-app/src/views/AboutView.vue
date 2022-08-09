<script>
/* global mapboxgl */
export default {
  mounted: function () {
    this.mappy();
  },

  methods: {
    mappy: function () {
      mapboxgl.accessToken = process.env.VUE_APP_MY_API_KEY;
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [-69.0648, 44.2098], // starting position [lng, lat]
        zoom: 9, // starting zoom
        projection: "globe", // display the map as a 3D globe
      });

      map.on("style.load", () => {
        map.setFog({}); // Set the default atmosphere style
      });
    },
  },
};
</script>
<template>
  <div id="map"></div>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>
