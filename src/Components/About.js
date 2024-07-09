import React from 'react';
import Aboutusgif from './Aboutusgif'; // Assuming this is a component for displaying a GIF

const About = () => {
  return (
    <div>
      <img src="./images/aboutbg.jpg" alt="Background" className="background-img" />
    <div style={containerStyle}>
      <div style={boxStyle}>
        <div >
          <p>
            The Registration Department manages a vast array of services critical to citizens, including property registration, stamp duty information, marriage registration, market value inquiries, and more. Users rely on these services to find specific information regarding registration processes and regulations. Real-time updates and accurate responses to user queries are essential for providing efficient service.
          </p>
          <p>
            Our primary objective is to develop a customized AI-powered Chatbot integrated into the Registration Department's service platform. This Chatbot will be the first point of contact for citizens, providing interactive responses and processing user queries using advanced natural language processing techniques.
          </p>
          <p>
            The Chatbot will interpret user queries, extract relevant information from extensive datasets, and generate tailored responses in real-time. By streamlining the process of finding relevant details, we aim to reduce the time and effort required for users to obtain accurate information.
          </p>
          <p>
            Furthermore, the adaptability of AI models enables continuous learning and refinement. This ensures that the Chatbot remains updated and responsive to evolving user needs and regulatory changes.
          </p>
        </div>
      </div>
      <Aboutusgif /> {/* Assuming this component displays a relevant GIF */}
    </div>
    </div>
  );
};

// Styles
const containerStyle = {
  backgroundImage: 'url("Aboutsash.png")', // Adjust the background image path
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const boxStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjust the background color and transparency
  padding: '20px',
  maxWidth: '950px', // Adjust the maximum width of the box
  textAlign: 'center',
  borderRadius: '10px', // Add rounded corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
};

const scrollableBoxStyle = {
  maxHeight: '250px', // Adjust the maximum height of the box
  overflowY: 'scroll',
};

export default About;
