namespace Fireworks {

    export class Particle {

        color: string;
        radius: number;
        speed: Vector;
        opacity: number;
        lifetime: number;
        position: Vector;

        constructor(_color: string, _position: Vector, _lifetime: number) {
            let speed: Vector = new Vector(Math.floor((Math.random() * 20) + 2), Math.floor((Math.random() * 20) + 2));
            this.speed = speed;
            this.position = _position;
            this.color = _color;
            this.lifetime = _lifetime;
            this.radius = Math.floor((Math.random() * 20) + 2);
            this.opacity = 1;
        }

        move(): void {
            let offset: Vector = this.speed;
            this.position.add(offset);
        }
    }
}