import GameObject from "./GameObject.js"
import Text from "./Text.js"
import TextDraw from "./TextDraw.js"

class PrefabTextLarge extends GameObject {
    constructor(name, x, y, text) {
        super(name)
        this.x = x
        this.y = y
        this.text = text
        this.font = "100px sans"

        this.start()
    }

    start() {
        this.addComponent(new Text(this, this.x, this.y, this.text, this.font))
        this.addComponent(new TextDraw(this, "red", "red"))
    }

}

export default PrefabTextLarge