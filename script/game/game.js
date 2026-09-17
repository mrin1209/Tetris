import Loop from "./loop.js";

export default class Game {
    constructor() {
        this.loop = new Loop(() => this.run());
    }

    start() {
        this.loop.start();
    }

    run() {
        
    }
}