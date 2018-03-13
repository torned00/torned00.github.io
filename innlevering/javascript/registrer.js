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

    let database = firebase.database()
    
        let inpBrukernavn = document.getElementById("brukernavn");
        let inpPassord = document.getElementById("passord");
        let inpNavn = document.getElementById("navn");
        let inpEpost = document.getElementById("epost");
        let inpEtternavn = document.getElementById("etternavn");
    
        let btnRegistrer = document.getElementById("registrer");
        btnRegistrer.addEventListener("click", lagreData);
    
        function lagreData(e) {
            let brukernavn = inpBrukernavn.value;
            let passord = inpPassord.value;
            let navn = inpNavn.value;
            let epost = inpEpost.value;
            let etternavn = inpEtternavn.value;
            let ref = database.ref("bruker/" + brukernavn)
            ref.push({ brukernavn, passord, navn, epost, etternavn });
        }
    }