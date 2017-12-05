function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBT0IQ8eXXLsKP_Yl9ZQWI0x9W7hbNJplk",
        authDomain: "hunt01-141e1.firebaseapp.com",
        databaseURL: "https://hunt01-141e1.firebaseio.com",
        projectId: "hunt01-141e1",
        storageBucket: "hunt01-141e1.appspot.com",
        messagingSenderId: "339795178715"
    };
    firebase.initializeApp(config);
    let spanKunde = document.getElementById("kundevelg");
    let divDyr = document.getElementById("dyr");

    let ref = firebase.database().ref("kunde");

    ref.once("value").then(function (snapshot) {
        let kunde = snapshot.val();
        if (kunde) {
            let dropBox = makeDrop(kunde);
            spanKunde.innerHTML = dropBox

            let drpKunde = document.getElementById("kundenr");
            drpKunde.addEventListener("change", visDyr)
        }
    });

    function visDyr(e) {
        let valgt = +document.getElementById("kundenr").value;
        let ref = firebase.database().ref("dyr").orderByChild("kundenr").equalTo(valgt);
        ref.once("value").then(function (snapshot) {
            let dyrene = snapshot.val();
            if (dyrene) {
                let dyrnr = Object.keys(dyrene);
                let dyrliste = `<ol>` +
                    dyrnr.map(e => `<li>${dyrene[e].navn} ${dyrene[e].art}</li>`).join("")
                    + `</ol>`;
                divDyr.innerHTML = dyrliste;

            }
        });
    }

    function makeDrop(kunder) {
        let box = '<select id="kundenr">';
        let kundenr = Object.keys(kunder);
        let navn = kundenr.map(e =>
            `<option value="${e}">${kunder[e].fornavn}</option>`);
        box += navn.join("") + "</select>";
        return box;
    }

}