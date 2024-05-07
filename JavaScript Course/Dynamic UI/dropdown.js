export function displaySidebar() {
  const sideBar = document.querySelector("#nav-bar");
  const dropdownBtn = document.querySelector(".dropdown-btn");

  dropdownBtn.addEventListener("click", () => {
    if (sideBar.style.left == "0px") {
      sideBar.style.left = "-210px";
      dropdownBtn.style.paddingLeft = "200px";
    } else {
      dropdownBtn.style.paddingLeft = "0px";
      sideBar.style.left = "0px";
    }
  });
}
