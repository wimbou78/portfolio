// Leafletjs

//let map = L.map('mapLinkeroever').setView([51.23009, 4.41616], 16);
let map = L.map('mapLinkeroever', {
    center: [51.2224892,4.3483216,14],
    zoom: 12
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

let apMarker = L.marker([51.2224892,4.3483216,14]).addTo(map);
apMarker.bindPopup("Linkeroever").openPopup();