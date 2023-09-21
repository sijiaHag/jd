/**
 * Date: 2023-09-20
 * 问题二
 * 如何快速查找 tree 中的某个 id 为 xxx 的项，并且打印出它的路径
 * 如果是要多次查找，如何才能更快呢？
 */

/** 查找某个属性的值的下标路径 */
function findTreePathByKey<T>(
  tree: T[],
  targetValue: string,
  targetKey: string = 'id',
  childrenKey: string = 'sub',
  prePath: number[] = []
) {
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node[targetKey] === targetValue) {
      console.log([...prePath, i])
      return true;
    }
    const children = node[childrenKey];
    if (Array.isArray(children) && children.length) {
      const isFind = findTreePathByKey(children, targetValue, targetKey, childrenKey, [...prePath, i]);
      if (isFind) return true;
    }
  }
  return false;
};

// 如果多次查找id，边找边保存路径，下次查找时，先判断路径是否存在，存在则不用再遍历

/**
 * 查找某个属性的值的下标路径
 * 需要外层定义map并传入，用于存储路径值
*/
function findTreePathByKeyPlus<T>({
  treeData,
  targetValue,
  map,
  targetKey = 'id',
  childrenKey = 'sub',
  prePath = [],
}: {treeData: T[], targetValue: string, targetKey?: string, childrenKey?: string, prePath?: number[], map: Map<string, number[]>}) {
  if (map.has(targetValue)) {
    console.log(map.get(targetValue));
    return true;
  }

  for (let i = 0; i < treeData.length; i++) {
    const node = treeData[i];
    map.set(node[targetKey], [...prePath, i]);
    if (node[targetKey] === targetValue) {
      console.log([...prePath, i])
      return true;
    }
    const children = node[childrenKey];
    if (Array.isArray(children) && children.length) {
      const isFind = findTreePathByKeyPlus({
        treeData: children,
        targetValue,
        targetKey,
        childrenKey,
        prePath: [...prePath, i],
        map,
      });
      if (isFind) return true;
    }
  }
  return false;
};

export {
  findTreePathByKey,
  findTreePathByKeyPlus
}