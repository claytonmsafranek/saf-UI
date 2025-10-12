import GameObject from "../engine/GameObject.js"
import BulletUpdateComponent from "../game/BulletUpdateComponent.js"
import BulletDrawComponent from "../game/BulletDrawComponent.js"

class BulletGameObject extends GameObject {
    constructor(x, y, w, h, velocityX, velocityY) {
        super()

        this.components.push(new BulletUpdateComponent(this, x, y, w, h, velocityX, velocityY))
        this.components.push(new BulletDrawComponent(this))
    }

    update() {
        this.components.filter(c=>c.update).forEach(c=>c.update())
    }

    draw(ctx) {
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx))
    }

}

export default BulletGameObject
