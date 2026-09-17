import Field from "../model/field.js";
import Loop from "./loop.js";
import Display from "../system/display.js";

export default class Game {
    constructor() {
        this.field = new Field();
        this.loop = new Loop(() => this.run());
        this.display = new Display();
    }

    start() {
        this.field.start();
        this.loop.start();
        this.draw();
    }

    run() {
        this.draw();
    }

    draw() {
        this.display.run(
            this.field,
        )
    }
}