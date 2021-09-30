// This is the data for the box title "Recommended for you"
var newArr_whatshot_pants_data = [
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/60/126/M_p0139112660.jpg",
        title:"Lemongrass - Floral Lace Bustier Top",
        price:"US$ 17.77"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/75/735/M_p0143673575.jpg",
        title:"Lemongrass-Lace Bustier ",
        price:"US$ 8.99"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/57/488/M_p0140348857.jpg",
        title:"Lemongrass - Contrast-Ribbon Bustier Top",
        price:"US$ 12.40"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/94/889/M_p0129288994.jpg",
        title:"Lemongrass - Daisy-Print Sheer Mesh Top",
        price:"US$ 6.94"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/95/553/M_p0139755395.jpg",
        title:"Lemongrass - Corduroy Floral Bustier Top in 6 Colors",
        price:"US$ 10.74"
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/15/955/M_p0127895515.jpg",
        title:"Lemongrass - Square-neck Sunflower-Print Smocked Cropped Top",
        price:"US$ 11.31"
    },
]


function showReccomData(recData){
    var recommendedBox = document.getElementById("recommendedBox");
    recData.forEach(function(el){
        var boxes = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("class","productsImages");
        img.src = el.image;
        var title = document.createElement("p");
        title.textContent = el.title;
        title.id = "productsTitle";
        var price = document.createElement("p");
        price.textContent = el.price;

        boxes.append(img, title, price);
        recommendedBox.append(boxes);
    });

}

showReccomData(newArr_whatshot_pants_data);

// This is the data for the box titled Recently viewed
var recentlyViewedBoxData = [
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/14/221/M_p0132422114.jpg",
    },
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/90/509/M_p0145250990.jpg",
    },

    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/15/955/M_p0127895515.jpg",
    },
    
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/97/623/M_p0126962397.jpg",
    },
    
    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/57/647/M_p0104764757.jpg",
    },

    {
        image:"https://d1flfk77wl2xk4.cloudfront.net/Assets/94/889/M_p0129288994.jpg",
    },
    
]

function showRecViewedData(recData){
    var recommendedBox = document.getElementById("recentlyViewedBox");
    recData.forEach(function(el){
        var boxes = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("class","productsImagesInRecentlyViewedBox");
        img.src = el.image;
        boxes.append(img);
        recommendedBox.append(boxes);
    });

}

showRecViewedData(recentlyViewedBoxData);

// For yes stylist page
var firstDivData = {
        image: "https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/video_blog/202109/20210927mn.jpg",
        title: "10 WEARABLE FALL / WINTER 2021 FASHION TRENDS",
        description: "Cool and crisper weather is arriving soon, a reminder that it’s time to refresh your wardrobe for the changing season!"
    }

var secondDivData ={
        image: "https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/video_blog/202109/20210923jm.jpg",
        title: "TWINNING: FALL BEVERAGES & OUTERWEARS",
        description: "What better way to welcome the crisp autumn breeze than by pairing cozy parkas, jackets and coats with fall beverages!"
    }


function showFirstDivData(data){
    var imageContainer = document.getElementById("firstHalfOfFirst_YesStylist");
    var textContainer = document.getElementById("secondHalfOfFirst_YesStylist");
    var image = document.createElement("img");
    image.src = data.image;
    image.setAttribute("class","imagesInYesStylistBox");
    var title = document.createElement("h3");
    title.setAttribute("class","titleInYesStylist");
    title.textContent = data.title;
    var description = document.createElement("p");
    description.setAttribute("class","descInYesStylist");
    description.textContent = data.description;
    var btnReadMore = document.createElement("button");
    btnReadMore.setAttribute("class","btnInYesStylist");
    btnReadMore.textContent = "READ MORE";

    imageContainer.append(image);
    textContainer.append(title, description, btnReadMore);
}

showFirstDivData(firstDivData);

function showSecondDivData(data){
    var imageContainer = document.getElementById("firstHalfOfSecond_YesStylist");
    var textContainer = document.getElementById("secondHalfOfSecond_YesStylist");
    var image = document.createElement("img");
    image.src = data.image;
    image.setAttribute("class","imagesInYesStylistBox");
    var title = document.createElement("h3");
    title.setAttribute("class","titleInYesStylist");
    title.textContent = data.title;
    var description = document.createElement("p");
    description.setAttribute("class","descInYesStylist");
    description.textContent = data.description;
    var btnReadMore = document.createElement("button");
    btnReadMore.setAttribute("class","btnInYesStylist");
    btnReadMore.textContent = "READ MORE";

    imageContainer.append(image);
    textContainer.append(title, description, btnReadMore);
}

showSecondDivData(secondDivData);



// CountDown timer
var deadline = new Date("Oct 3, 2021 21:00:00").getTime();
    // console.log(deadline);
    var x = setInterval(function () {
        var now = new Date().getTime();
        console.log(now);
        var lefttime = deadline - now;
        // console.log(lefttime);
        var days = Math.floor(lefttime / (1000 * 60 * 60 * 24));
        var hours = Math.floor((lefttime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((lefttime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((lefttime % (1000 * 60)) / 1000);

        document.getElementById("box-1_flashSales").innerHTML = days+"d";
        document.getElementById("box-2_flashSales").innerHTML = hours;
        document.getElementById("box-3_flashSales").innerHTML = minutes;
        document.getElementById("box-4_flashSales").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("box-1_flashSales").innerHTML = "0d";
            document.getElementById("box-2_flashSales").innerHTML = "0";
            document.getElementById("box-3_flashSales").innerHTML = "0";
            document.getElementById("box-4_flashSales").innerHTML = "0";
        }

    }, 1000);



    // This is data for the box titled fleshSalesUnder2.99Dollar
    var fleshSalesUnderThreeDollars = [
        {
            image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/86/182/M_p0128518286.jpg",
            price: "US$ 8.99",
            claimedPerc: "6%",
        },

        {
            image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/39/131/M_p0111713139.jpg",
            price: "US$ 8.99",
            claimedPerc: "7%",
        },

        {
            image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/46/759/M_p0047075946.jpg",
            price: "US$ 2.99",
            claimedPerc: "12%",
        },

        {
            image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/23/857/M_p0112985723.jpg",
            price: "US$ 9.99",
            claimedPerc: "80%",
        },

        {
            image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/78/162/M_p0130216278.jpg",
            price: "US$ 8.99",
            claimedPerc: "53%",
        },
    ]


    function showFleshSaleUnderThreeData(fleshSalesData){
        var flashSalesBox = document.getElementById("flashSalesUnderThreeContent");
        fleshSalesData.forEach(function(el){
            var divContainer = document.createElement("div");
            divContainer.setAttribute("class","productsDivInsideFleshSales");
            var image = document.createElement("img");
            image.src = el.image;
            var price = document.createElement("p");
            price.textContent = el.price;
            var claimedPerc = document.createElement("p");
            claimedPerc.textContent = "Deal is "+el.claimedPerc+" claimed";
            claimedPerc.id = "claimedPercInFleshSales";

            divContainer.append(image, price, claimedPerc);

            flashSalesBox.append(divContainer);
        })
    }
    
    showFleshSaleUnderThreeData(fleshSalesUnderThreeDollars);



// This functionality is for the box titled Flash Sales upto 25% off

    // CountDown timer
var deadline = new Date("Oct 3, 2021 21:00:00").getTime();
// console.log(deadline);
var x = setInterval(function () {
    var now = new Date().getTime();
    console.log(now);
    var lefttime = deadline - now;
    // console.log(lefttime);
    var days = Math.floor(lefttime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((lefttime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((lefttime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((lefttime % (1000 * 60)) / 1000);

    document.getElementById("box-1_fleshSalesTwentyFive").innerHTML = days+"d";
    document.getElementById("box-2_fleshSalesTwentyFive").innerHTML = hours;
    document.getElementById("box-3_fleshSalesTwentyFive").innerHTML = minutes;
    document.getElementById("box-4_fleshSalesTwentyFive").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("box-1_fleshSalesTwentyFive").innerHTML = "0d";
        document.getElementById("box-2_fleshSalesTwentyFive").innerHTML = "0";
        document.getElementById("box-3_fleshSalesTwentyFive").innerHTML = "0";
        document.getElementById("box-4_fleshSalesTwentyFive").innerHTML = "0";
    }

}, 1000);

var fleshSalesUptoTwentyFive = [
    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/15/203/M_p0126820315.jpg",
        price: "US$ 8.99",
        claimedPerc: "6%",
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/61/733/M_p0104573361.jpg",
        price: "US$ 7.99",
        claimedPerc: "7%",
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/39/131/M_p0111713139.jpg",
        price: "US$ 3.99",
        claimedPerc: "12%",
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/96/683/M_p0129068396.jpg",
        price: "US$ 5.99",
        claimedPerc: "80%",
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/31/897/M_p0088089731.jpg",
        price: "US$ 9.99",
        claimedPerc: "53%",
    },
]


function showFleshSalesUpto25Data(fleshSalesData){
    var flashSalesBox = document.getElementById("flashSalesUpToTwentyFiveData");
    fleshSalesData.forEach(function(el){
        var divContainer = document.createElement("div");
        divContainer.setAttribute("class","productsDivInsideFleshSales");
        var image = document.createElement("img");
        image.src = el.image;
        var price = document.createElement("p");
        price.textContent = el.price;
        var claimedPerc = document.createElement("p");
        claimedPerc.textContent = "Deal is "+el.claimedPerc+" claimed";
        claimedPerc.id = "claimedPercInFleshSales";

        divContainer.append(image, price, claimedPerc);

        flashSalesBox.append(divContainer);
    })
}

showFleshSalesUpto25Data(fleshSalesUptoTwentyFive);


// It's for stock clearance box

var stockClearanceData = [
    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/15/203/M_p0126820315.jpg",
        price: "US$ 8.99",
        claimedPerc: "6%",
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/61/733/M_p0104573361.jpg",
        price: "US$ 7.99",
        claimedPerc: "7%",
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/39/131/M_p0111713139.jpg",
        price: "US$ 3.99",
        claimedPerc: "12%",
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/96/683/M_p0129068396.jpg",
        price: "US$ 5.99",
        claimedPerc: "80%",
    },

    {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/31/897/M_p0088089731.jpg",
        price: "US$ 9.99",
        claimedPerc: "53%",
    },
]

function showFleshSalesStockClearance(fleshSalesData){
    var flashSalesBox = document.getElementById("flashSalesInStockClearanceContent");
    fleshSalesData.forEach(function(el){
        var divContainer = document.createElement("div");
        divContainer.setAttribute("class","productsDivInsideFleshSales");
        var image = document.createElement("img");
        image.src = el.image;
        var price = document.createElement("p");
        price.textContent = el.price;
        var claimedPerc = document.createElement("p");
        claimedPerc.textContent = "Deal is "+el.claimedPerc+" claimed";
        claimedPerc.id = "claimedPercInFleshSales";

        divContainer.append(image, price, claimedPerc);

        flashSalesBox.append(divContainer);
    })
}

showFleshSalesStockClearance(stockClearanceData);

// pummy's javaScript code
let images = [
    "https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/21wk39/l_pa_endofseason.jpg",
    "https://img4.urbanic.com/4d589e5d2f0f43fda41eb222d5079332",
    "https://img4.urbanic.com/d45a2ba773d94afa95cf218ff903cd4a"
  ];


    let container = document.getElementById("mySlideshow");
    let interval;
    function startSlideshow() {
        let counter=0;
        let image = document.createElement("img");
            image.src = images[counter];
            container.append(image);
            counter++;


        interval=setInterval(function () {
            container.innerHTML=null;

            if(counter==images.length){
                counter=0;
            }

            let img = document.createElement("img");
            img.src = images[counter];
            container.append(img);
            counter++;
            
        },3000);
    }

    startSlideshow();