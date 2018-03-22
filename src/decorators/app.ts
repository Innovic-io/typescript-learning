process.env.roles = "Admin";
import {Item} from './item.class';
import { Roles } from './decorators';


setTimeout(() => {
  const item = new Item();
  const i = item.getItem();
  console.log(i);
}, 3000);
