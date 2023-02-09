var Fireworks;
(function (Fireworks) {
    class Circle extends Fireworks.Particle {
        draw() {
            Fireworks.crc2.save();
            Fireworks.crc2.beginPath();
            Fireworks.crc2.translate(this.position.x, this.position.y);
            Fireworks.crc2.arc(0, 0, 7 * this.radius / 100, 0, 2 * Math.PI);
            Fireworks.crc2.closePath();
            Fireworks.crc2.fillStyle = this.color;
            if (this.lifetime < 0) {
                Fireworks.crc2.globalAlpha = this.opacity--;
            }
            Fireworks.crc2.fill();
            Fireworks.crc2.restore();
        }
    }
    Fireworks.Circle = Circle;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Circle.js.map