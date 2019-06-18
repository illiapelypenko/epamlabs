const rectangle = document.querySelector(".canvas__rectangle").getContext("2d");
const romb = document.querySelector(".canvas__romb").getContext("2d");
const polylines = document.querySelector(".canvas__polylines").getContext("2d");
const spyral = document.querySelector(".canvas__spyral").getContext("2d");
const sun = document.querySelector(".canvas__sun").getContext("2d");
const smile1 = document.querySelector(".canvas__smile1").getContext("2d");

rectangle.beginPath();
rectangle.moveTo(50, 50);
rectangle.lineTo(150, 50);
rectangle.lineTo(190, 150);
rectangle.lineTo(10, 150);
rectangle.lineTo(50, 50);
rectangle.stroke();

romb.beginPath();
rectangle.moveTo(100, 10);
romb.lineTo(190, 100);
romb.lineTo(100, 190);
romb.lineTo(10, 100);
romb.lineTo(100, 10);
romb.fillStyle = "red";
romb.fill();

polylines.beginPath();
polylines.moveTo(0, 0);
polylines.lineTo(240, 20);
polylines.lineTo(0, 40);
polylines.lineTo(240, 60);
polylines.lineTo(0, 80);
polylines.lineTo(240, 100);
polylines.lineTo(0, 120);
polylines.lineTo(240, 140);
polylines.lineTo(0, 160);
polylines.lineTo(240, 180);
polylines.lineTo(0, 200);
polylines.lineTo(240, 220);
polylines.lineTo(0, 240);
polylines.stroke();

spyral.moveTo(130, 130);
for (i = 0; i < 200; i++) {
    angle = 0.1 * i;
    x = (1 + angle) * Math.cos(angle) * 7;
    y = (1 + angle) * Math.sin(angle) * 7;
    spyral.lineTo(x + 130, y + 130);
}
spyral.stroke();

sun.beginPath();
sun.moveTo(100, 0);
sun.quadraticCurveTo(100, 100, 175, 25);
sun.quadraticCurveTo(100, 100, 200, 100);
sun.quadraticCurveTo(100, 100, 175, 175);
sun.quadraticCurveTo(100, 100, 100, 200);

sun.quadraticCurveTo(100, 100, 25, 175);
sun.quadraticCurveTo(100, 100, 0, 100);
sun.quadraticCurveTo(100, 100, 25, 25);
sun.quadraticCurveTo(100, 100, 100, 0);
sun.fillStyle = "gold";
sun.fill();

smile1.beginPath();
smile1.arc(100, 100, 90, 0, 7);
smile1.fillStyle = "gold";
smile1.fill();
smile1.stroke();

smile1.beginPath();
smile1.arc(100, 75, 30, 0, 7);
smile1.fillStyle = "white";
smile1.fill();
smile1.stroke();

smile1.beginPath();
smile1.arc(100, 75, 20, 0, 7);
smile1.fillStyle = "red";
smile1.fill();
smile1.stroke();

smile1.beginPath();
smile1.arc(100, 75, 5, 0, 7);
smile1.fillStyle = "black";
smile1.fill();
smile1.stroke();

smile1.beginPath();
smile1.moveTo(50, 150);
smile1.quadraticCurveTo(100, 200, 150, 150);
smile1.fillStyle = "white";
smile1.lineTo(50, 150);
smile1.fill();
smile1.stroke();

smile1.beginPath();
smile1.moveTo(150, 50);
smile1.quadraticCurveTo(150, 0, 200, 0);
smile1.strokeStyle = "gold";
smile1.lineWidth = 3;
smile1.stroke();

smile1.beginPath();
smile1.moveTo(50, 50);
smile1.quadraticCurveTo(50, 0, 0, 0);
smile1.strokeStyle = "gold";
smile1.lineWidth = 3;
smile1.stroke();
