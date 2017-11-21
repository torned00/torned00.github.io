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
    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("nations");

    function visLand(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>${navn}</h4>
            <ul>
             <li>Capital ${info.capital}
             <li>${info.title} ${info.leader}
             <li> Perks
                <ul>
                    <li> Money: ${info.perk.money}
                    <li> Move: ${info.perk.move}
                    <li> War: ${info.perk.war}
                    <li> Science: ${info.perk.science}
                </ul>
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visLand);

}