import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import receipt_image from '../../assets/receipt.png'
import shop_image from '../../assets/shop.png'

export default function Home() {
    return (
        <div className="home-container">
            <aside className="home-aside">
                <div className="home-content">
                    <div className="home-text">
                        <h2 className="home-title">
                            Download Now
                            <span className="home-subtitle">Lorem Ipsum</span>
                        </h2>
                        <Link className="home-button" to="/">
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>
                <div className="home-image-container">
                    <img className="home-receipt-image" src={receipt_image} alt="image1" />
                </div>
            </aside>

            <div className="home-center">
                <img className="home-shop-image" src={shop_image} alt="image2" />
            </div>

            <h1 className="home-heading">Lorem Ipsum Yojo</h1>
        </div>
    );
}
