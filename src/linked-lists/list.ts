import { v4 as uuid } from 'uuid';

export class List {

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

  private getLastNode(){
    if(this.list.length === 0){
      return 0;
    } else {
      return this.list[this.list.length-1].id;
    }
  }

}

