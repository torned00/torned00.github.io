function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCvhPxj0yKaPT1ZTIbDt3XeIyH_b4rVbq0",
        authDomain: "vinter2018-dd002.firebaseapp.com",
        databaseURL: "https://vinter2018-dd002.firebaseio.com",
        projectId: "vinter2018-dd002",
        storageBucket: "vinter2018-dd002.appspot.com",
        messagingSenderId: "997019931303"
    }

    firebase.initializeApp(config);
    let divMain = document.getElementById("main");

    let ref = firebase.database().ref("medlemm");

    function visMedlemm(snapshot) {
        let medlemnr = snapshot.key;
        let info = snapshot.val();
        divMain.innerHTML += `
          <div>
            <h4>Kunde nr ${medlemnr}</h4>
            <ul>
             <li>${info.fornavn} ${info.etternavn}
             <li>Epost : ${info.epost}
             <li>Adresse ${info.adresse}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visMedlemm);

}
