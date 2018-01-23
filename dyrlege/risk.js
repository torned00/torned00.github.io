function setup() {

  var config = {
    apiKey: "AIzaSyBT0IQ8eXXLsKP_Yl9ZQWI0x9W7hbNJplk",
    authDomain: "hunt01-141e1.firebaseapp.com",
    databaseURL: "https://hunt01-141e1.firebaseio.com",
    projectId: "hunt01-141e1",
    storageBucket: "hunt01-141e1.appspot.com",
    messagingSenderId: "339795178715"
  };
  firebase.initializeApp(config);

  let database = firebase.database();
  let land = database.ref("land");
  land.on("child_added", visLand)
}

function visLand(snapshot) {
let land = snapshot.key;
let divMain = document.getElementById("main");
divMain.innerHTML += `<div>${land}</div>`
}
