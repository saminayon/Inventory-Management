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


/*//Use of function(multiple product nia kaj koar jonno) 22.03.2023
const productInfoObj={
    productName: 'Potato',
    productPrice: 30,
    productQuantity: 3,}
function showproductinfo (){
    console.log(`Product Name- ${productInfoObj.productName}
Product Price- ${productInfoObj.productPrice}
Product Quantity ${productInfoObj.productQuantity}`)

}  
//call function (output dekhte hole obossoi function call korte hobe)
showproductinfo();  */

//Day-3 23.03.2023

/*const productInfoObj1={
    productName: 'Potato',
    productPrice: 30,
    productQuantity: 3,}

const productInfoObj2={
        productName: 'Tomato',
        productPrice: 50,
        productQuantity: 3 ,}

function showproductinfo(a, productno){
    return`${productno} Product Name- ${a.productName}
Product Price- ${a.productPrice}
Product Quantity ${a.productQuantity} kg`
}
const product1= showproductinfo(productInfoObj1,'product1')
const product2= showproductinfo(productInfoObj2, )
console.log(product1)
console.log(product2)
*/

//Day-4 25.03.2023 
//object theka property ber kore anbo
//Product Name- ${a.productName} (Previous day)
//Product Name- ${productName} (Today)
/*const productInfoObj1={
    productName: 'Potato',
    productPrice: 30,
    productQuantity: 3,}
    const {productName,productQuantity,productPrice}=productInfoObj1
    console.log(productName)

 // Array theka property ber kore anar jonno   
    const productinfoarray=['Potato',30,3]
    const [name, price, Quantity]=productinfoarray
    console.log(name)


const productInfoObj2={
        productName: 'Tomato',
        productPrice: 50,
        productQuantity: 3 ,}

function showproductinfo({productName,productPrice,productQuantity}, productno){
    return`${productno} Product Name- ${productName}
                        Product Price- ${productPrice}
                        Product Quantity ${productQuantity} kg`
}
const product1= showproductinfo(productInfoObj1,'product1')
const product2= showproductinfo(productInfoObj2, )
console.log(product1)
console.log(product2)*/


//Function Vs Method video-13
/*const productInfoObj1={
    productName: 'Potato',
    productPrice: 30,
    productQuantity: 3,
    productAvailable: true,
    showinfo:function(){
        return`
        ProductName-${productInfoObj1.productName}
        ProductPrice-${productInfoObj1.productPrice}
        `;
     }
}
     console.log(productInfoObj1.showinfo())
     */

//video-14
/*const product=[
    {
        productName: 'Potato',
        productPrice: 30,
        productQuantity: 3,},
    {
        productName: 'Tomato',
        productPrice: 50,
        productQuantity: 10 ,}
]

function showproductinfo(product, productno)
    {console.log(product)
        const[product1, product2]=product;
        //console.log(product1)
        //console.log(product2)

    return`${productno} Product Name- ${product1.productName},
                        Product Price- ${product1.productPrice} Tk./kg,
                        Product Quantity ${product1.productQuantity} kg`
}
const productoutput= showproductinfo(product,'1.')
console.log(productoutput)*/

//Video-15 (For loop while loop) 



 