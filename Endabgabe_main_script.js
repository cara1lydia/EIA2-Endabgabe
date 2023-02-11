/**
    * Aufgabe: Endabgabe
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 10.02.2023
    * Quellen: In Zusammenarbeit mit Vivi, Anki und Henning
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
    let rs1 = true;
    let rs2 = false;
    let rs3 = false;
    let rs4 = false;
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
        document.getElementById("rs1").addEventListener("click", clickRocketButton);
        document.getElementById("rs2").addEventListener("click", clickRocketButton);
        document.getElementById("rs3").addEventListener("click", clickRocketButton);
        document.getElementById("rs4").addEventListener("click", clickRocketButton);
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
        Fireworks.crc2.clearRect(0, 0, Fireworks.canvas.width, Fireworks.canvas.height);
        if (rocket.length > 0) {
            for (let i = 0; i < rocket.length; i++) {
                if (rocket[i].particles.length != 0) {
                    rocket[i].draw();
                }
                else {
                    rocket.splice(i, 1);
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
        query.set("command", "update");
        query.set("collection", "Rockets");
        //je nach ausgewählter Raktete wird auf eine andere ID zugegriffen und diese geupdatet
        if (rs1 == true) {
            query.set("id", "63e7beb4dd720");
        }
        else if (rs2 == true) {
            query.set("id", "63e7beb6c8a50");
        }
        else if (rs3 == true) {
            query.set("id", "63e7beb91ba6b");
        }
        else if (rs4 == true) {
            query.set("id", "63e7bebbb09cd");
        }
        query.set("data", JSON.stringify(json));
        //Konsolenbefehl zur Überprüfung der URL
        let response = await fetch(url + "?" + query.toString());
        console.log(response);
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
        if (rs1 == true) {
            //zugriff auf Database
        }
        else if (rs2 == true) {
        }
        else if (rs3 == true) {
        }
        else if (rs4 == true) {
        }
    }
    //Zufällige Nummer für andere Funktionen 
    function getRandomNumber(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1)) + _min;
    }
    Fireworks.getRandomNumber = getRandomNumber;
    //Farbe des ausgewählten Buttons wird angezeigt
    function clickRocketButton(_event) {
        let eventTarget = _event.target;
        let button1 = document.getElementById("rs1");
        let button2 = document.getElementById("rs2");
        let button3 = document.getElementById("rs3");
        let button4 = document.getElementById("rs4");
        if (eventTarget == button1) {
            rs1 = true;
            rs2 = false;
            rs3 = false;
            rs4 = false;
        }
        else if (eventTarget == button2) {
            rs1 = false;
            rs2 = true;
            rs3 = false;
            rs4 = false;
        }
        else if (eventTarget == button3) {
            rs1 = false;
            rs2 = false;
            rs3 = true;
            rs4 = false;
        }
        else if (eventTarget == button4) {
            rs1 = false;
            rs2 = false;
            rs3 = false;
            rs4 = true;
        }
        if (rs1 == true) {
            button1.style.backgroundColor = "#814bff";
            button2.style.backgroundColor = "rgb(213, 189, 236)";
            button3.style.backgroundColor = "rgb(213, 189, 236)";
            button4.style.backgroundColor = "rgb(213, 189, 236)";
            rs2 = false;
            rs3 = false;
            rs4 = false;
        }
        else if (rs2 == true) {
            button2.style.backgroundColor = "#814bff";
            button1.style.backgroundColor = "rgb(213, 189, 236)";
            button3.style.backgroundColor = "rgb(213, 189, 236)";
            button4.style.backgroundColor = "rgb(213, 189, 236)";
            rs1 = false;
            rs3 = false;
            rs4 = false;
        }
        else if (rs3 == true) {
            button3.style.backgroundColor = "#814bff";
            button2.style.backgroundColor = "rgb(213, 189, 236)";
            button1.style.backgroundColor = "rgb(213, 189, 236)";
            button4.style.backgroundColor = "rgb(213, 189, 236)";
            rs1 = false;
            rs2 = false;
            rs4 = false;
        }
        else if (rs4 == true) {
            button4.style.backgroundColor = "#814bff";
            button1.style.backgroundColor = "rgb(213, 189, 236)";
            button3.style.backgroundColor = "rgb(213, 189, 236)";
            button2.style.backgroundColor = "rgb(213, 189, 236)";
            rs1 = false;
            rs2 = false;
            rs3 = false;
        }
        getSavedRocket();
    }
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Endabgabe_main_script.js.map