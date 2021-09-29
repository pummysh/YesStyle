let itemlist = document.getElementById('itemlist');

let cart_items = [
    {
        price: 15,
        name:'COSRX - Acne Pimple Master Patch',
        quantity: 1,
        img:"https://d1flfk77wl2xk4.cloudfront.net/Assets/07/812/M_p0056481207.jpg"
    },
    {
        price: 12,
        name:'COSRX - Acne Pimple Master Patch',
        quantity: 1,
        img:"https://d1flfk77wl2xk4.cloudfront.net/Assets/86/973/M_p0131497386.jpg"
    },
    {
        price: 15,
        name:'COSRX - Acne Pimple Master Patch',
        quantity: 1,
        img:"https://d1flfk77wl2xk4.cloudfront.net/Assets/61/659/M_p0140965961.jpg"
    },
    {
        price: 2,
        name:'COSRX - Acne Pimple Master Patch',
        quantity: 1,
        img:"https://d1flfk77wl2xk4.cloudfront.net/Assets/89/815/M_p0155181589.jpg"
    },
    {
        price: 3.53,
        name:'COSRX - Acne Pimple Master Patch',
        quantity: 1,
        img:"https://d1flfk77wl2xk4.cloudfront.net/Assets/59/447/M_p0159344759.jpg"
    }
]
let total_items = 0;
let total_cost = 0;
cart_items.forEach(function(item){
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div = document.createElement('div');
    let qnt = document.createElement('div');
    let img = document.createElement('img');
    let head = document.createElement('h3');
    let line1 = document.createElement('p');
    let line2 = document.createElement('p');
    let line3 = document.createElement('p');
     
    qnt.textContent = item.quantity;
    img.src = item.img;
    head.textContent = "US$ "+ item.price;
    line1.textContent = item.name;
    line2.textContent = item.quantity + "pc";
    line3.textContent = "In-Stock - Usually ships within 24 hours";

    div2.append(head, line1, line2, line3);

    div1.append(img);

    div.append(div1, div2);

    itemlist.append(qnt, div);

    div.setAttribute('class','div');

    div1.setAttribute('class','div1');

    div2.setAttribute('class','div2');

    img.setAttribute('class','img');

    head.setAttribute('class','head');

    line1.setAttribute('class','txt');
  
    line2.setAttribute('class','txt');

    line3.setAttribute('class','txt');

    qnt.setAttribute('class','qnt');

    total_items += +(item.quantity);
    total_cost += +(item.price)
})

let span1 = document.getElementById('sp1');
let span2 = document.getElementById('sp2');
let span4 = document.getElementById('sp4');
let total = document.getElementById('total');

span1.textContent = `Items Total (${total_items} pcs)`;
span2.textContent = `US$ ${total_cost}`;
span4.textContent = `US$ 05.00`;
total.textContent = `US$ ${total_cost + 05}`;
