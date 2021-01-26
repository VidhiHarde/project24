class Rubber{
    constructor(x,y,diameter){
        var options={
           ' restitution':0.3,
           'friction':5,
            'density':1

        };
        this.body=Matter.Bodies.circle(x,y,diameter,options)
       // this.radius=this.radius
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        var dia=this.body.diameter
        push();
        //translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("darkblue");
        ellipse(pos.x,pos.y,30) ;
        pop();
     
    }

  
}