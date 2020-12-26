class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
            var options={   
                bodyA:body1 ,
                bodyB:body2,
                pointB:{x:this.offsetX,y:this.offsetY}
                //stiffness: 0.04,
                // length:10
            }
        
            // this.chain=Constraint.create(options);
            // World.add(world,this.chain);
            this.rope=Constraint.create(options)
            World.add(world,this.rope)
                   
    
        }
        display(){
            var pointA=this.rope.bodyA.position
            var pointB=this.rope.bodyB.position
            var ancher1x=pointA.x
            var ancher1Y=pointA.y
            var ancher2x=pointB.x+this.offsetX
            var ancher2y=pointB.y+this.offsetY
            strokeWeight(4); 
            line(ancher1x, ancher1Y, ancher2x, ancher2y);

        }
        }