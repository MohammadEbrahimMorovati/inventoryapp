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
    createdAt: "2023-08-07T22:05:36.066Z",
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
    category: "front",
    updated: "2025-01-07T22:05:36.066Z",
  },
];

export default class storage {
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
  static savecategory(categoryToSave) {
    const savedCategories = storage.getAllCategories();
    // edit save
    //new save
    const existedItem = savedCategories.find((c) => c.id === categoryToSave.id);
    if (existedItem) {
      //edit
      existedItem.title = categoryToSave.title;
      existedItem.description = existedItem.description;
    } else {
      //new
      categoryToSave.id = new Date().getTime();
      categoryToSave.createdAt = new Date().toISOString();
      savedCategories.push(categoryToSave);
    }
    localStorage.setItem("category", JSON.stringify(savedCategories));
  }
  static getAllProducts() {
    const savedProducts = JSON.parse(localStorage.getItem("category")) || [];

    return savedProducts.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
    });
  }
}
