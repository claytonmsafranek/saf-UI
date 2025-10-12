import Component from "../engine/Component.js"
import Constants from "../game/Constants.js"
import Input from "../engine/Input.js"
import Time from "../engine/Time.js"
import Game from "../engine/Game.js"

//define offset to move player
let offset = 10

class PlayerUpdateComponent extends Component {
    constructor(parent, x, y, w, h) {
        super(parent)

        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    update() {
        //check for input from arrow keys, update location accordingly taking into account boundaries
        if (Input.leftArrowPress && !(this.x <= Constants.leftPlayerBoundary)) {
            //this.x -= offset
            this.x -= offset * Time.secondsBetweenFrame
        }
        if (Input.rightArrowPress && !(this.x >= Constants.rightPlayerBoundary - Constants.playerWidth)) {
            //this.x += offset
            this.x += offset * Time.secondsBetweenFrame
        }
        if (Input.upArrowPress && !(this.y <= Constants.topPlayerBoundary + Constants.enemyArea)) {
            //this.y -= offset
            this.y -= offset * Time.secondsBetweenFrame
        }
        if (Input.downArrowPress && !(this.y >= Constants.bottomPlayerBoundary - Constants.playerHeight)) {
            // this.y += offset
            this.y += offset * Time.secondsBetweenFrame
        }



    }
}

export default PlayerUpdateComponent
