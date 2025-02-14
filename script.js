const products = [
    {id: 1,name:"Redmi Note 4",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_lkEhLo79ZCucwikBRxwSAWu21gsVfPPDQ&s",Price:14500},
    {id: 2,name:"Redmi Note 5",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4FzvjOauOD6wXCubPoPZ5v8Prf9pMXaF0hA&s",Price:12500},
    {id: 3,name:"Redmi Note 6",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qcY1QPu53rnGxZkLn3ti5jnx12_13N4h-A&s",Price:14000},
    {id: 4,name:"Redmi Note 7",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRolTXjiODL9bHKlwkyWT5-Lu-HZ7fFOscV6w&s",Price:11000},
    {id: 5,name:"Redmi Note 8",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU80FkgNTGyyopdWtMzTlvPxzwdVei-eosxw&s",Price:10500},
    {id: 6,name:"Redmi Note 9",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ezYVryZilt6E1mM19rW-zLSvB5eW2MBAYQ&s",Price:11500},
    {id: 7,name:"Redmi Note 10",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRma787-vW9jFRM35VidaiTbTAxi-H8gaFQbw&s",Price:13500},
    {id: 8,name:"Redmi Note 11",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOZST9o6JbGNYa59a2U9FAkPBxWJMFGjxig&s",Price:16500},
    {id: 9,name:"Redmi Note 12",Image:"https://m.media-amazon.com/images/I/71xHEHgoEjL.jpg",Price:14200},
    {id: 10,name:"Redmi Note 13",Image:"https://m.media-amazon.com/images/I/71VW8LmqqPL._AC_UF1000,1000_QL80_.jpg",Price:13500},
    {id: 11,name:"Vivo Y21",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50cgQhHncBIaGLkbNgY1EDgI1JR8IP_x_zw&s",Price:14900},
    {id: 12,name:"realme Narzo",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-66SasekEOYpkpegOdCSZlIUMUKmB-aNnXA&s",Price:11100},
    {id: 13,name:"Oneplus nord 2",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCRNLy8taz_wtwS02MpBUTBZ8fvQdKKB-cQ&s",Price:11500},
    {id: 14,name:"Poco m6 5G",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAydfJ40JwgDIlh9AsEPboD8uBAqZI_785sg&s",Price:10000},
    {id: 15,name:"Poco m6 5g pro",Image:"https://m.media-amazon.com/images/I/51dGqSFNrDL.jpg",Price:10500},
    {id: 16,name:"Samsung S22",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSI4wNerzYxOsY34DYywKnSNatNanoyuUoA&s",Price:80500},
    {id: 17,name:"Samsung S23",Image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/t/0/g/-original-imah4zp7fvqp8wev.jpeg?q=90&crop=false",Price:102000},
    {id: 18,name:"Samsung S24",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe199lQMx5DN4buZHFrKX1f4Bea5g4ObvUew&s",Price:120000},
    {id: 19,name:"Samsung S25",Image:"https://images.samsung.com/in/smartphones/galaxy-s25/buy/product_color_icyBlue_MO.png?imbypass=true",Price:14500},
    {id: 20,name:"Iphone 11",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrtht9nxuR_PR6_RyYbzLLBm0wHhlixopXCg&s",Price:45500},
]
function renderProducts(products,productList){
    const container = document.getElementById(productList);
    container.innerHTML="";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("Product-item");
        productDiv.innerHTML=`
        <img src= "${product.Image}"/>
        <h3>${product.name}</h3>
        <h2>${product.Price}</h2>
        <button onclick = "addToCart(${product.id})">Add to Cart</button>
        `
        container.appendChild(productDiv);
    })
}
//if(document.getElementById("productList"))renderProducts(products,"productList");
//Add to cart
function addToCart(productId){
    const product=products.find(p => p.id === productId);
    let cart = JSON.parse(localStorage.getItem("cart"))||[];
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert(`${product.name}is added to cart`)
    renderCart();

}
//render items in cart
function renderCart(){
    const cart=JSON.parse(localStorage.getItem("cart"))||[];
    const container=document.getElementById("cartItems");
    container.innerHTML="";
    if(cart.length == 0){
        container.innerHTML="<h1>Your Cart is Empty</h1>"
    }
    cart.forEach(item =>{
        const cartDiv= document.createElement("div");
        cartDiv.classList.add("cart-item");
        cartDiv.innerHTML=`
        <img src="${item.Image}"/>
        <h3>${item.Image}</h3>
        <h2>${item.Price}</h2>
        <button>Remove</button>
        `
        container.appendChild(cartDiv);
    })
}

if(document.getElementById("productList"))renderProducts(products,"productList");
if(document.getElementById("cartItems"))renderCart();
