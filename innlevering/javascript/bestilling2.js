function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCOz-5hZOlZNuAhHP6UOLiEnyVsUeX5A14",
        authDomain: "fuckduck.firebaseapp.com",
        databaseURL: "https://fuckduck.firebaseio.com",
        projectId: "fuckduck",
        storageBucket: "fuckduck.appspot.com",
        messagingSenderId: "456899953751"
    };
    firebase.initializeApp(config);

    let spanBestilling = document.getElementById("bestilling");
    let divType = document.getElementById("type");

    let ref = firebase.database().ref("bestilling");

    ref.once("value").then(function (snapshot) {
        let bestillingene = snapshot.val();
        if (bestillingene) {
            let dropBox = makeDrop(bestillingene);
            spanBestilling.innerHTML = dropBox;

            let drpBestilling = document.getElementById("bestilling");
            drpBestilling.addEventListener("change", visType);
        }
    });

    function visType(e) {
        let valgt = +document.getElementById("type").value;
        let ref = firebase.database().ref("type").orderByChild("type").equalTo(valgt);
        ref.once("value").then(function (snapshot) {
            let typene = snapshot.val();
            if (typene) {
                let typenr = Object.keys(typene);
                let typeliste = `<ol>` +
                    typenr.map(e => `<li>${typene[e].navn} ${typene[e].art}</li>`).join("")
                    + `</ol>`;
                divType.innerHTML = Typeliste;

            }
        });
    }


    function makeDrop(bestilling) {
        let box = '<select id="bestilling">';
        let bestillinger = Object.keys(bestilling);
        let navn = bestillinger.map(e =>
            `<option value="${e}">${bestilling[e].fornavn}</option>`);
        box += navn.join("") + "</select>";
        return box;
    }

}