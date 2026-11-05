import config from './data/data-minifed.json' with { type: 'json' }; //needs to be changed later

document.addEventListener("DOMContentLoaded", () => {
    const product = config.products;
    const prod = document.querySelector("#prod");

    for (let pro of product) {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = pro.title;
        const btn = document.createElement("button");
        btn.addEventListener("click", () => { alert("Product ID: " + pro.id + "\nProduct Title: " + pro.title) });
        btn.style.background = "rgb(176, 168, 168)";
        btn.textContent = "+";
        btn.style.color = "white";
        btn.style.float = "right";
        btn.style.width = "10%";
        btn.style.height = "10%";
        p.appendChild(btn);
        const image = document.createElement("img");
        image.src = pro.thumbnail;
        const button = document.createElement("button");
        button.appendChild(image);
        button.addEventListener("click", () => { alert("Product ID: " + pro.id) });
        const price = document.createElement("p");
        price.textContent = "$" + pro.price;
        li.appendChild(button);
        li.appendChild(p);
        li.appendChild(price);
        prod.appendChild(li);
    }
})