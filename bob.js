class Bob{

    constructor (x, y, r)  {
        var options = {
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.5
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x, y, r,options);
       World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS)
        fill(220,10,60);
        ellipse(0,0,this.r,this.r);
        pop()

    }
}
