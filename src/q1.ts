/**
 * Date: 2023-09-20
 * 问题一
 * 1. 前端组件接收的数据格式为：
 * { value: \[id], label: \[name], children: \[sub] }（即 id -> value，label -> name，children -> sub）
 * 请编写一个转换函数将 tree 转换为满足前端组件要求的格式。
 * 2. 加分项：该函数具有通用性，可以通过配置转换任意字段，
 * 例如： categoryId -> value, categoryName -> label, subCategories -> children。
 */

interface TreeDataPath<T> {
    value: keyof T,
    label: keyof T,
    children: keyof T,
};

interface TreeData<T> {
    value: T[keyof T],
    label: T[keyof T],
    children?: TreeData<T>[],
}

interface DefaultTreeNode {
    id: string;
    name: string;
    sub?: DefaultTreeNode[];
}

type DataFormat<T> = () => TreeDataPath<T>;

/** 默认的映射函数 */
const defaultDataFormat: DataFormat<DefaultTreeNode> = () => ({
    value: 'id',
    label: 'name',
    children: 'sub'
});

/** 转换函数 */
function formartToTreeData<T>(data: T[], dataFormat: DataFormat<T>): TreeData<T>[] {
    // if (typeof dataFormat !== 'function') dataFormat = defaultDataFormat;
    const { value, label, children } = dataFormat();
    
    if (Array.isArray(data)) return data.map(item => ({
        value: item[value],
        label: item[label],
        children: item[children] && formartToTreeData(item[children] as T[], dataFormat),
    }));
    else return data;
}

export {
    formartToTreeData,
    defaultDataFormat,
}