import { tree, ctree } from './data';

import { formartToTreeData, defaultDataFormat } from './q1';


// 默认
const data = formartToTreeData(tree, defaultDataFormat);
console.log("---------多层级测试---------");
console.log("---------转换前---------");
console.log(JSON.stringify(tree, null, 2));
console.log("---------转换后---------");
console.log(JSON.stringify(data, null, 2));

// 自由搭配
const data2 = formartToTreeData(ctree, () => ({value: 'cid', label: 'cname', children: 'csub'}));
console.log("---------其它属性名测试---------");
console.log("---------转换前---------");
console.log(JSON.stringify(ctree, null, 2));
console.log("---------转换后---------");
console.log(JSON.stringify(data2, null, 2));