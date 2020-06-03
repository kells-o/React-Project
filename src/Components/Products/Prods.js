import React, { Component } from 'react';
import '../Products/products.scss'

export default class Prods extends Component {
    render(){
        return(
            <div>
                <ul>
                    {this.props.products.map(product => (
                        <li key={product._id}>
                            <div>
                                <a href={"#" + product._id}>
                                    <img src={product.img} alt={product.name}/>
                                    <p>
                                        {product.name}
                                    </p>
                                </a>
                                <div>
                                    <div>
                                        {"$" + product.price}
                                    </div>
                                    <button>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}