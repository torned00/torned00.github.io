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

    let ref = firebase.database().ref("kunde");

    function visKunder(snapshot) {
        let kundenr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>Kunde nr ${kundenr}</h4>
            <ul>
             <li>${info.fornavn} ${info.etternavn}
             <li>Epost : ${info.epost}
             <li>Mobil ${info.mobil}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visKunder);

}