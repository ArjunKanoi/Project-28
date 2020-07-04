class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 100
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA=null;

    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        stroke("rgb(139, 0, 0)");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
     
        
    }
    
}