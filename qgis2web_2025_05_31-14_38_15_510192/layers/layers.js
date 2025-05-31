var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_JarakkeBusStop_1 = new ol.format.GeoJSON();
var features_JarakkeBusStop_1 = format_JarakkeBusStop_1.readFeatures(json_JarakkeBusStop_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JarakkeBusStop_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JarakkeBusStop_1.addFeatures(features_JarakkeBusStop_1);
var lyr_JarakkeBusStop_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JarakkeBusStop_1, 
                style: style_JarakkeBusStop_1,
                popuplayertitle: 'Jarak ke Bus Stop',
                interactive: false,
    title: 'Jarak ke Bus Stop<br />\
    <img src="styles/legend/JarakkeBusStop_1_0.png" /> 500 m<br />\
    <img src="styles/legend/JarakkeBusStop_1_1.png" /> 1000 m<br />\
    <img src="styles/legend/JarakkeBusStop_1_2.png" /> 1500 m<br />\
    <img src="styles/legend/JarakkeBusStop_1_3.png" /> 2000 m<br />\
    <img src="styles/legend/JarakkeBusStop_1_4.png" /> 2500 m<br />\
    <img src="styles/legend/JarakkeBusStop_1_5.png" /> 3000 m<br />' });
var format_BusStop_2 = new ol.format.GeoJSON();
var features_BusStop_2 = format_BusStop_2.readFeatures(json_BusStop_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusStop_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusStop_2.addFeatures(features_BusStop_2);
cluster_BusStop_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_BusStop_2
});
var lyr_BusStop_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BusStop_2, 
                style: style_BusStop_2,
                popuplayertitle: 'Bus Stop',
                interactive: true,
    title: 'Bus Stop<br />\
    <img src="styles/legend/BusStop_2_0.png" /> Halte PENS<br />\
    <img src="styles/legend/BusStop_2_1.png" /> SB Galaxy 2<br />\
    <img src="styles/legend/BusStop_2_2.png" /> SB ITS<br />\
    <img src="styles/legend/BusStop_2_3.png" /> SB Kedung Baruk<br />\
    <img src="styles/legend/BusStop_2_4.png" /> SB KONI MERR<br />\
    <img src="styles/legend/BusStop_2_5.png" /> SB RS Haji 1<br />\
    <img src="styles/legend/BusStop_2_6.png" /> SB Semolowaru 2<br />\
    <img src="styles/legend/BusStop_2_7.png" /> SB Sentra UKM MERR<br />\
    <img src="styles/legend/BusStop_2_8.png" /> SB SMPN 19<br />\
    <img src="styles/legend/BusStop_2_9.png" /> SB UNAIR 1<br />' });

lyr_Positron_0.setVisible(true);lyr_JarakkeBusStop_1.setVisible(true);lyr_BusStop_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_JarakkeBusStop_1,lyr_BusStop_2];
lyr_JarakkeBusStop_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'id': 'id', 'cost_level': 'cost_level', });
lyr_BusStop_2.set('fieldAliases', {'name': 'name', 'Foto': 'Foto', 'Lokasi': 'Lokasi', });
lyr_JarakkeBusStop_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'id': 'TextEdit', 'cost_level': 'TextEdit', });
lyr_BusStop_2.set('fieldImages', {'name': 'TextEdit', 'Foto': 'ExternalResource', 'Lokasi': '', });
lyr_JarakkeBusStop_1.set('fieldLabels', {'full_id': 'header label - visible with data', 'osm_id': 'header label - always visible', 'osm_type': 'header label - always visible', 'highway': 'header label - always visible', 'name': 'header label - always visible', 'id': 'header label - always visible', 'cost_level': 'hidden field', });
lyr_BusStop_2.set('fieldLabels', {'name': 'header label - always visible', 'Foto': 'header label - always visible', 'Lokasi': 'header label - always visible', });
lyr_BusStop_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});