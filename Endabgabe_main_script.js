/**
    * Aufgabe: Endabgabe
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 10.02.2023
    * Quellen:
    */
var Fireworks;
(function (Fireworks) {
    let size;
    let color;
    let shape;
    let fireworks = [];
    let gravity = 0.04;
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
        let mousePositionX = _event.clientX - rect.left - 16;
        let mousepositionY = _event.clientY - rect.top - 16;
        let formData = new FormData(document.forms[0]);
        /*crc2.clearRect(0, 0, canvas.width, canvas.height);*/
        for (let entry of formData) {
            size = Number(formData.get("thesize"));
            color = String(formData.get("thecolor"));
            shape = String(formData.get("theshape"));
            switch (entry[1]) {
                case "circle":
                    shape = "circle";
                    break;
                case "square":
                    shape = "square";
                    break;
            }
            console.log(entry[1]);
        }
        //let rocketPosition: Vector = new Vector(mousePositionX, mousepositionY);
        //let rocketCreated: Firework = new Rocket (size, color, shape, rocketPosition);
        //fireworks.push(rocketCreated);
        animateRocket(size, color, shape, mousePositionX, mousepositionY);
        console.log(mousePositionX, mousepositionY);
        console.log(size, color, shape);
    }
    //kreieren der Rakete 
    function animateRocket(_size, _color, _shape, _mousePositionX, _mousePositionY) {
        let rocketPosition = new Fireworks.Vector(_mousePositionX, _mousePositionY);
        let color = _color;
        let quantity = 30;
        let radian = (Math.PI * 2) / quantity;
        for (let i = 0; i < quantity; i++) {
            let px;
            let py;
            let velocity;
            let newRocket;
            if (i % 2 == 0) {
                px = Math.cos(radian * i) * 150 + Math.random() * 20;
                py = Math.sin(radian * i) * 150 + Math.random() * 20;
            }
            else {
                px = Math.cos(radian * i) * 110 * Math.random() * 2;
                py = Math.sin(radian * i) * 110 * Math.random() * 2;
            }
            velocity = new Fireworks.Vector(px, py);
            newRocket = new Fireworks.Rocket(size, color, shape, rocketPosition);
            fireworks.push(newRocket);
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