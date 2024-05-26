import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <header className="main-header">
                
            </header>

            <header className="header2">
                <nav>
                    <div className="nav2">
                    <Link to="/">Home</Link>
                    <Link to="/Abt">About</Link>
                    <Link to="/Skills">Skills</Link>
                    <Link to="/Contact">Contact</Link>
                    </div>
                </nav>
            </header>

            <div className="profile-image">
                <img src="me4.JPG" alt="Profile Image" />
            </div>

            <div className="info">
                <h1>HI, I AM TANISHA</h1>
                <h2>frontend developer</h2>
                <h3>high level experience in<br />
                    web design and development<br />
                    knowledge, producing quality work
                </h3>
            </div>

            <div>
                        <Link to="/Contact">
                        <button className='cta-button' type="submit">Contact></button>
                        </Link>
                    </div>
          <div>
                        <Link to="C:\Users\TANISHA MIRIAM\OneDrive\Desktop\projresume.docx">
                        <button className='cta-button2' type="submit">View Resume></button>
                        </Link>
                    </div>
            
            <a href="https://www.instagram.com/accounts/onetap/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1">
                <img src="instab.png" id="insta" alt="Instagram" />
            </a>
            <a href="https://web.whatsapp.com/">
                <img src="bwp.png" id="wp" alt="WhatsApp" />
            </a>
            <a href="https://www.twitter.com">
                <img src="twitb.png" id="tw" alt="Twitter" />
            </a>

            <footer>
                &copy; 2024 My Portfolio. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;
