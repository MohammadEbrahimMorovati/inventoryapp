import Storage from "./Storage";

const categoryTitle = document.querySelector("#category-title");
const categoryDescription = document.querySelector("#category-description");
const addNewCategoryBtn = document.querySelector("#add-new-category");

class CategoryView {
  constructor() {
    addNewCategoryBtn.addEventListener("click", (e) => this.addNewCategory(e));
    this.categories = [];
  }
  addNewCategory(e) {
    e.preventDefault();
    const title = categoryTitle.value;
    const description = categoryDescription.value;
    if (!title || !description) return;
    Storage.savecategory({ title, description });
    this.categories = Storage.getAllCategories();
    //update dom : update select option in categories
    this.createCategoriesList();
    categoryDescription.value = "";
    categoryTitle.value = "";
  }
  setApp() {
    this.categories = Storage.getAllCategories();
  }
  createCategoriesList() {
    let result = ` <option class="bg-slate-500 text-slate-400" value="">
                  select category
                </option>`;
    this.categories.forEach((element) => {
      result += ` <option class="bg-slate-500 text-slate-400" value=${element.id}>
                  ${element.title}
                </option>`;
    });
  }
}

export default new CategoryView();
