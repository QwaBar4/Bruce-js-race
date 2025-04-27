var down = 0;
var Ycar = 67;
var yamaX = 0;
var yamaY = 0;
var hasyama = false;
var downspeed = 1;
var counts = 0;
var carspeed = 2;
var yamaweight = 20;
var yamaheight = 20;
var yamacolor = 16777200;

function draw_road(){
    drawFillRect(0, 4, 350, 2, 16777215);
    drawFillRect(0, 129, 350, 2, 16777215);

	drawFillRect(-205+down, 67, 40, 5, 16777215);
    drawFillRect(-145+down, 67, 40, 5, 16777215);
    drawFillRect(-85+down, 67, 40, 5, 16777215);
    drawFillRect(-25+down, 67, 40, 5, 16777215);
    drawFillRect(35+down, 67, 40, 5, 16777215);
    drawFillRect(95+down, 67, 40, 5, 16777215);
    drawFillRect(155+down, 67, 40, 5, 16777215);
    drawFillRect(215+down, 67, 40, 5, 16777215);
}

function getRandomNumber(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function draw_yama() {
    if(getRandomNumber(0,20)==11&&!hasyama) {
        hasyama=true;
        yamaX=-50;
        yamaY = getRandomNumber(30,100);
        yamaheight = getRandomNumber(20, 50);
        yamaweight = getRandomNumber(10, 40);
        yamacolor = getRandomNumber(16000000, 16777215);
    }
    if(hasyama) {
        yamaX+=downspeed;
        if(yamaX>200) hasyama=false;
        drawFillRect(yamaX, yamaY, yamaheight, yamaweight, yamacolor);
    }
}

function draw_car(y) { drawFillRect(150, y, 30, 20, 16770000); }

//150x90 road

setTextSize(1);
drawString('M5 - Right', 5, 0);
drawString('Next - Left', 5, 30);
drawString('Prev - exit', 5, 60);
drawString('Rotate m5 vertical', 5, 90);
drawString('Press M5 to start!', 5, 120);

while(true){
    if(getSelPress()){break}
}

fillScreen(0);
setTextSize(4);
drawString('3', 120, 0);
delay(200);
fillScreen(0);
drawString('2', 120, 100);
delay(200);
fillScreen(0);
drawString('1', 120, 50);
delay(200);

while(true){

    fillScreen(0);

    draw_road();

    if(getNextPress())if(Ycar<115)Ycar+=carspeed;

    if(getSelPress())if(Ycar>45)Ycar-=carspeed;

    draw_yama();

    if(yamaX > 150 - yamaheight && yamaX < 150 + 30 && yamaY > Ycar - yamaweight && yamaY < Ycar + 20) {
        dialogMessage('Game over! Score: '+String(counts));
        delay(2000);
        break;
    }

    draw_car(Ycar);

    if(getPrevPress()) break;

    down+=downspeed;
    counts+=1;

    if(down>135){down=0;}

    if(counts==100){downspeed=2;carspeed=3;}
    if(counts==300){downspeed=3;}
    if(counts==500){downspeed=4;carspeed=4;}
    if(counts==1000){downspeed=5;}
    if(counts==2000){downspeed=7;carspeed=5;}
};
