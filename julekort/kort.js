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
        divHimmel.appendChild(pakke);
        sound.play();
    }
    juletre.forEach( juletre => {
        juletre.style.left =   Math.floor(Math.random()*0) + "px";
        juletre.style.top =   Math.floor(Math.random()*0) + "px";
    })
    
    function makeSnow() {
        for (let i=0; i<250; i++) {
            let snow = document.createElement(`div`);
            snow.className = "snow";
            snow.style.left = Math.random()*100 + "vw";
            snow.style.animationDelay = Math.random()*5000 + "ms";
            let radius = Math.random()*5 + 1;
            snow.style.width = radius + "px";
            snow.style.height = radius + "px";
            divHimmel.appendChild(snow);
        }
        }
        makeSnow();
    }
