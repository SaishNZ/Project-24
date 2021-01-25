class Stone extends BaseClass {
    constructor(x, y, width, height) {
        var options = {
            'density' : 1.0,
            'friction' : 1.0,
            'restitution' : 0.8
        };             

        super(x, y, width, height, options);
    }

    display() {
        fill("black");
        stroke("white");
        super.display();
    }
}