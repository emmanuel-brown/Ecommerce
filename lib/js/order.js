// var thing = document.getElementById('HoverBoard');
// thing.style.order = '2'

let Product = function(name, price, description){
    this.name = name;
    this.id = document.getElementById(this.name);
    this.price = price;
    this.description = description;
}

const defaults = [
    new Product("HoverBoard", 7000, "compliance vehicle"),
    new Product("LexusBoard", 10000, "compliance vehicle"),
    new Product("ContactLenses", 2000, "wearable"),
    new Product("TeslaModel3", 35000, "vehicle"),
    new Product("SGNLWristband", 149, "wearable"),
    new Product("TapKeyboard", 199, "wearable"),
    new Product("TobiEyeTracker", 149, "wearable"),
    new Product("LookingGlassHalographicDisplay", 599, "compliance"),
    new Product("LeapMotion", 80, "compliance"),
    new Product("Paper-ThinOLEDTV", 9999, "compliance"),
    new Product("AirselfieMiniDrone", 199, "compliance"),
    new Product("TranslatingEarphones", 178, "wearable"),
];

function displayAll(){
    return defaults;
}

var products;
function lowToHigh(){
    displayAll()
    products = defaults.sort((a,b) =>{
        return a.price - b.price
    })
    for(let i = 0; i < products.length; i++){
        let product = products[i];
        product.id.style.order = i+1;
    }
}

function highToLow(){
    displayAll()
    products = defaults.sort((a,b) =>{
        return b.price - a.price
    })
    for(let i = 0; i < products.length; i++){
        let product = products[i];
        product.id.style.order = i+1;
    }
}

function alphaUp(){
    displayAll()
    products = defaults.sort((a,b) =>{
        return a.name.charCodeAt() - b.name.charCodeAt()
    })
    for(let i = 0; i < products.length; i++){
        let product = products[i];
        product.id.style.order = i+1;
    }
}

function alphaDown(){
    products = defaults.sort((a,b) =>{
        return b.name.charCodeAt(0) - a.name.charCodeAt(0)
    })
    for(let i = 0; i < products.length; i++){
        let product = products[i];
        product.id.style.order = i+1;
    }
}

const Cata_compliance = () =>{
    let products = defaults;
    let pass = [];
    let not = []
    products.map((product) =>{
        if(product.description.includes("compliance")){
            pass.push(product)
        } else{
            not.push(product);
        }
        return pass, not;
    })
    for(let i = 0; i < pass.length; i++){
        pass[i].id.style.order = i+1;
    }

    for(let i = 0; i < not.length; i++){
        not[i].id.style.display = 'none';
    }
    console.table(not)
}

const Cata_wearable = () =>{
    let products = defaults;
    let pass = [];
    let not = []
    products.map((product) =>{
        if(product.description.includes("wearable")){
            pass.push(product)
        } else{
            not.push(product);
        }
        return pass, not;
    })
    for(let i = 0; i < pass.length; i++){
        pass[i].id.style.order = i+1;
    }

    for(let i = 0; i < not.length; i++){
        not[i].id.style.display = 'none';
    }
    console.table(not)
}

const Cata_vehicle = () =>{
    let products = defaults;
    let pass = [];
    let not = []
    products.map((product) =>{
        if(product.description.includes("vehicle")){
            pass.push(product)
        } else{
            not.push(product);
        }
        return pass, not;
    })
    for(let i = 0; i < pass.length; i++){
        pass[i].id.style.order = i+1;
    }

    for(let i = 0; i < not.length; i++){
        not[i].id.style.display = 'none';
    }
    console.table(not)
}