class GameObject {
  constructor() {
    this.components = [];
    this._byCtor = new Map();
    this.markForDelete = false;
  }

  addComponent(comp) {
    this.components.push(comp);
    this._byCtor.set(comp.constructor, comp);
    comp.parent = this;
    return comp;
  }

  update(ctx) {
    this.components.forEach(c => c.update && c.update(ctx));
  }

  draw(ctx) {
    this.components.forEach(c => c.draw && c.draw(ctx));
  }

  getComponent(key) {
    if (typeof key === "string") {
      return this.components.find(c => c.constructor.name === key); // legacy
    }
    return this._byCtor.get(key);
  }

  removeComponent(key) {
    const inst = typeof key === "string" ? this.getComponent(key) : this._byCtor.get(key);
    if (!inst) return false;
    this._byCtor.delete(inst.constructor);
    const i = this.components.indexOf(inst);
    if (i > -1) this.components.splice(i, 1);
    return true;
  }
}

export default GameObject;
