console.log('Hello!');

// Get URL parameters
const params = new URLSearchParams(window.location.search);
const selectedUni = params.get("uni");

// Set content based on selection

function universityEntered(uni_name) {
    let lat;
    let long;
    let zoom = 15;
    let radius;

    if (uni_name) {
        document.getElementById("input").innerHTML = "You selected " + selectedUni;
    } else {
        return;
    }

    if (uni_name == "IUI") {
        document.getElementById("input").innerHTML = "Indiana University, Indianapolis, great choice!";
        lat = 39.775991;
        long =  -86.176811;
        zoom = 14;

        // adding icons near iui


    }

    else if (uni_name == "IVYTC") {
        document.getElementById("input").innerHTML = "Ivy Tech Community College- wait a second, I go there!";
        lat = 39.804199;
        long = -86.158626;
        zoom = 15;
    }

    else if (uni_name == "UIndy") {
        document.getElementById("input").innerHTML = "University of Indianapolis- wait, this is a thing?";
        lat = 39.709967
        long = -86.134518;
        zoom = 15;

    }


    else if (uni_name == "MarianU") {
        document.getElementById("input").innerHTML = "Marian University, great choice!";
        lat = 39.812334;
        long = -86.204259;
        zoom = 15;
    }
    else if (uni_name == "ButlerU") {
        document.getElementById("input").innerHTML = "Butler University, great choice!";
        lat = 39.841010;
        long = -86.174033;
        zoom = 15;
    }

    else if (uni_name == "MartU") {
        document.getElementById("input").innerHTML = "Martin University, great choice!";
        lat = 39.798712;
        long = -86.104;
        zoom = 17;
    }
    else if (uni_name == "VinU") {
        document.getElementById("input").innerHTML = "Vincennes University, great choice!";
        lat = 38.686426;
        long = -87.523433;
        zoom = 19;
    }

    createMap(lat, long, zoom, radius);
}

universityEntered(selectedUni);

// Creating Map

function createMap(lat = 39.7684, long = -86.1581, zoom_input = 10) {
    // Default coordinates are for Indianapolis, Indiana (39.7684° N, 86.1581° W)

    // Define the map's initial configuration
    let mapHash = {
        center: [lat, long],
        zoom: zoom_input
    };

    var map = new L.map('map', mapHash);
    // Create the Leaflet map and set the tile layer
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {maxZoom: 40, attribution: '© OpenStreetMap' }).addTo(map);


    // Creating Icon Class
    var LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: 'images/leaf-shadow.png',
            iconSize:     [38, 95],
            shadowSize:   [50, 64],
            iconAnchor:   [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor:  [-3, -76]
        }
    });

    // creating icon objects

        // red
        var redIconObject = new LeafIcon({iconUrl: 'images/leaf-red.png'});
        let redIcon = L.marker([lat, long] , { icon : redIconObject} );

    // adding icon to map
    redIcon.addTo(map);

    // adding circle to map
    var circle = L.circle([lat, long], {
        color: '#2471a3',
        fillColor: '#2471a3',
        fillOpacity: 0.5,
        radius: 1000
    });
    circle.addTo(map);

    // adding markers to map

        // taco bell

        var tacoBellMarker1 = L.marker([39.780066, -86.173679],{alt : 'Taco Bell'});
        tacoBellMarker1.addTo(map).bindPopup(
            '<b>Name:</b> Taco Bell<br>' +
            '<b>Address:</b> 951 Indiana AvenueIndianapolis, IN 46202<br>' +
            '<b>Miles From Campus:</b> 0.3<br>' +
            '<b>Date Info Entered:</b> 2025-04-12<br>' +
            '<a href = "https://www.youtube.com/" target="_blank">YouTube</a>');

    return map; // Return the created map if needed for further use
}


// function to add cirlce to map
function addCircle() {

}

const sqlite3 = require('sqlite3').verbose();

// Connect to the database (will create it if it doesn't exist)
const db = new sqlite3.Database('/Users/harjotsingh/code/server1/restauraunt_indy.db');

// Run a SELECT query
db.all("SELECT * FROM IndianaUniversityIndianapolis", [], (err, rows) => {
  if (err) {
    console.error(err.message);
    return;
  }

  // Loop through the results
  rows.forEach((row) => {
    console.log(row);
  });
});

// Close the database connection when done
db.close();


/*

Unused Icons:

    // green
    var greenIconObject = new LeafIcon({iconUrl: 'images/leaf-green.png'});
    let greenIcon = L.marker([lat, long] , { icon : greenIconObject} );


    // orange
    var orangeIconObject = new LeafIcon({iconUrl: 'images/leaf-orange.png'});
    let orangeIcon = L.marker([lat, long] , { icon : orangeIconObject} );

*/


