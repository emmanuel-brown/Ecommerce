import React from 'react';
import '../components/css/normalize.css';
import '../components/css/product.scss';
import Order from '../components/doIt';



class Product extends React.Component{
    render(){
        return(
            <div>
            <nav id="navigation">
                <div id="title">
                    <h1>Future Fancy</h1>
                </div>
                <div id="navigator">
                    <div><p><a href="../../../index.html">Home</a></p></div>
                    <div><p><a href="./product.html">Product</a></p></div>
                    <div><p><a href="./contact.html">Contact</a></p></div>
                </div>
            </nav>
            <Order/>
            </div>
        )
    }
}

export default Product