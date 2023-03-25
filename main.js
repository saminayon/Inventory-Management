 const product=[
    {
        productName: 'Potato',
        productPrice: 30,
        productQuantity: 3,},
    {
        productName: 'Tomato',
        productPrice: 50, 
        productQuantity: 10 ,}
];
function showproductinfo(product, productno)
    {console.log(product)
        const[product1, product2]=product;
        //console.log(product1)
        //console.log(product2)

    return`${productno} Product Name- ${product1.productName},
                        Product Price- ${product1.productPrice} Tk./kg,
                        Product Quantity ${product1.productQuantity} kg`
}
const productoutput= showproductinfo(product,'1.');
console.log(productoutput);

for(let i=0; i<10; i=+1){
    console.log(i); 
}


 