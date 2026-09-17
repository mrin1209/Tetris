import FieldDraw from "../draw/fieldDraw.js";
import DISPLAY from "../config/display.js";

export default class Display {
    constructor() {
        this.canvas = document.getElementById("game");
        this.canvas.width = DISPLAY.canvas.width;
        this.canvas.height = DISPLAY.canvas.height;
        this.ctx = this.canvas.getContext("2d");

        this.fieldDraw = new FieldDraw(this.ctx);
    }

    run(
        field,
    ) {
        this.clear();

        this.fieldDraw.run(
            this.display(
                field,
            ),
            DISPLAY.field
        );
    }

    clear() {
        this.ctx.fillStyle = DISPLAY.background;

        this.ctx.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
    }

    display(field) {
        const display = field.get().map(row => [...row]);

        return display;
    }
}