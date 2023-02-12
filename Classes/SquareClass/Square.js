var Fireworks;
(function (Fireworks) {
    /**
    * Aufgabe: Endabgabe
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 10.02.2023
    * Quellen: In Zusammenarbeit mit Vivien Peschke, Anki Pfeffer und Henning Pils
    */
    class Square extends Fireworks.Particle {
        constructor(_color, _position, _lifetime) {
            super(_color, _position, _lifetime);
            this.draw();
        }
        draw() {
            Fireworks.crc2.save();
            Fireworks.crc2.beginPath();
            Fireworks.crc2.rect(this.position.x - 30, this.position.y - 30, 0.5 * this.radius, 0.5 * this.radius);
            Fireworks.crc2.stroke();
            Fireworks.crc2.fillStyle = this.color;
            if (this.lifetime < 0) {
                Fireworks.crc2.globalAlpha = this.opacity;
                this.opacity -= 0.05;
            }
            Fireworks.crc2.fill();
            Fireworks.crc2.restore();
        }
    }
    Fireworks.Square = Square;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Square.js.map