import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Thank you for reaching out, ${name}!`);
        // Add form submission logic here
    };

    return (
        <div className="contact-page">
            <div className="contact-wrapper">
                <img src="./images/contactbg.jpg" alt="Background" className="background-img" />
                <div className="contact-container">
                    <h1>Contact Us</h1>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Message:
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
