var wms_layers = [];


        var lyr_GoogleTraffic_0 = new ol.layer.Tile({
            'title': 'Google Traffic',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_btsdesa_3 = new ol.format.GeoJSON();
var features_btsdesa_3 = format_btsdesa_3.readFeatures(json_btsdesa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_btsdesa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_btsdesa_3.addFeatures(features_btsdesa_3);
var lyr_btsdesa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_btsdesa_3, 
                style: style_btsdesa_3,
                popuplayertitle: "bts desa",
                interactive: true,
                title: '<img src="styles/legend/btsdesa_3.png" /> bts desa'
            });
var format_bts_admin_4 = new ol.format.GeoJSON();
var features_bts_admin_4 = format_bts_admin_4.readFeatures(json_bts_admin_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bts_admin_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bts_admin_4.addFeatures(features_bts_admin_4);
var lyr_bts_admin_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bts_admin_4, 
                style: style_bts_admin_4,
                popuplayertitle: "bts_admin",
                interactive: true,
                title: '<img src="styles/legend/bts_admin_4.png" /> bts_admin'
            });
var format_Export_Output_5 = new ol.format.GeoJSON();
var features_Export_Output_5 = format_Export_Output_5.readFeatures(json_Export_Output_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_5.addFeatures(features_Export_Output_5);cluster_Export_Output_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Export_Output_5
});
var lyr_Export_Output_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Export_Output_5, 
                style: style_Export_Output_5,
                popuplayertitle: "Export_Output",
                interactive: true,
                title: '<img src="styles/legend/Export_Output_5.png" /> Export_Output'
            });

lyr_GoogleTraffic_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_btsdesa_3.setVisible(true);lyr_bts_admin_4.setVisible(true);lyr_Export_Output_5.setVisible(true);
var layersList = [lyr_GoogleTraffic_0,lyr_GoogleSatellite_1,lyr_GoogleHybrid_2,lyr_btsdesa_3,lyr_bts_admin_4,lyr_Export_Output_5];
lyr_btsdesa_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_bts_admin_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Export_Output_5.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_btsdesa_3.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_bts_admin_4.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Export_Output_5.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', });
lyr_btsdesa_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_bts_admin_4.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'KDBBPS': 'inline label - visible with data', 'KDCBPS': 'inline label - visible with data', 'KDCPUM': 'inline label - visible with data', 'KDEBPS': 'inline label - visible with data', 'KDEPUM': 'inline label - visible with data', 'KDPBPS': 'inline label - visible with data', 'KDPKAB': 'inline label - visible with data', 'KDPPUM': 'inline label - visible with data', 'LUASWH': 'inline label - visible with data', 'TIPADM': 'inline label - visible with data', 'WADMKC': 'inline label - visible with data', 'WADMKD': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'WIADKC': 'inline label - visible with data', 'WIADKK': 'inline label - visible with data', 'WIADPR': 'inline label - visible with data', 'WIADKD': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', });
lyr_Export_Output_5.set('fieldLabels', {'OID_': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'FolderPath': 'inline label - visible with data', 'SymbolID': 'inline label - visible with data', 'AltMode': 'inline label - visible with data', 'Base': 'inline label - visible with data', 'Snippet': 'inline label - visible with data', 'PopupInfo': 'inline label - visible with data', 'HasLabel': 'inline label - visible with data', 'LabelID': 'inline label - visible with data', });
lyr_Export_Output_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});