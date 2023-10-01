const product = [
    {
        id: 0,
        image: 'img/Course-01.jpg',
        title: 'Digital Marketing',
        price: 6000,
    },
    {
        id: 1,
        image: 'img/Course-02.jpg',
        title: 'Full Stack Web Development (Python & Java Script)',
        price: 6500,
    },
    {
        id: 2,
        image: 'img/Course-03.jpg',
        title: 'Product Management',
        price: 6000,
    },
    {
        id: 3,
        image: 'img/Course-04.jpg',
        title: 'Full Stack Web Development (MERN)',
        price: 6500,
    },
];

const categories = [... new Set(product.map((item)=>
    {return item}))]
    let i=0;

document.getElementById('root').innerHTML = categories.map((item)=>{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div> 
        <div class='bottom'>
        <p>${title}</p>
        <h2>tk. ${price}</h2>`+
        "<button onclick= 'addtocart("+(i++)+")'>Add to Cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}


function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "tk "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "tk "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>tk ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}