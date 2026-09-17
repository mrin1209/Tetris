import Field from "../model/field.js";
import Loop from "./loop.js";

export default class Game {
    constructor() {
        this.field = new Field();
        this.loop = new Loop(() => this.run());
    }

    start() {
        this.field.start();

        this.loop.start();
    }

    run() {
        
    }
}