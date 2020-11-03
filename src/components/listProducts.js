import {getProducts} from "../services/products";
import React from 'react';
import {v4 as uuidv4} from 'uuid';

class ListProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    };

    componentDidMount() {
        let list = [];

        getProducts().then(context => {
            console.log(context)
            if (context.success === true) {
                context.payload.forEach(p => {
                    list.push(<tr key={uuidv4()}>
                        <td>{p.color}</td>
                        <td>{p.productName}</td>
                        <td>{p.price}</td>
                        <td><a onClick={ event => this.consultProduct(p.color)} href="javascript:void(0)">consult</a></td>
                    </tr>)
                })
            } else {
                list.push(<tr key={uuidv4()}>
                    <td><h2> Error While retrieving data</h2></td>
                </tr>)
            }
            this.setState(
                {
                    ...this.state, list: list
                })
        })

    }

    consultProduct (color) {
        this.props.setColor(color);
    }

    render() {
        return (
            <div>
                <table border={1}>
                    <tbody>
                    <tr>
                        <th>color</th>
                        <th>product name</th>
                        <th>price</th>
                        <th>Action</th>
                    </tr>
                    {this.state.list}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default ListProducts;