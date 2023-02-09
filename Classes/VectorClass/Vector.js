var Fireworks;
(function (Fireworks) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    Fireworks.Vector = Vector;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Vector.js.map