const p = [];
class Dp {
    constructor(a1=0, a2=0) {
        this.cx = width/2;
        this.cy = height/2;
        this.color = "red";
        this.g = 0.5;
        this.r1 = Math.min(height, width)/4;
        this.r2 = Math.min(height, width)/4;
        this.m1 = 10;
        this.m2 = 10;

        this.a1 = a1;
        this.a2 = a2;
        this.a1_v = 0;
        this.a2_v = 0;
        this.a1_a = 0;
        this.a2_a = 0;
        this.x1 = this.cx;
        this.y1 = this.cy;
        this.x2 = this.cx;
        this.y2 = this.cy;
        p.push(this);
    }

    update () {
        this.x1 = this.cx + this.r1 * Math.sin(this.a1);
        this.y1 = this.cy + this.r1 * Math.cos(this.a1);
        this.x2 = this.x1 + this.r2 * Math.sin(this.a2);
        this.y2 = this.y1 + this.r2 * Math.cos(this.a2);

        this.a1_a = (-this.g*(2*this.m1+this.m2)*Math.sin(this.a1)-this.m2*this.g*Math.sin(this.a1-2*this.a2)-2*Math.sin(this.a1-this.a2)*this.m2*((this.a2_v*this.a2_v)*this.r2+(this.a1_v*this.a1_v)*this.r1*Math.cos(this.a1-this.a2))) / (this.r1*(2*this.m1+this.m2-this.m2*Math.cos(2*this.a1-2*this.a2)));
        this.a2_a = (2*Math.sin(this.a1-this.a2)*((this.a1_v*this.a1_v)*this.r1*(this.m1+this.m2)+this.g*(this.m1+this.m2)*Math.cos(this.a1)+(this.a2_v*this.a2_v)*this.r2*this.m2*Math.cos(this.a1-this.a2))) / (this.r2*(2*this.m1+this.m2-this.m2*Math.cos(2*this.a1-2*this.a2)));

        this.a1_v += this.a1_a;
        this.a2_v += this.a2_a;
        this.a1+=this.a1_v;
        this.a2+=this.a2_v;
    }

    draw(){
        line(this.cx, this.cy, this.x1, this.y1, this.color);
        line(this.x1, this.y1, this.x2, this.y2, this.color);
        circle(this.x2,this.y2, 5, this.color);
    }
}