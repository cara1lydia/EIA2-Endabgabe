var Fireworks;
(function (Fireworks) {
    class Rocket {
        lifetime;
        color;
        shape;
        position;
        particles;
        constructor(_lifetime, _color, _shape, _position) {
            let position = new Fireworks.Vector(this.position.x, this.position.y);
            this.position = position;
            this.color = _color;
            this.shape = _shape;
            this.lifetime = _lifetime;
        }
        explode() {
            for (let i; i >= 30; i++) {
                switch (this.shape) {
                    case "circle":
                        this.particles.push(new Fireworks.Circle(this.color, this.position, this.lifetime));
                        break;
                    case "square":
                        this.particles.push(new Fireworks.Square(this.color, this.position, this.lifetime));
                        break;
                }
            }
        }
    }
    Fireworks.Rocket = Rocket;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Rocket.js.map