class Sand {
    constructor(x, y, radius) {
        var options = {
            restitution : 1.3,
            friction : 5,
            density : 1
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display() {
        fill("purple");
        stroke("white");         
        
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius);
        pop();        
    }
}