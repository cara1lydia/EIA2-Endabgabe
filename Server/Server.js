var Fireworks;
(function (Fireworks) {
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
        console.log(response);
        let responseText = await response.text();
        if (responseText.includes("success")) {
            console.log("Item added!");
        }
        else {
            console.log("Error! Try again!");
        }
    }
    Fireworks.sendData = sendData;
    async function handleData() {
        let response = await fetch(Fireworks.url + "?command=find&collection=Rockets");
        let item = await response.text();
        let data = JSON.parse(item);
        //key = ID 
        for (let key in data["data"]) {
            Fireworks.serverRockets.push(data["data"][key]);
            let test = data.data[key];
            //console.log(test);
            //console.log(test.thesize);
        }
        if (Fireworks.rs1 == true) {
            //zugriff auf Database
            let r1 = Fireworks.serverRockets[0];
            console.log(r1);
        }
        else if (Fireworks.rs2 == true) {
        }
        else if (Fireworks.rs3 == true) {
        }
        else if (Fireworks.rs4 == true) {
        }
        return Fireworks.serverRockets;
    }
    Fireworks.handleData = handleData;
    //Beim Klicken auf Speicherstand werden Daten auf Settings übertragen
    function getSavedRocket() {
        Fireworks.serverRockets.splice(0, Fireworks.serverRockets.length);
        handleData();
        if (Fireworks.rs1 == true) {
        }
        else if (Fireworks.rs2 == true) {
        }
        else if (Fireworks.rs3 == true) {
        }
        else if (Fireworks.rs4 == true) {
        }
    }
    Fireworks.getSavedRocket = getSavedRocket;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Server.js.map