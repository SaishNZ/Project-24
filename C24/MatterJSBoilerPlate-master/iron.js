class Iron extends BaseClass {
    constructor(x, y, width, height) {
        var options = {
            'density' : 5.0,
            'friction' : 5.0,
            'restitution' : 0.8
        };

        super(x, y, width, height, options);
    }

    display() {
        fill("grey");
        stroke("black");
        super.display();
    }
}