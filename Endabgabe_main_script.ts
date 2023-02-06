/**
    * Aufgabe: Endabgabe
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 10.02.2023
    * Quellen: 
    */

namespace Fireworks {

    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        crc2.canvas.width = window.innerWidth * 0.6;
        crc2.canvas.height = window.innerHeight * 0.45;
    }







}