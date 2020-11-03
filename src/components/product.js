import React from 'react';
import {getProductByColor, getProducts} from "../services/products";
import {v4 as uuidv4} from "uuid";


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    };

    componentDidMount() {
        let list = [];

        getProductByColor(this.props.color).then(context => {

            if (context.success === true) {
                    list.push(<p key={uuidv4()}>color: {context.payload.color}</p>)
                    list.push(<p key={uuidv4()}>description: {context.payload.description}</p>)
            } else {
                list.push(<h2 key={uuidv4()}> Error While retrieving data</h2>)
            }
            this.setState(
                {
                    ...this.state, list: list
                })
        })

    }

    render() {
        return (
            <div>

                    {this.state.list}

            </div>
        );
    }

}

export  default Product;