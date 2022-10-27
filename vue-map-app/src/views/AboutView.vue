<script>
/* global mapboxgl */
// import FullscreenSlider from "../modules/fullscreen_slider/";

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

      // create the popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setText("This is where I live! It is Camden!");

      // create DOM element for the marker
      const el = document.createElement("div");
      el.id = "marker";
      const marker1 = new mapboxgl.Marker(el)
        .setLngLat([-69.0648, 44.2098])
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
      console.log(marker1);
    },
    // slider: function () {
    //   const fsSlider = new FullscreenSlider(document, {
    //     x: window.innerWidth,
    //     y: window.innerHeight,
    //   });
    // },
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
#marker {
  background-image: url("https://www.hartstoneinn.com/wp-content/uploads/2020/05/camden-town-streets-featured-1476x1026.jpg");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
.mapboxgl-popup {
  max-width: 200px;
}
</style>
