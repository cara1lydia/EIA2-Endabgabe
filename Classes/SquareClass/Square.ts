namespace Fireworks {

    export class Square extends Particle {

        draw(): void {

            crc2.save();
            crc2.beginPath();
            crc2.rect(this.position.x - 30, this.position.y - 30, 0.5 * this.radius, 0.5 * this.radius);
            crc2.stroke();
            crc2.fillStyle = this.color;
            if (this.lifetime < 0) {
                crc2.globalAlpha = this.opacity;
                this.opacity -= 0.05;
            }
            crc2.fill();
            crc2.restore();
        }
    }
}