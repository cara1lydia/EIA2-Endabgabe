/**
    * Aufgabe: Endabgabe 
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 10.02.2023
    * Quellen: In Zusammenarbeit mit Vivi, Anki, Judith und Henning
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
    let particle: Particle;
    let url: string = "https://webuser.hs-furtwangen.de/~brueggen/Database/index.php/";




    //Laden der Seite
    window.addEventListener("load", handleLoad);

    async function handleLoad(_event: Event): Promise<void> {
        canvas = document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        //Größe Canvas
        crc2.canvas.width = window.innerWidth * 0.6;
        crc2.canvas.height = window.innerHeight * 0.45;

        //eventlistener
        document.getElementById("canvas").addEventListener("click", createRocket);
        document.getElementById("savebutton").addEventListener("click", saveRocket);

        window.setInterval(animateRocket, 20);
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
        let rocketCreated: Rocket = new Rocket(lifetime, color, shape, rocketPosition);
        console.log(rocketCreated);
        rocket.push(rocketCreated);

        console.log(rocket);


        //animateRocket(mousePositionX, mousepositionY, lifetime, color, radius, opacity, speed, shape);

        console.log(mousePositionX, mousepositionY);
        console.log(lifetime, color, shape);
    }


    function animateRocket(): void {
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
    export async function saveRocket(_event: Event): Promise<void> {

        console.log("Daten");

        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData) {
            lifetime = Number(formData.get("thesize"));
            color = String(formData.get("thecolor"));
            shape = String(formData.get("theshape"));

            console.log(entry[1]);
        }

        sendData(formData);

    }
    //Daten werden dem Server zugeschickt 
    async function sendData(_formData: FormData): Promise<void> {

        //Umwandlung der FormData ins Json Format
        interface FormDataJSON {
            [key: string]: FormDataEntryValue | FormDataEntryValue[];
        }
        let json: FormDataJSON = {};
        for (let key of _formData.keys())
            if (!json[key]) {
                let values: FormDataEntryValue[] = _formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }

        //erzeugt URL query Befehl für Server
        let query: URLSearchParams = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Rockets");
        query.set("data", JSON.stringify(json));

        //Konsolenbefehl zur Überprüfung der URL
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        if (responseText.includes("success")) {
            console.log("Item added!");
        }
        else {
            console.log("Error! Try again!");
        }
    }

    //Beim Klicken auf Speicherstand werden Daten auf Settings übertragen
    function getSavedRocket(): void {

    }

    export function getRandomNumber(_min: number, _max: number): number {
        return Math.floor(Math.random() * (_max - _min + 1) ) + _min;
    }


}