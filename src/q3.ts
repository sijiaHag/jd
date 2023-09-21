/**
 * Date: 2023-09-20
 * 问题三
 * 写一个工具类，包含以下方法
 * 1. 将类似以上树形结构打平成一个数组
 * 2. 可以遍历类似以上树形结构并支持修改节点内容
 */

class TreeUtils<T> {
  data: T[];
  childrenKey: string;
  idKey: string;
  flat: () => T[];
  traverse: (callback: (node: T) => void) => void;
  constructor(data = [], idKey = 'id', childrenKey = 'sub') {
    this.data = data;
    this.childrenKey = childrenKey;
    this.idKey = idKey;
    this.flat = this.flatTreeData.bind(this);
    this.traverse = this.traverseTree.bind(this);
  }
  flatTreeData(): T[] {
    const result: T[] = [];
    // 0 是栈顶，最先处理
    const stack = [...this.data];
    while (stack.length) {
      // 每次取出第一个元素处理
      const node = stack.shift();
      // 将当前节点放入结果集
      result.push(node);
      const children = node[this.childrenKey];
      // 如果有子节点，将子节点放入栈顶
      if (Array.isArray(children) && children.length) stack.unshift(...children);
    }
    return result;
  }

  traverseTree(callback: (node: T) => void): void {
    const traverse = (node: T) => {
      // 处理当前节点
      callback(node);
      const children = node[this.childrenKey];
      if (children && children.length) {
        for (const child of children) {
          traverse(child);
        }
      }
    }

    for (const node of this.data) {
      traverse(node);
    }
  }
}

export default TreeUtils;

// 示例用法

