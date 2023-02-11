namespace Fireworks {

    export let url: string = "https://webuser.hs-furtwangen.de/~brueggen/Database/index.php/";
    export let serverRockets: RocketData[] = [];
    export interface RocketData {
        lifetime: number;
        color: string;
        shape: string;
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
        console.log(response);
        let responseText: string = await response.text();
        if (responseText.includes("success")) {
            console.log("Item added!");
        }
        else {
            console.log("Error! Try again!");
        }
    }

    export async function handleData(): Promise<any> {

        let response: Response = await fetch(url + "?command=find&collection=Rockets");
        let item: string = await response.text();
        let data: any = JSON.parse(item);
        //key = ID 
        for (let key in data["data"]) {
            serverRockets.push(data["data"][key]);

            let test: any = data.data[key];

            //console.log(test);

            //console.log(test.thesize);
        }

        if (rs1 == true) {
            //zugriff auf Database
            let r1: RocketData = serverRockets[0];
            console.log(r1);

        } else if (rs2 == true) {

        } else if (rs3 == true) {

        } else if (rs4 == true) {

        }

        return serverRockets;


    }

    //Beim Klicken auf Speicherstand werden Daten auf Settings übertragen
    export function getSavedRocket(): void {

        serverRockets.splice(0, serverRockets.length);
        handleData();

        if (rs1 == true) {
            //zugriff auf Database
            type K1 = keyof RocketData[0];

        } else if (rs2 == true) {

        } else if (rs3 == true) {

        } else if (rs4 == true) {

        }


    }

}