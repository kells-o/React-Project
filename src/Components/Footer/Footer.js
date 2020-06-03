import React from "react";
import "./Footer.scss";


class Footer extends React.Component {
    render() {
        return(
            <div>
                <footer class="footer">

<div id="logo-copyright">

    <img class="footer-logo" src="https://cdn.icon-icons.com/icons2/1362/PNG/512/artboard-10_89054.png"
        alt="gray cartoon cat"/>

    <p> &copy; Kelly's Ragdolls 2020</p>
</div>


<div id="icon">
    <a href="https://www.instagram.com" target="_blank" rel="noopener">
        <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/38-instagram-512.png"
            alt="instagram logo"/></a>

   

    <a href="https://www.facebook.com/" target="_blank" rel="noopener">
        <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_square_black-512.png"
            alt="facebook logo"/></a>

    <a href="https://www.twitter.com" target="_blank" rel="noopener">
        <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_square_black-256.png"
            alt="twitter icon"/></a>

</div>
</footer>
            </div>
        )
    }
}

export default Footer;