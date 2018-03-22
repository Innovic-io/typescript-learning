import {Roles} from './decorators';

export class Item {

  set() {
    return;
  }

  @Roles("Admin")
  getItem() {
    return 10;
  }

}
