export const ListData = [
  {
    id: 1,
    title: "Home",
    link: "/ecommerce/home",
    type: "list",
  },
  {
    id: 2,
    title: "Orders",
    link: "/ecommerce/orders",
    type: "list",
  },
  {
    id: 3,
    title: "Product Comparison",
    link: "/ecommerce/compareObjects",
    type: "list",
  },
  {
    id: 4,
    title: "Categories",
    type: "collapse",
    collapse: [
      {
        id: 5,
        title: "Beauty",
        link: "/ecommerce/products/beauty",
        type: "collapseItem",
      },
      {
        id: 6,
        title: "Fragrances",
        link: "/ecommerce/products/fragrances",
        type: "collapseItem",
      },
      {
        id: 7,
        title: "Furniture",
        link: "/ecommerce/products/furniture",
        type: "collapseItem",
      },
    ],
  },
];
