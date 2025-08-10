const categories = [
  {
    id: 1,
    title: "frontend",
    description: "fronttt",
    createdAt: "2021-08-07T22:05:36.066Z",
  },
  {
    id: 2,
    title: "back",
    description: "backend",
    createdAt: "2023-08-07T22:05:46.066Z",
  },
];

const products = [
  {
    id: 1,
    title: "react",
    category: "front",
    updated: "2025-08-07T22:05:36.066Z",
  },
  {
    id: 2,
    title: "next",
    category: "back",
    updated: "2025-01-07T22:05:36.066Z",
  },
];

export default class Storage {
  //add new category
  //save category
  //get all category
  static getAllCategories() {
    //products category  localstorage
    const savedCategories = JSON.parse(localStorage.getItem("category")) || [];
    //sort => نزولی   desending
    //1 2 3 4 5 6
    const sortedCategories = savedCategories.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
    });
    return sortedCategories;
  }
  static saveCategory(categoryToSave) {
    const savedCategories = Storage.getAllCategories();
    // edit save
    //new save
    const existedItem = savedCategories.find((c) => c.id === categoryToSave.id);
    if (existedItem) {
      //edit
      existedItem.title = categoryToSave.title;
      existedItem.description = categoryToSave.description;
    } else {
      //new
      categoryToSave.id = new Date().getTime();
      categoryToSave.createdAt = new Date().toISOString();
      savedCategories.push(categoryToSave);
    }
    localStorage.setItem("category", JSON.stringify(savedCategories));
  }
  static getAllProducts(sort = "newest") {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];

    return savedProducts.sort((a, b) => {
      if (sort === "newest") {
        return new Date(a.updated) > new Date(b.updated) ? 1 : -1;
      } else if (sort === "oldest") {
        return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
      }
    });
  }
  static savedProducts(productToSave) {
    const savedProducts = Storage.getAllProducts();
    // edit save
    //new save
    const existedItem = savedProducts.find((c) => c.id === productToSave.id);
    if (existedItem) {
      //edit
      existedItem.title = productToSave.title;
      existedItem.quantity = productToSave.quantity;
      existedItem.category = productToSave.category;
    } else {
      //new
      productToSave.id = new Date().getTime();
      productToSave.updated = new Date().toISOString();
      savedProducts.push(productToSave);
    }
    localStorage.setItem("products", JSON.stringify(savedProducts));
  }
}
