import React from 'react';
import './About.css';
import greet_image from '../../assets/greet.png';

export default function About() {
    return (
        <div className="about-section">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-image-container">
                        <img
                            src={greet_image}
                            alt="image"
                            className="about-image"
                        />
                    </div>
                    <div className="about-text-container">
                        <h2 className="about-title">
                            Receipt Branch - Your Digital Receipt Solution
                        </h2>
                        <p className="about-paragraph">
                            Seamless Receipts: Imagine hassle-free digital receipts at our partnered stores
                            Effortless Store Cards: Picture your store card electronically stored on users' phones
                            Instant Digital Receipts: Imagine hassle-free digital receipts at our partnered stores
                            Eco-Friendly & Cost-Efficient: Imagine hassle-free digital receipts at our partnered stores
                            Pro-Level Marketing: Imagine hassle-free digital receipts at our partnered stores
                            Exclusive Offers: Imagine hassle-free digital receipts at our partnered stores
                            Hardware-Free: Imagine hassle-free digital receipts at our partnered stores
                            Availabe on Google Play and App Store: Imagine hassle-free digital receipts at our partnered stores
                        </p>
                        <p className="about-paragraph">
                            Seamless Receipt Management: Centralize all your receipts in one app.
                            Email-Free Checkout: Skip sharing emails at checkout.
                            One Scan Convenience: Get receipts with a single scan.
                            Exclusive Savings: Unlock top deals and purchase coupons effortlessly.
                            Digital Wallet Experience: Imagine all your store cards in one place, your digital wallet.
                            No Spam, Just Savings: Zero spam emails from us! It's a promise
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
