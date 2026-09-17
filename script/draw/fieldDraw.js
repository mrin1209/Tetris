import MinoDraw from "./cellDraw.js";
import CellDraw from "./cellDraw.js";

export default class FieldDraw {
    constructor(ctx) {
        this.cellDraw = new CellDraw(ctx);
    }

    run(display, layout) {
        display.forEach((row, y) => {
            if (y < layout.hiddenRows) {
                return;
            }

            row.forEach((cell, x) => {
                this.cellDraw.run(
                    x,
                    y - layout.hiddenRows,
                    layout.x,
                    layout.y
                );
            });
        });
    }
}