import React, { useState, useEffect } from 'react';
import play_icon from "../../assets/hero/play_icon.png";
import pause_icon from "../../assets/hero/pause_icon.png";
import './style.css';

// Define the type for heroData
interface HeroData {
    text1: string;
    text2?: string;
    text3?: string;
}

// Define the heroData array with type
const heroData: HeroData[] = [
    { text1: "Easily. Enjoy. Eating." },
    { text1: "Building Community through Food." },
    { text1: "Technology to benefiting drivers, restaurants, and customers equally." },
];

const SplashPage: React.FC = () => {
    // Type annotations for state variables
    const [heroCount, setHeroCount] = useState<number>(0);
    const [playStatus, setPlayStatus] = useState<boolean>(false);

    useEffect(() => {
        if (!playStatus) {
            const interval = setInterval(() => {
                setHeroCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
            }, 3000);
            
            return () => clearInterval(interval);
        }
    }, [playStatus]);

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
                    <img 
                        src={[
                            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg",
                            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg",
                            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg"
                        ][heroCount]} 
                        className="background" 
                        alt="Background"
                    />
                )}

                {/* Hero Content */}
                <div className="hero-text">
                    <h1>{heroData[heroCount].text1}</h1>
                </div>

               

                <div className="hero-play">
                    <img
                        onClick={() => setPlayStatus(!playStatus)}
                        src={playStatus ? pause_icon : play_icon}
                        alt={playStatus ? 'Pause' : 'Play'}
                    />
                    <p>{playStatus ? 'Pause Video' : 'Play Video'}</p>
                </div>

                {/* Email Capture Section */}
                <div className="email-capture">
                    <p>Join the waitlist!</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <ul className="hero-dots">
                    {[0, 1, 2].map((index) => (
                        <li 
                            key={index}
                            onClick={() => setHeroCount(index)} 
                            className={heroCount === index ? "hero-dot orange" : "hero-dot"}
                        />
                    ))}
                </ul>

            <div className="footer">
                <p>This project is implementing technology to empower our Central Valley Community. Thank you for visiting.</p>
            </div>
        </div>
    );
};

export default SplashPage;