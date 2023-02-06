/**
    * Aufgabe: Endabgabe
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 10.02.2023
    * Quellen:
    */
var Fireworks;
(function (Fireworks) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Fireworks.crc2 = canvas.getContext("2d");
        Fireworks.crc2.canvas.width = window.innerWidth * 0.6;
        Fireworks.crc2.canvas.height = window.innerHeight * 0.45;
    }
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Endabgabe_main_script.js.map