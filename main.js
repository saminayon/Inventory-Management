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

function showproductinfo(product){
    let singleProduct='';
    for (let i = 0; i < product.length; i++) {
       singleProduct+=`
       productName - ${product[i].productName}
       productQuantity - ${product[i].productQuantity}
       productPrice - ${product[i].productPricee}
       `    
    }
    console.log(singleProduct)
    return singleProduct;
}