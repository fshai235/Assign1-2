import config from './data/data-minifed.json' with { type: 'json' }; //needs to be changed later
const product = config.products;

function printProduct(product){
   for(let p of product){
    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    h2.textContent = p.title;
    const image = document.createElement("img");
    image.src = p.thumbnail;
    li.appendChild(image);
    li.appendChild(h2);
    ul.appendChild(li);
    //console.log(p);
} 
}
