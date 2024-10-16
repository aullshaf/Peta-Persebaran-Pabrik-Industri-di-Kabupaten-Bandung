var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Batas_Administrasi_1 = new ol.format.GeoJSON();
var features_Batas_Administrasi_1 = format_Batas_Administrasi_1.readFeatures(json_Batas_Administrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_1.addFeatures(features_Batas_Administrasi_1);
var lyr_Batas_Administrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Administrasi_1, 
                style: style_Batas_Administrasi_1,
                popuplayertitle: "Batas_Administrasi",
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_1.png" /> Batas_Administrasi'
            });
var format_Bentuk_Lahan_2 = new ol.format.GeoJSON();
var features_Bentuk_Lahan_2 = format_Bentuk_Lahan_2.readFeatures(json_Bentuk_Lahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bentuk_Lahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bentuk_Lahan_2.addFeatures(features_Bentuk_Lahan_2);
var lyr_Bentuk_Lahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bentuk_Lahan_2, 
                style: style_Bentuk_Lahan_2,
                popuplayertitle: "Bentuk_Lahan",
                interactive: true,
                title: '<img src="styles/legend/Bentuk_Lahan_2.png" /> Bentuk_Lahan'
            });
var format_PT_Industri_3 = new ol.format.GeoJSON();
var features_PT_Industri_3 = format_PT_Industri_3.readFeatures(json_PT_Industri_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PT_Industri_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PT_Industri_3.addFeatures(features_PT_Industri_3);
var lyr_PT_Industri_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PT_Industri_3, 
                style: style_PT_Industri_3,
                popuplayertitle: "PT_Industri",
                interactive: true,
                title: '<img src="styles/legend/PT_Industri_3.png" /> PT_Industri'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Batas_Administrasi_1.setVisible(true);lyr_Bentuk_Lahan_2.setVisible(true);lyr_PT_Industri_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Batas_Administrasi_1,lyr_Bentuk_Lahan_2,lyr_PT_Industri_3];
lyr_Batas_Administrasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Length': 'SHAPE_Length', });
lyr_Bentuk_Lahan_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'GID_4': 'GID_4', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PT_Industri_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_Batas_Administrasi_1.set('fieldImages', {'OBJECTID': '', 'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', 'SHAPE_Length': '', });
lyr_Bentuk_Lahan_2.set('fieldImages', {'OBJECTID': '', 'GID_0': '', 'NAME_0': '', 'GID_1': '', 'NAME_1': '', 'GID_2': '', 'NAME_2': '', 'GID_3': '', 'NAME_3': '', 'GID_4': '', 'NAME_4': '', 'VARNAME_4': '', 'TYPE_4': '', 'ENGTYPE_4': '', 'CC_4': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_PT_Industri_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'OID_': 'Range', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'Range', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'Range', });
lyr_Batas_Administrasi_1.set('fieldLabels', {'OBJECTID': 'no label', 'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Length': 'no label', });
lyr_Bentuk_Lahan_2.set('fieldLabels', {'OBJECTID': 'no label', 'GID_0': 'inline label - always visible', 'NAME_0': 'inline label - visible with data', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'GID_4': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_PT_Industri_3.set('fieldLabels', {'OBJECTID': 'no label', 'OID_': 'no label', 'Name': 'inline label - visible with data', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_PT_Industri_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});