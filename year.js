console.log("connected!");

var bottlecapJason = [
    {brand: 'cocacola', year: '1900s', color: 'red', url: 'img/1.png'},
    {brand: 'cocacola', year: '2000s', color: 'black', url: 'img/2.png'},
    {brand: 'cocalcola', year: '1900s', color: 'silver', url: 'img/51.png'},
    {brand: 'fanta', year: 'unknown', color: 'blue', url: 'img/4.png'},
    {brand: 'estrella', year: '1900s', color: 'black', url: 'img/5.png'},
    {brand: 'estrella', year: 'unknown', color: 'silver', url: 'img/6.png'},
    {brand: 'cocacola', year: 'unknown', color: 'white', url: 'img/52.png'},
    {brand: 'fanta', year: 'unknown', color: 'blue', url: 'img/53.png'},
    {brand: 'fanta', year: 'unknown', color: 'white', url: 'img/54.png'},
    {brand: 'cocacola', year: 'unknown', color: 'yellow', url: 'img/10.png'},
    {brand: 'cocacola', year: 'unknown', color: 'silver', url: 'img/11.png'},
    {brand: 'fanta', year: 'unknown', color: 'orange', url: 'img/12.png'},
    {brand: 'fanta', year: '1900s', color: 'white', url: 'img/55.png'},
    {brand: 'cocacola', year: 'unknown', color: 'black', url: 'img/14.png'},
    {brand: 'cocalcola', year: 'unknown', color: 'red', url: 'img/15.png'},
    {brand: 'cocacola', year: 'unknown', color: 'silver', url: 'img/16.png'},
    {brand: 'estrella', year: 'unknown', color: 'silver', url: 'img/56.png'},
    {brand: 'estrella', year: '1900s', color: 'green', url: 'img/57.png'},
    {brand: 'estrella', year: '1900s', color: 'blue', url: 'img/58.png'},
    {brand: 'estrella', year: '1800s', color: 'red', url: 'img/59.png'},
    {brand: 'cocacola', year: 'unknown', color: 'white', url: 'img/60.png'},
    {brand: 'sanmiguel', year: 'unknown', color: 'white', url: 'img/61.png'},
    {brand: 'sanmiguel', year: 'unknown', color: 'yellow', url: 'img/62.png'},
    {brand: 'sanmiguel', year: 'unknown', color: 'yellow', url: 'img/63.png'},
    {brand: 'sanmiguel', year: 'unknown', color: 'green', url: 'img/64.png'},
    {brand: 'sanmiguel', year: 'unknown', color: 'silver', url: 'img/65.png'},
    {brand: 'estrella', year: 'unknown', color: 'black', url: 'img/32.png'},
    {brand: 'fanta', year: 'unknown', color: 'yellow', url: 'img/38.png'},
    {brand: 'estrella', year: 'unknown', color: 'red', url: 'img/48.png'},
    {brand: 'estrella', year: 'unknown', color: 'black', url: 'img/32.png'},
    {brand: 'cocacola', year: 'unknown', color: 'red', url: 'img/40.png'},
    {brand: 'sanmiguel', year: 'unknown', color: 'blue', url: 'img/66.png'}
];

//JASON containing 3 items
//go through each item
//make a card (div) containing brand name, year, color


// bottlecapJason.forEach(
//     function(item){
//         console.log("item in my collection:", item.brand);
//         //make card container div
//         var card = document.createElement('div');
//         //make a span that holds brand name
//         card.classList.add('card')
//         var brandName = document.createElement('span');
//         brandName.innerHTML = item.brand;
//         brandName.classList.add('cardLabel');
//         //make a span for year
//         var year = document.createElement('span');
//         year.innerHTML = item.year;
//         year.classList.add('cardLabel');
//         //make a span for color
//         var color = document.createElement('span');
//         color.innerHTML = item.color;
//         color.classList.add('cardLabel');
//         //attatch the span to the card container div
//         card.appendChild(brandName);
//         card.appendChild(year);
//         card.appendChild(color);
//         //make image tag for picture
//         var bottleCap = document.createElement('img');
//         bottleCap.src = item.url;
//         //<img src = "asset/1.png"
//         card.appendChild(bottleCap)
//         //attatch the img to my card container
//         //attatch the card container to the body container
//         var container = document.getElementById("container");
//         container.appendChild(card);
//     }
// );

//user clicks on cocacola button
//user sees bottlecap with cocacola brand

//cocacola button is clicked 
//get value of guitar button > "brand_cocacola"
//if the value of button is "brand_cocacloa" , filter cocacola items and change the background to gray


var cocacolaBtn = document.getElementById("unknownBtn");
cocacolaBtn.addEventListener('click', function(event) {
    console.log(event.target.value);
    if (event.target.value === 'year_unknown') {
        var container = document.getElementById("container");
        container.innerHTML = "";

        // Filter and display Coca-Cola items
        bottlecapJason.filter(function(item) {
            if (item.year === "unknown") {
                var card = document.createElement("div");
                var brandImage = document.createElement('img');
                brandImage.src = item.url;
                card.appendChild(brandImage);

                container.appendChild(card);

                console.log("this is unknown", item);
            }
        });
    }
});

var fantaBtn = document.getElementById("1800Btn");
fantaBtn.addEventListener('click', function(event) {
    console.log(event.target.value);
    if (event.target.value === 'year_1800s') {
        var container = document.getElementById("container");
        container.innerHTML = "";

        // Filter and display Fanta items
        bottlecapJason.filter(function(item) {
            if (item.year === "1800s") {
                var card = document.createElement("div");
                var brandImage = document.createElement('img');
                brandImage.src = item.url;
                card.appendChild(brandImage);

                container.appendChild(card);

                console.log("this is 1800s", item);
            }
        });
    }
});

var estrellaBtn = document.getElementById("1900Btn");
estrellaBtn.addEventListener('click', function(event) {
    console.log(event.target.value);
    if (event.target.value === 'year_1900s') {
        var container = document.getElementById("container");
        container.innerHTML = "";

        // Filter and display Estrella items
        bottlecapJason.filter(function(item) {
            if (item.year === "1900s") {
                var card = document.createElement("div");
                var brandImage = document.createElement('img');
                brandImage.src = item.url;
                card.appendChild(brandImage);

                container.appendChild(card);

                console.log("this is 1900s", item);
            }
        });
    }
});

var sanmiguelBtn = document.getElementById("2000Btn");
sanmiguelBtn.addEventListener('click', function(event) {
    console.log(event.target.value);
    if (event.target.value === 'year_2000s') {
        var container = document.getElementById("container");
        container.innerHTML = "";

        // Filter and display San Miguel items
        bottlecapJason.filter(function(item) {
            if (item.year === "2000s") {
                var card = document.createElement("div");
                var brandImage = document.createElement('img');
                brandImage.src = item.url;
                card.appendChild(brandImage);

                container.appendChild(card);

                console.log("this is 2000s", item);
            }
        });
    }
});

