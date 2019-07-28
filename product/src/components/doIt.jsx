import React from 'react';
import HoverBoardImg from'../components/images/hoverBoard.jpg';
import HoverCraft from'../components/images/hoverCraft.jpg';
import Contacts from'../components/images/contacts.jpeg';
import Tesla from'../components/images/tesla.jpg';
import SgnlWrist from '../components/images/sgnlWristband.jpg';
import Tap from '../components/images/tap.gif';
import EyeTracker from '../components/images/eyeTracker.jpeg';
import lookingGlass from '../components/images/lookingGlass.jpeg';
import Leap from '../components/images/leapMotion.gif';
import Oled from '../components/images/oled-thin.jpeg';
import translateEarbuds from '../components/images/translateEarbuds.jpg';
import Airselfie from '../components/images/airselfie.jpg';




class DoIt extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: [
                {
                    name: 'Hover Board',
                    price: 7000,
                    description: `compliance`,
                    image: HoverBoardImg
                },
                {
                    name: 'Lexus Board',
                    price: 10000,
                    description: `compliance`,
                    image: HoverCraft,
                },
                {
                    name: "Contact Lenses",
                    price: 200,
                    description: `wearable`,
                    image: Contacts,
                },
                {
                    name: "Tesla Model 3",
                    price: `35000`,
                    description: "vehicle",
                    image: Tesla,
                },
                {
                    name: "SGNL Wristbankd",
                    price: '149',
                    description: "wearable",
                    image: SgnlWrist,
                },
                {
                    name: "Tap Keyboard",
                    price: "199",
                    description: "wearable",
                    image: Tap
                },
                {
                    name: "Tobi Eye Tracker",
                    price: "168",
                    description: "accessory",
                    image: EyeTracker
                },
                {
                    name: "Looking Glass Halographic Display",
                    price: "599", 
                    description: "accessory",
                    image: lookingGlass
                },
                {
                    name: "Leap Motion",
                    price: "80",
                    description: "accessory",
                    image: Leap,
                },
                {
                    name: "Paper-Thin OLED TV",
                    price: "9999",
                    description: "compliance",
                    image: Oled
                },
                {
                    name: "Airselfie Mini Drone",
                    price: "199",
                    description: "compliance",
                    image: Airselfie,
                },
                {
                    name: "Translating Earphones",
                    price: "",
                    description: "wearable",
                    image: translateEarbuds,
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
        // console.table(this.state.display);
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
                                <div>Compliance</div>
                                <div>wearable</div>
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