import Vue from 'vue'
import * as Vue2Leaflet from 'vue2-leaflet'

Vue.component('l-map', Vue2Leaflet.LMap);
Vue.component('l-tile-layer', Vue2Leaflet.LTileLayer);
Vue.component('l-marker', Vue2Leaflet.LMarker);
Vue.component('l-tooltip', Vue2Leaflet.LTooltip);
Vue.component('l-popup', Vue2Leaflet.LPopup);
Vue.component('l-control-zoom', Vue2Leaflet.LControlZoom);
Vue.component('l-geo-json', Vue2Leaflet.LGeoJson);
Vue.component('l-feature-group', Vue2Leaflet.LFeatureGroup);
