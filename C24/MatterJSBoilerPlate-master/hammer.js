class Hammer extends BaseClass{
    constructor(x, y){
        var options = {
            'density' : 2,
            'friction' : 1.0,
            'restitution' : 0.5
        };

        super(x, y, 150, 20, options);
        
    }
    
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        fill("yellow");
        stroke("black");
        super.display();
    }
}