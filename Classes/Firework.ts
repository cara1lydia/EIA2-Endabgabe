namespace Fireworks {

    export abstract class Firework {
        position: Vector;

        constructor(_position: Vector) {
            this.position = new Vector(0, 0);
        }

        abstract draw(): void;
    }
}