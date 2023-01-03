let canvas = document.querySelector('canvas');
let ctx = canvas?.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

class Vector {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }

    add(v){
        this.x += v.x;
        this.y += v.y;
    }

    sub(v){
        this.x -= v.x;
        this.y -= v.y;
    }

    mult(n){
        this.x *= n;
        this.y *= n;
    }

    div(n){
        if (n == 0) return;
        this.x /= n;
        this.y /= n;
    }

    mag(){
        return(Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)));
    }

    normalize() {
        this.div(this.mag());
    }

    setMag(n) {
        this.normalize();
        this.mult(n);
    }

    limit(n) {
        this.setMag(Math.min(this.mag(), n));
    }

    copy() {
        return new Vector(this.x, this.y);
    }

    static randomVector(mag=1) {
        let a = Math.random() * (2*Math.PI);
        let v = new Vector(Math.cos(a), Math.sin(a));
        v.setMag(mag);
        return v;
    }

    static add(a, b) {
        return new Vector(
            a.x + b.x,
            a.y + b.y
        );
    }
}

function rect(x, y, w, h, c) {
    ctx.fillStyle = c;
    ctx.fillRect(x, y, w, h)
}

function circle(x, y, r, c) {
    ctx.fillStyle = c;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.fill();
}

function line(x1, y1, x2, y2, c="white") {
    ctx.strokeStyle = c;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

let mouseX = 0;
let mouseY = 0;
document.addEventListener("mousemove", e=>{
    mouseX = e.clientX;
    mouseY = e.clientY;
});