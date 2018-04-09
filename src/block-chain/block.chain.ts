import { createHash } from 'crypto';
import uuid = require('uuid');
import has = Reflect.has;
export class BlockChain {

  private list = [];


  public add(value) {

    this.list.push({
      'value': value,
      'previous': this.getLastNode(),
      'id': uuid()
    });
  }

  public remove() {
    this.list.splice(this.list.length-1, 1)
  }

  private getHash(){

  }
  private getLastNode(){

    const hash = createHash("sha256");

    if(this.list.length === 0){

      return hash.update("")
    } else {
      return hash.update(JSON.stringify(this.list[this.list.length-1]));
    }
  }

}

