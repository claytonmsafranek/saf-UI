import Component from "../engine/Component.js"
import BulletUpdateComponent from "../game/BulletUpdateComponent.js"

class BulletDrawComponent extends Component {
    constructor(parent) {
        super(parent)
    }

    draw(ctx) {
        let updateComponent = this.parent.getComponent(BulletUpdateComponent)

        ctx.fillStyle = "blue"
        ctx.strokeStyle = "blue"

        ctx.beginPath();
        ctx.arc(
            updateComponent.x,
            updateComponent.y,
            updateComponent.w,
            0,
            Math.PI*2);
        ctx.fill();
        ctx.stroke();
    }
}

export default BulletDrawComponent
