export function loadHome(){
    
    const mainContent = document.querySelector("#content");

    const homeText = document.createElement("div");
    homeText.id = "main-text";

    const homeText_h1 = document.createElement("h1");
    homeText_h1.textContent = "Tortor pretium viverra suspendisse potenti!";

    const homeText_btn = document.createElement("button");
    homeText_btn.textContent = "Order Now";
    homeText_btn.id = "order-btn";

    homeText.appendChild(homeText_h1);
    homeText.appendChild(homeText_btn);

    mainContent.appendChild(homeText);

    const mainImg = document.createElement("div");
    mainImg.id = "main-img"

    mainContent.appendChild(mainImg);
}