function setup() {
    let divHimmel = document.getElementById("himmel");
    let divNisse = document.getElementById("nisse");
    let divBakke = document.getElementById("bakke");
    let juletre = divBakke.querySelectorAll(".juletre");
    let stjerner = divHimmel.querySelectorAll(".stjerner");
    stjerner.forEach( stjerne => {
        stjerne.style.left =  + Math.floor(Math.random()*40) + "px";
        stjerne.style.top = -80 + Math.floor(Math.random()*60) + "px";
    })

    divNisse.addEventListener("click", dropGifts)

    function dropGifts(e) {
        let pakke = document.createElement(`div`);
        pakke.className = "pakke";
        pakke.style.left = e.screenX + "px";
        pakke.style.top = (e.screenY - 50) + "px";
        divHimmel.appendChild(pakke)
    }
    juletre.forEach( juletre => {
        juletre.style.left =   Math.floor(Math.random()*0) + "px";
        juletre.style.top =   Math.floor(Math.random()*0) + "px";
    })
    
}