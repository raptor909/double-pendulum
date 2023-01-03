const pendulums = 1000;
for(let i = 0; i < pendulums; i++) {
    new Dp(Math.PI/2-i*(0.01/pendulums), Math.PI/2-i*+(0.01/pendulums));
    p[i].color = `rgba(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, 0.5)`
}

function loop () {
    ctx.clearRect(0,0, width, height);
    rect(0,0, width, height, "black")
    for (const pen of p) {
        pen.update();
        pen.draw();
    }
}

setInterval(loop, 1000/60);