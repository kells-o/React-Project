import React from "react"
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import '../Products/products.scss'
import Filter from '../Filter/Filter';
// import ProductData from '../../Data/products.json'

class Page extends React.Component {
    render() {
        return(
            <div>
                <Nav />
                <Data />
                <Footer />
            </div>
        )
    }
}

// import Prods from '../Products/Prods/Prods.js';



class Products extends React.Component{
    constructor(){
        super();
        this.state = {
            products: Data.products,
            price: "",
            type: ""
        };
    }
filterPrice = (event) => {
console.log(event.target.value);
const price = event.target.value;
if(event.target.value === ""){
    this.setState({price: event.target.value, products: Data.products});
} else {
    this.setState({
        price: price,
        products: Data.products.filter((product) => product.price.indexOf(event.target.value) >= 0
        ),
    });
}
};
filterType = (event) => {
console.log(event.target.value);
if(event.target.value === ""){
    this.setState({type: event.target.value, products: Data.products});
} else {
    this.setState({
        type: event.target.value,
        products: Data.products.filter((product) => product.type.indexOf(event.target.value) >= 0
        ),
    });
}
};
render (){
    return (
        <div>
            <div>
                <Filter count={this.state.products.length} 
                price={this.state.price} 
                type={this.state.type}
                filterPrice={this.filterPrice}
                filterType={this.filterType}
                 />
            </div>
        </div>
    );
}
}
export default Products;


class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    } //products array



    
componentDidMount(){
    fetch('../../Data/products.json')
        .then((res) => res.json())
        .then(
            (data) => {
                this.setState({
                    isLoaded: true,
                    products: data.products
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            });
}



    render() {
        const {products} = this.state;
        return(
            
<div>
    <section className="product">
        <h1 className="product-header">Our Available Kittens</h1>
    </section>


    <div className="product-selectors">
        <label class="product-selectors__title"></label>

        <div className="dropdown-options">
        <select className="dropdown">    
            <option value="">Filter by</option>
            <option value="male">Males</option>
            <option value="female">Females</option>
            <option value="low">Under $1,600 </option>
            <option value="high">Above $1,600</option>
            <option value="">Shop All</option>
        
        </select>
        </div>

    </div>

    <div className="wrapper">
            {products.map((products) => (
                <div className="wrapper__box" value="male, low">

                <img className="cat-1" src={products.img} alt="seal mitted mink male cat"/>
    
                <h2 className={products.products_name}>Seal Mitted Mink Male</h2>
    
                <h3 className="cat-1_price price">{products.price}</h3>
    
            </div>
    
            ))}
        <div className="wrapper__box" value="male, low">

            <img className="cat-1" src="img/cat1.jpg" alt="seal mitted mink male cat"/>

            <h2 className="cat-1_header header">Seal Mitted Mink Male</h2>

            <h3 className="cat-1_price price">Price: $1,500</h3>

        </div>


        <div className="wrapper__box" value="female, low">

            <img className="cat-2" src="img/cat2.jpg" alt="seal mitted mink female cat"/>

            <h2 className="cat-2_header header">Seal Mitted Mink Female</h2>

            <h3 className="cat-2_price price">Price: $1,500</h3>

        </div>


        <div className="wrapper__box" value="male, high">

            <img className="cat-3" src="img/cat3.jpg" alt="seal point mink male cat"/>

            <h2 className="cat-3_header header">Seal Point Mink Male</h2>

            <h3 className="cat-3_price price">Price: $1,700</h3>

        </div>

        <div className="wrapper__box" value="female, low">

            <img className="cat-4" src="img/cat4.jpg" alt="blue point mink female cat"/>

            <h2 className="cat-4_header header">Blue Point Mink Female</h2>

            <h3 className="cat-4_price price">Price: $1,500</h3>

        </div>


        <div className="wrapper__box-b" value="male, low">

            <img className="cat-5" src="img/cat5.jpg" alt="seal mitted male cat"/>

            <h2 className="cat-5_header header">Seal Mitted Male</h2>

            <h3 className="cat-5_price price">Price: $1,400</h3>

        </div>


        <div className="wrapper__box-b" value="male, high">

            <img className="cat-6" src="img/cat6.jpg" alt="seal point male cat"/>

            <h2 className="cat-6_header header">Seal Point Male</h2>

            <h3 className="cat-6_price price">Price: $1,700</h3>

        </div>


        <div className="wrapper__box-b" value="female, high">

            <img className="cat-7" src="img/cat7.jpg" alt="seal point female cat"/>

            <h2 className="cat-7_header header">Seal Point Female</h2>

            <h3 className="cat-7_price price">Price: $1,700</h3>

        </div>


        <div className="wrapper__box-b" value="male, high">

            <img className="cat-8" src="img/cat8.jpeg" alt="blue mitted mink with blaze male cat"/>

            <h2 className="cat-8_header header">Blue Mitted Mink Male with Blaze</h2>

            <h3 className="cat-8_price price">Price: $1,600</h3>

        </div>


        <div className="wrapper__box-b" value="male, high">

            <img className="cat-9" src="img/cat9.jpg" alt="seal mitted mink male with blaze cat"/>

            <h2 className="cat-9_header header">Seal Mitted Mink Male with Blaze</h2>

            <h3 className="cat-9_price price">Price: $1,600</h3>

        </div>


        <div className="wrapper__box-b" value="female, high">

            <img className="cat-10" src="img/cat10.jpg" alt="lilac sepia female cat"/>

            <h2 className="cat-10_header header">Lilac Sepia Female</h2>

            <h3 className="cat-10_price price">Price: $1,600</h3>

        </div>


        <div className="wrapper__box-b" value="male, low">

            <img className="cat-11" src="img/cat11.jpg" alt="blue mitted mink male cat"/>

            <h2 className="cat-11-header header">Blue Mitted Mink Male</h2>

            <h3 className="cat-11_price price">Price: $1,400</h3>

        </div>


        <div className="wrapper__box-b" value="female, low">

            <img className="cat-12" src="img/cat12.jpg" alt="seal mitted mink female cat"/>

            <h2 className="cat-12_header header">Seal Mitted Mink Female</h2>

            <h3 className="cat-12_price price">Price: $1,400</h3>

        </div>
    </div>

</div>

    )
    }
    }