    maplibregl.accessToken = mapToken;

    const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/globe.json', 
    center: [77.2088, 28.6139],
    zoom: 5
    });