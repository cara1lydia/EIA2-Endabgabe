/**
    * Aufgabe: Endabgabe 
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 10.02.2023
    * Quellen: In Zusammenarbeit mit Vivi und Henning
    */

namespace Fireworks {

    //global canvas
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let lifetime: number;
    let color: string;
    let shape: string;
    let radius: number;
    let opacity: number;
    let speed: Vector;
    let rocket: Rocket[] = [];


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
        //Mouse Position wird übertragen
        let mousePositionX: number = _event.clientX - rect.left - 16;
        let mousepositionY: number = _event.clientY - rect.top - 16;
        //Daten der Settings auf Variablen anwenden 
        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData) {
            lifetime = Number(formData.get("thesize"));
            color = String(formData.get("thecolor"));
            shape = String(formData.get("theshape"));

            console.log(entry[1]);
        }


        let rocketPosition: Vector = new Vector(mousePositionX, mousepositionY);
        let rocketCreated: Rocket = new Rocket (lifetime, color, shape, rocketPosition);
        console.log(rocketCreated);
        rocket.push(rocketCreated);

        //animateRocket(mousePositionX, mousepositionY, lifetime, color, radius, opacity, speed, shape);

        console.log(mousePositionX, mousepositionY); 
        console.log(lifetime, color, shape);
    }

    //kreieren der Rakete 
    function animateRocket ( _mousePositionX: number, _mousePositionY: number, _size: number, _color: string, _radius: number, _opacity: number, _speed: Vector, _shape: string): void {

        let rocketPosition: Vector = new Vector(_mousePositionX, _mousePositionY);
        let color: string = _color;
        let quantity: number = 30;
        let radian: number = (Math.PI * 2) / quantity;
        
        for (let i: number = 0; i < quantity; i++) {
            let px: number;
            let py: number;
            let speed: Vector;
            let newRocket: Rocket;
            if (i % 2 == 0) {
              px = Math.cos(radian * i) * 150 + Math.random() * 20;
              py = Math.sin(radian * i) * 150 + Math.random() * 20;
            }
            else {
              px = Math.cos(radian * i) * 110 * Math.random() * 2;
              py = Math.sin(radian * i) * 110 * Math.random() * 2;
            }
            speed = new Vector(px, py);
            newRocket = new Rocket(lifetime, color, shape, rocketPosition);
            rocket.push(newRocket);
          }
    }

    //Save Button überträgt Settings auf Speicherstand
    function saveRocket (): void {

    }

    //Beim Klicken auf Speicherstand werden Daten auf Settings übertragen
    function getSavedRocket (): void {

    }


}