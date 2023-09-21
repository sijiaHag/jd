const tree = [
  {
    id: "1",
    name: "节点1",
    sub: [
      {
        id: "11",
        name: "节点11",
        sub: [
          { id: "111", name: "节点111" },
          { id: "112", name: "节点112" },
        ],
      },
      {
        id: "12",
        name: "节点12",
        sub: [
          { id: "121", name: "节点121" },
          { id: "122", name: "节点122" },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "节点2",
    sub: [
      {
        id: "21",
        name: "节点21",
        sub: [
          { id: "211", name: "节点211" },
          { id: "212", name: "节点212" },
        ],
      },
      {
        id: "22",
        name: "节点22",
        sub: [
          { id: "221", name: "节点221" },
          { id: "222", name: "节点222" },
        ],
      },
    ],
  },
];

const ctree = [
  {
    cid: "1",
    cname: "节点1",
    csub: [
      {
        cid: "11",
        cname: "节点11",
        csub: [
          { cid: "111", cname: "节点111" },
          { cid: "112", cname: "节点112" },
        ],
      },
    ],
  },
];


export {
  tree,
  ctree,
}

