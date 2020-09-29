import { Component, OnInit, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-global-map',
  templateUrl: './global-map.component.html',
  styleUrls: ['./global-map.component.less']
})
export class GlobalMapComponent implements OnInit {
@Input()
dataset: any;
  constructor() { }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGVlcGFrY2gxMjMiLCJhIjoiY2tmZ2o5eWVhMHA3ZDJ4bzN6aWJ4aGlpNiJ9.rvWtUcVcIIkp10MLjMGSmw';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      zoom: 3,
      center: [133.8700, -23.7000]
    });
    map.on('load', function() {
      // Add a new source from our GeoJSON data and
      // set the 'cluster' option to true. GL-JS will
      // add the point_count property to your source data.
      map.addSource('earthquakes', {
        type: 'geojson',
        // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
        // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
        data: {
          "type": "FeatureCollection",
          "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
          "features": [
            { "type": "Feature", "properties": { "id": "ak16994521", "mag": 2.3, "gamers": 1046066, "time": 1507425650893, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [151.205475, -33.861481, 34.0] } },
            { "type": "Feature", "properties": { "id": "ak16994517", "mag": 1.6, "gamers": 3949079.2, "time": 1507424832518, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [144.966667, -37.833333, 0.0] } },
            { "type": "Feature", "properties": { "id": "ci38021336", "mag": 1.42, "gamers": 738791.1, "time": 1507423898710, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [153.024292, -27.47101, 7.64] } },
            { "type": "Feature", "properties": { "id": "us2000b2nn", "mag": 4.2, "gamers": 411896.8, "time": 1507422626990, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [115.861397, -31.95224, 46.41] } },
            { "type": "Feature", "properties": { "id": "ak16994510", "mag": 1.6, "gamers": 538310.8, "time": 1507422449194, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [151.784485, -32.927792, 0.0] } },
            { "type": "Feature", "properties": { "id": "us2000b2nb", "mag": 4.6, "gamers": 67912.7, "time": 1507420784440, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [153.430878, -28.00029, 614.26] } },
            { "type": "Feature", "properties": { "id": "ak16994298", "mag": 2.4, "gamers": 48670.4, "time": 1507419370097, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [145.283333, -38.1, 7.5] } },
            { "type": "Feature", "properties": { "id": "nc72905861", "mag": 1.39, "gamers": 45756.3, "time": 1507418785100, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [149.13435, -35.27603, 6.37] } },
            { "type": "Feature", "properties": { "id": "ci38021304", "mag": 1.11, "gamers": 30273.9, "time": 1507418426010, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [144.358093, -38.153461, 12.37] } },
            { "type": "Feature", "properties": { "id": "ak16994519", "mag": 1.7, "gamers": 26827.7, "time": 1507425289659, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [150.893448, -34.424, 105.5] } },
            { "type": "Feature", "properties": { "id": "hv61900626", "mag": 2.91, "gamers": 15272.9, "time": 1504833891990, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [145.766251, -16.92304, 2.609] } },
            { "type": "Feature", "properties": { "id": "ak16994521", "mag": 2.3, "gamers": 18082, "time": 1507425650893, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [-151.5129, 63.1016, 0.0] } },
            { "type": "Feature", "properties": { "id": "ak16994519", "mag": 1.7, "gamers": 9360.3, "time": 1507425289659, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [146.805695, -19.26639, 105.5] } },
            { "type": "Feature", "properties": { "id": "ak16994517", "mag": 1.6, "gamers": 23260.6, "time": 1507424832518, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [146.924006, -36.074823, 0.0] } },
            { "type": "Feature", "properties": { "id": "ci38021336", "mag": 1.42, "gamers": 14856.4, "time": 1507423898710, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [150.600357, -34.88422, 7.64] } },
            { "type": "Feature", "properties": { "id": "us2000b2nn", "mag": 4.2, "gamers": 13686.1, "time": 1507422626990, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [130.836639, -12.45722, 46.41] } },
            { "type": "Feature", "properties": { "id": "ak16994510", "mag": 1.6, "gamers": 10547, "time": 1507422449194, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [151.953857, -27.56056, 0.0] } },
            { "type": "Feature", "properties": { "id": "us2000b2nb", "mag": 4.6, "gamers": 9912.2, "time": 1507420784440, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [143.862579, -37.56266, 614.26] } },
            { "type": "Feature", "properties": { "id": "ak16994298", "mag": 2.4, "gamers": 9360.3, "time": 1507419370097, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [144.280243, -36.758179, 7.5] } },
            { "type": "Feature", "properties": { "id": "nc72905861", "mag": 1.39, "gamers": 8738.2, "time": 1507418785100, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [147.331665, -42.883209, 6.37] } },
            { "type": "Feature", "properties": { "id": "ci38021304", "mag": 1.11, "gamers": 8014.8, "time": 1507418426010, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [149.183333, -21.116667, 12.37] } },
            { "type": "Feature", "properties": { "id": "ak16994293", "mag": 1.5, "gamers": 7859.2, "time": 1507417256497, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [115.721703, -32.526901, 10.8] } },
            { "type": "Feature", "properties": { "id": "ak16994287", "mag": 2.0, "gamers": 7436.3, "time": 1507413903714, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [147.134674, -41.438759, 0.0] } },
            { "type": "Feature", "properties": { "id": "ak16994285", "mag": 1.5, "gamers": 7182.2, "time": 1507413670029, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [150.505951, -23.38032, 96.8] } },
            { "type": "Feature", "properties": { "id": "ak16994283", "mag": 1.4, "gamers": 7092.1, "time": 1507413587442, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [153.11351, -30.296261, 0.0] } },
            { "type": "Feature", "properties": { "id": "ak16994280", "mag": 1.3, "gamers": 5644.2, "time": 1507413266231, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [147.353745, -35.125771, 54.3] } },
            { "type": "Feature", "properties": { "id": "ak16994278", "mag": 1.8, "gamers": 5467.4, "time": 1507413195076, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [152.3479, -24.866211, 50.0] } },
            { "type": "Feature", "properties": { "id": "ak16994274", "mag": 1.9, "gamers": 5190.3, "time": 1507412827617, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [152.908936, -31.43084, 93.6] } },
            { "type": "Feature", "properties": { "id": "ak16991011", "mag": 2.0, "time": 1507315584886, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [142.162506, -34.185509, 4.5] } },
            { "type": "Feature", "properties": { "id": "us2000b26p", "mag": 4.7, "time": 1507315424010, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [152.453873, -31.91099, 13.54] } },
            { "type": "Feature", "properties": { "id": "uu60251447", "mag": 2.18, "time": 1507314096180, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [149.100006, -33.283089, 4.91] } },
            { "type": "Feature", "properties": { "id": "nc72905411", "mag": 1.24, "time": 1507313481610, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [153.137711, -26.797091, -0.33] } },
            { "type": "Feature", "properties": { "id": "us2000b260", "mag": 4.4, "time": 1507311862190, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [150.909356, -31.10625, 10.0] } },
            { "type": "Feature", "properties": { "id": "ci38020552", "mag": 1.28, "time": 1507311788210, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [121.465902, -30.743762, -1.01] } },
            { "type": "Feature", "properties": { "id": "us2000b25h", "mag": 5.5, "time": 1507311683180, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [145.398666, -36.38047, 10.0] } },
            { "type": "Feature", "properties": { "id": "ak16990870", "mag": 1.8, "time": 1507310931075, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [139.497269, -20.725229, 48.9] } },
            { "type": "Feature", "properties": { "id": "nn00608306", "mag": 1.9, "time": 1507310059424, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [153.542007, -28.17561, 5.9] } },
            { "type": "Feature", "properties": { "id": "us2000b24c", "mag": 4.6, "time": 1507309684550, "felt": 2, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [149.231995, -35.354931, 31.5] } },
            { "type": "Feature", "properties": { "id": "mb80259479", "mag": 1.25, "time": 1507309316470, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [144.585434, -37.683392, 12.62] } },
            { "type": "Feature", "properties": { "id": "uu60251412", "mag": 2.1, "time": 1507308318150, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [148.604843, -32.24295, 6.75] } },
            { "type": "Feature", "properties": { "id": "nc72905346", "mag": 2.33, "time": 1507308237260, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [152.951096, -27.08465, 0.99] } },
            { "type": "Feature", "properties": { "id": "ci38020512", "mag": 1.61, "time": 1507308155060, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [153.283333, -28.8, 6.15] } },
            { "type": "Feature", "properties": { "id": "ci38020480", "mag": 1.04, "time": 1507307612510, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [151.256348, -23.84761, 2.75] } },
            { "type": "Feature", "properties": { "id": "ak16990671", "mag": 1.6, "time": 1507307067130, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [142.487991, -38.38176, 1.8] } },
            { "type": "Feature", "properties": { "id": "nc72905326", "mag": 1.17, "time": 1507305678060, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [144.726074, -37.577419, 2.5] } },
            { "type": "Feature", "properties": { "id": "mb80259459", "mag": 0.95, "time": 1507305300890, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [133.883621, -23.697479, 12.4] } },
            { "type": "Feature", "properties": { "id": "ci38020408", "mag": 1.2, "time": 1507302977930, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [114.614594, -28.778971, -0.6] } },
            { "type": "Feature", "properties": { "id": "ak16990501", "mag": 2.8, "time": 1507302735109, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [115.641373, -33.32711, 148.9] } },
            { "type": "Feature", "properties": { "id": "us2000b20f", "mag": 5.4, "time": 1507301800580, "felt": 169, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [117.865952, -35.003101, 47.42] } },
            { "type": "Feature", "properties": { "id": "ak16990465", "mag": 1.7, "time": 1507301707708, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [152.873764, -25.29052, 0.0] } },
            { "type": "Feature", "properties": { "id": "ci38020392", "mag": 2.6, "time": 1507301676460, "felt": 1, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [140.77919, -37.831799, 5.89] } },
            { "type": "Feature", "properties": { "id": "ak16990463", "mag": 1.6, "time": 1507300956103, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [151.671234, -30.50828, 20.0] } },
            { "type": "Feature", "properties": { "id": "uu60251397", "mag": 1.18, "time": 1507300478100, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [137.564835, -33.032681, 9.68] } },
            { "type": "Feature", "properties": { "id": "nn00608296", "mag": 1.1, "time": 1507299948387, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [147.068024, -38.11095, 8.7] } },
            { "type": "Feature", "properties": { "id": "ci38020376", "mag": 1.4, "time": 1507299919340, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [150.311737, -33.713032, 2.24] } },
            { "type": "Feature", "properties": { "id": "nn00608295", "mag": 2.0, "time": 1507298898804, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [149.720856, -34.751549, 8.7] } },
            { "type": "Feature", "properties": { "id": "us2000b1zv", "mag": 5.1, "time": 1507298433140, "felt": 1, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [152.704926, -25.54073, 21.82] } },
            { "type": "Feature", "properties": { "id": "ak16990379", "mag": 2.0, "time": 1507296668722, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [115.781281, -32.230129, 112.0] } },
            { "type": "Feature", "properties": { "id": "ak16990317", "mag": 2.4, "time": 1507295355033, "felt": 2, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [145.903748, -41.05584, 21.1] } },
            { "type": "Feature", "properties": { "id": "nc72905256", "mag": 1.69, "time": 1507295344860, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [144.751846, -36.140572, 0.72] } },
            { "type": "Feature", "properties": { "id": "ci38020296", "mag": 0.98, "time": 1507294899000, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [146.351517, -41.176949, 12.35] } },
            { "type": "Feature", "properties": { "id": "nc72905246", "mag": 1.14, "time": 1507294685610, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [117.146477, -20.772289, 2.36] } },
            { "type": "Feature", "properties": { "id": "nc72905241", "mag": 1.27, "time": 1507294429860, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [151.583333, -32.75, 1.56] } },
            { "type": "Feature", "properties": { "id": "ak16990306", "mag": 1.6, "time": 1507293337500, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [146.541504, -38.195278, 0.0] } },
            { "type": "Feature", "properties": { "id": "nc72905231", "mag": 1.31, "time": 1507293268040, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [139.273453, -35.119862, 0.05] } },
            { "type": "Feature", "properties": { "id": "mb80259449", "mag": 1.29, "time": 1507293189490, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [152.517151, -32.181358, 9.91] } },
            { "type": "Feature", "properties": { "id": "nc72905226", "mag": 1.25, "time": 1507291334810, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [141.451202, -31.9652, -0.35] } },
            { "type": "Feature", "properties": { "id": "ci38020256", "mag": 2.0, "time": 1507290973570, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [116.842949, -20.738951, 6.62] } },
            { "type": "Feature", "properties": { "id": "ci38020240", "mag": 1.05, "time": 1507290356170, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [138.749023, -34.602509, 16.75] } },
            { "type": "Feature", "properties": { "id": "us2000b1xz", "mag": 5.2, "time": 1507289341850, "felt": null, "tsunami": 1 }, "geometry": { "type": "Point", "coordinates": [146.050934, -34.288528, 106.51] } },
            { "type": "Feature", "properties": { "id": "uw61338256", "mag": 1.22, "time": 1507287741010, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [147.316667, -42.983333, 9.57] } },
            { "type": "Feature", "properties": { "id": "ci38020232", "mag": 1.4, "time": 1507287412090, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [118.610588, -20.312149, 9.47] } },
            { "type": "Feature", "properties": { "id": "mb80259444", "mag": 1.6, "time": 1507286758530, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [153.565414, -28.86414, 3.88] } },
            { "type": "Feature", "properties": { "id": "mb80259434", "mag": 1.18, "time": 1507286693390, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [146.320557, -36.358459, 9.95] } },
            { "type": "Feature", "properties": { "id": "ak16990167", "mag": 3.0, "time": 1507285562299, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [137.75, -32.483333, 28.0] } },
            { "type": "Feature", "properties": { "id": "ak16990162", "mag": 3.2, "time": 1507285408267, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [150.719421, -33.581169, 0.1] } },
            { "type": "Feature", "properties": { "id": "hv61935226", "mag": 1.78, "time": 1507284229580, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [151.166031, -32.567421, 7.76] } },
            { "type": "Feature", "properties": { "id": "hv61935131", "mag": 1.67, "time": 1507283791470, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [153.159424, -27.08367, 12.183] } },
            { "type": "Feature", "properties": { "id": "ak16990109", "mag": 1.9, "time": 1507282869514, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [135.87442, -34.72625, 0.0] } },
            { "type": "Feature", "properties": { "id": "us2000b1xd", "mag": 4.4, "time": 1507281825250, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [122.23922, -17.955379, 44.07] } },
            { "type": "Feature", "properties": { "id": "ak16990102", "mag": 1.6, "time": 1507281420124, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [142.199814, -36.711311, 70.6] } },
            { "type": "Feature", "properties": { "id": "hv61935091", "mag": 2.94, "time": 1507279304370, "felt": 1, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [138.017456, -33.191761, 14.051] } },
            { "type": "Feature", "properties": { "id": "nn00608291", "mag": 1.6, "time": 1507279195578, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [152.034378, -28.219009, 5.7] } },
            { "type": "Feature", "properties": { "id": "nc72905186", "mag": 0.99, "time": 1507278858510, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [152.830933, -31.078979, 5.31] } },
            { "type": "Feature", "properties": { "id": "us2000b1v8", "mag": 6.0, "time": 1507276773110, "felt": 108, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [141.605743, -38.352612, 10.0] } },
            { "type": "Feature", "properties": { "id": "uu60251377", "mag": 1.43, "time": 1507274976970, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [152.64769, -26.211519, 5.95] } },
            { "type": "Feature", "properties": { "id": "ak16989976", "mag": 3.1, "time": 1507274375943, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [150.890091, -32.261181, 0.0] } },
            { "type": "Feature", "properties": { "id": "mb80259414", "mag": 1.86, "time": 1507273645130, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [148.175903, -33.137199, 1.73] } },
            { "type": "Feature", "properties": { "id": "us2000b1v0", "mag": 4.7, "time": 1507273552100, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [150.136307, -33.482471, 10.0] } },
            { "type": "Feature", "properties": { "id": "ak16989973", "mag": 1.3, "time": 1507272833815, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [147.651752, -37.830789, 19.7] } },
            { "type": "Feature", "properties": { "id": "us2000b2dh", "mag": 3.3, "time": 1507270603000, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [148.247543, -20.01367, 22.0] } },
            { "type": "Feature", "properties": { "id": "ak16989967", "mag": 1.9, "time": 1507270303410, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [150.744064, -23.126829, 41.0] } },
            { "type": "Feature", "properties": { "id": "ci38020152", "mag": 1.08, "time": 1507270230410, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [150.175415, -35.706581, 3.78] } },
            { "type": "Feature", "properties": { "id": "us2000b1um", "mag": 2.7, "time": 1507269804040, "felt": 2, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [150.852188, -34.668282, 7.67] } },
            { "type": "Feature", "properties": { "id": "nc72905156", "mag": 1.79, "time": 1507269478010, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [115.345497, -33.652489, 2.67] } },
            { "type": "Feature", "properties": { "id": "nc71107634", "mag": 1.13, "time": 1507269413290, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [146.031021, -17.522091, 12.1] } },
            { "type": "Feature", "properties": { "id": "us2000b1un", "mag": 4.3, "time": 1507269388630, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [132.263474, -14.46517, 71.76] } },
            { "type": "Feature", "properties": { "id": "uu60251357", "mag": 1.47, "time": 1507268672130, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [148.034836, -21.99828, 2.92] } },
            { "type": "Feature", "properties": { "id": "ak16989960", "mag": 1.1, "time": 1507268319981, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [152.95, -29.7, 14.8] } },
            { "type": "Feature", "properties": { "id": "hv61935031", "mag": 1.75, "time": 1507267817920, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [151.262054, -27.18169, 10.185] } },
            { "type": "Feature", "properties": { "id": "nc72905151", "mag": 1.08, "time": 1507267299070, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [146.263535, -20.07671, 4.0] } },
            { "type": "Feature", "properties": { "id": "mb80259404", "mag": 1.03, "time": 1507266753410, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [148.157837, -23.522961, 11.23] } },
            { "type": "Feature", "properties": { "id": "us2000b1u8", "mag": 4.6, "time": 1507265974560, "felt": 1, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [143.552652, -35.3383, 36.33] } },
            { "type": "Feature", "properties": { "id": "ci38020112", "mag": 1.06, "time": 1507265623210, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [150.472473, -35.359058, 3.46] } },
            { "type": "Feature", "properties": { "id": "nc72905146", "mag": 1.56, "time": 1507265461960, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [143.584885, -38.339001, 1.42] } },
            { "type": "Feature", "properties": { "id": "uw61338091", "mag": 1.62, "time": 1507265317630, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [147.406662, -19.573931, 23.03] } },
            { "type": "Feature", "properties": { "id": "nc72896316", "mag": 1.09, "time": 1505998199150, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [142.028915, -37.74334, -1.13] } },
            { "type": "Feature", "properties": { "id": "nc72896306", "mag": 1.43, "time": 1505997631810, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [151.837296, -26.53994, 2.18] } },
            { "type": "Feature", "properties": { "id": "nm60207176", "mag": 1.81, "time": 1505997033100, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [151.111664, -29.774031, 9.49] } },
            { "type": "Feature", "properties": { "id": "ak16875021", "mag": 1.2, "time": 1505996145934, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [149.841568, -29.46278, 13.9] } },
            { "type": "Feature", "properties": { "id": "ak16875018", "mag": 1.2, "time": 1505995669198, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [144.953643, -35.532447, 9.1] } },
            { "type": "Feature", "properties": { "id": "nc72896296", "mag": 1.47, "time": 1505995317350, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [121.882591, -33.86013, 9.67] } },
            { "type": "Feature", "properties": { "id": "nm60207166", "mag": 1.64, "time": 1505994488630, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [138.621536, -35.550419, 7.47] } },
            { "type": "Feature", "properties": { "id": "us2000asex", "mag": 4.8, "time": 1505994269370, "felt": 3, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [148.301071, -34.313499, 100.11] } },
            { "type": "Feature", "properties": { "id": "nn00606244", "mag": 1.4, "time": 1505993181062, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [113.659401, -24.88073, 2.5] } },
            { "type": "Feature", "properties": { "id": "uu60248402", "mag": 1.76, "time": 1505993050130, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [146.404831, -34.551048, 12.34] } },
            { "type": "Feature", "properties": { "id": "ak16911577", "mag": 1.8, "time": 1505992688210, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [150.258377, -30.98065, 101.3] } },
            { "type": "Feature", "properties": { "id": "nc72896276", "mag": 1.87, "time": 1505990638730, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [149.75, -30.333333, 2.57] } },
            { "type": "Feature", "properties": { "id": "ak16911575", "mag": 1.4, "time": 1505990312220, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [143.739227, -37.04562, 91.3] } },
            { "type": "Feature", "properties": { "id": "ci38007296", "mag": 1.16, "time": 1505989019560, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [142.780884, -37.05632, 12.0] } },
            { "type": "Feature", "properties": { "id": "ak16874826", "mag": 2.4, "time": 1505988598717, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [145.47522, -17.268641, 3.1] } },
            { "type": "Feature", "properties": { "id": "ak16874821", "mag": 3.9, "time": 1505988559362, "felt": 2, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [148.696625, -33.835541, 4.1] } },
            { "type": "Feature", "properties": { "id": "us2000asdx", "mag": 3.2, "time": 1505987188740, "felt": 4, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [153.611938, -28.64201, 9.51] } },
            { "type": "Feature", "properties": { "id": "nc72896231", "mag": 1.31, "time": 1505985984190, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [148.225052, -35.300159, 11.74] } },
            { "type": "Feature", "properties": { "id": "ak16874817", "mag": 1.2, "time": 1505985541058, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [149.125977, -36.234692, 123.5] } },
            { "type": "Feature", "properties": { "id": "nc72896221", "mag": 1.81, "time": 1505985066080, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [149.874496, -36.930099, 4.11] } },
            { "type": "Feature", "properties": { "id": "ak16911571", "mag": 1.2, "time": 1505984945428, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [150.515043, -24.395895, 51.2] } },
            { "type": "Feature", "properties": { "id": "us2000astb", "mag": 3.2, "time": 1505984479950, "felt": 1, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [146.166667, -18.65, 7.26] } },
            { "type": "Feature", "properties": { "id": "ak16874735", "mag": 1.1, "time": 1505984351439, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [149.581284, -33.417358, 12.5] } },
            { "type": "Feature", "properties": { "id": "ak16874733", "mag": 1.8, "time": 1505984244290, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [142.927277, -37.285419, 10.8] } },
            { "type": "Feature", "properties": { "id": "ak16911567", "mag": 1.4, "time": 1505983878943, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [145.593552, -38.605862, 70.2] } },
            { "type": "Feature", "properties": { "id": "ak16874730", "mag": 1.6, "time": 1505983557544, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [116.674232, -31.649321, 128.6] } },
            { "type": "Feature", "properties": { "id": "ak16874715", "mag": 3.0, "time": 1505983090867, "felt": 1, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [128.744141, -15.77813, 134.3] } },
            { "type": "Feature", "properties": { "id": "ak16874713", "mag": 1.8, "time": 1505982752561, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [148.787506, -26.56741, 62.9] } },
            { "type": "Feature", "properties": { "id": "ak16874708", "mag": 1.6, "time": 1505981986749, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [149.587067, -32.59948, 9.7] } },
            { "type": "Feature", "properties": { "id": "ci38007280", "mag": 1.01, "time": 1505981662400, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [119.729637, -23.394506, 12.57] } },
            { "type": "Feature", "properties": { "id": "nc72896186", "mag": 1.8, "time": 1505981520300, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [131.111649, -12.55397, 0.23] } },
          ]
        },
        cluster: true,
        clusterMaxZoom: 50, // Max zoom to cluster points on
        clusterRadius: 30 // Radius of each cluster when clustering points (defaults to 50)
      });

      map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'earthquakes',
        filter: ['has', 'point_count'],
        paint: {
          // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
          // with three steps to implement three types of circles:
          //   * Blue, 20px circles when point count is less than 100
          //   * Yellow, 30px circles when point count is between 100 and 750
          //   * Pink, 40px circles when point count is greater than or equal to 750
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#51bbd6',
            3,
            '#f1f075',
            8,
            '#f28cb1',
            12,
            '#c6fc03'
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,
            100,
            30,
            750,
            40
          ]
        }
      });

      map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'earthquakes',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12
        }
      });

      map.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'earthquakes',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': '#11b4da',
          'circle-radius': 4,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff'
        }
      });

      // inspect a cluster on click
      map.on('click', 'clusters', (e) => {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ['clusters']
        });
        var clusterId = features[0].properties.cluster_id;
        map.getSource('earthquakes').getClusterExpansionZoom(
          clusterId,
          function (err, zoom) {
            if (err) return;

            map.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom
            });
          }
        );
      });

      // When a click event occurs on a feature in
      // the unclustered-point layer, open a popup at
      // the location of the feature, with
      // description HTML from its properties.
      map.on('click', 'unclustered-point', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const gamers = e.features[0].properties.gamers;
        let tsunami;

        if (e.features[0].properties.tsunami === 1) {
          tsunami = 'yes';
        } else {
          tsunami = 'no';
        }

        // Ensure that if the map is zoomed out such that
        // multiple copies of the feature are visible, the
        // popup appears over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(
            'Gamers: ' + gamers + '<br>Was there a tsunami?: ' + tsunami
          )
          .addTo(map);
      });

      // map.on('mouseenter', 'clusters', function () {
      //   map.getCanvas().style.cursor = 'pointer';
      // });
      // map.on('mouseleave', 'clusters', function () {
      //   map.getCanvas().style.cursor = '';
      // });

      // Create a popup, but don't add it to the map yet.
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });

      map.on('mouseenter', 'clusters', (e) => {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';
        const clusterSource = map.getSource(/* cluster layer data source id */'earthquakes');

        const clusterId = e.features[0].properties.cluster_id;
        const point_count = e.features[0].properties.point_count;

        let clusterData = null;

        clusterSource.getClusterLeaves(clusterId, point_count, 0, (err, aFeatures) => {
          clusterData = aFeatures;

          let gamersCount = 0;
          if (clusterData !== null && clusterData !== undefined) {
            clusterData.forEach(data => {
              if (data.properties.gamers !== undefined) {
                gamersCount = gamersCount + data.properties.gamers;
              }
            });

            console.log(gamersCount);
            const coordinateslocal = e.features[0].geometry.coordinates.slice();
            popup.setLngLat(coordinateslocal).setHTML('Total Gamers: ' + gamersCount.toFixed()).addTo(map);
          }

          console.log('getClusterLeaves', err, aFeatures);
        })

        const coordinates = e.features[0].geometry.coordinates.slice();
        // const description = e.features[0].properties.gamers;
        const description = 'Hello World';

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        //   coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        // }

        // Populate the popup and set its coordinates
        // based on the feature found.
        // popup.setLngLat(coordinates).setHTML(description).addTo(map);
      });

      map.on('mouseleave', 'clusters', () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
      });
    });
  }

}
