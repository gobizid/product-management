import loadComponent from "/src/helpers/loadComponent.js";
import smoothScroll from "/src/helpers/smoothScroll.js";
import sidebarTogle from "/src/components/sidebar/sidebar.js";

export default function loadManagementProductCategoriesInsert() {
  const promises = [
    loadComponent("aside.sidebar", "/src/components/sidebar/sidebar.html"),
    loadComponent("header.topbar", "/src/components/topbar/topbar.html"),
    loadComponent(
      "",
      "/src/management-product/categories/insert/insert.html"
    ),
  ];

  Promise.all(promises)
    .then(() => {
      smoothScroll();
      sidebarTogle();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}
