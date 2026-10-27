import config from './data-minifed.json' with { type: 'json' }; //needs to be changed later
const product = config.products;
for(let p of product){
    console.log(p);
}