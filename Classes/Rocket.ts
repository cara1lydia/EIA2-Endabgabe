namespace Fireworks {

    export class Rocket {

        lifetime: number;
        color: string;
        shape: string;
        position: Vector;
        particles: Particle[];

        constructor(_lifetime: number, _color: string, _shape: string, _position: Vector) {
            let position: Vector = new Vector(this.position.x, this.position.y);
            this.position = position;
            this.color = _color;
            this.shape = _shape;
            this.lifetime = _lifetime;
        }

        explode(): void {

            for (let i: number; i >= 30; i++) {
                switch (this.shape) {
                    case "circle":
                        this.particles.push(new Circle(this.color, this.position, this.lifetime));
                        break;
                    case "square":
                        this.particles.push(new Square(this.color, this.position, this.lifetime));
                        break;
                }

            }
        }



    }
}