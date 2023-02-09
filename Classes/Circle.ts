namespace Fireworks {

    export class Circle extends Particle {

        draw(): void {

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, 7 * this.radius / 100, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = this.color;
            if (this.lifetime < 0) {
                crc2.globalAlpha = this.opacity --;
            }
            crc2.fill();
            crc2.restore();
        }
    }
}