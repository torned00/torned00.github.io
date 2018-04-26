function setup() {

    const MAXFART = 12;

    let bird = document.getElementById("floppy");
    let above = document.getElementById("above");
    let below = document.getElementById("below");

    document.addEventListener("keydown", hoppFloppy);

    let ypos = 150;
    let xpos = window.innerWidth * 0.25;
    let fart = 0;

    let posA = window.innerWidth;
    let posB = window.innerWidth;

    let topA = 0;
    let heightA = 150;

    let poeng = 0;
    let divPoeng = document.getElementById("poeng");

    function hoppFloppy(event) {
        fart = fart + 40;

    }

    setInterval(moveStuff, 40);

    function moveStuff() {
        ypos = ypos - fart;
        fart = fart - 2;
        if (fart > MAXFART) { fart = MAXFART }
        if (fart < -MAXFART) { fart = -MAXFART }
        if (ypos < 0) {
            ypos = 0;
            fart = 0 
        }
        if (ypos > window.innerHeight - 100) {ypos = window.innerHeight - 100}
        bird.style.top = ypos + "px";

        posA = posA - 15;
        if (posA < 0) {
            posA = window.innerWidth;
            poeng = poeng + 100;
            divPoeng.innerHTML = "Poeng:" + poeng;
        }
        above.style.left = posA + "px";

        posB = posB - 15;
        if (posB < 0) {
            posB = window.innerWidth;
        }
        below.style.left = posB + "px";


        if (xpos > posA - 100 &&
            xpos < posA + 30  &&
            ypos > topA - 100 &&
            ypos < topA + heightA )
             {
                poeng = poeng * 0.9;
                divPoeng = innerHTML = "Poeng:" + poeng.toFixed(1);
        }

        if (xpos > posB - 100 &&
            xpos < posB + 30  &&
            ypos > window.innerHeight - 250 )
             {
                poeng = poeng * 0.9;
                divPoeng = innerHTML = "Poeng:" + poeng.toFixed(1);
        }
    }

   



}