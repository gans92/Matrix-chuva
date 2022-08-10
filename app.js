const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

width = canvas.width = innerWidth;
height = canvas.height = innerHeight;

const letras = ["日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"];

const array = [];
for(let i = 0; i < width; i++)
    array[i] = 1;

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#0F0";
  ctx.font = `20px arial`;
  
  for (let i = 0; i < width; i++) {
    
    const text = letras[Math.floor(Math.random() * letras.length)];

    x = i * 20;
    y = array[i] * 20;
    // ctx.fillText(escreva aqui, x, y);
    ctx.fillText(text, x, y);

    if (y > height && Math.random() > 0.95)
    array[i] = 0;
    array[i]++;

  }
  window.requestAnimationFrame(draw);
}
draw();