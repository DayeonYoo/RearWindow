var yVal; 
var accel; 
var velocity; 
var mass; 
var img;
var blind=[]
var blind2=[]
var blind3=[]
var smallBlind=[]
var smallBlind2=[]
var smallBlind3=[]
let index1 = 0;
let index2 = 0;
let index3=0;
let index4=0;
let index5=0;
let index6=0;
let posx=500;
let xspeed=0.8;
let szw=120;
let szh=140;

//529 characters 
//580curtain animation
//900 mousePressed
//1004 Blindcurtain
function setup() {
  createCanvas(1500,1600);
rectMode(CENTER);
  imageMode(CENTER);
    phone1=loadImage('phone_0.png');
  phone2=loadImage('phone_1.png');
   phone3=loadImage('phone_2.png');
    phone4=loadImage('phone_3.png');
   phone5=loadImage('phone_4.png');
  mac1=loadImage('mac_1.png');
   mac2=loadImage('mac_2.png');
  mac3=loadImage('mac_3.png');
  mac4=loadImage('mac_4.png');
  lonelyhearts1=loadImage('lonelyhearts_1.png')
   lonelyhearts2=loadImage('lonelyhearts_2.png')
  lonelyheartsrev1=loadImage('lonelyhearts_reverse.png')
  lonelyheartsrev2=loadImage('lonelyhearts_reverse2.png')
    angrymen1=loadImage('angrymen_1.png');
  angrymen2=loadImage('angrymen_2.png');
  angrymen3=loadImage('angrymen_3.png');
  angrymen4=loadImage('angrymen_4.png');
  angrymen5=loadImage('angrymen_5.png');
   angrywomen1=loadImage('angrywomen_1.png');
  angrywomen2=loadImage('angrywomen_2.png');
  angrywomen3=loadImage('angrywomen_3.png');
  angrywomen4=loadImage('angrywomen_4.png');
  rearwindow=loadImage('rearwindow1.png');
  cigarette=loadImage('cigarette.png');
  cigarette2=loadImage('cigarette2.png');
  flower=loadImage('flower3.png');
  flower2=loadImage('flower4.png');
  velocity = 0; 
  mass = 10; 
  accel = mass * 0.1;
  phones=[phone1,phone2,phone3,phone4,phone5];
  mac=[mac1,mac2,mac3,mac4]
  misslonelyhearts=[lonelyhearts1,lonelyhearts2]
  misslonelyheartsRev=[lonelyheartsrev1,lonelyheartsrev2]
  img=misslonelyheartsRev[index3];
  angrymens=[angrymen1,angrymen2,angrymen3,angrymen4,angrymen5];
angrywomens=[angrywomen1,angrywomen2,angrywomen3,angrywomen4];
   cigarettes=[cigarette,cigarette2];
}

function draw() {
  background(161,71,51);
  
  strokeJoin(ROUND);
  strokeWeight(5);
  stroke(255,255,255,60);
  fill(110, 123, 133);
  
  //windows 1 

  rect(100,100,100,150);
   rect(100,600,100,150);
   rect(100,1100,100,150);
  rect(100,1600,100,150);
  
  //windows 2
  rect(500,100,300,150);
  rect(500,600,300,150);
  rect(500,1100,300,150);
  rect(500,1600,300,150);
  
  //window 3
  rect(1100,100,150,150);
  rect(1100,600,150,150);
  rect(1100,1100,150,150);
  rect(1100,1600,150,150);

  
    noStroke();
  fill(107, 57, 48);
  
 
  //shadows
  // window 1 shadow
  
      beginShape();
      vertex(50, 25)
      vertex(150, 25)
      vertex(150, 30)
      vertex(50, 30)
      endShape(); 
  
  beginShape();
      vertex(50, 525)
      vertex(150, 525)
      vertex(150, 530)
      vertex(50, 530)
      endShape();

  beginShape();
      vertex(50, 1025)
      vertex(150, 1025)
      vertex(150, 1030)
      vertex(50, 1030)
      endShape();
  
    beginShape();
      vertex(50, 1525)
      vertex(150, 1525)
      vertex(150, 1530)
      vertex(50, 1530)
      endShape();
  
    // window 2 shadow
        beginShape();
      vertex(350, 25)
      vertex(650, 25)
      vertex(650, 30)
      vertex(350, 30)
      endShape(); 
  
  beginShape();
      vertex(350, 525)
      vertex(650, 525)
      vertex(650, 530)
      vertex(350, 530)
      endShape();

  beginShape();
      vertex(350, 1025)
      vertex(650, 1025)
      vertex(650, 1030)
      vertex(350, 1030)
      endShape();
  
    beginShape();
      vertex(350, 1525)
      vertex(650, 1525)
      vertex(650, 1530)
      vertex(350, 1530)
      endShape();
  
    // window 3 shadow
        beginShape();
      vertex(1025, 25)
      vertex(1175, 25)
      vertex(1175, 30)
      vertex(1025, 30)
      endShape(); 
  
  beginShape();
      vertex(1025, 525)
      vertex(1175, 525)
      vertex(1175, 530)
      vertex(1025, 530)
      endShape();

  beginShape();
      vertex(1025, 1025)
      vertex(1175, 1025)
      vertex(1175, 1030)
      vertex(1025, 1030)
      endShape();
  
    beginShape();
      vertex(1025, 1525)
      vertex(1175, 1525)
      vertex(1175, 1530)
      vertex(1025, 1530)
      endShape();
  
    

 
  
  // walls
    fill(133, 69, 62);
 
  // window 1 wall

      beginShape();
      vertex(150, 25)
      vertex(147, 30)
      vertex(147, 175)
      vertex(150, 175)
      endShape(); 
  
    beginShape();
      vertex(150, 525)
      vertex(147, 530)
      vertex(147, 675)
      vertex(150, 675)
      endShape();
  
   beginShape();
      vertex(150, 1025)
      vertex(147, 1030)
      vertex(147, 1175)
      vertex(150, 1175)
      endShape();
  
    beginShape();
      vertex(150, 1525)
      vertex(147, 1530)
      vertex(147, 1675)
      vertex(150, 1675)
      endShape();
  
   // window 2 wall
  beginShape();
      vertex(650, 25)
    vertex(647, 30)
      vertex(647, 175)
      vertex(650, 175)
      endShape(); 
  
    beginShape();
      vertex(650, 525)
    vertex(647, 530)
      vertex(647, 675)
      vertex(650, 675)
      endShape(); 
  
    beginShape();
      vertex(650, 1025)
    vertex(647, 1030)
      vertex(647, 1175)
      vertex(650, 1175)
      endShape(); 
   
    beginShape();
      vertex(650, 1525)
    vertex(647, 1530)
      vertex(647, 1675)
      vertex(650, 1675)
      endShape(); 
  
   // window 3 wall
   beginShape();
      vertex(1175, 25)
      vertex(1173, 30)
      vertex(1173, 175)
      vertex(1175, 175)
      endShape(); 
  
    beginShape();
      vertex(1175, 525)
      vertex(1173, 530)
      vertex(1173, 675)
      vertex(1175, 675)
      endShape(); 
  
     beginShape();
      vertex(1175, 1025)
      vertex(1173, 1030)
      vertex(1173, 1175)
      vertex(1175, 1175)
      endShape(); 
  
      beginShape();
      vertex(1175, 1525)
      vertex(1173, 1530)
      vertex(1173, 1675)
      vertex(1175, 1675)
      endShape(); 
  
     //1-3 bedroom
  fill(85, 94, 102);
  //bed
   beginShape();
      vertex(1173, 120)
      vertex(1103, 125)
      vertex(1085, 155)
      vertex(1025, 160)
     vertex(1025, 175)
     vertex(1173, 175)
      endShape(); 
  //painting 1
   beginShape();
      vertex(1171, 50)
      vertex(1153, 52)
     vertex(1153, 77)
     vertex(1171, 76)
      endShape(); 
  
    //painting 2
   beginShape();
      vertex(1149, 50);
      vertex(1131, 52);
     vertex(1131, 77);
     vertex(1149, 76);
      endShape();
  
  //bed22
   fill(153, 164, 173);
  beginShape();
  vertex(1085, 155)
    vertex(1025, 160)
     vertex(1165, 175)
     vertex(1173, 175)
    vertex(1173, 160)
  endShape();
  
  
  //1-2 livingroom
  //drawer
  rect(430,158,155,30);
    rect(432,138,157,5);
  
strokeWeight(6);
  stroke(85, 94, 102);
  noFill();
  rect(380,70,30,40);
    rect(455,70,70,60);
  line(550,150,620,150);
arc(570, 173, 20, 40, 30, QUARTER_PI, OPEN);
arc(623, 176, 70, 70, PI, PI + QUARTER_PI);
    noStroke();
  fill(153, 164, 173);
    beginShape();
      vertex(560, 110)
      vertex(585, 110)
     vertex(595, 135)
     vertex(550, 135)
      endShape(); 
  
  //1-1 flowers
  
  
  //2-2 living room
 
  
  //desk
  //  fill(85, 94, 102);
  noFill();
  stroke(85, 94, 102);
  strokeWeight(3);
  line(353,650,420,650);
   line(353,660,420,660);
    strokeWeight(5);
    line(353,655,420,655);
  //radio
  noStroke();
  fill(85, 94, 102);
  rect(390,640,15,15);
    rect(410,640,15,15);
fill(153, 164, 173);
    rect(390,640,10,10);
    rect(410,640,10,10);
  //lamp
  beginShape();
     vertex(380, 615);
  vertex(350, 615);
  vertex(350,585);
    vertex(370,585);
  endShape();
  
  //sofa
arc(647,675,200,70,-PI,-HALF_PI);
  fill(146, 157, 166);

  arc(647,675,200,60,-PI,-HALF_PI);
    fill(128, 138, 145);
  arc(647,675,200,55,-PI,-HALF_PI);
  fill(146, 157, 166);
    arc(550,675,50,25,-PI,0);
      fill(128, 138, 145);
   arc(545,675,40,20,-PI,0);
  
  //table
  fill(153, 164, 173)
  rect(545,670,150,4);
  //chair
   noFill();
  strokeWeight(6);
  stroke(85, 94, 102);
  arc(440, 673, 20, 40, 30, QUARTER_PI, OPEN);
arc(670, 676, 70, 70, PI, PI + QUARTER_PI);
    strokeWeight(2);
  line(570,665,590,665);
   line(490,665,510,665);
  strokeWeight(6);
  rect(520,605,25,20)
  
  //2-3 bedroom
   strokeWeight(4);
  rect(1100,570,30,20);

  //chair
     strokeWeight(3);
stroke(146, 157, 166);
  beginShape();
  vertex(1130,680);
    vertex(1135,640);
   vertex(1125,630);
   vertex(1100,630);
  vertex(1095,640);
    vertex(1125,640); 
  vertex(1120,680);
  endShape();
  
   //drawer
  noStroke();
  fill(85, 94, 102);
  rect(1158,635,30,90)
  //lamp
    fill(153, 164, 173);
  beginShape();
  vertex(1160, 625);
  vertex(1173,625)
    vertex(1173,650)
  vertex(1150,650);
  endShape();
  
  
//3-2 living room
    //refrigeration

  fill(153, 164, 173);
  rect(425,1132,85,85);
    fill(146, 157, 166);
  rect(425,1132,80,2)
  stroke(153, 164, 173);
  strokeWeight(5)
 noFill();
  rect(425,1132,85,85);
   stroke(85, 94, 102);
   rect(450,1050,30,20);
  //lamp
  noStroke();
fill(153, 164, 173);
  beginShape();
  vertex(550,1070)
      vertex(570,1070)
      vertex(570,1100)
      vertex(545,1100)
  endShape();
  
  //3-3 room
 //frame
  noFill();
  stroke(146, 157, 166);
  strokeWeight(5);
  rect(1088,1070,100,60);
   strokeWeight(3);
  stroke(85, 94, 102);
    rect(1088,1070,110,70);
   //plant
  noStroke();
  fill(85, 94, 102);
  beginShape();
   vertex(1140,1150)
      vertex(1168,1135)
      vertex(1175,1140)
  endShape();
    beginShape();
      vertex(1168,1135)
      vertex(1130,1120)
   vertex(1110,1120)
  endShape();
      beginShape();
      vertex(1175,1135)
      vertex(1150,1120)
   vertex(1120,1110)
     vertex(1155,1115)
  endShape();
      beginShape();
      vertex(1173,1135)
     vertex(1150,1090)
    vertex(1173,1115)
  endShape();
  fill(153, 164, 173);
  arc(1173,1175, 30, 60, PI, PI + HALF_PI);
  

  //4-3
  //blindcurtain
  fill(146, 157, 166);
  rect(1100,1535,145,10)
    rect(1100,1547,145,10)
    rect(1100,1559,145,10)
    rect(1100,1571,145,10)
  rect(1100,1583,145,10)
  rect(1100,1595,145,10)
  rect(1100,1607,145,10)
  
  fill(197, 212, 222);
  rect(1100,1585,4,110)
  
  //4-2
  
  //bright fill(153, 164, 173);
  //grey  fill(146, 157, 166);
  //dark   fill(85, 94, 102);
  
  //rect(500,1600,300,150);
   fill(146, 157, 166);
  rect(500,1600,295,10)
    rect(500,1588,295,10)
  rect(500,1576,295,10)
  rect(500,1564,295,10)
    rect(500,1552,295,10)
    rect(500,1540,295,10)
    rect(500,1532,295,2)

   fill(197, 212, 222);
  rect(500,1585,5,110)
    rect(620,1585,2,110)
   rect(380,1585,2,110)
  
  
  
  
  //characters
  
   //window2-3  rect(500,1100,300,150);
  // window2-1 rect(500,100,300,150);
 // window2-2rect(500,600,300,150);
  // window3-1  rect(1100,100,150,150);
  // window3-2 rect(1100,600,150,150);
  // window3-3 rect(1100,1100,150,150);
  
//2-1 person
  image(phones[index1], 500, 110,130,130);
  //3-1 person
  image(mac[index2],1080,110,150,170);
  //2-2 person
   image(img,posx,610,120,140);
   posx=posx+xspeed;
  if (posx < 450) {
    img=misslonelyheartsRev[index3];
			xspeed = 0.8;
    
		}
  if (posx > 1100){
    img=misslonelyhearts[index3];
    xspeed = -0.8;
  }
  
  
  //2-3 person
  image(angrymens[index4],500,1120,130,140);
  
  //3-3 person
  image(angrywomens[index5],1090,1120,130,140);
  
  //hide



  fill(189, 110, 92);
  rect(651,620,3,140)
  rect(1023,620,3,140)
    fill(161,71,51);
rect(837,620,370,150);
   fill(133, 69, 62);
 beginShape();
      vertex(650, 525)
    vertex(647, 530)
      vertex(647, 675)
      vertex(650, 675)
      endShape(); 
  fill(197, 212, 222);
  
  //blind curtain animation
  //var i=4 블라인드 닫히는 클릭수
   for (var i = 12; i < blind.length; i++) {
  
     blind[i].move();
    blind[i].display();
 
   }
   for (var j = 4; j < blind2.length; j++) {
  
     blind2[j].move();
    blind2[j].display();
 
   }
  for(var k = 12; k <blind3.length; k++){
    blind3[k].move();
    blind3[k].display();
  }
  for(var l = 12; l <smallBlind.length; l++){
    smallBlind[l].move();
    smallBlind[l].display();
  }
   for(var m = 4; m <smallBlind2.length; m++){
    smallBlind2[m].move();
    smallBlind2[m].display();
  }
   for(var n = 12; n < smallBlind3.length; n++){
    smallBlind3[n].move();
    smallBlind3[n].display();
  }
  
  
  //frame 
  strokeCap(SQUARE);
  stroke(255,255,255,90);
  strokeWeight(3);
  
  // windowframe 1
  line(50, 175, 150, 175);
  line(50, 675, 150, 675);
  line(50, 1175, 150, 1175);

    // windowframe 2
    line(350, 175, 650, 175);
    line(350, 675, 650, 675);
    line(350, 1175, 650, 1175);
  
      // windowframe 3
    line(1025, 175,1175, 175);
    line(1025, 675,1175, 675);
    line(1025, 1175, 1175, 1175);
  //curtain
  noStroke();
 fill(153, 164, 173);
  rect(390,1102,73,144);
    rect(610,1102,75,144);
  fill(146, 157, 166);
  rect(370,1102,20,144)
   rect(420,1102,10,144)
  rect(590,1102,20,144);
   rect(635,1102,25,144)
 fill(140, 152, 161);
    rect(375,1102,5,144)
   rect(420,1102,3,144)
   rect(570,1102,10,144)
   rect(634,1102,5,144)
  

  //flower
  
    stroke(85, 94, 102);
  strokeWeight(2);
   line(390,1130,392,1112)
    line(387,1150,382,1112)
  noStroke();
  fill(85, 94, 102);
   rect(390,1160,15,30);
  rect(390,1140,2,20);
  fill(131, 142, 150);
  rect(395,1160,5,30);
  fill(197, 212, 222);
  beginShape();
  vertex(391,1114)
    vertex(398,1103)
  vertex(396,1100)
  vertex(390,1100)
  endShape();
    beginShape();
  vertex(384,1114)
    vertex(380,1120)
  vertex(382,1108)
  vertex(380,1100)
  endShape();
  fill(218, 231, 240);
      beginShape();
  vertex(384,1114)
    vertex(380,1120)
  vertex(375,1108)
  vertex(380,1103)
  endShape();
  
//2-2 curtain
   //curtain
  fill(153, 164, 173);
  arc(500, 530, 250, 40, 0, PI , OPEN);
  fill(146, 157, 166);
 arc(500, 530, 250, 30, 0, PI , OPEN);
  fill(128, 138, 145);
  arc(500, 530, 250, 25, 0, PI , OPEN);
  fill(153, 164, 173);
    arc(500, 530, 245, 18, 0, PI , OPEN);
    fill(146, 157, 166);
      arc(500, 530, 240, 10, 0, PI , OPEN);
    fill(128, 138, 145);
   arc(500, 530, 230, 9, 0, PI , OPEN);
    fill(153, 164, 173);
  
    beginShape();
  
  vertex(365, 530);
  vertex(368,550);
    vertex(375,550);
  endShape();
  
  beginShape();
    vertex(363, 530);
  vertex(355, 530);
  vertex(355,565);
    vertex(370,560);
  endShape();
  
      beginShape();
  
  vertex(635, 530);
  vertex(632,550);
    vertex(625,550);
  endShape();
  
  beginShape();
    vertex(638, 530);
  vertex(645, 530);
  vertex(645,565);
    vertex(630,560);
  endShape();
  
  //2-2,3-2 room light
//   fill(232, 255, 84,20)
// rect(500,600,300,150);
//     rect(1100,600,150,150);
  
   //frame 2
  stroke(222, 212, 211);
    strokeWeight(5);
  
  
  
  //window2 frame2
   line(410, 30,410, 175);
   line(585, 30,585, 175);
  
   line(410,530,410, 675);
   line(585, 530,585, 675);
  
   line(410, 1030,410, 1175);
   line(585, 1030,585, 1175);
  
   line(410,1530,410, 1675);
   line(585,1530,585, 1675);
  
    //window2 frame2 shadow
    stroke(168, 144, 141);
    strokeWeight(2.5);
  
   line(407, 30,407, 175);
   line(582, 30,582, 175);
  
   line(407,530,407, 675);
   line(582, 530,582, 675);
  
   line(407, 1030,407, 1175);
   line(582, 1030,582, 1175);
  
   line(407,1530,407, 1675);
   line(582,1530,582, 1675);
  
    //mirror
  stroke(85, 94, 102)
    strokeWeight(3);
  line(1100,650,1120,680)
   line(1100,650,1080,680)
  fill(85, 94, 102);
  noStroke();
  ellipse(1100, 655,30,40);

  //bricks
noStroke();
  fill(135, 50, 50);
  rect(100,185,110,15,3)
  rect(100,685,110,15,3)
  rect(100,1185,110,15,3)
  
rect(500,185,315,15,3);
  rect(500,685,315,15,3);
  rect(500,1185,315,15,3);
  
  rect(1100,185,160, 15,3)
    rect(1100,685,160, 15,3)
    rect(1100,1185,160, 15,3)
  
  //window out frame
     stroke(222, 212, 211);
    strokeWeight(4);
   strokeJoin(ROUND);
  noFill();
  // window frame1
  rect(185,100,60,150);
   rect(185,600,60,150);
   rect(185,1100,60,150);
   rect(185,1600,60,150);
  
quad(9,185,45, 175,45,25,9,15)
    rect(15,600,60,150);
   rect(15,1100,60,150);
   rect(15,1600,60,150);
  
  
  
  //1-2 person
   image(cigarettes[index6],130,590,120,430);
   //flower front
   image(flower2,107,220,270,170);
  image(flower,110,243,230,170);
 

  
  //window2
 rect(310,100,60,150);
  rect(310,600,60,150);
   rect(310,1100,60,150);
  rect(310,1600,60,150);
  
  rect(690,100,60,150);
 rect(690,600,60,150);
   rect(690,1100,60,150);
  rect(690,1600,60,150);
  
  // window3
   rect(1000,100,70,150);
    rect(1000,600,70,150);
   rect(1000,1100,70,150);
  rect(1000,1600,70,150);
  
   rect(1200,100,70,150);
  rect(1200,600,70,150);
  rect(1200,1100,70,150);
  rect(1200,1600,70,150);
  
  //pipe
  rect(920,800,30,height)
 strokeWeight(5);
  line(898,400,905,400)
arc(920,400, 30, 15, 0, PI, OPEN);
   line(941,400,935,400)
  
    line(898,900,905,900)
arc(920,900, 30, 15, 0, PI, OPEN);
   line(941,900,935,900)
  
      line(898,1400,905,1400)
arc(920,1400, 30, 15, 0, PI, OPEN);
   line(941,1400,935,1400)
  
  //balcony 
  
  //balcony1
   strokeWeight(4);
    rect(0,180,25,110);
  rect(50,180,25,110);
  rect(100,180,25,110);
  rect(150,180,25,110);
  line(0,238,164,238);
    line(0,118,164,118);

   //balcony2
  rect(0,680,25,110);
  rect(50,680,25,110);
  rect(100,680,25,110);
  rect(150,680,25,110);
  line(0,738,164,738);
    line(0,618,164,618);
  
  //balcony3
   strokeWeight(4);
    rect(0,1180,25,110);
  rect(50,1180,25,110);
  rect(100,1180,25,110);
  rect(150,1180,25,110);
  line(0,1238,164,1238);
    line(0,1118,164,1118);
  

  
  //stair
     strokeWeight(5);
  curve(65, 306, -10, 353, 54, 300, 73, 361, 0, 315, 65, 300);
   strokeWeight(20);
    line(100,238,-10,418);
  
       strokeWeight(5);
  curve(65, 806, -10, 853, 54, 800, 73, 861, 0, 815, 65, 800);
   strokeWeight(20);
    line(100,738,-10,918);
  
       strokeWeight(5);
  curve(65, 1306, -10, 1353, 54, 1300, 73, 1361, 0, 1315, 65, 1300);
   strokeWeight(20);
    line(100,1238,-10,1418)
  
  
   image(rearwindow,1420,830,250,1700);

}






function mousePressed(){
 
  
  //window2-3  rect(500,1100,300,150);
  // window2-1 rect(500,100,300,150);
 // window2-2rect(500,600,300,150);
  // window3-1  rect(1100,100,150,150);
  // window3-2 rect(1100,600,150,150);
  // window3-3 rect(1100,1100,150,150);
  //window1-2 rect(100,600,100,150);
  //window2-3
   var d1= dist(mouseX,mouseY,500,1100)
  // window2-2
   var d2 = dist(mouseX,mouseY,500,600)
   //window2-1
   var d3=dist(mouseX,mouseY,500,100)
     //window3-1
   var d4=dist(mouseX,mouseY,1100,100);
     //window3-2
   var d5=dist(mouseX,mouseY,1100,600);
     //window3-3
   var d6=dist(mouseX,mouseY,1100,1100);
  //window1-2
   var d7=dist(mouseX,mouseY,100,600);
  
  if(d1<150)   {
    hasClicked = true;
           //angry men
  index4 = int(random(0, angrymens.length));
if (index4 == angrymens.length) {
    index4 = 0;
  }
      blind.push( new Blindcurtain(500,1100) );
     yVal = 1100;  
  velocity = 0; 
	}
  
   if(d2<150){
     hasClicked = true;
    
      blind2.push( new Blindcurtain(500,600) );
     yVal = 0;  
  velocity = 0; 
   }
  
   if(d3<150){
     hasClicked = true;
     //phone calling person random
  index1 = int(random(0, phones.length));
if (index1 == phones.length) {
    index1 = 0;
  }
      blind3.push( new Blindcurtain(500,100) );
     yVal = 0;  
  velocity = 0; 
   }
  
  //smallBlind
  if(d4<75){
    //calling&mac person random
     index2 = int(random(0, mac.length));
if (index2 == mac.length) {
    index2 = 0;
}
     hasClicked = true;
      smallBlind.push( new Blindcurtain2(1100,100) );
     yVal = 0;  
  velocity = 0; 
   }
  if(d5<75){
     hasClicked = true;
      smallBlind2.push( new Blindcurtain2(1100,600) );
     yVal = 0;  
  velocity = 0; 
   }
  if(d6<75){
     hasClicked = true;
    
    //angry women
  index5 = int(random(0, angrywomens.length));
if (index5 == angrywomens.length) {
    index5 = 0;
  }
      smallBlind3.push( new Blindcurtain2(1100,1100) );
     yVal = 0;  
  velocity = 0; 
   }
  if(d7<75){
     index6 = int(random(0, cigarettes.length));
if (index6 == cigarettes.length) {
    index6 = 0;
}
  }
   else{
     hasClicked = false;
   }
 }







function Blindcurtain(x,y) {
  this.x=x
  this.y=y
  this.yVal=this.y-80;
  this.velocity=velocity
  this.mass=mass
  
  this.move = function(){
  this.velocity += accel; 
  this.yVal += this.velocity;
    
    if (this.yVal >= this.y-70) {
   
    this.velocity *= -0.6;
    this.yVal = this.y-70;
  }
  }
  
  this.display=function(){
	rect(this.x,this.yVal+3, 295,this.mass-5); 
  rect(this.x,this.yVal+12, 295,this.mass);
  rect(this.x,this.yVal+24, 295,this.mass);
  rect(this.x,this.yVal+36,295,this.mass);
  rect(this.x,this.yVal+48, 295,this.mass);
  rect(this.x,this.yVal+60, 295,this.mass);
      rect(this.x,this.yVal+72, 295,this.mass);
      rect(this.x,this.yVal+84, 295,this.mass);
      rect(this.x,this.yVal+96, 295,this.mass);
          rect(this.x,this.yVal+108, 295,this.mass);
          rect(this.x,this.yVal+120, 295,this.mass);
          rect(this.x,this.yVal+132, 295,this.mass);
          rect(this.x,this.yVal+144, 295,this.mass);

    
  
  //height-150은 bottom이니 잘 활용할 것
  }
}

function Blindcurtain2(x,y) {
  this.x=x
  this.y=y
  this.yVal=this.y-80;
  this.velocity=velocity
  this.mass=mass
  
  this.move = function(){
  this.velocity += accel; 
  this.yVal += this.velocity;
    
    if (this.yVal >= this.y-70) {
   
    this.velocity *= -0.6;
    this.yVal = this.y-70;
  }
  }
  
  this.display=function(){
	rect(this.x,this.yVal+3, 150,this.mass-5); 
  rect(this.x,this.yVal+12, 150,this.mass);
  rect(this.x,this.yVal+24, 150,this.mass);
  rect(this.x,this.yVal+36,150,this.mass);
  rect(this.x,this.yVal+48, 150,this.mass);
  rect(this.x,this.yVal+60, 150,this.mass);
      rect(this.x,this.yVal+72, 150,this.mass);
      rect(this.x,this.yVal+84, 150,this.mass);
      rect(this.x,this.yVal+96, 150,this.mass);
          rect(this.x,this.yVal+108, 150,this.mass);
          rect(this.x,this.yVal+120, 150,this.mass);
          rect(this.x,this.yVal+132, 150,this.mass);
          rect(this.x,this.yVal+144, 150,this.mass);

    
  
  //height-150은 bottom이니 잘 활용할 것
  }
}