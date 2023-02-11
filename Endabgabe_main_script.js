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
    Fireworks.rs1 = true;
    Fireworks.rs2 = false;
    Fireworks.rs3 = false;
    Fireworks.rs4 = false;
    //Laden der Seite
    window.addEventListener("load", handleLoad);
    async function handleLoad(_event) {
        Fireworks.canvas = document.querySelector("canvas");
        Fireworks.crc2 = Fireworks.canvas.getContext("2d");
        //Größe Canvas
        Fireworks.crc2.canvas.width = window.innerWidth * 0.6;
        Fireworks.crc2.canvas.height = window.innerHeight * 0.45;
        //fetch Data
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
        Fireworks.sendData(formData);
    }
    Fireworks.saveRocket = saveRocket;
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
            Fireworks.rs1 = true;
            Fireworks.rs2 = false;
            Fireworks.rs3 = false;
            Fireworks.rs4 = false;
        }
        else if (eventTarget == button2) {
            Fireworks.rs1 = false;
            Fireworks.rs2 = true;
            Fireworks.rs3 = false;
            Fireworks.rs4 = false;
        }
        else if (eventTarget == button3) {
            Fireworks.rs1 = false;
            Fireworks.rs2 = false;
            Fireworks.rs3 = true;
            Fireworks.rs4 = false;
        }
        else if (eventTarget == button4) {
            Fireworks.rs1 = false;
            Fireworks.rs2 = false;
            Fireworks.rs3 = false;
            Fireworks.rs4 = true;
        }
        if (Fireworks.rs1 == true) {
            button1.style.backgroundColor = "#814bff";
            button2.style.backgroundColor = "rgb(213, 189, 236)";
            button3.style.backgroundColor = "rgb(213, 189, 236)";
            button4.style.backgroundColor = "rgb(213, 189, 236)";
            Fireworks.rs2 = false;
            Fireworks.rs3 = false;
            Fireworks.rs4 = false;
        }
        else if (Fireworks.rs2 == true) {
            button2.style.backgroundColor = "#814bff";
            button1.style.backgroundColor = "rgb(213, 189, 236)";
            button3.style.backgroundColor = "rgb(213, 189, 236)";
            button4.style.backgroundColor = "rgb(213, 189, 236)";
            Fireworks.rs1 = false;
            Fireworks.rs3 = false;
            Fireworks.rs4 = false;
        }
        else if (Fireworks.rs3 == true) {
            button3.style.backgroundColor = "#814bff";
            button2.style.backgroundColor = "rgb(213, 189, 236)";
            button1.style.backgroundColor = "rgb(213, 189, 236)";
            button4.style.backgroundColor = "rgb(213, 189, 236)";
            Fireworks.rs1 = false;
            Fireworks.rs2 = false;
            Fireworks.rs4 = false;
        }
        else if (Fireworks.rs4 == true) {
            button4.style.backgroundColor = "#814bff";
            button1.style.backgroundColor = "rgb(213, 189, 236)";
            button3.style.backgroundColor = "rgb(213, 189, 236)";
            button2.style.backgroundColor = "rgb(213, 189, 236)";
            Fireworks.rs1 = false;
            Fireworks.rs2 = false;
            Fireworks.rs3 = false;
        }
        Fireworks.getSavedRocket();
    }
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Endabgabe_main_script.js.map