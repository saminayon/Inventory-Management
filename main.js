//Use of Array
/*const productinfo=['Potato',30,3]
//Accessing properties
console.log(`Product Name- ${productinfo[0]}
Product Price- ${productinfo[1]}
Product Quantity ${productinfo[2]}`
)*/

//use of object
//present multiple data
/*const productInfoObj={
    productName: 'Potato',
    productPrice: 30,
    productQuantity: 3,
}
console.log(productInfoObj['productName']); //Arrey-er moddhe string (even const) obossoi inverted comma r moddhe rakhte hobe
console.log(productInfoObj.productName);// Mostly Useable
console.log(productInfoObj['productPrice']);// use in special case
console.log(productInfoObj.productPrice);
console.log(productInfoObj['productQuantity']);
console.log(productInfoObj.productQuantity);
console.log(`Product Name- ${productInfoObj.productName}
Product Price- ${productInfoObj.productPrice}
Product Quantity ${productInfoObj.productQuantity}
Is available`)*/

//Use of function(multiple product nia kaj koar jonno)
const productInfoObj={
    productName: 'Potato',
    productPrice: 30,
    productQuantity: 3,}
    const productInfoObj1={
        productName: 'Tomatato',
        productPrice: 300,
        productQuantity: 39,}
function showproductinfo (a){
    console.log(a)
    console.log(`Product- ${a.productName}
Product Price- ${a.Price}
Product Quantity ${a.Quantity}`)

}  
//call function (output dekhte hole obossoi function call korte hobe)
showproductinfo(productInfoObj1);  

