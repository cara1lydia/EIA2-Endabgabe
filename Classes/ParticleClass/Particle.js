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
            let speed = new Fireworks.Vector(Math.random() * Fireworks.getRandomNumber(-30, 30), Math.random() * Fireworks.getRandomNumber(-20, 20));
            this.speed = speed;
            this.position = new Fireworks.Vector(_position.x, _position.y);
            this.color = _color;
            this.lifetime = _lifetime;
            this.radius = Math.floor((Math.random() * 20) + 2);
            this.opacity = 1;
        }
        draw() {
            //
        }
        move(_timeslice) {
            let offset = this.speed;
            this.position.add(offset);
        }
    }
    Fireworks.Particle = Particle;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Particle.js.map