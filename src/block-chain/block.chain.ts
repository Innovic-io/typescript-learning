import { createHash } from 'crypto';
import uuid = require('uuid');

export class BlockChain {

  private list = [];


  public add(value) {

    this.list.push({
      'value': value,
      'previous': this.getHashOfTheLastNode(this.list[this.list.length - 1]),
      'id': uuid()
    });
  }

  public remove() {
    this.list.splice(this.list.length - 1, 1)
  }

  public getBlockChain() {
    return this.list;
  }

  getHashOfTheLastNode(object) {

    const hash = createHash("sha256");
    const stringToHash = (object) ? JSON.stringify(object) : "";

    return hash.update(stringToHash).digest('hex');
  }

  public getObject(index) {
    return this.list[index];
  }

  public validateBlockChain() {
    for (const index in this.list) {
      const nextObj = this.getObject(parseInt(index, 10) + 1);
      if (nextObj && (this.getHashOfTheLastNode(this.list[index]) !== nextObj.previous)) {
        return false;
      }
    }
    return true;
  }
}

