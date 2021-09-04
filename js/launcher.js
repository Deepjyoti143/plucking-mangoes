class Launcher{
    constructor(a,b){
        var options={
            bodyA:a,
            pointB:b,
            length:10,
            stiffness:0.004,
        }
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher)
    }
    display(){
        if(this.launcher.bodyA!=null){
        var bodyA=this.launcher.bodyA.position;
        var pointB=this.launcher.pointB;
        line(bodyA.x,bodyA.y,pointB.x,pointB.y);
        }

    }
    fly(){
        this.launcher.bodyA=null;
    }
    attach(){
        this.launcher.bodyA=stoneObj.body;
    }
}