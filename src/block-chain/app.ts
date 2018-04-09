import {BlockChain} from './block.chain';

const list = new BlockChain();

list.add('first');
list.add('second');
list.add('third');
list.add('fourth');
list.add('fifth');

//console.log(list.getObject(3));

//console.log(list);
list.remove();
console.log(list);
console.log(list.validateBlockChain());
