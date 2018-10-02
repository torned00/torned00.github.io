//@ts-check
let gameOver;

class Player {
    constructor(x, y, vx, vy, v, h, w, angle) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.v = v;
        this.h = h;
        this.w = w;
        this.angle = angle;

        this.history = [];

        //maxV = maximum velocity(speed), dAngle = rotationSpeed, acc = acceleration, shootingDelay = delay between shots (set to 0 at start)
        this.stats = { maxV: 6, dAngle: 0.05, acc: .3, shootingDelay: 0 };

        //creates div
        this.div = document.createElement("div");

        //gives div the className "player" (div.player to access in css)
        this.div.className = "player";

        //sets the height and width of player based on numbers in function addPlayer();
        this.div.style.width = w + "px";
        this.div.style.height = h + "px";
    }

    movePlayer() {
        //vx is how far the object needs to move in the x-direction per update. We find this with speed * cos(angle) (tenk enhetssirkelen i r2 :))
        this.vx = this.v * Math.cos(this.angle);
        //vy is how far the object needs to move in the y-direction per update. We find this with speed * sin(angle) (tenk enhetssirkelen i r2 :))
        this.vy = this.v * Math.sin(this.angle);


        this.velocityDirection = { vx: this.vx, vy: this.vy };

        //adds vx and vy to current x-pos and y-pos
        this.x += this.vx;
        this.y += this.vy;
    }

    //sets the x and y values found above to div.player in css
    renderPlayer() {
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";

        this.div.style.transform = "rotate(" + ((this.angle) * 360) / (2 * Math.PI) + "deg)";
    }

}

class Bullet {
    constructor(x, y, vx, vy, v, h, w, angle) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.v = v;
        this.h = h;
        this.w = w;
        this.angle = angle;

        this.stats = { intCollision: 1 }

        //creates div
        this.div = document.createElement("div");

        //gives div the className "player" (div.player to access in css)
        this.div.className = "bullet";

        //sets the height and width of player based on numbers in function addPlayer();
        this.div.style.width = w + "px";
        this.div.style.height = h + "px";
    }


    moveBullet() {
        //vx is how far the object needs to move in the x-direction per update. We find this with speed * cos(angle) (tenk enhetssirkelen i r2 :))
        this.vx = this.v * Math.cos(this.angle);
        //vy is how far the object needs to move in the y-direction per update. We find this with speed * cos(angle) (tenk enhetssirkelen i r2 :))
        this.vy = this.v * Math.sin(this.angle);

        //adds vx and vy to current x-pos and y-pos
        this.x += this.vx;
        this.y += this.vy;
    }

    //sets the x and y values found above to div.bullet in css
    renderBullet() {
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";

        this.div.style.transform = "rotate(" + ((this.angle) * 360) / (2 * Math.PI) + "deg)";
    }
}

class HealthPack {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.div = document.createElement("div");
        this.div.className = "health";
    }

    render() {
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
}

class Wall {
    constructor(x, y, h, w) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;

        this.div = document.createElement("div");
        this.div.className = "walls";
    }
    render() {
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.style.width = this.w + "px";
        this.div.style.height = this.h + "px";
    }

}


//runs when the site starts
function setup() {

    //refrences to HTML elements
    let canvas = document.getElementById("canvas");
    let btnStart = document.getElementById("start");

    //bools
    gameOver = false;

    //arrays
    let players = [];
    let P1bullets = [];
    let P2bullets = [];
    let healthPack = [];
    let walls = [];

    //startbtn
    btnStart.addEventListener("click", start);

    //HP
    let redHP = 200;
    let blueHP = 200;

    //creates players
    createPlayer1();
    createPlayer2();

    //creats walls
    createWall1();
    createWall2();
    createWall3();
    createWall4();
    createWall5();

    //HealthBars
    let redHPbar = document.getElementById("redProgress");
    let blueHPbar = document.getElementById("blueProgress");

    
    



    //change this to change the shooting delay for both players
    let playerShootingDelay = 15;

    //Everything that needs an animation or an instant update here
    



    //runs once at setup()
    function createPlayer1() {
        let x = 1050;
        let y =  280;
        let vx = 0;
        let vy = 0;
        let v = 0;
        let h = 40;
        let w = 50;
        let angle = Math.PI;



        let player = new Player(x, y, vx, vy, v, h, w, angle);


        //pushes the div into divMain
        canvas.appendChild(player.div);

        //adding the correct image to player
        player.div.style.backgroundImage = "url(../images/tanks1.png)";

        //pushes the playerObject into the array players[]. player 1 will always be at players[0]!
        players.push(player);

        //renders player asap. (if not, player might blink in the top right corner)
        player.renderPlayer();
    }

    //runs once at setup()
    function createPlayer2() {
        let x = 100;
        let y = 280;
        let vx = 0;
        let vy = 0;
        let v = 0;
        let h = 40;
        let w = 50;
        let angle = 0;

        let player = new Player(x, y, vx, vy, v, h, w, angle);


        //pushes the div into divMain
        canvas.appendChild(player.div);

        //adding the correct image to player
        player.div.style.backgroundImage = "url(../images/tanks2.png)";

        //pushes the playerObject into the array players[]. player 2 will always be at players[1]!
        players.push(player);

        //renders player asap. (if not, player might blink in the top right corner)
        player.renderPlayer();
    }

    //runs when P1 presses shoot-key
    function createBulletP1() {
        let player1 = players[0];

        let x = player1.x + 16;
        let y = player1.y + 16;
        let vx = player1.vx;
        let vy = player1.vy;
        let v = 20;
        let h = 8;
        let w = 15;
        let angle = player1.angle;

        let bullet = new Bullet(x, y, vx, vy, v, h, w, angle);

        //pushes div into divMain
        canvas.appendChild(bullet.div);

        //adding the correct image to bullet
        bullet.div.style.backgroundImage = "url(../images/BulletRed1_outline.png)";

        //pushes the bulletObject into the array bullets[]. can access the bullets with P1bullets[i];
        P1bullets.push(bullet);

    }

    //runs when P2 presses shoot-key
    function createBulletP2() {
        let player2 = players[1];

        let x = player2.x + 16;
        let y = player2.y + 16;
        let vx = player2.vx;
        let vy = player2.vy;
        let v = 30;
        let h = 8;
        let w = 15;
        let angle = player2.angle;

        let bullet = new Bullet(x, y, vx, vy, v, h, w, angle);

        //pushes div into divMain
        canvas.appendChild(bullet.div);

        //adding the correct image to bullet
        bullet.div.style.backgroundImage = "url(../images/BulletBlue1_outline.png)";

        //pushes the bulletObject into the array bullets[]. can access the bullets with P2bullets[i];
        P2bullets.push(bullet);

    }

    function createWall1() {
        let x = 590;
        let y = 225;
        let h = 150;
        let w = 20;

        let wall = new Wall(x, y, h, w);
        canvas.appendChild(wall.div);
        walls.push(wall);
        wall.render();
    }
    function createWall2() {
        let x = 300;
        let y = 75;
        let h = 75;
        let w = 20;

        let wall = new Wall(x, y, h, w);
        canvas.appendChild(wall.div);
        walls.push(wall);
        wall.render();
    }
    function createWall3() {
        let x = 300;
        let y = 450;
        let h = 75;
        let w = 20;

        let wall = new Wall(x, y, h, w);
        canvas.appendChild(wall.div);
        walls.push(wall);
        wall.render();
    }
    function createWall4() {
        let x = 900;
        let y = 75;
        let h = 75;
        let w = 20;

        let wall = new Wall(x, y, h, w);
        canvas.appendChild(wall.div);
        walls.push(wall);
        wall.render();
    }
    function createWall5() {
        let x = 900;
        let y = 450;
        let h = 75;
        let w = 20;

        let wall = new Wall(x, y, h, w);
        canvas.appendChild(wall.div);
        walls.push(wall);
        wall.render();
    }

    //runs in gameLoop. 
    //when a player shoots, shootingDelay is set to a certain. this function sets this value back to 0 over time
    //when shootingDelay = 0, the player can shoot again.
    function shootDelayFunction() {

        let player1 = players[0];
        player1.stats.shootingDelay -= 1
        if (player1.stats.shootingDelay < 0) {
            player1.stats.shootingDelay = 0;
        }

        let player2 = players[1];
        player2.stats.shootingDelay -= 1;
        if (player2.stats.shootingDelay < 0) {
            player2.stats.shootingDelay = 0;
        }
    }

    //runs in gameLoop
    function animateBullets() {


        let player1 = players[0];
        let player2 = players[1];
        for (let i = 0; i < P1bullets.length; i++) {
            //bullet animation for P1 bullets
            let bullet = P1bullets[i];
            bullet.renderBullet();
            bullet.moveBullet();

            if (collision(player2, bullet)) {

                //changing bullet to explosion image.

                bullet.h = 20;
                bullet.w = 20;
                bullet.div.style.backgroundImage = "url(../images/explosion3.png)";
                bullet.div.style.height = 50 + "px";
                bullet.div.style.width = 50 + "px";

                //sets the position of explosion image to the position of the player who got hit
                bullet.div.style.left = player2.x + "px";
                bullet.div.style.top = player2.y + "px";

                //make explosion apper over the player
                bullet.div.style.zIndex = "2";
                P1bullets.splice(i, 1);

                //removes HP
                blueHP -= 10;

                //remove the explosion image after 50ms
                setInterval(function () {
                    bullet.div.remove();
                }, 50)
            }

            if (bullet.x < 15 || bullet.x > 1200 - 20) {
                bullet.v = -bullet.v
                bullet.angle = -bullet.angle;
                bullet.stats.intCollision -= 1;
            }
            else if (bullet.y < 20 || bullet.y > 600 - 20) {
                bullet.angle = -bullet.angle;
                bullet.stats.intCollision -= 1;
            }
            if (bullet.stats.intCollision < 0) {
                bullet.div.remove();
                P1bullets.splice(i, 1);
            }
            for ( let i=0; i<walls.length; i++){
                let wall = walls[i];
                if (collision(bullet, wall)){
                    bullet.stats.intCollision =-1;
                }        
            }

        }
        for (let i = 0; i < P2bullets.length; i++) {
            //bullet animation for P2 bullets
            let bullet = P2bullets[i];
            bullet.renderBullet();
            bullet.moveBullet();

            if (collision(player1, bullet)) {

                //changing bullet to explosion image.
                bullet.h = 20;
                bullet.w = 20;
                bullet.div.style.backgroundImage = "url(../images/explosion3.png)";
                bullet.div.style.height = 50 + "px";
                bullet.div.style.width = 50 + "px";

                //sets the position of explosion image to the position of the player who got hit
                bullet.div.style.left = player1.x + "px";
                bullet.div.style.top = player1.y + "px";

                //make explosion apper over the player
                bullet.div.style.zIndex = "2";
                P2bullets.splice(i, 1);

                //removes HP
                redHP -=10;

                //remove the explosion image after 50ms
                setInterval(function () {
                    bullet.div.remove();
                }, 50)
            }
            if (bullet.x < 0 || bullet.x > 1200 - 10) {
                bullet.v = -bullet.v
                bullet.angle = -bullet.angle;
                bullet.stats.intCollision -= 1;
            }
            else if (bullet.y < 0 || bullet.y > 600 - 10) {
                bullet.angle = -bullet.angle;
                bullet.stats.intCollision -= 1;
            }
            if (bullet.stats.intCollision < 0) {
                bullet.div.remove();
                P2bullets.splice(i, 1);
            }
            for ( let i=0; i<walls.length; i++){
                let wall = walls[i];
                if (collision(bullet, wall)){
                    bullet.stats.intCollision =-1;
                }        
            }
            
        }
    }

    //runs in gameLoop
    function animatePlayers() {

        let player1 = players[0];
        player1.movePlayer();
        player1.renderPlayer();

        let player2 = players[1];
        player2.movePlayer();
        player2.renderPlayer();

        if (collision(player1, player2)) {
            player1.v = -player1.v * 1.3;
            player2.v = -player2.v * 1.3;
        }
        if (player1.x < 0 || player1.x > 1200 - 50) {
            player1.v = -player1.v * 1.6;
        }
        else if (player1.y < 0 || player1.y > 600 - 40) {
            player1.v = -player1.v * 1.6;
        }
        if (player2.x < 0 || player2.x > 1200 - 50) {
            player2.v = -player2.v * 1.6;
        }
        else if (player2.y < 0 || player2.y > 600 - 40) {
            player2.v = -player2.v * 1.6;
        }

        for ( let i=0; i<walls.length; i++){
            let wall = walls[i];
            if (collision(player1, wall)){
            
                player1.v = -player1.v * 1.2;
                
            }
            if (collision(player2, wall)){
                player2.v = -player2.v * 1.2;
            }
        }

        
       
       


    }

    function animateHealthBars(){
        blueHPbar.style.width = blueHP + "px";
        redHPbar.style.width = redHP +"px";

        if (blueHP == 0 || redHP == 0){
            gameOver = true;
        }
    }

    //shoutout to  stackoverflow :))
    //When a key is pressed, keyState[key] === true,
    //When the same key is released, keystate[key] === false;
    //keyState[key] is only true if the key is down

    var keyState = {};
    window.addEventListener('keydown', function (e) {
        keyState[e.keyCode || e.which] = true;
    }, true);
    window.addEventListener('keyup', function (e) {
        keyState[e.keyCode || e.which] = false;
    }, true);

    //runs in gameLoop
    //keys
    function playerMovement() {
        if (gameOver === true) return;


        //player 1 keys
        let player1 = players[0];
        //up-key
        if (keyState[38]) {
            player1.v += player1.stats.acc;
            if (player1.v > player1.stats.maxV) {
                player1.v = player1.stats.maxV;
            }


        }
        //down-key
        if (keyState[40]) {
            player1.v -= player1.stats.acc;
            if (player1.v < -player1.stats.maxV) {
                player1.v = -player1.stats.maxV;
            }



        }
        //left-key
        if (keyState[37]) {
            player1.angle -= player1.stats.dAngle;
            if (player1.angle < 0) {
                player1.angle += 2 * Math.PI;
            }


        }
        //right-key
        if (keyState[39]) {
            player1.angle += player1.stats.dAngle;
            if (player1.angle > 0) {
                player1.angle -= 2 * Math.PI;
            }



        }

        //the player loses speed if neither the up-key nor the down-key are pressed
        if (!(keyState[38] || keyState[40])) {
            player1.v *= 0.90;
        }
        //player 2 keys
        let player2 = players[1];
        //up-key
        if (keyState[87]) {
            player2.v += player2.stats.acc;
            if (player2.v > player2.stats.maxV) {
                player2.v = player2.stats.maxV;
            }

        }
        //down-key
        if (keyState[83]) {
            player2.v -= player2.stats.acc;
            if (player2.v < -player2.stats.maxV) {
                player2.v = -player2.stats.maxV;
            }

        }
        //left-key
        if (keyState[65]) {
            player2.angle -= player2.stats.dAngle;
            if (player2.angle < 0) {
                player2.angle += 2 * Math.PI;
            }
        }
        //right-key
        if (keyState[68]) {
            player2.angle += player2.stats.dAngle;
            if (player2.angle > 0) {
                player2.angle -= 2 * Math.PI;
            }
        }

        //the player loses speed if neither the up-key nor the down-key are pressed
        if (!(keyState[87] || keyState[83])) {
            player2.v *= 0.90;
        }

        if (keyState[16]) {
            if (player2.stats.shootingDelay === 0) {
                console.log("test");
                createBulletP2();
                player2.stats.shootingDelay += playerShootingDelay;
            }

        }

        if (keyState[32]) {
            if (player1.stats.shootingDelay === 0) {
                createBulletP1();
                player1.stats.shootingDelay += playerShootingDelay;
            }


        }
    }

    //checks for collision between to objects
    //used in several animation functions



    function collision(a, b) {
        if (
            b.y + b.h > a.y &&
            b.x + b.w > a.x &&
            b.x < a.x + a.w &&
            b.y < a.y + a.h
        ) {
            return true;

        } else false;
    }

    //test




    function start() {
        canvas.removeChild(btnStart);
        setInterval(newHealthBoost, 15000);


        //CodePen start
        let count = 4;
        let countdownNumberEl = document.getElementById("countdown-number");
        let countdown = document.getElementById("countdown");

        setInterval(function () {

            if (count == 1) {
                canvas.removeChild(countdown);
                setInterval(gameLoop, 20);
                function gameLoop() {
                    if (gameOver === true) return;
                    playerMovement();
                    animatePlayers();
                    animateBullets();
                    shootDelayFunction();
                    animateHealthBars();
                }
            }
            count -= 1;
            countdownNumberEl.textContent = count.toString();
        }, 1000);
        //end


        function newHealthBoost() {
            if (healthPack.length > 4) return;
            healthBoost();
        }

        function healthBoost() {
            let x = Math.random() * 1170;
            let y = Math.random() * 570;
            let health = new HealthPack(x, y);
            health.render();
            canvas.appendChild(health.div);
            healthPack.push(health);
        }


    }
}