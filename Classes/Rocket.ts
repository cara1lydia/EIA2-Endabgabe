namespace Fireworks {

    /**
    * Aufgabe: Endabgabe 
    * Name: Cara Lydia Brüggendieck
    * Matrikel: 269899
    * Datum: 10.02.2023
    * Quellen: In Zusammenarbeit mit Vivien Peschke, Anki Pfeffer und Henning Pils
    */

    export class Rocket {

        lifetime: number;
        color: string;
        shape: string;
        position: Vector;
        particles: Particle[] = [];

        constructor(_lifetime: number, _color: string, _shape: string, _position: Vector) {
            this.position = _position;
            this.color = _color;
            this.shape = _shape;
            this.lifetime = _lifetime;
            this.explode();
        }

        explode(): void {
            // erstellt Partikel und pushed sie ins Array
            for (let i: number = 0; i < 30; i++) {
                // Kreis oder Viereck
                switch (this.shape) {
                    case "circle":
                        let createdCircle: Particle = new Circle(this.color, this.position, this.lifetime);
                        this.particles.push(createdCircle);
                        break;
                    case "square":
                        this.particles.push(new Square(this.color, this.position, this.lifetime));
                        break;
                }

            }
        }
        draw(): void {
            for (let i: number = 0; i < this.particles.length; i++) {
                this.particles[i].move();
                this.particles[i].draw();
                if (this.particles[i].lifetime <= 0) {
                    this.particles.splice(i, 1);
                }
            }
        }



    }
}