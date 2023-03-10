var Fireworks;
(function (Fireworks) {
    /**
    * Aufgabe: Endabgabe
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 10.02.2023
    * Quellen: In Zusammenarbeit mit Vivien Peschke, Anki Pfeffer und Henning Pils
    */
    class Circle extends Fireworks.Particle {
        constructor(_color, _position, _lifetime) {
            super(_color, _position, _lifetime);
            this.draw();
        }
        draw() {
            Fireworks.crc2.save();
            Fireworks.crc2.beginPath();
            Fireworks.crc2.translate(this.position.x, this.position.y);
            Fireworks.crc2.arc(0, 0, 7 * this.radius / 30, 0, 2 * Math.PI);
            Fireworks.crc2.closePath();
            Fireworks.crc2.fillStyle = this.color;
            if (this.lifetime < 0) {
                Fireworks.crc2.globalAlpha = this.opacity;
                this.opacity -= 0.5;
            }
            Fireworks.crc2.fill();
            Fireworks.crc2.restore();
        }
    }
    Fireworks.Circle = Circle;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Circle.js.map