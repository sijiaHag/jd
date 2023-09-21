import { tree, ctree } from './data';
import { findTreePathByKey, findTreePathByKeyPlus } from './q2';

const cacheMap = new Map<string, number[]>();

let start = + new Date();
const count = 1000;
for (let i = 0; i < count; i++) {
    findTreePathByKey(tree, '211');
}
const time1 = + new Date() - start;

start = + new Date();
for (let i = 0; i < count; i++) {
    findTreePathByKeyPlus({treeData: tree, targetValue: '211', map: cacheMap });
}
const time2 = + new Date() - start;
console.log('多次查找优化前后对比');
console.log('优化前耗时', time1);
console.log('优化后耗时', time2);

console.log('默认数据的测试');
console.log('查找id = 211的');
findTreePathByKey(tree, '211');
findTreePathByKeyPlus({treeData: tree, targetValue: '211', map: cacheMap });

console.log('替换变量名的测试');
console.log('ctree查找cid = 112的');
findTreePathByKey(ctree, '1', 'cid', 'csub');
findTreePathByKeyPlus({treeData: ctree, targetValue: '1', targetKey:'cid', childrenKey: 'csub', map: cacheMap });


console.log('查找不存在的数据, 无打印');
findTreePathByKey(tree, '999');
findTreePathByKeyPlus({treeData: tree, targetValue: '999', map: cacheMap });
