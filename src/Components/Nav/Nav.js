import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
    render() {
        return(
            <div>

<header>
    <nav class="navbar">
        <div class="logo-container">
            <a href="home.html">
                <h1 class="logo">Kelly's</h1><img id="logo-image"
                    src="https://cdn.icon-icons.com/icons2/1362/PNG/512/artboard-10_89054.png"
                    alt="gray cartoon cat"/>
                <h2 class="logo">Ragdolls</h2>
            </a>

        </div>
        <div class="container">
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a class="current" href="contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>
</header>

            </div>
        )
    }
}

export default Nav;