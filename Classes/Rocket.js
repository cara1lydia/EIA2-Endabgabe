var Fireworks;
(function (Fireworks) {
    class Rocket extends Fireworks.Firework {
        size;
        color;
        shape;
        constructor(_size, _color, _shape, _position) {
            super(_position);
            this.position = _position;
            this.size = _size;
            this.color = _color;
            this.shape = _shape;
            this.draw();
        }
        draw() {
            /*crc2.save();
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
            crc2.fillStyle = (this.color);
            crc2.fill();
            crc2.restore();*/
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
                    break;
                case "square":
                    /*crc2.save();
                    crc2.beginPath();
                    crc2.translate(this.position.x, this.position.y);
                    crc2.scale(0.1 * this.size, 0.1 * this.size);
                    crc2.setLineDash([5, 5]);
                    crc2.moveTo(0, 200);
                    crc2.lineTo(200, 0);
                    crc2.closePath();
                    crc2.fillStyle = this.color;
                    crc2.shadowBlur = 15 * this.size / 100 + Math.random() * 150;
                    crc2.fill();
                    crc2.restore();
                    console.log(this.shape);*/
                    Fireworks.crc2.save();
                    Fireworks.crc2.beginPath();
                    Fireworks.crc2.rect(this.position.x - 30, this.position.y - 30, 0.5 * this.size, 0.5 * this.size);
                    Fireworks.crc2.stroke();
                    Fireworks.crc2.fill();
                    Fireworks.crc2.shadowBlur = 15 * this.size / 100 + Math.random() * 150;
                    Fireworks.crc2.fillStyle = this.color;
                    break;
            }
        }
    }
    Fireworks.Rocket = Rocket;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Rocket.js.map