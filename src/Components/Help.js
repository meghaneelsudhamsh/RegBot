import React, { useState } from 'react';

const Help = () => {
    const faqs = [
        {
            question: 'What services does the Registration Department provide?',
            answer: 'The Registration Department manages various services including property registration, stamp duty information, marriage registration, market value inquiries, and more.',
        },
        {
            question: 'How does the Chatbot assist citizens?',
            answer: 'The Chatbot acts as the first point of contact for citizens, utilizing advanced natural language processing techniques to interpret queries, extract relevant information, and provide interactive responses.',
        },
        {
            question: 'How can citizens benefit from the Chatbot?',
            answer: 'Citizens can obtain personalized and accurate responses quickly, reducing the time and effort required to find specific details related to registration and other services.',
        },
        {
            question: 'How does the Chatbot ensure accuracy?',
            answer: 'The Chatbot processes information from extensive datasets, ensuring that responses are based on current and verified data sources maintained by the Registration Department.',
        },
        {
            question: 'How can citizens access the Chatbot?',
            answer: 'The Chatbot is accessible through the Registration Department\'s service platform, providing 24/7 availability for users to get instant assistance and information.',
        },
        {
            question: 'What security measures protect user information?',
            answer: 'Stringent security protocols safeguard user data handled by the Chatbot, ensuring confidentiality and compliance with data protection regulations.',
        },
        {
            question: 'How does the Chatbot contribute to service efficiency?',
            answer: 'By automating responses and information retrieval, the Chatbot reduces wait times and human resource requirements, optimizing service delivery for the Registration Department.',
        },
    ];

    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const handleQuestionClick = (index) => {
        if (selectedQuestion === index) {
            setSelectedQuestion(null); // Collapse if already selected
        } else {
            setSelectedQuestion(index); // Expand if not selected
        }
    };

    return (
        <div>
            <img src="./images/helpbg.jpg" alt="Background" className="background-img" />
        <div style={containerStyle}>
            <div className="background-img-container">
                
            </div>
            <center>
            <div className="content-container">
                <h1 style={{ marginBottom: '20px', color: '#fff', textAlign: 'center' }}>Frequently Asked questions</h1>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item" style={faqItemStyle}>
                            <div className="question" style={questionStyle} onClick={() => handleQuestionClick(index)}>
                                {faq.question}
                            </div>
                            {selectedQuestion === index && (
                                <div className="answer" style={answerStyle}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            </center>
        </div>
        </div>
    );
}

// Styles
const containerStyle = {
    padding: '50px' ,
    position: 'relative',
    overflow: 'hidden', // Prevent content from overflowing
};

const faqItemStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjust the background color and transparency
    marginBottom: '20px', // Adds space between each FAQ item
    padding: '15px',
    maxWidth: '600px', // Limit width for better readability
    borderRadius: '10px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    margin: '20px',
    
};

const questionStyle = {
    cursor: 'pointer', // Pointer cursor for questions
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
};

const answerStyle = {
    marginTop: '10px',
    fontSize: '16px',
    maxHeight: '200px', // Limit height of answer
    overflowY: 'auto', // Enable scrolling for answers if necessary
};

export default Help;
