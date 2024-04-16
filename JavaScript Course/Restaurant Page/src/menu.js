export function MenuItem(Name, Desc, Price){
    this.Name = Name;
    this.Desc = Desc;
    this.Price = Price;
}

export const MenuItems = [];

const Item1 = new MenuItem(
    "Grilled Salmon", 
    "Fresh Atlantic salmon grilled to perfection, served with seasonal vegetables.", 
    "$25.99");

const Item2 = new MenuItem(
    "Filet Mignon", 
    "Tender beef filet cooked to your preference, accompanied by mashed potatoes and red wine sauce.", 
    "$35.99");

const Item3 = new MenuItem(
    "Lobster Risotto", 
    "Creamy risotto cooked with fresh lobster meat, garnished with parmesan cheese.", 
    "$29.99");

MenuItems.push(Item1, Item2, Item3);

export function loadMenu(){
    
    const mainContent = document.querySelector("#content");

    const menu = document.createElement("div");
    menu.id = "menu";

    const menu_Header = document.createElement("h1");
    menu_Header.id = "menu-header";
    menu_Header.textContent = "Restaurant";
    
    menu.appendChild(menu_Header);

    const list = document.createElement("ul");
    
    MenuItems.forEach(item => {
        const listItem = document.createElement("li");

        const itemName = document.createElement("div");
        itemName.classList.add("item-name");
        itemName.textContent = item.Name;
        listItem.appendChild(itemName);

        const itemDesc = document.createElement("div");
        itemDesc.classList.add("item-description");
        itemDesc.textContent = item.Desc;
        listItem.appendChild(itemDesc);

        const itemPrice = document.createElement("div");
        itemPrice.classList.add("item-price");
        itemPrice.textContent = item.Price;
        listItem.appendChild(itemPrice);

        list.appendChild(listItem);
    });


    menu.appendChild(list);
    mainContent.appendChild(menu);
}