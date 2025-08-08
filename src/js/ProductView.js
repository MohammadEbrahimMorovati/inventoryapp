import Storage from "./Storage";

const addNewProductBtn = document.getElementById("add-new-product");

class ProductView {
  constructor() {
    addNewProductBtn.addEventListener("click", (e) => this.addnewProduct(e));
    this.products = [];
  }
  setApp() {
    this.products = Storage.getAllProducts();
  }

  addnewProduct(e) {
    e.preventDefault();
    const title = document.querySelector("#product-title").value;
    const quantity = document.querySelector("#product-quantity").value;
    const category = document.querySelector("#product-category").value;
    if (!title || !category || !quantity) return;
    Storage.savedProducts({ title, category, quantity });
    this.products = Storage.getAllProducts();
    this.createProductsList();
  }
  createProductsList() {
    let result = "";
    this.products.forEach((item) => {
      const selectedCategory = Storage.getAllCategories().find(
        (c) => c.id == item.category
      );
      result += ` <div class="flex items-center justify-between">
          <span class="text-slate-400">${item.title}</span>
          <div class="flex items-center gap-x-3">
            <span class="text-slate-400">${new Date().toLocaleDateString(
              "fa-IR"
            )}</span>
            <span
              class="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl"
              >${selectedCategory.title}</span
            >
            <span
              class="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 font-bold text-slate-300"
              >${item.quantity}</span
            >
            <button
              class="border px-2 py-0.5 rounded-2xl border-red-500 text-red-500 " data-id=${
                item.id
              }
            >
              delete
            </button>
          </div>
        </div>`;
    });
    const productDOM = document.getElementById("products-list");
    productDOM.innerHTML = result;
  }
}
export default new ProductView();
