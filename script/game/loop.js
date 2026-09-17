import Speed from "../model/speed.js";

export default class Loop {
    constructor(callback) {
        this.callback = callback;
        this.speed = new Speed();
    }

    start() {
        this.timer = setTimeout(
            () => this.run(),
            this.speed.get()
        );
    }

    run() {
        this.callback();

        this.timer = setTimeout(
            () => this.run(),
            this.speed.get()
        );
    }

    reset() {
        clearTimeout(this.timer);

        this.timer = setTimeout(
            () => this.run(),
            this.speed.get()
        );
    }

    stop() {
        clearTimeout(this.timer);
        this.timer = null;
    }
}