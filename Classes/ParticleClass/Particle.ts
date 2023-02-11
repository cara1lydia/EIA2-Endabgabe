namespace Fireworks {

    export class Particle {

        color: string;
        radius: number;
        speed: Vector;
        opacity: number;
        lifetime: number;
        position: Vector;

        constructor(_color: string, _position: Vector, _lifetime: number) {
            let speed: Vector = new Vector( Math.random() * getRandomNumber(-30, 30), Math.random() * getRandomNumber(-20, 20));
            this.speed = speed;
            this.position = new Vector(_position.x, _position.y);
            this.color = _color;
            this.lifetime = _lifetime;
            this.radius = Math.floor((Math.random() * 20) + 2);
            this.opacity = 1;
        }

        draw(): void {
            //
        }

        move(_timeslice: number): void {
            let offset: Vector = this.speed;
            this.position.add(offset);



            
        }
    }
}