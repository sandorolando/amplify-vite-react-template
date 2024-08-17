import React, { useState, useEffect } from 'react';
import play_icon from "../../assets/hero/play_icon.png";
import pause_icon from "../../assets/hero/pause_icon.png";

import './style.css';

const heroData = [
    { text1: "Easily. Enjoy. Eating." },
    { text1: "Building Community through Food." },
    { text1: "For drivers, restaurants, and customers with love." },
];

const SplashPage = () => {
    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setHeroCount(prevCount => (prevCount === 2 ? 0 : prevCount + 1));
        }, 3000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="splash-page">
            <div className="hero">
            <div className="hero-logo">
                {/* Hero Logo */}
                    <img 
                        src="https://tequilalink.com/wp-content/uploads/2024/08/3elogo.png" 
                        alt="3eDelivery Logo" 
                        className="logo-img"
                    />
                </div>


                {playStatus ? (
                    <video className="background" autoPlay loop muted>
                        <source src="https://videos.pexels.com/video-files/4170840/4170840-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                    </video>
                ) : (
                    heroCount === 0 ? <img src="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg" className="background" alt="" /> :
                    heroCount === 1 ? <img src="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg" className="background" alt="" /> :
                    heroCount === 2 ? <img src="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg" className="background" alt="" /> :
                    null
                )}

                {/* Hero Content */}
                <div className="hero-text">
                    <h1>{heroData[heroCount].text1}</h1>
                    <h1>{heroData[heroCount].text2}</h1>
                    <h1>{heroData[heroCount].text3}</h1>
                </div>


               
                <div className="hero-dot-play"/>
                <ul className="hero-dots">
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}> </li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}> </li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}> </li>
                </ul>
                <div className="hero-play">
                    <img
                        onClick={() => setPlayStatus(!playStatus)}
                        src={playStatus ? pause_icon : play_icon}
                        alt=''
                    />
                    <p>{playStatus ? 'Pause Video' : 'Play Video'}</p>
                </div>

                {/* Email Capture Section */}
                <div className="email-capture">
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer">
                <p>This project is earnestly implementing technology to empower our Central Valley Community. Thank you for visiting.</p>
            </div>
        </div>
    );
};

export default SplashPage;
