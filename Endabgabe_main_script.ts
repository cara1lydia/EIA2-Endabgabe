/**
    * Aufgabe: Endabgabe
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 10.02.2023
    * Quellen: 
    */

namespace Fireworks {

    //global canvas
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let size: number;
    let color: string;
    let shape: string;
    let fireworks: Firework[] = [];
    let gravity: number = 0.04;


    //Laden der Seite
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        canvas = document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        //Größe Canvas
        crc2.canvas.width = window.innerWidth * 0.6;
        crc2.canvas.height = window.innerHeight * 0.45;

        //eventlistener
        document.getElementById("canvas").addEventListener("click", createRocket);
    }

    //Ausführen der Kreation
    function createRocket(_event: MouseEvent): void {
        let rect: DOMRect = canvas.getBoundingClientRect();
        let mousePositionX: number = _event.clientX - rect.left - 16;
        let mousepositionY: number = _event.clientY - rect.top - 16;
        let formData: FormData = new FormData(document.forms[0]);

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
    function animateRocket (_size: number, _color: string, _shape: string, _mousePositionX: number, _mousePositionY: number): void {
        let rocketPosition: Vector = new Vector(_mousePositionX, _mousePositionY);
        let color: string = _color;
        let quantity: number = 30;
        let radian: number = (Math.PI * 2) / quantity;
        for (let i: number = 0; i < quantity; i++) {
            let px: number;
            let py: number;
            let velocity: Vector;
            let newRocket: Firework;
            if (i % 2 == 0) {
              px = Math.cos(radian * i) * 150 + Math.random() * 20;
              py = Math.sin(radian * i) * 150 + Math.random() * 20;
            }
            else {
              px = Math.cos(radian * i) * 110 * Math.random() * 2;
              py = Math.sin(radian * i) * 110 * Math.random() * 2;
            }
            velocity = new Vector(px, py);
            newRocket = new Rocket(size, color, shape, rocketPosition);
            fireworks.push(newRocket);
          }
    }

    //Save Button überträgt Settings auf Speicherstand
    function saveRocket (): void {

    }

    //Beim Klicken auf Speicherstand werden Daten auf Settings übertragen
    function getSavedRocket (): void {

    }


}