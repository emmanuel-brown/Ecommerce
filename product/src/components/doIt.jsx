import React from 'react';
import HoverBoardImg from'../components/images/hoverBoard.jpg';
import HoverCraft from'../components/images/hoverCraft.jpg';
import Contacts from'../components/images/contacts.jpeg';
import Tesla from'../components/images/tesla.jpg';


class DoIt extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: [
                {
                    name: 'Hover Board',
                    price: 7000,
                    description: `Board`,
                    image: HoverBoardImg
                },
                {
                    name: 'Lexus Board',
                    price: 10000,
                    description: `Board`,
                    image: HoverCraft,
                },
                {
                    name: "Contact Lenses",
                    price: 200,
                    description: `Eye Technology`,
                    image: Contacts,
                },
                {
                    name: "Tesla Model 3",
                    price: `35000`,
                    description: "vehicle",
                    image: Tesla,
                }
            ],
        }
    }

    componentDidMount(){
        this.AlphaUp();
    }
    PriceDescend = () =>{
        let takeIt = this.state.display.sort((a,b) =>{
            return b.price - a.price
        });
        this.setState({
            display: takeIt
        })
    }
    PriceAscend = () =>{
        let takeIt = this.state.display.sort((a,b) =>{
            return a.price - b.price
        });
        this.setState({
            display: takeIt
        })
    }

    AlphaUp = () =>{
        let takeIt = this.state.display.sort((a,b) =>{
            return a.name.charCodeAt(0) - b.name.charCodeAt(0);
        });
        this.setState({
            display: takeIt
        })
    }

    AlphaDown = () =>{
        let takeIt = this.state.display.sort((a,b) =>{
            return b.name.charCodeAt(0) - a.name.charCodeAt(0);
        });
        this.setState({
            display: takeIt
        })
    }

    render(){
        console.table(this.state.display);
        let deploy = []
        this.state.display.forEach((product1) =>{
            deploy.push(
                <div key={product1.name} id={product1.name.split(' ').join('')} className="box">
                    <div className="block">
                        <div className="show">
                            <img id="content-img" src={product1.image} alt={product1.name}/>
                        </div>
                        {/* <div id={product1.name.split(' ').join('') + "-img"} style={{backgroundImage: `url("${product1.image}")` }} className="viewer"></div> */}
                        <div className="info">
                            <h3>{product1.name}</h3>
                            <h4>{"$" + product1.price + ".99"}</h4>
                            <h4>{product1.description}</h4>
                        </div>
                    </div>
                </div>
            );
        })
        return(
            <div>
                <div id="filter">
                    <div id="catagory">Filter</div>
                    <div id="catagories">
                        <div id="price" className="contain">
                            <h3>Prices</h3>
                            <div className="options">
                                <div onClick={this.PriceAscend.bind(this)}>Low to high</div>
                                <div onClick={this.PriceDescend.bind(this)}>High to low</div>
                            </div>
                        </div>
                        <div id="alphabet" className="contain">
                            <h3>Alphabetical</h3>
                            <div className="options">
                                <div onClick={this.AlphaUp.bind(this)}>[A-Z]</div>
                                <div onClick={this.AlphaDown.bind(this)}>[Z-A]</div>
                            </div>
                        </div>
                        <div id="types" className="contain">
                            <h3>types</h3>
                            <div className="options">
                                <div>Boards</div>
                                <div>Eyes</div>
                                <div>Vehicle</div>
                            </div>
                        </div>
                    </div>
                </div>
                <main id="content">{deploy}</main>
            </div>
        )
    }
}

export default DoIt