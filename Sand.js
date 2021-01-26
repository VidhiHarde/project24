class Sand{
    constructor(x,y,diameter){
        var options={
           'restitution':1.3,
            'friction':5,
            'density':1,
           isStatic:false

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
        fill("red");
        ellipse(pos.x,pos.y,4) ;
        pop();
     
    }

  
}