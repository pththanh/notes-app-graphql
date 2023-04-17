export default {
  author: [
    { id: 1, name: "Thanh" },
    { id: 2, name: "Trang" },
  ],
  folders: [
    {
      id: 1,
      name: "Home",
      createdAt: "2023-01-18T03:42:13Z",
      authorID: 1,
    },
    {
      id: 2,
      name: "Thanh",
      createdAt: "2023-01-18T03:42:13Z",
      authorID: 2,
    },
    {
      id: 3,
      name: "Trang",
      createdAt: "2023-01-18T03:42:13Z",
      authorID: 1,
    },
  ],
  notes: [
    { id: "123", content: "<p>Go to supermarket</p>", folderId: 1 },
    { id: "122", content: "<p>Go to library</p>", folderId: 1 },
    { id: "121", content: "<p>Go to Store</p>", folderId: 1 },
    { id: "201", content: "<p>go to swimming</p>", folderId: 2 },
    { id: "301", content: "<p>I love you 3000</p>", folderId: 3 },
  ],
};
