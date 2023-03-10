/**
    * Aufgabe: Endabgabe 
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 10.02.2023
    * Quellen: In Zusammenarbeit mit Vivien Peschke, Anki Pfeffer und Henning Pils
    */

namespace Fireworks {

    //global canvas
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let lifetime: number;
    let color: string;
    let shape: string;
    let rocket: Rocket[] = [];

    export let rs1: boolean = true;
    export let rs2: boolean = false;
    export let rs3: boolean = false;
    export let rs4: boolean = false;


    //Laden der Seite
    window.addEventListener("load", handleLoad);



    async function handleLoad(_event: Event): Promise<void> {
        canvas = document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        //Größe Canvas
        crc2.canvas.width = window.innerWidth * 0.6;
        crc2.canvas.height = window.innerHeight * 0.45;

        //fetch Data


        //eventlistener
        document.getElementById("canvas").addEventListener("click", createRocket);
        document.getElementById("savebutton").addEventListener("click", saveRocket);
        document.getElementById("rs1").addEventListener("click", clickRocketButton);
        document.getElementById("rs2").addEventListener("click", clickRocketButton);
        document.getElementById("rs3").addEventListener("click", clickRocketButton);
        document.getElementById("rs4").addEventListener("click", clickRocketButton);

        window.setInterval(animateRocket, 20);

        getSavedRocket();
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
            lifetime = Number(formData.get("thelifetime"));
            color = String(formData.get("thecolor"));
            shape = String(formData.get("theshape"));

            console.log(entry[1]);
        }

        let rocketPosition: Vector = new Vector(mousePositionX, mousepositionY);
        let rocketCreated: Rocket = new Rocket(lifetime, color, shape, rocketPosition);
        rocket.push(rocketCreated);

    }


    function animateRocket(): void {
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        if (rocket.length > 0) {
            for (let i: number = 0; i < rocket.length; i++) {
                if (rocket[i].particles.length != 0) {
                    rocket[i].draw();
                } else {
                    rocket.splice(i, 1);
                }
            }
        }
    }

    //Save Button liest Werte der FormData
    export async function saveRocket(_event: Event): Promise<void> {

        console.log("Daten");

        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData) {
            lifetime = Number(formData.get("thelifetime"));
            color = String(formData.get("thecolor"));
            shape = String(formData.get("theshape"));

            console.log(entry[1]);
        }

        sendData(formData);

    }

    //Zufällige Nummer für andere Funktionen 
    export function getRandomNumber(_min: number, _max: number): number {
        return Math.floor(Math.random() * (_max - _min + 1)) + _min;
    }

    //Farbe des ausgewählten Buttons wird angezeigt
    function clickRocketButton(_event: MouseEvent): void {
        let eventTarget: EventTarget = _event.target;
        let button1: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rs1");
        let button2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rs2");
        let button3: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rs3");
        let button4: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rs4");

        if (eventTarget == button1) {
            rs1 = true;
            rs2 = false;
            rs3 = false;
            rs4 = false;
        } else if (eventTarget == button2) {
            rs1 = false;
            rs2 = true;
            rs3 = false;
            rs4 = false;
        } else if (eventTarget == button3) {
            rs1 = false;
            rs2 = false;
            rs3 = true;
            rs4 = false;
        } else if (eventTarget == button4) {
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
           
        }
        else if (rs2 == true) {
            button2.style.backgroundColor = "#814bff";
            button1.style.backgroundColor = "rgb(213, 189, 236)";
            button3.style.backgroundColor = "rgb(213, 189, 236)";
            button4.style.backgroundColor = "rgb(213, 189, 236)";
        }
        else if (rs3 == true) {
            button3.style.backgroundColor = "#814bff";
            button2.style.backgroundColor = "rgb(213, 189, 236)";
            button1.style.backgroundColor = "rgb(213, 189, 236)";
            button4.style.backgroundColor = "rgb(213, 189, 236)";
        }
        else if (rs4 == true) {
            button4.style.backgroundColor = "#814bff";
            button1.style.backgroundColor = "rgb(213, 189, 236)";
            button3.style.backgroundColor = "rgb(213, 189, 236)";
            button2.style.backgroundColor = "rgb(213, 189, 236)";

        }

        getSavedRocket();
    }


}