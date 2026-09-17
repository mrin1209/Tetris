import DISPLAY from "../config/display.js";

export default class CellDraw {
    constructor(ctx) {
        this.ctx = ctx;
        this.cellSize = DISPLAY.cell;
    }

    run(x, y, color, offsetX = 0, offsetY = 0) {
        const px = offsetX + x * this.cellSize;
        const py = offsetY + y * this.cellSize;

        this.ctx.fillStyle = DISPLAY.background;

        this.ctx.fillRect(
            px,
            py,
            this.cellSize,
            this.cellSize
        );

        this.ctx.strokeStyle = DISPLAY.border;
        this.ctx.lineWidth = 1;

        this.ctx.strokeRect(
            px,
            py,
            this.cellSize,
            this.cellSize
        );
    }
}