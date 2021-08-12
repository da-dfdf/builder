var canvas = new fabric.Canvas("canvas");

var player_x = 10;
var player_y = 10;

var block_width = 30;
var block_height = 30;

var player_object = "";
var block_object = "";

var players = ["player.png", "steve.png", "alex.png"];

var randNo = 0;


function playerUpdate() {
    fabric.Image.fromURL(players[randNo], function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
        console.log("player added")
    });
}

function blockUpdate(getImg) {
    fabric.Image.fromURL(getImg, function (block) {
        block_object = block;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
        console.log("block added")
    });
}

window.addEventListener("keydown", keydown);

function keydown(e){
    var keycode = e.keyCode;
    console.log("key pressed" + keycode );

    if (keycode == "38"){
        up()
        console.log("up key pressed");
    }
    if (keycode == "40"){
        down()
        console.log("down key pressed");
    }
    if (keycode == "37"){
        left()
        console.log("left key pressed");
    }
    if (keycode == "39"){
        right()
        console.log("right key pressed");
    }
    if (keycode == "67"){
        blockUpdate("cloud.jpg");
        console.log("cloud");
    }
    if (keycode == "68"){
        blockUpdate("dark_green.png");
        console.log("dark_green");
    }
    if (keycode == "71"){
        blockUpdate("ground.png");
        console.log("ground");
    }
    if (keycode == "76"){
        blockUpdate("light_green.png");
        console.log("light_green");
    }
    if (keycode == "82"){
        blockUpdate("roof.jpg");
        console.log("roof");
    }
    if (keycode == "84"){
        blockUpdate("trunk.jpg");
        console.log("trunk");
    }
    if (keycode == "85"){
        blockUpdate("unique.png");
        console.log("unique");
    }
    if (keycode == "87"){
        blockUpdate("wall.jpg");
        console.log("wall");
    }
    if (keycode == "89"){
        blockUpdate("yellow_wall.png");
        console.log("yellow_wall");
    }
    if (keycode == "32"){
        changePlayer();
    }
    if (keycode == "127"){
        canvas.dispose();
        console.log("clear")
    }
    
    if (e.shiftKey && keycode == "80"){
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("span_width").innerHTML = block_width;
        document.getElementById("span_height").innerHTML = block_height;
        console.log("added height + width");
    }
    if (e.shiftKey && keycode == "77"){
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("span_width").innerHTML = block_width;
        document.getElementById("span_height").innerHTML = block_height;
        console.log("deducted height + width");
    }
}

function up(){
    if (player_y >= 0) {
        player_y = player_y - block_height;
        canvas.remove(player_object);
        playerUpdate()
        console.log("moved up");

    }
}
function down(){
    if (player_y <= 500) {
        player_y = player_y + block_height;
        canvas.remove(player_object);
        playerUpdate()
        console.log("moved down");

    }
}
function left(){
    if (player_x >= 0) {
        player_x = player_x - block_width;
        canvas.remove(player_object);
        playerUpdate()
        console.log("moved left");

    }
}
function right(){
    if (player_x <= 1300) {
        player_x = player_x + block_width;
        canvas.remove(player_object);
        playerUpdate()
        console.log("moved right");

    }
}
function changePlayer(){
    randNo = Math.floor(Math.random()*3);

   canvas.remove(player_object);

  playerUpdate();

  console.log(randNo);

}
