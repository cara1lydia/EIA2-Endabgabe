namespace Fireworks {

    export class Rocket extends Firework {

        size: number;
        color: string;
        shape: string;

        constructor(_size: number, _color: string, _shape: string, _position: Vector) {
            super(_position);
            this.size = _size * Math.random();
            this.color = _color;
            this.shape = _shape;
        }

        draw(): void {
            switch (this.shape) {
                case "circle":
                    crc2.save();
                    crc2.beginPath();
                    crc2.translate(this.position.x, this.position.y);
                    crc2.arc(0, 0, 7 * this.size / 100, 0, 2 * Math.PI);
                    crc2.closePath();
                    crc2.fillStyle = this.color;
                    crc2.shadowBlur = 15 * this.size / 100 + Math.random() * 150;
                    crc2.fill();
                    crc2.restore();
                    console.log(this.shape);
                    break;
                case "square":
                    crc2.save();
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
                    console.log(this.shape);
                    break;
            }
        }
    }
}