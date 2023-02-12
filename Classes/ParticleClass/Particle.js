var Fireworks;
(function (Fireworks) {
    /**
    * Aufgabe: Endabgabe
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 10.02.2023
    * Quellen: In Zusammenarbeit mit Vivien Peschke, Anki Pfeffer und Henning Pils
    */
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
        move() {
            let offset = this.speed;
            this.position.add(offset);
            this.lifetime--;
        }
    }
    Fireworks.Particle = Particle;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Particle.js.map