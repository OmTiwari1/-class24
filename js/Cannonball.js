class Cannonball{
    constructor(x,y){

        var options={
            restitution:0.5,
            isStatic:true,
            density:1,
        }
this.body=Bodies.circle(x,y,40,options)
World.add(world,this.body)
this.image=loadImage("./assets/cannonball.png")

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,40,40);
        pop();
    }
    shoot() {
        var velocity=p5.Vector.fromAngle(cannon.angle)
        velocity.mult(25)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
      }
}