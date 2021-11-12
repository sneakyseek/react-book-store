import React from 'react'
import Logo from "../assets/Library.svg"
import { Link } from 'react-router-dom'

export default function () {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to ="/">
                        <figure className="foot__logo">
                            <img src={Logo} className="footer__logo--img" alt="" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">Home</Link>
                        <span className="footer__link no-cursor">About</span>
                        <Link to="/books" class="footer__link">Books</Link>
                        <Link to="/cart" class="footer__link">Cart</Link>
                    </div>
                    <div className="footer__copyright">
                        Copright &copy; 2021 Library
                    </div>
                </div>
            </div>
        </footer>
    )
}
