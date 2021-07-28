//initialisation A1
setPos(300,100);
faceRight();
//changeColor(color.red);
setLineWidth(5);


function triangle (side) {
    for(let i = 0; i < 3; i++) {
        forward(side);
        left(120);
    }
}

function square (side) {
    for(let i = 0; i < 4; i++) {
        forward(side);
        right(90);
    }
}

function circle(radius){
    arcRight(radius, 360);
}

function rectangle(a,b){
    for(let i = 0; i < 2; i++) {
        forward(a);
        right(90);
        forward(b);
        right(90);
    }
}

rectangle (100, 300);
/*
//realisation A1
forward(200);
faceRight();
forward(100);


//realisation A2
changeColor(color.yellow);
setPos(300,300);
faceLeft();
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);


//realisation A3
faceLeft();
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceUp();
forward(100);
faceDown();
forward(200);

//realisation A4
faceLeft();
forward(100);
arcLeft(50,90);
arcLeft(50,90);
forward(50);
arcRight(50,90);
arcRight(50,90);
forward(100);

//realisation A5
changeColor(color.fuchsia);
faceRight();
arcRight(100, 180);
arcRight(100, 180);
arcRight(50,90);
arcRight(50,90);
arcLeft(50, 90);
arcLeft(50, 90);

//realisation A6
changeColor(color.blue);
forward(50);
up();
forward(50);
down();
forward(100);

//realisation A7
changeColor(color.green);
forward(100);
arcLeft(100,180);
forward(50);
up();
forward(50);
down();
forward(100);
arcLeft(100,180);
forward(50);

//realisation A8
changeColor(color.fuchsia);
forward(50);
faceRight();
forward(100);
faceDown();
forward(200);
faceLeft();
forward(50);
up();
forward(50);
faceUp();
forward(50);
down();
forward(50);

//realisation A9
changeColor(color.blue);
faceRight();
forward(200);
faceLeft();
arcRight(50,180);
//faceRight();
arcLeft(50,180);
faceLeft();
forward(200);
arcLeft(50,180);
arcRight(50,180);

//realisation B1
faceRight();
changeColor(color.green);
for (let i = 0; i < 4; i++) {
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}

//realisation B2
for (let i = 0; i < 4; i++) {
    faceUp();
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceRight();
}


//realisation B3
faceRight();
forward(100);
for (let i = 0; i < 3; i++) {
    right(90);
    forward(100);
    }

//realisation B4
changeColor(color.blue);
faceRight();
forward(100);
for (let i = 0; i < 2; i++) {
    left(120);
    forward(100);
    }

//realisation B5
changeColor(color.yellow);
faceUp();
forward(100);
changeColor(color.red)
forward(50);
for (let i = 0; i < 2; i++) {
    right(120);
    forward(50);
    }

//realisation B6
for (let i = 0; i < 2; i++) {
    faceRight();
    forward(50);
    faceUp();
    forward(50);
}   

changeColor(color.green);
for (let i = 0; i < 3; i++) {
    faceRight();
    forward(50);
    faceDown();
    forward(50);
}    

//realisation B7

changeColor(color.yellow);
faceRight();
for (let i = 0; i < 3; i++) {
    forward(100);
    left(120);
}

faceDown();
forward(100);
for (let i = 0; i < 3; i++) {
    left(90);
    forward(100);
    }

//realisation B8

changeColor(color.green);
faceRight();
forward(200);
for (let i = 0; i < 7; i++) {

    right(135);
    forward(200);
}
     
//realisation B9 (undone)

//realisation B10

setPos(50,250);
changeColor(color.blue);
faceRight();
forward(100);
for (let i = 0; i < 7; i++) {
    right(135);
    forward(100);
}

setPos(300,150);
changeColor(color.green);
faceRight();
forward(200);
for (let i = 0; i < 7; i++) {
    right(135);
    forward(200);
}

setPos(300,450);
changeColor(color.red);
faceRight();
forward(50);
for (let i = 0; i < 7; i++) {
    right(135);
    forward(50);
}

//realisation B11 
faceRight();
changeColor(color.red);
for (let i=0; i<4; i++) {
    forward(100);
    left(90);
    forward(100);
    right(90);
    forward(100);
    right(90);
}

//realisation B12 undone

//realisation B13 
faceRight();
changeColor(color.green);
for (let i = 0; i<8; i++) {
    forward(100);
    left(135);
    forward(50);
    right(90);
    forward(50);
    right(90);
}

//realisation B14
faceRight();
changeColor(color.green);
for (let i = 0; i<5; i++) {
    forward(50);
    right(120);
    forward(100);
    left(120);
    forward(50);
}

//realisation B15
faceRight();
changeColor(color.red);
for (let i = 0; i<4; i++) {
    forward(100);
    arcLeft(25,90);
}


//realisation B16
faceRight();
changeColor(color.green);
for (let i = 0; i<4; i++) {
    arcLeft(25,90);
    arcRight(25,90);
}

faceDown();
arcRight(200,90);

//realisation B17
faceRight();
changeColor(color.green);
for (let i = 0; i<6; i++) {
    arcLeft(100,180);
    left(120);
}

//realisation jusqu'à B23 undone

//realisation C1
setPos(20, 300);
faceRight();
for (let j=0; j<4;j++) {
    for(let i = 0; i < 3; i++) {
        forward(100);
        right(120);
    }
    forward(100);
}

//realisation C2
setPos(200, 500);
faceUp();
for (let i=0; i<5;i++) {
    for(let j = 0; j < 4; j++) {
        forward(70);
        right(90);
    }
    up();
    forward(100);
    down();
}

//realisation D6
setPos(50, 200);
shiftColor(0.0);
setLineWidth(5);
faceRight();
let longueur = 100;
forward(longueur);
faceDown();
longueur = 200;
forward(longueur);
faceRight();
longueur = 300;
forward(longueur);

//realisation D7
setPos(300, 400);
shiftColor(0.66);
setLineWidth(5);
faceUp();
let long1 = 100;
let long2 = 200;
forward(long1);
right(90);
forward(long1);

for(let i = 0; i<2; i++){
    left(90);
    forward(long2);
}

faceDown();
forward(long1);

//realisation D8
setPos(200, 200);
shiftColor(0.04);
setLineWidth(5);
faceRight();
let long1 = 100;
let long2 = 200;
forward(long2);
right(90);
forward(long2);
right(90);
forward(long1);
right(90);
forward(long1);
left(90);
forward(long1);
right(90);
forward(long1);

//realisation D9
setPos(300, 200);
setLineWidth(5);
shiftColor(0.66);
faceRight();
let longInit = 100;
let longIncrement = 100;

for(let j = 0; j < 6; j++) {
    forward(longInit);
    right(120);
    longInit = longInit + longIncrement; 
}   

//realisation D10
setPos(300, 200);
setLineWidth(5);
shiftColor(0.33);
faceRight();
let longInit = 100;
let longIncrement = 50;

for(let j = 0; j < 10; j++) {
    forward(longInit);
    right(90);
    longInit = longInit + longIncrement; 
}   

//realisation D10
setPos(300, 200);
setLineWidth(5);
shiftColor(0.33);
faceRight();
let longInit = 100;
let longIncrement = 50;

for(let j = 0; j < 10; j++) {
    forward(longInit);
    right(90);
    longInit = longInit + longIncrement; 
}   


//realisation du videoprojecteur
setPos(280, 600);
setLineWidth(5);
shiftColor(0.33);
faceRight();
let long = 100;
let compteur = 3;

for(compteur - 3; compteur < 13; compteur++) {
    angle = 360 / compteur;
    for(let j = 0; j <compteur; j++) {
    forward(long);
    left(angle);
    }
    shiftColor(0.1);
}   

*/
