import React, { Component } from 'react';


export default class Filter extends Component {
    render () {
        return (
            <div className="product-selectors">
                <label class="product-selectors__title"></label>
                <div className="dropdown-options">
                    Filter Price {""}
                    <select className="dropdown" value={this.props.price} onChange={this.props.filterPrice}>
                        <option value="">Filter By</option>
                        <option value="low">Under $1,600</option>
                        <option value="high">Above $1,600</option>
                    </select>
                </div>
                <div>
                    Filter Type {""}
                    <select value={this.props.type} onChange={this.props.filterType}>
                        <option value="male">Males</option>
                        <option value="female">Females</option>
                        <option value="">Shop All</option>
                    </select>
                </div>
            </div>
        )
    }
}
