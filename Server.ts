namespace Fireworks {

/**
    * Aufgabe: Endabgabe 
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 10.02.2023
    * Quellen: In Zusammenarbeit mit Vivien Peschke, Anki Pfeffer und Henning Pils
    */

    export let url: string = "https://webuser.hs-furtwangen.de/~brueggen/Database/index.php/";
    export let serverRockets: RocketData[] = [];
    export interface RocketData {
        thelifetime: string;
        thecolor: string;
        theshape: string;
    }

    //Daten werden dem Server zugeschickt 
    export async function sendData(_formData: FormData): Promise<void> {

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
        query.set("command", "update");
        query.set("collection", "Rockets");

        //je nach ausgewählter Raktete wird auf eine andere ID zugegriffen und diese geupdatet
        if (rs1 == true) {
            query.set("id", "63e7beb4dd720");
        } else if (rs2 == true) {
            query.set("id", "63e7beb6c8a50");
        } else if (rs3 == true) {
            query.set("id", "63e7beb91ba6b");
        } else if (rs4 == true) {
            query.set("id", "63e7bebbb09cd");
        }
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
    export async function getSavedRocket(): Promise<any> {

        serverRockets.splice(0, serverRockets.length);
        let response: Response = await fetch(url + "?command=find&collection=Rockets");
        let item: string = await response.text();
        let data: any = JSON.parse(item);
        //key = ID 
        for (let key in data["data"]) {
            serverRockets.push(data["data"][key]);
        }

        let lifetime: HTMLInputElement = <HTMLInputElement>document.getElementById("thelifetime");
        let color: HTMLInputElement = <HTMLInputElement>document.getElementById("thecolor");
        let shape: HTMLInputElement = <HTMLInputElement>document.getElementById("theshape");

        if (rs1 == true) {
            //zugriff auf Database
            let r1: RocketData = serverRockets[0];
            r1.thelifetime = lifetime.value;
            color.value = r1.thecolor;
            shape.value = r1.theshape;

        } else if (rs2 == true) {
            let r2: RocketData = serverRockets[1];
            r2.thelifetime = lifetime.value;
            color.value = r2.thecolor;
            shape.value = r2.theshape;

        } else if (rs3 == true) {
            let r3: RocketData = serverRockets[2];
            r3.thelifetime = lifetime.value;
            color.value = r3.thecolor;
            shape.value = r3.theshape;

        } else if (rs4 == true) {
            let r4: RocketData = serverRockets[3];
            r4.thelifetime = lifetime.value;
            color.value = r4.thecolor;
            shape.value = r4.theshape;

        }

        return serverRockets;


    }




}