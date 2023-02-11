var Fireworks;
(function (Fireworks) {
    class Rocket {
        lifetime;
        color;
        shape;
        position;
        particles = [];
        constructor(_lifetime, _color, _shape, _position) {
            this.position = _position;
            this.color = _color;
            this.shape = _shape;
            this.lifetime = _lifetime;
            this.explode();
        }
        explode() {
            // erstellt Partikel und pushed sie ins Array
            for (let i = 0; i < 30; i++) {
                // Kreis oder Viereck
                switch (this.shape) {
                    case "circle":
                        let createdCircle = new Fireworks.Circle(this.color, this.position, this.lifetime);
                        this.particles.push(createdCircle);
                        break;
                    case "square":
                        this.particles.push(new Fireworks.Square(this.color, this.position, this.lifetime));
                        break;
                }
            }
        }
        draw() {
            for (let i = 0; i < this.particles.length; i++) {
                this.particles[i].move();
                this.particles[i].draw();
                if (this.particles[i].lifetime <= 0) {
                    this.particles.splice(i, 1);
                }
            }
        }
    }
    Fireworks.Rocket = Rocket;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Rocket.js.map