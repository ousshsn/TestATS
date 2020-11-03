import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListProducts from "./components/listProducts";
import Product from "./components/product";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ''
        }
    };

    setColor = (color) => {
        console.log(color)
        this.setState(
            {
                ...this.state, color: color
            })
    }

    render() {
        return (
            <div className="App">
                {this.state.color === '' ? (<ListProducts
                    setColor={this.setColor}
                />) :
                    (<Product color={this.state.color}/>)

                }
            </div>
        );
    }
}


export default App;
