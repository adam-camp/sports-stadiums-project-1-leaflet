var map = L.map('mapid').setView([38.6,-94.2],4);

//load tile layer basemap
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
}).addTo(map);

// load GeoJSON layer 1 from an external file- layer 1
$.getJSON("https://raw.githubusercontent.com/adam-camp/sports-stadiums-project-1-leaflet/main/places.geojson",function(data){
var restIcon = L.icon({
      iconUrl: 'https://icon-library.com/images/football-stadium-icon/football-stadium-icon-20.jpg',
      iconSize: [25,25]
    });  
L.geoJson(data,{
      pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng,{icon: restIcon});
        var contents = feature.properties.Ballpark  + '<br/>'; 
        var teams = feature.properties.Teams;
        for (var i = 0; i < teams.length; ++i) { 
        contents += teams[i].Team + ": " + teams[i].Class + ", " + teams[i].League+ '<br/>';
        }
        marker.bindPopup(contents);
        return marker;  
}
}).addTo(map); //Get geojson 1
//* layer 2
$.getJSON("https://raw.githubusercontent.com/adam-camp/sports-stadiums-project-1-leaflet/main/intrstat.geojson",function(data){

  
L.geoJson(data,{
      pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng,{icon: restIcon});
        var contents = feature.properties.Ballpark  + '<br/>'; 
        var teams = feature.properties.Teams;
        for (var i = 0; i < teams.length; ++i) { 
        contents += teams[i].Team + ": " + teams[i].Class + ", " + teams[i].League+ '<br/>';
        }
        marker.bindPopup(contents);
        return marker;  
}
}).addTo(map);
});
});
