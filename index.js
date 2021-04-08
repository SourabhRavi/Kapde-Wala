let products = [{
    id: 1,
    type: "tshirt",
    brand: "roadster",
    price: 499,
}, {
    id: 2,
    type: "tshirt",
    brand: "roadster",
    price: 599,
}, {
    id: 3,
    type: "tshirt",
    brand: "roadster",
    price: 399,
}, {
    id: 4,
    type: "tshirt",
    brand: "dnmx",
    price: 899,
}, {
    id: 5,
    type: "tshirt",
    brand: "dnmx",
    price: 499,
}, {
    id: 6,
    type: "tshirt",
    brand: "teamspirit",
    price: 699,
}, {
    id: 7,
    type: "tshirt",
    brand: "teamspirit",
    price: 499,
}, {
    id: 8,
    type: "tshirt",
    brand: "netplay",
    price: 999,
}, {
    id: 9,
    type: "tshirt",
    brand: "netplay",
    price: 599,
}, {
    id: 10,
    type: "shirt",
    brand: "roadster",
    price: 899,
}, {
    id: 11,
    type: "shirt",
    brand: "roadster",
    price: 1299,
}, {
    id: 12,
    type: "shirt",
    brand: "dnmx",
    price: 799,
}, {
    id: 13,
    type: "shirt",
    brand: "dnmx",
    price: 1199,
}, {
    id: 14,
    type: "shirt",
    brand: "netplay",
    price: 999,
}, {
    id: 15,
    type: "shirt",
    brand: "netplay",
    price: 1499,
}, {
    id: 16,
    type: "jeans",
    brand: "roadster",
    price: 1699,
}, {
    id: 17,
    type: "jeans",
    brand: "roadster",
    price: 999,
}, {
    id: 18,
    type: "jeans",
    brand: "dnmx",
    price: 1299,
}, {
    id: 19,
    type: "jeans",
    brand: "dnmx",
    price: 1399,
}, {
    id: 20,
    type: "jeans",
    brand: "dnmx",
    price: 1199,
}];



let populateProducts = (x) => {

    let newProductCard = document.createElement("div");
    newProductCard.id = "productCard";
    newProductCard.innerHTML = '<img id="image" src="./img/Star1.png" alt="Product Image">' +
        '<div id="productDetails">' +
        '<p>' + products[x].brand + '</p>' +
        '<p>' + products[x].type + '</p>' +
        '<p>₹' + products[x].price + '</p>' +
        '</div>' +
        '</div>';
    document.getElementById("productsList").appendChild(newProductCard);
};

document.onload = products.forEach((value, index, array) => {
    populateProducts(index);
});

//////////Filter Products///////
let filterProducts = (x, y) => {

    let newProductCard = document.createElement("div");
    newProductCard.id = "productCard";
    newProductCard.innerHTML = '<img id="image" src="./img/Star1.png" alt="Product Image">' +
        '<div id="productDetails">' +
        '<p>' + y[x].brand + '</p>' +
        '<p>' + y[x].type + '</p>' +
        '<p>₹' + y[x].price + '</p>' +
        '</div>' +
        '</div>';
    document.getElementById("productsList").appendChild(newProductCard);
};

//////////For Type////////////
let type1 = document.getElementById("typeFilter").childNodes[1];
let type2 = document.getElementById("typeFilter").childNodes[3];
let type3 = document.getElementById("typeFilter").childNodes[5];


type1.addEventListener("click", e => {
    let filterType = products.filter((value, index, array) => {
        return value.type === "tshirt";
    });
    // console.log(filterType);
    document.getElementById("productsList").innerHTML = "";
    filterType.forEach((value, index, array) => {
        filterProducts(index, filterType);
    })
});

type2.addEventListener("click", e => {
    let filterType = products.filter((value, index, array) => {
        return value.type === "shirt";
    });
    // console.log(filterType);
    document.getElementById("productsList").innerHTML = "";
    filterType.forEach((value, index, array) => {
        filterProducts(index, filterType);
    })
});

type3.addEventListener("click", e => {
    let filterType = products.filter((value, index, array) => {
        return value.type === "jeans";
    });
    // console.log(filterType);
    document.getElementById("productsList").innerHTML = "";
    filterType.map((value, index, array) => {
        filterProducts(index, filterType);
    })
});


////////////For Brand////////////
let brand1 = document.getElementById("brandFilter").childNodes[1];
let brand2 = document.getElementById("brandFilter").childNodes[3];
let brand3 = document.getElementById("brandFilter").childNodes[5];

brand1.addEventListener("click", e => {
    let filterBrand = products.filter((value, index, array) => {
        return value.brand === "roadster";
    });
    // console.log(filterBrand);
    document.getElementById("productsList").innerHTML = "";
    filterBrand.forEach((value, index, array) => {
        filterProducts(index, filterBrand);
    })
});

brand2.addEventListener("click", e => {
    let filterBrand = products.filter((value, index, array) => {
        return value.brand === "dnmx";
    });
    // console.log(filterBrand);
    document.getElementById("productsList").innerHTML = "";
    filterBrand.forEach((value, index, array) => {
        filterProducts(index, filterBrand);
    })
});

brand3.addEventListener("click", e => {
    let filterBrand = products.filter((value, index, array) => {
        return value.brand === "netplay";
    });
    // console.log(filterBrand);
    document.getElementById("productsList").innerHTML = "";
    filterBrand.forEach((value, index, array) => {
        filterProducts(index, filterBrand);
    })
});


///////////For Price///////////////
let price1 = document.getElementById("priceFilter").childNodes[1];
let price2 = document.getElementById("priceFilter").childNodes[3];
let price3 = document.getElementById("priceFilter").childNodes[5];

price1.addEventListener("click", e => {
    let filterPrice = products.filter((value, index, array) => {
        return value.price <= 599;
    });
    // console.log(filterPrice);
    document.getElementById("productsList").innerHTML = "";
    filterPrice.forEach((value, index, array) => {
        filterProducts(index, filterPrice);
    })
});

price2.addEventListener("click", e => {
    let filterPrice = products.filter((value, index, array) => {
        return (value.price > 599 && value.price <= 999);
    });
    // console.log(filterPrice);
    document.getElementById("productsList").innerHTML = "";
    filterPrice.forEach((value, index, array) => {
        filterProducts(index, filterPrice);
    })
});

price3.addEventListener("click", e => {
    let filterPrice = products.filter((value, index, array) => {
        return value.price > 999;
    });
    // console.log(filterPrice);
    document.getElementById("productsList").innerHTML = "";
    filterPrice.forEach((value, index, array) => {
        filterProducts(index, filterPrice);
    })
});