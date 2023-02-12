namespace Fireworks {

    /**
    * Aufgabe: Endabgabe 
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 10.02.2023
    * Quellen: In Zusammenarbeit mit Vivien Peschke, Anki Pfeffer und Henning Pils
    */

    export class Circle extends Particle {
        
        constructor(_color: string, _position: Vector, _lifetime: number) {
            super(_color, _position, _lifetime);
            this.draw();
        }

        draw(): void {

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, 7 * this.radius / 30, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = this.color;
            if (this.lifetime < 0) {
                crc2.globalAlpha = this.opacity;
                this.opacity -= 0.5;
            }
            crc2.fill();
            crc2.restore();
        }
    }
}