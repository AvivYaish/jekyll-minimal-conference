


var map = L.map("map").setView([40.725147017266934, -73.99199177640592], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);






L.marker([40.725147017266934, -73.99199177640592])
    
    .addTo(map)
    .bindTooltip("<strong>Main Location</strong><br>It is easily customizable with title and text");
    




