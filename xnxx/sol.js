function setup() {
    let kaktus = document.getElementById("kaktus");
    animerKaktus();
    let kaktus2 = document.getElementById("kaktus2");
    animerKaktus2();

    function animerKaktus() {
        kaktus.classList.toggle("ut");
        setTimeout(animerKaktus, 9200);
    }
    function animerKaktus2() {
        kaktus2.classList.toggle("ut");
        setTimeout(animerKaktus2, 9200);
    }

}