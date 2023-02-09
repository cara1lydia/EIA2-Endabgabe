var Fireworks;
(function (Fireworks) {
    class Particle {
        color;
        radius;
        speed;
        opacity;
        lifetime;
        position;
        constructor(_color, _position, _lifetime) {
            let speed = new Fireworks.Vector(Math.floor((Math.random() * 20) + 2), Math.floor((Math.random() * 20) + 2));
            this.speed = speed;
            let position = new Fireworks.Vector(this.position.x, this.position.y);
            this.position = position;
            this.color = _color;
            this.lifetime = _lifetime;
            this.radius = Math.floor((Math.random() * 20) + 2);
            this.opacity = 1;
        }
        move() {
            let offset = this.speed;
            this.position.add(offset);
        }
    }
    Fireworks.Particle = Particle;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Particle.js.map