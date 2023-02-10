/**
    * Aufgabe: Endabgabe
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 10.02.2023
    * Quellen: In Zusammenarbeit mit Vivi, Anki, Judith und Henning
    */
var Fireworks;
(function (Fireworks) {
    let lifetime;
    let color;
    let shape;
    let radius;
    let opacity;
    let speed;
    let rocket = [];
    let particle;
    let url = "https://webuser.hs-furtwangen.de/~brueggen/Database/index.php/";
    //Laden der Seite
    window.addEventListener("load", handleLoad);
    async function handleLoad(_event) {
        Fireworks.canvas = document.querySelector("canvas");
        Fireworks.crc2 = Fireworks.canvas.getContext("2d");
        //Größe Canvas
        Fireworks.crc2.canvas.width = window.innerWidth * 0.6;
        Fireworks.crc2.canvas.height = window.innerHeight * 0.45;
        //eventlistener
        document.getElementById("canvas").addEventListener("click", createRocket);
        document.getElementById("savebutton").addEventListener("click", saveRocket);
        window.setInterval(animateRocket, 20);
    }
    //Ausführen der Kreation
    function createRocket(_event) {
        let rect = Fireworks.canvas.getBoundingClientRect();
        //Mouse Position wird übertragen
        let mousePositionX = _event.clientX - rect.left - 16;
        let mousepositionY = _event.clientY - rect.top - 16;
        //Daten der Settings auf Variablen anwenden 
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            lifetime = Number(formData.get("thesize"));
            color = String(formData.get("thecolor"));
            shape = String(formData.get("theshape"));
            console.log(entry[1]);
        }
        let rocketPosition = new Fireworks.Vector(mousePositionX, mousepositionY);
        let rocketCreated = new Fireworks.Rocket(lifetime, color, shape, rocketPosition);
        console.log(rocketCreated);
        rocket.push(rocketCreated);
        console.log(rocket);
        //animateRocket(mousePositionX, mousepositionY, lifetime, color, radius, opacity, speed, shape);
        console.log(mousePositionX, mousepositionY);
        console.log(lifetime, color, shape);
    }
    function animateRocket() {
        if (rocket.length > 0) {
            for (let newRocket of rocket) {
                for (let particle of newRocket.particles) {
                    particle.move(1000);
                    particle.draw();
                    newRocket.lifetime--;
                }
            }
        }
    }
    //Save Button liest Werte der FormData
    async function saveRocket(_event) {
        console.log("Daten");
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            lifetime = Number(formData.get("thesize"));
            color = String(formData.get("thecolor"));
            shape = String(formData.get("theshape"));
            console.log(entry[1]);
        }
        sendData(formData);
    }
    Fireworks.saveRocket = saveRocket;
    //Daten werden dem Server zugeschickt 
    async function sendData(_formData) {
        let json = {};
        for (let key of _formData.keys())
            if (!json[key]) {
                let values = _formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        //erzeugt URL query Befehl für Server
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Rockets");
        query.set("data", JSON.stringify(json));
        //Konsolenbefehl zur Überprüfung der URL
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        if (responseText.includes("success")) {
            console.log("Item added!");
        }
        else {
            console.log("Error! Try again!");
        }
    }
    //Beim Klicken auf Speicherstand werden Daten auf Settings übertragen
    function getSavedRocket() {
    }
    function getRandomNumber(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1)) + _min;
    }
    Fireworks.getRandomNumber = getRandomNumber;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Endabgabe_main_script.js.map