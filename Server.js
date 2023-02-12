var Fireworks;
(function (Fireworks) {
    /**
        * Aufgabe: Endabgabe
        * Name: Cara Lydia Brüggendieck
        * Matrikel: 269899
        * Datum: 10.02.2023
        * Quellen: In Zusammenarbeit mit Vivien Peschke, Anki Pfeffer und Henning Pils
        */
    Fireworks.url = "https://webuser.hs-furtwangen.de/~brueggen/Database/index.php/";
    Fireworks.serverRockets = [];
    //Daten werden dem Server zugeschickt 
    async function sendData(_formData) {
        let json = {};
        for (let key of _formData.keys())
            if (!json[key]) {
                let values = _formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        //erzeugt URL query Befehl für Server
        let query = new URLSearchParams();
        query.set("command", "update");
        query.set("collection", "Rockets");
        //je nach ausgewählter Raktete wird auf eine andere ID zugegriffen und diese geupdatet
        if (Fireworks.rs1 == true) {
            query.set("id", "63e7beb4dd720");
        }
        else if (Fireworks.rs2 == true) {
            query.set("id", "63e7beb6c8a50");
        }
        else if (Fireworks.rs3 == true) {
            query.set("id", "63e7beb91ba6b");
        }
        else if (Fireworks.rs4 == true) {
            query.set("id", "63e7bebbb09cd");
        }
        query.set("data", JSON.stringify(json));
        //Konsolenbefehl zur Überprüfung der URL
        let response = await fetch(Fireworks.url + "?" + query.toString());
        let responseText = await response.text();
        if (responseText.includes("success")) {
            console.log("Item added!");
        }
        else {
            console.log("Error! Try again!");
        }
    }
    Fireworks.sendData = sendData;
    //Beim Klicken auf Speicherstand werden Daten auf Settings übertragen
    async function getSavedRocket() {
        Fireworks.serverRockets.splice(0, Fireworks.serverRockets.length);
        let response = await fetch(Fireworks.url + "?command=find&collection=Rockets");
        let item = await response.text();
        let data = JSON.parse(item);
        //key = ID 
        for (let key in data["data"]) {
            Fireworks.serverRockets.push(data["data"][key]);
        }
        let lifetime = document.getElementById("thelifetime");
        let color = document.getElementById("thecolor");
        let shape = document.getElementById("theshape");
        if (Fireworks.rs1 == true) {
            //zugriff auf Database
            let r1 = Fireworks.serverRockets[0];
            r1.thelifetime = lifetime.value;
            color.value = r1.thecolor;
            shape.value = r1.theshape;
        }
        else if (Fireworks.rs2 == true) {
            let r2 = Fireworks.serverRockets[1];
            r2.thelifetime = lifetime.value;
            color.value = r2.thecolor;
            shape.value = r2.theshape;
        }
        else if (Fireworks.rs3 == true) {
            let r3 = Fireworks.serverRockets[2];
            r3.thelifetime = lifetime.value;
            color.value = r3.thecolor;
            shape.value = r3.theshape;
        }
        else if (Fireworks.rs4 == true) {
            let r4 = Fireworks.serverRockets[3];
            r4.thelifetime = lifetime.value;
            color.value = r4.thecolor;
            shape.value = r4.theshape;
        }
        return Fireworks.serverRockets;
    }
    Fireworks.getSavedRocket = getSavedRocket;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Server.js.map