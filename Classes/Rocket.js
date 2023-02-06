var Fireworks;
(function (Fireworks) {
    class Rocket extends Fireworks.Firework {
        size;
        color;
        shape;
        constructor(_size, _color, _shape, _position) {
            super(_position);
            this.size = _size * Math.random();
            this.color = _color;
            this.shape = _shape;
        }
        draw() {
            switch (this.shape) {
                case "circle":
                    Fireworks.crc2.save();
                    Fireworks.crc2.beginPath();
                    Fireworks.crc2.translate(this.position.x, this.position.y);
                    Fireworks.crc2.arc(0, 0, 7 * this.size / 100, 0, 2 * Math.PI);
                    Fireworks.crc2.closePath();
                    Fireworks.crc2.fillStyle = this.color;
                    Fireworks.crc2.shadowBlur = 15 * this.size / 100 + Math.random() * 150;
                    Fireworks.crc2.fill();
                    Fireworks.crc2.restore();
                    console.log(this.shape);
                    break;
                case "square":
                    Fireworks.crc2.save();
                    Fireworks.crc2.beginPath();
                    Fireworks.crc2.translate(this.position.x, this.position.y);
                    Fireworks.crc2.scale(0.1 * this.size, 0.1 * this.size);
                    Fireworks.crc2.setLineDash([5, 5]);
                    Fireworks.crc2.moveTo(0, 200);
                    Fireworks.crc2.lineTo(200, 0);
                    Fireworks.crc2.closePath();
                    Fireworks.crc2.fillStyle = this.color;
                    Fireworks.crc2.shadowBlur = 15 * this.size / 100 + Math.random() * 150;
                    Fireworks.crc2.fill();
                    Fireworks.crc2.restore();
                    console.log(this.shape);
                    break;
            }
        }
    }
    Fireworks.Rocket = Rocket;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Rocket.js.map