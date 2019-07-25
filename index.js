import L from 'leaflet';
import './node_modules/_leaflet@1.5.1@leaflet/dist/leaflet.css';//这是一个坑，必须要用相对路径，不让会被识别为模块
import 'leaflet.chinatmsproviders'

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
//     maxZoom: 18,
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
//         '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//         'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     id: 'mapbox.streets'
// }).addTo(mymap);


var marker = L.marker([51.5, -0.09]).addTo(mymap);
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06], 
    [51.51, -0.047]
]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);


mymap.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);


L.TileLayer.Kitten = L.TileLayer.extend({
    getTileUrl: function(coords) {
        var i = Math.ceil( Math.random() * 4 );
        return "https://placekitten.com/256/256?image=" + i;
    },
    getAttribution: function() {
        return "<a href='https://placekitten.com/attribution.html'>PlaceKitten</a>"
    }
});

L.tileLayer.kitten = function() {
    return new L.TileLayer.Kitten();
}

// L.tileLayer.kitten().addTo(mymap);

L.tileLayer.chinaProvider('TianDiTu.Normal.Map',{maxZoom:18,minZoom:5}).addTo(mymap);
L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion',{maxZoom:18,minZoom:5}).addTo(mymap);