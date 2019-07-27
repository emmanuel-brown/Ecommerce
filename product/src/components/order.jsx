import React, { useState } from 'react';
// import HoverBaordImg from'../components/images/hoverBoard.jpg';

const Order = () =>{
        let display = [];
        // const [display, setDisplay] = useState([]);
        const Product = function(name, price, description, image){
            this.name = name;
            this.price = price;
            this.description = description;
            this.image = image;
        }

        const descriptions = {
            hoverBoard: `Be the first get get a hold
            of this furturistic technology.
            Imagine floating beaming into the eyes those
            four wheeled gravity limited contraption.`,
            lexusBoard: `Be the first get get a hold
            of this furturistic technology.
            Imagine floating beaming into the eyes those
            four wheeled gravity limited contraption.`,
            contactLenses: `Regular contacts these days are just too simple.
            Be the first to get the power of your phone in a 
            more visual persective.`
        }

        const HoverBoard = new Product('hoverBoard', 12, descriptions.hoverBoard, 1);
        const LexusBoard = new Product('Lexus Board', 25, descriptions.lexusBoard, 2);
        const ContactLenses = new Product('contactLenses', 19, descriptions.contactLenses, 3);
        
        const Products = [
            HoverBoard,
            LexusBoard,
            ContactLenses
        ];

        console.table(Products)

        function pushProduct(){
            display = [];
            let i = 0;
            Products.forEach((product1) => {
                i += 1;
                display.push(
                    <div key={product1.name} id={product1.name.split(' ').join('')} className="box">
                        <div id={product1.name.split(' ').join('') + "-img"} /*style={{backgroundImage: `url("${product1.image}")` }}*/ className="viewer"></div>
                        <div className="backend">
                            <h3>{product1.name}</h3>
                            <h4>{product1.price}</h4>
                            <h4>{product1.description}</h4>
                        </div>
                    </div>
                );
            });
        }

        function priceAscend(){
            Products.sort((a,b) =>{
                return a.price - b.price
            });
            console.table(Products);
            console.table(display);
            pushProduct();
        }

        function priceDescend(){
            Products.sort((a,b) =>{
                return b.price - a.price
            });
            console.table(Products);
            console.table(display);
        }

        
        pushProduct();
        console.table(display);
        return(
                <div>
                    <button onClick={priceDescend}>Order least to Greatest</button>
                    <button onClick={priceAscend}>Order least to Greatest</button>
                    <div>{display}</div>
                </div>
        )
}

export default Order