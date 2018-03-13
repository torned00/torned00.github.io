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

    let selectType = document.getElementById("type");
    let selectKubikk = document.getElementById("kubikk");
    let selectFarge = document.getElementById("farge");
    let inpEpost = document.getElementById("epost");

    let btnBestill = document.getElementById("bestill");
    btnBestill.addEventListener("click", lagreData);

    function lagreData(e) {
        let type = selectType.value;
        let kubikk = selectKubikk.value;
        let farge = selectFarge.value;
        let epost = inpEpost.value;
        let ref = database.ref("bestilling/" + epost)
        ref.push({ type, kubikk, farge, epost });
    }
}