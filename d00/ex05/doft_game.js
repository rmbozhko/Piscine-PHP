'use strict';

function  start_game(canvas)
{
  // var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); // actual tool to paint on canvas
var ballRadius = 4;//10;
var x = Math.random() * canvas.width - ballRadius;//canvas.width / 2;
var y = canvas.height - 30;
var paddleWidth = 50;//75;
var paddleX = (canvas.width - paddleWidth) / 2;

var dx = 1.2;//2;
var dy = -1.2;//-2;
var paddleHeight = 5;//10;
var leftPressed = false;
var rightPressed = false;
var interval = 10;
var brickWidth = 25;//75;
var brickHeight = 10;//20;
var brickRowCount = 4;//5;// Math.floor((Math.random() * 5) + 1);
var brickColumnCount = 4;//5;// Math.floor((Math.random() * 5) + 1);
var brickPadding = 10;
var brickOffsetTop = 15;//30;
var brickOffsetLeft = (canvas.width - ((brickRowCount + 2) * brickWidth)) / 2;//30;
var bricks = [];
var score = 0;
var time = 0;
var lifes = 3;
var touched_paddle = true;

for(var c = 0; c < brickColumnCount; c++)
{
  bricks[c] = [];
  for(var r = 0; r < brickRowCount; r++)
  {
      bricks[c][r] = { x: 0, y: 0, hit: 0};
  }
}

document.addEventListener("keydown", KeyDownHandler, false);
document.addEventListener("keyup", KeyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function  KeyDownHandler(e)
{
  if (e.keyCode == 37)
    leftPressed = true;
  else if (e.keyCode == 39)
    rightPressed = true;
  else if (e.keyCode == 38)
    paddleWidth += 9;
}

function KeyUpHandler(e)
{
  if (e.keyCode == 37)
    leftPressed = false;
  else if (e.keyCode == 39)
    rightPressed = false;
  else if (e.keyCode == 38)
    paddleWidth -= 1;
}

function  mouseMoveHandler(e)
{
  var relativeX = e.clientX - canvas.offsetLeft;
  if((relativeX - paddleWidth / 2) >= 0 && (relativeX + paddleWidth / 2) <= canvas.width)
  {
    paddleX = relativeX - paddleWidth/2;
  }
}

function  collisionDetection()
{
  for (var i = 0; i < brickColumnCount; i++)
  {
    for (var j = 0; j < brickRowCount; j++)
    {
      var b = bricks[i][j];
      if ((x  > b.x + ballRadius && x  < b.x + brickWidth + ballRadius
        && y > b.y + ballRadius && y < b.y + brickHeight + ballRadius) && !(b.hit))
      {
        dy = -dy;
        b.hit = 1;
        score += (touched_paddle) ? 10 : 20;
        touched_paddle = (touched_paddle) ? false : touched_paddle;

        var rows_remaining = 0;
        for (let brick of bricks)
          rows_remaining += (brick.some(e => e.hit == 0) ? 0 : 1);

        if(!(brickRowCount - rows_remaining))
        {
          alert("Congratulations! You have won!\nAnd your score is: " + score + "\nAnd your time is: " + time + "\nLifes left: " + lifes + "\nAnd now get back to work!");
          document.location.reload();
        }
      }
    }
  }
}

function  drawGameInfo()
{
  const font = "8px Arial";
  ctx.font = font;
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 10);
  ctx.font = font;
  ctx.fillStyle = "#0095DD";
  time = Math.floor(performance.now()) / 1000;
  ctx.fillText("Time: " + time , canvas.width - 55, 10);
  ctx.font = font;
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lifes: " + lifes, (canvas.width / 2) - 20, 10);
}

function drawBricks() {
  for(c = 0; c < brickColumnCount; c++)
  {
    for(r = 0; r < brickRowCount; r++)
    {
      if (!(bricks[c][r].hit))
      {
        var brickX = (c * (brickWidth+brickPadding)) + brickOffsetLeft;
        var brickY = (r * (brickHeight+brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function  drawPaddle()
{
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function  drawBall()
{
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGameInfo();
  drawBall();
  drawPaddle();
  collisionDetection();
  drawBricks();
  paddleX += (rightPressed && paddleX <= canvas.width - paddleWidth) ? 7 : 0;
  paddleX -= (leftPressed && paddleX >= 0) ? 7 : 0;
  dx = (x + dx < 0 + ballRadius || x + dx + ballRadius > canvas.width) ? -dx : dx;
  dy = (y + dy < 0 + ballRadius) ? -dy : dy;
  if (y + dy + ballRadius > canvas.height)
  {
    if (x >= paddleX && x <= paddleX + paddleWidth)
    {
      document.getElementById('audio').src = "paddle_collision.mp3";
      dy = 1.05 * -dy;
      dx = 1.05 * dx;
      touched_paddle = true;
    }
    else
    {
      lifes--;
      if (lifes == 0)
      {
        alert("Game Over!\nGet back to work!");
        document.location.reload();
      }
      else {
        x = Math.random() * canvas.width - ballRadius;
        y = canvas.height - 30;
        dx = dx;
        dy = -dy;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }
  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

draw();
}