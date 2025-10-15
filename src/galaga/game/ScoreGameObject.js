import GameObject from "../engine/GameObject.js"
import ScoreUpdateComponent from "./ScoreUpdateComponent.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"

class ScoreGameObject extends GameObject {
    constructor(x, y) {
        super()
        this.addComponent(new Text(this, x, y, "", "50px sans"))
        this.addComponent(new TextDraw(this, "white", "transparent"))
        this.addComponent(new ScoreUpdateComponent(this))
    }

}

export default ScoreGameObject
