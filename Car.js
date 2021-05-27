module.exports = class Car { 
    constructor (color, convertible) {
    this.color = color
    this.convertible = convertible
    this.speed = 0
    }
    accelerate (deltaS) {
        this.speed += deltaS
    }
    decelerate (deltaS) {
        this.speed -= deltaS
    }
}
