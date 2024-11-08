import loadManagementProduct from "./src/management-product/managementProduct.js";
import loadManagementProductCategories from "./src/management-product/categories/categories.js";
import loadManagementProductCategoriesInsert from "./src/management-product/categories/insert/insert.js";
import loadManagementProductCategoriesUpdate from "./src/management-product/categories/update/update.js";

function loadPage(path) {
  const main = document.getElementById("main");
  main.innerHTML = "";

  let pageUrl;
  switch (path) {
    case "/":
      pageUrl = "/src/management-product/management-product.html";
      break;
    case "/categories":
      pageUrl = "/src/management-product/categories/categories.html";
      break;
    case "/categories-insert":
      pageUrl = "/src/management-product/categories/insert/insert.html";
      break;
    case "/categories-update":
      pageUrl = "/src/management-product/categories/update/update.html";
      break;
    // default:
    // pageUrl = "/404.html";
    //   break;
  }

  // Memuat halaman dari URL yang ditentukan
  if (pageUrl) {
    fetch(pageUrl)
      .then((response) => response.text())
      .then((data) => {
        main.innerHTML = data;
        if (path === "/") {
          loadManagementProduct();
        } else if (path == "/categories") {
          loadManagementProductCategories();
        } else if (path == "/categories-insert") {
          loadManagementProductCategoriesInsert();
        } else if (path == "/categories-update") {
          loadManagementProductCategoriesUpdate();
        }
      })
      .catch((error) => {
        main.innerHTML = "<p>Error loading page.</p>";
        console.error("Error loading page:", error);
      });
  }
}

function navigate(path) {
  window.history.pushState({}, "", path);
  loadPage(path);
}

window.addEventListener("popstate", () => {
  loadPage(window.location.pathname);
});

window.addEventListener("load", () => {
  loadPage(window.location.pathname || "/");
});

document.addEventListener("click", (e) => {
  const target = e.target.closest("a");
  if (target && target.matches(".to-link")) {
    e.preventDefault();
    const path = target.getAttribute("href");
    navigate(path);
  }
});
