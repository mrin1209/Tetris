import DISPLAY from "../config/display.js";

export default class Field {
    constructor() {
        this.col = DISPLAY.col;
        this.row = DISPLAY.row;
    }

    start() {
        this.field =
            Array.from({ length: this.row },() =>
                Array.from({ length: this.col },() => (
                        0
                    )
                )
            );
    }

    get() {
        return this.field;
    }

    set() {

    }
}