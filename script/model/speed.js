export default class Speed {
    constructor(speed = 1000) {
        this.speed = speed;
    }

    get() {
        return this.speed;
    }

    set(speed) {
        this.speed = speed;
    }
}