import { tree, ctree } from './data';
import TreeUtils from './q3';

const iTree = new TreeUtils<typeof tree[0]>(tree);
const cTree = new TreeUtils<typeof ctree[0]>(ctree, 'cid', 'csub');

console.log("---------flat  tree---------");
console.log(iTree.flat());
console.log("---------flat  ctree---------");
console.log(cTree.flat());

console.log("---------修改节点112  tree---------");
iTree.traverse((item) => {
    if (item.id === '112') {
        item.name = '修改后的节点112';
    }
});
console.log("---------打印修改后的  tree---------");
console.log(iTree.flat())

