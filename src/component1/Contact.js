import React, { useEffect } from 'react';
import './Contact.css';
import { Link, useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const scriptSrc = "//js.hsforms.net/forms/embed/v2.js";
        const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

        const createForm = (portalId, formId) => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: 'na1',
                    portalId: portalId,
                    formId: formId,
                    target: '#hubspotForm',
                    onFormSubmit: () => {
                        alert("Form submitted successfully!");
                        navigate('/Home');
                    }
                });
            }
        };

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = scriptSrc;
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.async = true;

            script.onload = () => {
                createForm('46276072', 'cf01111d-e463-4c91-91ea-3c91ec1b6fc9');
            };

            document.body.appendChild(script);
        } else {
            createForm('46276072', 'cf01111d-e463-4c91-91ea-3c91ec1b6fc9');
        }

        return () => {
            const formContainer = document.querySelector('#hubspotForm');
            if (formContainer) {
                formContainer.innerHTML = '';
            }
        };
    }, [navigate]);

    return (
      <div>
        <header className="main-header">
          {/* Add your main header content here */}
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

        <div className='cm'>CONTACT ME</div>
        <div className="contact-form">
          <div className="signup-box">
            <div id="hubspotForm"></div>
          </div>
        </div>
        
        <footer>
          &copy; 2024 My Portfolio. All rights reserved.
        </footer>
      </div>
    );
};

export default Contact;
