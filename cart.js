if(localStorage.getItem("cartData")===null){
    function displayCart(){
        var cartBox = document.getElementById("cartContent");
        var defaultPara = document.createElement("h1");
        defaultPara.id = "defaultParaInCart";
        let interval;
        interval = setInterval(function(){
            var random = getRandom(1,4);
            if(random===1){
                defaultPara.textContent = "Your Shopping Bag is empty-";
            }
            else if(random===2){
                defaultPara.textContent = "Hey! Your shopping cart is empty";
            }
            else{
                defaultPara.textContent = "Discount Ahead! Add some products to cart";
            }

        },3000)
        defaultPara.textContent = "Your Shopping Bag is empty-"
        defaultPara.setAttribute("class","boxHeadings");
        var defaultBtn = document.createElement("button");
        defaultBtn.textContent = "CONTINUE SHOPPING";
        cartBox.style.display = "block";
        defaultBtn.setAttribute("class","defaultButton");

        cartBox.append(defaultPara, defaultBtn);
    }

    displayCart();
}

if(localStorage.getItem("recommendedData")===null){
    localStorage.setItem("recommendedData",JSON.stringify([]));
}

if(localStorage.getItem("flashSales")===null){
    localStorage.setItem("flashSales",JSON.stringify([]));
}

var reccoData = [
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/71/435/M_p0097443571.jpg",
        title:"Magimomo - Printed Sweatshirt",
        price:"US$ 23.52"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/67/041/M_p0146704167.jpg",
        title:"Lemongrass - Ribbed Bustier Top",
        price:"US$ 0.99"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/55/521/M_p0147252155.jpg",
        title:"Nabla - Floral Embroidered Bustier",
        price:"US$ 19.00"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/10/840/M_p0138484010.jpg",
        title:"Oonnukal - Hook-And-Eye Cropped Tank Top",
        price:"US$ 8.80"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/10/899/M_p0129389910.jpg",
        title:"OUREA - Wide-Leg Dress Pants",
        price:"US$ 18.88"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/93/792/M_p0049579293.jpg",
        title:"MISSHA - All-Around Safe Block Essence Sun SPF45 PA+++ 50ml",
        price:"US$ 8.03"
    },
];

var flashSaleData = [
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/25/288/M_p0104428825.jpg",
        title:"Niji Smile - Mini Pleated Skirt",
        price:"US$ 10.00"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/39/131/M_p0111713139.jpg",
        title:"Shopherd - Wide-Leg Shorts",
        price:"US$ 8.99"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/80/543/M_p0090754380.jpg",
        title:"Alfie - V-Neck Chiffon Blouse",
        price:"US$ 12.40"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/36/646/M_p0139064636.jpg",
        title:"Berrytrix - Halter Mock Two-Piece Knit Top",
        price:"US$ 16.72"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/96/683/M_p0129068396.jpg",
        title:"HERMITAKH - Short-Sleeved Button-Up Crop Top",
        price:"US$ 8.48"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/31/964/M_p0112796431.jpg",
        title:"Moon City - Long-Sleeve Mock-Neck T-Shirt",
        price:"US$ 16.34"
    },
];

function showReccomData(recData){
    var recommendedBox = document.getElementById("recommendedBox");
    recData.forEach(function(el){
        var boxes = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("class","productsImages");
        img.src = el.image;
        var title = document.createElement("p");
        title.textContent = el.title;
        var price = document.createElement("p");
        price.textContent = el.price;

        boxes.append(img, title, price);
        recommendedBox.append(boxes);
    });

}

showReccomData(reccoData);


function flashSalesData(data){
    var fleshSalesBox = document.getElementById("flashSalesBox");
    data.forEach(function(el){
        var boxes = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("class","productsImages");
        img.src = el.image;
        var title = document.createElement("p");
        title.textContent = el.title;
        var price = document.createElement("p");
        price.textContent = el.price;

        boxes.append(img, title, price);
        fleshSalesBox.append(boxes);
    });

    var btnMoreFlashSales = document.createElement("button");
    btnMoreFlashSales.textContent = 'MORE FLASH SALES';
    btnMoreFlashSales.id = "btnMoreFlashSales";

    fleshSalesBox.append(btnMoreFlashSales);
}

flashSalesData(flashSaleData);

function getRandom(min, max){
    // use only with integers no decimal numbers allowed
    return Math.random() * (max-min)+min;
}




