var Fireworks;
(function (Fireworks) {
    class Square extends Fireworks.Particle {
        draw() {
            Fireworks.crc2.save();
            Fireworks.crc2.beginPath();
            Fireworks.crc2.rect(this.position.x - 30, this.position.y - 30, 0.5 * this.radius, 0.5 * this.radius);
            Fireworks.crc2.stroke();
            Fireworks.crc2.fillStyle = this.color;
            if (this.lifetime < 0) {
                Fireworks.crc2.globalAlpha = this.opacity--;
            }
            Fireworks.crc2.fill();
            Fireworks.crc2.restore();
        }
    }
    Fireworks.Square = Square;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Square.js.map