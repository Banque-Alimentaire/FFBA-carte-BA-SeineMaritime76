var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Risquedeprcaritalimentaire76_1 = new ol.format.GeoJSON();
var features_Risquedeprcaritalimentaire76_1 = format_Risquedeprcaritalimentaire76_1.readFeatures(json_Risquedeprcaritalimentaire76_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Risquedeprcaritalimentaire76_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Risquedeprcaritalimentaire76_1.addFeatures(features_Risquedeprcaritalimentaire76_1);
var lyr_Risquedeprcaritalimentaire76_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Risquedeprcaritalimentaire76_1, 
                style: style_Risquedeprcaritalimentaire76_1,
                popuplayertitle: "Risque de précarité alimentaire (76)",
                interactive: true,
    title: 'Risque de précarité alimentaire (76)<br />\
    <img src="styles/legend/Risquedeprcaritalimentaire76_1_0.png" /> 1 - Le plus bas<br />\
    <img src="styles/legend/Risquedeprcaritalimentaire76_1_1.png" /> 2 - Bas<br />\
    <img src="styles/legend/Risquedeprcaritalimentaire76_1_2.png" /> 3 - Moyen<br />\
    <img src="styles/legend/Risquedeprcaritalimentaire76_1_3.png" /> 4 - Elevé<br />\
    <img src="styles/legend/Risquedeprcaritalimentaire76_1_4.png" /> 5 - Le plus élevé<br />'
        });
var format_Communes_2 = new ol.format.GeoJSON();
var features_Communes_2 = format_Communes_2.readFeatures(json_Communes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_2.addFeatures(features_Communes_2);
var lyr_Communes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_2, 
                style: style_Communes_2,
                popuplayertitle: "Communes ",
                interactive: true,
                title: '<img src="styles/legend/Communes_2.png" /> Communes '
            });
var format_EPCISeineMaritime_3 = new ol.format.GeoJSON();
var features_EPCISeineMaritime_3 = format_EPCISeineMaritime_3.readFeatures(json_EPCISeineMaritime_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCISeineMaritime_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCISeineMaritime_3.addFeatures(features_EPCISeineMaritime_3);
var lyr_EPCISeineMaritime_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EPCISeineMaritime_3, 
                style: style_EPCISeineMaritime_3,
                popuplayertitle: "EPCI Seine Maritime",
                interactive: false,
                title: '<img src="styles/legend/EPCISeineMaritime_3.png" /> EPCI Seine Maritime'
            });
var format_Dpartement_4 = new ol.format.GeoJSON();
var features_Dpartement_4 = format_Dpartement_4.readFeatures(json_Dpartement_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dpartement_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dpartement_4.addFeatures(features_Dpartement_4);
var lyr_Dpartement_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dpartement_4, 
                style: style_Dpartement_4,
                popuplayertitle: "Département",
                interactive: false,
                title: '<img src="styles/legend/Dpartement_4.png" /> Département'
            });
var format_RestoduCoeurcommunesdesservies_5 = new ol.format.GeoJSON();
var features_RestoduCoeurcommunesdesservies_5 = format_RestoduCoeurcommunesdesservies_5.readFeatures(json_RestoduCoeurcommunesdesservies_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RestoduCoeurcommunesdesservies_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RestoduCoeurcommunesdesservies_5.addFeatures(features_RestoduCoeurcommunesdesservies_5);
var lyr_RestoduCoeurcommunesdesservies_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RestoduCoeurcommunesdesservies_5, 
                style: style_RestoduCoeurcommunesdesservies_5,
                popuplayertitle: "Resto du Coeur - communes desservies",
                interactive: true,
    title: 'Resto du Coeur - communes desservies<br />\
    <img src="styles/legend/RestoduCoeurcommunesdesservies_5_0.png" /> Communes desservies par le centre itinérant<br />\
    <img src="styles/legend/RestoduCoeurcommunesdesservies_5_1.png" /> Communes desservies par le centre de distribution<br />'
        });
var format_RestoduCoeur_6 = new ol.format.GeoJSON();
var features_RestoduCoeur_6 = format_RestoduCoeur_6.readFeatures(json_RestoduCoeur_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RestoduCoeur_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RestoduCoeur_6.addFeatures(features_RestoduCoeur_6);
var lyr_RestoduCoeur_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RestoduCoeur_6, 
                style: style_RestoduCoeur_6,
                popuplayertitle: "Resto du Coeur ",
                interactive: true,
    title: 'Resto du Coeur <br />\
    <img src="styles/legend/RestoduCoeur_6_0.png" /> Arret<br />\
    <img src="styles/legend/RestoduCoeur_6_1.png" /> Centre de distribution<br />\
    <img src="styles/legend/RestoduCoeur_6_2.png" /> Entrepot régional<br />'
        });
var format_AssociationspartenairesBA76_7 = new ol.format.GeoJSON();
var features_AssociationspartenairesBA76_7 = format_AssociationspartenairesBA76_7.readFeatures(json_AssociationspartenairesBA76_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AssociationspartenairesBA76_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AssociationspartenairesBA76_7.addFeatures(features_AssociationspartenairesBA76_7);
var lyr_AssociationspartenairesBA76_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AssociationspartenairesBA76_7, 
                style: style_AssociationspartenairesBA76_7,
                popuplayertitle: "Associations partenaires (BA76)",
                interactive: true,
                title: '<img src="styles/legend/AssociationspartenairesBA76_7.png" /> Associations partenaires (BA76)'
            });
var format_CommunesEI2R_8 = new ol.format.GeoJSON();
var features_CommunesEI2R_8 = format_CommunesEI2R_8.readFeatures(json_CommunesEI2R_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunesEI2R_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunesEI2R_8.addFeatures(features_CommunesEI2R_8);
var lyr_CommunesEI2R_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunesEI2R_8, 
                style: style_CommunesEI2R_8,
                popuplayertitle: "Communes EI2R",
                interactive: true,
                title: '<img src="styles/legend/CommunesEI2R_8.png" /> Communes EI2R'
            });
var format_PointsdarrtEI2Rcopier_9 = new ol.format.GeoJSON();
var features_PointsdarrtEI2Rcopier_9 = format_PointsdarrtEI2Rcopier_9.readFeatures(json_PointsdarrtEI2Rcopier_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointsdarrtEI2Rcopier_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointsdarrtEI2Rcopier_9.addFeatures(features_PointsdarrtEI2Rcopier_9);
var lyr_PointsdarrtEI2Rcopier_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PointsdarrtEI2Rcopier_9, 
                style: style_PointsdarrtEI2Rcopier_9,
                popuplayertitle: "Points d'arrêt EI2R copier",
                interactive: true,
                title: '<img src="styles/legend/PointsdarrtEI2Rcopier_9.png" /> Points d\'arrêt EI2R copier'
            });
var format_Cache_10 = new ol.format.GeoJSON();
var features_Cache_10 = format_Cache_10.readFeatures(json_Cache_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cache_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cache_10.addFeatures(features_Cache_10);
var lyr_Cache_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cache_10, 
                style: style_Cache_10,
                popuplayertitle: "Cache",
                interactive: false,
                title: '<img src="styles/legend/Cache_10.png" /> Cache'
            });
var format_BanquesAlimentairesSeineMaritime_11 = new ol.format.GeoJSON();
var features_BanquesAlimentairesSeineMaritime_11 = format_BanquesAlimentairesSeineMaritime_11.readFeatures(json_BanquesAlimentairesSeineMaritime_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BanquesAlimentairesSeineMaritime_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BanquesAlimentairesSeineMaritime_11.addFeatures(features_BanquesAlimentairesSeineMaritime_11);
var lyr_BanquesAlimentairesSeineMaritime_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BanquesAlimentairesSeineMaritime_11, 
                style: style_BanquesAlimentairesSeineMaritime_11,
                popuplayertitle: "Banques Alimentaires (Seine Maritime)",
                interactive: true,
                title: '<img src="styles/legend/BanquesAlimentairesSeineMaritime_11.png" /> Banques Alimentaires (Seine Maritime)'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Risquedeprcaritalimentaire76_1.setVisible(true);lyr_Communes_2.setVisible(true);lyr_EPCISeineMaritime_3.setVisible(true);lyr_Dpartement_4.setVisible(true);lyr_RestoduCoeurcommunesdesservies_5.setVisible(false);lyr_RestoduCoeur_6.setVisible(false);lyr_AssociationspartenairesBA76_7.setVisible(true);lyr_CommunesEI2R_8.setVisible(false);lyr_PointsdarrtEI2Rcopier_9.setVisible(false);lyr_Cache_10.setVisible(true);lyr_BanquesAlimentairesSeineMaritime_11.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Risquedeprcaritalimentaire76_1,lyr_Communes_2,lyr_EPCISeineMaritime_3,lyr_Dpartement_4,lyr_RestoduCoeurcommunesdesservies_5,lyr_RestoduCoeur_6,lyr_AssociationspartenairesBA76_7,lyr_CommunesEI2R_8,lyr_PointsdarrtEI2Rcopier_9,lyr_Cache_10,lyr_BanquesAlimentairesSeineMaritime_11];
lyr_Risquedeprcaritalimentaire76_1.set('fieldAliases', {'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'reg': 'reg', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'Commune', 'jenks_cut_': 'Risque de précarité alimentaire (nat)', 'jenks_cu_1': 'Risque de précarité alimentaire (dep)', });
lyr_Communes_2.set('fieldAliases', {'id': 'id', 'codgeo': 'codgeo', 'dep': 'Departement ', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'Commune', 'code_commu': 'code_commu', 'jenks_cut_': 'Risque de précarité alimentaire (nat)', 'jenks_cu_1': 'Risque de précarité alimentaire (dep)', 'Population': 'Population (com)', 'EPCI': 'EPCI', 'Pop-EPCI': 'Population (EPCI)', });
lyr_EPCISeineMaritime_3.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'CODE_DEPT': 'Departement', 'CODE_REG': 'CODE_REG', 'NOM_REGION': 'NOM_REGION', 'POPULATION': 'POPULATION', 'SOCIALE': 'EPCI', 'JURIDIQUE': 'Type', });
lyr_Dpartement_4.set('fieldAliases', {'id': 'id', 'dep': 'dep', 'reg': 'reg', 'libgeo': 'libgeo', });
lyr_RestoduCoeurcommunesdesservies_5.set('fieldAliases', {'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'reg': 'reg', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'Communes desservies', 'Infos': 'Infos', 'Zone': 'Zone', 'Communes': 'Communes', 'Nombre de': 'Familles inscrites - commune', 'Nombre d_1': 'Personnes inscites -commune', 'Nombre tot': 'Total familles inscrites - centre ', 'Nombre t_1': 'Total personnes inscrites - centre', 'Centre': 'Centre ', 'Téléphon': 'Tel', 'Email': 'Email', 'Actions': 'Actions', });
lyr_RestoduCoeur_6.set('fieldAliases', {'Zone': 'Zone', 'Communes': 'Commune', 'Nombre de': 'Nombre de', 'Nombre d_1': 'Nombre d_1', 'Nombre tot': 'Total Familles ', 'Nombre t_1': 'Total personnes', 'Centre': 'Centre', 'Full Addre': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Téléphon': 'Tel', 'Email': 'Email', 'Actions': 'Actions', 'Infos': 'Infos', });
lyr_AssociationspartenairesBA76_7.set('fieldAliases', {'COMMUNES': 'Commune', 'Asso': 'Association', 'Poids': 'Poids', 'mercuriale': 'Mercuriale', 'repas': 'Repas', 'adresse': 'Adresse', 'cpostal': 'CP', 'commune': 'Commune', 'Adresse-co': 'Adresse-co', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CommunesEI2R_8.set('fieldAliases', {'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'Commune', 'code_commu': 'code_commu', 'jenks_cut_': 'Risque de précarité alimentaire (nat)', 'jenks_cu_1': 'Risque de précarité alimentaire (dep)', 'Population': 'Population', 'Zone': 'Zone', 'Communes': 'Communes desservies', 'Arret': 'Arret', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_PointsdarrtEI2Rcopier_9.set('fieldAliases', {'Zone': 'Zone', 'Communes': 'Communes desservies -EI2R', 'Arret': 'Arret -EI2R', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Cache_10.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'CODE_DEPT': 'Département', 'NOM_DEPT': 'NOM_DEPT', 'NOM_REGION': 'NOM_REGION', 'INSEE_COM': 'INSEE_COM', 'POPULATION': 'POPULATION', 'SOCIALE': 'EPCI', 'JURIDIQUE': 'Type', });
lyr_BanquesAlimentairesSeineMaritime_11.set('fieldAliases', {'BANQUES AL': 'BANQUES AL', 'adresse1': 'Adresse', 'adresse2': 'adresse2', 'CP': 'CP', 'ville': 'Ville', 'Full Addre': 'Full Addre', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tél': 'Tél', });
lyr_Risquedeprcaritalimentaire76_1.set('fieldImages', {'id': 'Hidden', 'codgeo': 'Hidden', 'dep': 'Hidden', 'reg': 'Hidden', 'xcl2154': 'Hidden', 'ycl2154': 'Hidden', 'libgeo': 'Hidden', 'jenks_cut_': 'Hidden', 'jenks_cu_1': 'Hidden', });
lyr_Communes_2.set('fieldImages', {'id': 'Hidden', 'codgeo': 'Hidden', 'dep': 'TextEdit', 'xcl2154': 'Hidden', 'ycl2154': 'Hidden', 'libgeo': 'TextEdit', 'code_commu': 'Hidden', 'jenks_cut_': 'TextEdit', 'jenks_cu_1': 'TextEdit', 'Population': 'TextEdit', 'EPCI': 'TextEdit', 'Pop-EPCI': 'TextEdit', });
lyr_EPCISeineMaritime_3.set('fieldImages', {'ID_GEOFLA': 'Hidden', 'STATUT': 'Hidden', 'X_CHF_LIEU': 'Hidden', 'Y_CHF_LIEU': 'Hidden', 'X_CENTROID': 'Hidden', 'Y_CENTROID': 'Hidden', 'Z_MOYEN': 'Hidden', 'CODE_DEPT': 'TextEdit', 'CODE_REG': 'Hidden', 'NOM_REGION': 'Hidden', 'POPULATION': 'TextEdit', 'SOCIALE': 'TextEdit', 'JURIDIQUE': 'TextEdit', });
lyr_Dpartement_4.set('fieldImages', {'id': '', 'dep': '', 'reg': '', 'libgeo': '', });
lyr_RestoduCoeurcommunesdesservies_5.set('fieldImages', {'id': 'Hidden', 'codgeo': 'Hidden', 'dep': 'Hidden', 'reg': 'Hidden', 'xcl2154': 'Hidden', 'ycl2154': 'Hidden', 'libgeo': 'TextEdit', 'Infos': 'Hidden', 'Zone': 'TextEdit', 'Communes': 'Hidden', 'Nombre de': 'TextEdit', 'Nombre d_1': 'TextEdit', 'Nombre tot': 'TextEdit', 'Nombre t_1': 'TextEdit', 'Centre': 'TextEdit', 'Téléphon': 'Hidden', 'Email': 'Hidden', 'Actions': 'Hidden', });
lyr_RestoduCoeur_6.set('fieldImages', {'Zone': 'Hidden', 'Communes': 'TextEdit', 'Nombre de': 'Hidden', 'Nombre d_1': 'Hidden', 'Nombre tot': 'TextEdit', 'Nombre t_1': 'TextEdit', 'Centre': 'TextEdit', 'Full Addre': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Téléphon': 'TextEdit', 'Email': 'TextEdit', 'Actions': 'Hidden', 'Infos': 'Hidden', });
lyr_AssociationspartenairesBA76_7.set('fieldImages', {'COMMUNES': 'Hidden', 'Asso': 'TextEdit', 'Poids': 'Hidden', 'mercuriale': 'Hidden', 'repas': 'Hidden', 'adresse': 'TextEdit', 'cpostal': 'TextEdit', 'commune': 'TextEdit', 'Adresse-co': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_CommunesEI2R_8.set('fieldImages', {'id': 'Hidden', 'codgeo': 'Hidden', 'dep': 'Hidden', 'xcl2154': 'Hidden', 'ycl2154': 'Hidden', 'libgeo': 'Hidden', 'code_commu': 'Hidden', 'jenks_cut_': 'TextEdit', 'jenks_cu_1': 'TextEdit', 'Population': 'TextEdit', 'Zone': 'TextEdit', 'Communes': 'TextEdit', 'Arret': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_PointsdarrtEI2Rcopier_9.set('fieldImages', {'Zone': 'TextEdit', 'Communes': 'TextEdit', 'Arret': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_Cache_10.set('fieldImages', {'ID_GEOFLA': 'Hidden', 'STATUT': 'Hidden', 'X_CHF_LIEU': 'Hidden', 'Y_CHF_LIEU': 'Hidden', 'X_CENTROID': 'Hidden', 'Y_CENTROID': 'Hidden', 'Z_MOYEN': 'Hidden', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'Hidden', 'NOM_REGION': 'Hidden', 'INSEE_COM': 'Hidden', 'POPULATION': 'TextEdit', 'SOCIALE': 'TextEdit', 'JURIDIQUE': 'TextEdit', });
lyr_BanquesAlimentairesSeineMaritime_11.set('fieldImages', {'BANQUES AL': 'TextEdit', 'adresse1': 'TextEdit', 'adresse2': 'TextEdit', 'CP': 'TextEdit', 'ville': 'TextEdit', 'Full Addre': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Tél': 'TextEdit', });
lyr_Risquedeprcaritalimentaire76_1.set('fieldLabels', {});
lyr_Communes_2.set('fieldLabels', {'dep': 'header label - visible with data', 'libgeo': 'header label - visible with data', 'jenks_cut_': 'header label - visible with data', 'jenks_cu_1': 'header label - visible with data', 'Population': 'header label - visible with data', 'EPCI': 'header label - visible with data', 'Pop-EPCI': 'header label - visible with data', });
lyr_EPCISeineMaritime_3.set('fieldLabels', {'CODE_DEPT': 'header label - visible with data', 'POPULATION': 'header label - visible with data', 'SOCIALE': 'header label - visible with data', 'JURIDIQUE': 'header label - visible with data', });
lyr_Dpartement_4.set('fieldLabels', {'id': 'header label - visible with data', 'dep': 'header label - visible with data', 'reg': 'header label - visible with data', 'libgeo': 'header label - visible with data', });
lyr_RestoduCoeurcommunesdesservies_5.set('fieldLabels', {'libgeo': 'header label - visible with data', 'Zone': 'header label - visible with data', 'Nombre de': 'header label - visible with data', 'Nombre d_1': 'header label - visible with data', 'Nombre tot': 'header label - visible with data', 'Nombre t_1': 'header label - visible with data', 'Centre': 'header label - visible with data', });
lyr_RestoduCoeur_6.set('fieldLabels', {'Communes': 'header label - visible with data', 'Nombre tot': 'header label - visible with data', 'Nombre t_1': 'header label - visible with data', 'Centre': 'header label - visible with data', 'Full Addre': 'header label - visible with data', 'Téléphon': 'header label - visible with data', 'Email': 'header label - visible with data', });
lyr_AssociationspartenairesBA76_7.set('fieldLabels', {'Asso': 'header label - visible with data', 'adresse': 'header label - visible with data', 'cpostal': 'no label', 'commune': 'no label', });
lyr_CommunesEI2R_8.set('fieldLabels', {'jenks_cut_': 'header label - visible with data', 'jenks_cu_1': 'header label - visible with data', 'Population': 'header label - visible with data', 'Zone': 'header label - visible with data', 'Communes': 'header label - visible with data', 'Arret': 'header label - visible with data', });
lyr_PointsdarrtEI2Rcopier_9.set('fieldLabels', {'Zone': 'header label - visible with data', 'Communes': 'header label - visible with data', 'Arret': 'header label - visible with data', });
lyr_Cache_10.set('fieldLabels', {'CODE_DEPT': 'header label - visible with data', 'POPULATION': 'header label - visible with data', 'SOCIALE': 'header label - visible with data', 'JURIDIQUE': 'header label - visible with data', });
lyr_BanquesAlimentairesSeineMaritime_11.set('fieldLabels', {'BANQUES AL': 'header label - visible with data', 'adresse1': 'header label - visible with data', 'adresse2': 'header label - visible with data', 'CP': 'header label - visible with data', 'ville': 'header label - visible with data', 'Tél': 'header label - visible with data', });
lyr_BanquesAlimentairesSeineMaritime_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});