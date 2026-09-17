import Field from "../model/field.js";

export default class Game {
    constructor() {
        this.field = new Field();
    }

    start() {
        this.field.start();
    }
}