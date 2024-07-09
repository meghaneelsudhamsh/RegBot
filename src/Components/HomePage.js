import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './HomePage.css'; // Import CSS file for styles

const HomePage = () => {
    return (
        <div className="container">
            <h1>Welcome to the Registration Department</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <p>
                The Registration Department manages critical services for citizens, including property registration,
                stamp duty information, marriage registration, market value inquiries, and more.
            </p>
            <p>
                Our primary objective is to enhance user experience through advanced AI techniques. Our customized
                Chatbot is your first point of contact, providing interactive responses and real-time information
                extraction from extensive datasets.
            </p>
            <Link to="/chatbot" className="button">Explore Our Chatbot</Link>
        </div>
    );
}

export default HomePage;
