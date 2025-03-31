/*
document.getElementById("first_js").innerHTML = "My First JavaScript";
*/

function fun() {
    document.getElementById("first_js").innerHTML = 'Big ahh dih 💔';
}

function apple() {
    document.getElementById("d1").innerHTML = "Veinny ahh Dih 💔";
}


function savein(var1, output) {


    if (!document.getElementById(var1).value) {

         /* Printing no zip code entered in front html */

         document.getElementById(output).innerHTML = "You did not enter a Zip Code.";
         let fal2 = false;
         localStorage.setItem("let2", fal2);

    } else {

        /* Assigning Zip Code as userInput */
        /* Printing it to the assigned output element in front html  */
        /* Saving Zip Code as userInput */

        let userInput = document.getElementById(var1).value;
        localStorage.setItem("savedZipCode", userInput);


        let fal2 = true;
        localStorage.setItem("let2", fal2);

        /* Accessing Zip Code as userInput */
        let savedCode = localStorage.getItem("savedZipCode");
        document.getElementById(output).innerHTML = "You entered " + savedCode + " as a Zip Code.";
    }

}

if (localStorage.getItem("let2") == "true") {
    document.getElementById("zip_entered").innerHTML = "You entered zip code " + localStorage.getItem("savedZipCode") + ".";
} else {
    document.getElementById("zip_entered").innerHTML = "You did not enter a zip code. ";
}


// Coding the map

let RenoHouse = {
    center: [39.639344, -119.863259],
    zoom: 20
}

let mapHash = {
    center: [39.7508, -86.1603],
    zoom: 11
}

var map = new L.map('map', mapHash);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
