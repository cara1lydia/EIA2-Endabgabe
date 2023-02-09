/**
    * Aufgabe: Endabgabe
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 10.02.2023
    * Quellen:
    */
var Fireworks;
(function (Fireworks) {
    let lifetime;
    let color;
    let shape;
    let radius;
    let opacity;
    let speed;
    let rocket;
    //Laden der Seite
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        Fireworks.canvas = document.querySelector("canvas");
        Fireworks.crc2 = Fireworks.canvas.getContext("2d");
        //Größe Canvas
        Fireworks.crc2.canvas.width = window.innerWidth * 0.6;
        Fireworks.crc2.canvas.height = window.innerHeight * 0.45;
        //eventlistener
        document.getElementById("canvas").addEventListener("click", createRocket);
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
        //let rocketPosition: Vector = new Vector(mousePositionX, mousepositionY);
        //let rocketCreated: Firework = new Rocket (size, color, shape, rocketPosition);
        //fireworks.push(rocketCreated);
        animateRocket(mousePositionX, mousepositionY, lifetime, color, radius, opacity, speed, shape);
        console.log(mousePositionX, mousepositionY);
        console.log(lifetime, color, shape);
    }
    //kreieren der Rakete 
    function animateRocket(_mousePositionX, _mousePositionY, _size, _color, _radius, _opacity, _speed, _shape) {
        let rocketPosition = new Fireworks.Vector(_mousePositionX, _mousePositionY);
        let color = _color;
        let quantity = 30;
        let radian = (Math.PI * 2) / quantity;
        for (let i = 0; i < quantity; i++) {
            let px;
            let py;
            let speed;
            let newRocket;
            if (i % 2 == 0) {
                px = Math.cos(radian * i) * 150 + Math.random() * 20;
                py = Math.sin(radian * i) * 150 + Math.random() * 20;
            }
            else {
                px = Math.cos(radian * i) * 110 * Math.random() * 2;
                py = Math.sin(radian * i) * 110 * Math.random() * 2;
            }
            speed = new Fireworks.Vector(px, py);
            newRocket = new Fireworks.Rocket(lifetime, color, shape, rocketPosition);
            rocket.push(newRocket);
        }
    }
    //Save Button überträgt Settings auf Speicherstand
    function saveRocket() {
    }
    //Beim Klicken auf Speicherstand werden Daten auf Settings übertragen
    function getSavedRocket() {
    }
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Endabgabe_main_script.js.map