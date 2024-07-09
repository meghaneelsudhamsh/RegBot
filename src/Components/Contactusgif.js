import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const BoyDialogContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 20px;
  display: flex;
  align-items: flex-end;
`;

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const typeIn = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const DialogueContainer = styled.div`
  background-color: #87CEEB; /* Light blue background color for the cloud */
  padding: 15px;
  border-radius: 15px;
  margin-right: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Optional: Add a subtle shadow effect */
  transform: translateY(-10px); /* Move the dialogue container 10px above */
  overflow: hidden;
  position: relative;
  animation: ${bounceIn} 0.5s ease; /* Add a bounce-in animation */

  ::before,
  ::after {
    content: '';
    position: absolute;
    background-color: #87CEEB; /* Light blue color for the cloud */
    border-radius: 50%;
  }

  ::before {
    width: 20px;
    height: 20px;
    top: -10px;
    left: -10px;
  }

  ::after {
    width: 30px;
    height: 30px;
    top: -15px;
    right: -15px;
  }
`;

const DialogueText = styled.p`
  color: #2b2b2b; /* Dark text color */
  font-family: 'Roboto', sans-serif; /* Use your desired font */
  font-size: 18px; /* Adjust the font size */
  margin: 0;
  margin-bottom: 5px; /* Adjust the margin-bottom to lift the text */
  white-space: nowrap; /* Prevent line breaks */
  overflow: hidden; /* Hide overflowed content */
  animation: ${typeIn} 2s steps(40, end) both; /* Add a typing animation */
`;

const BoyGifContainer = styled.div`
  max-width: 250px; /* Adjust the width as needed */
  max-height: 250px; /* Adjust the height as needed */
`;

const BoyGif = styled.img`
  width: 60%;
  height: 90%;
  border-radius: 8px;
  float: left; /* Optional: Add border-radius for a rounded appearance */
`;

const Contactgif
 = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Simulate delayed appearance of dialogue text
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <BoyDialogContainer>
      <DialogueContainer>
        <DialogueText className={showText ? 'show' : ''}>
          Hey! connect to us
          <br />
          select an option.
        </DialogueText>
      </DialogueContainer>
      <BoyGifContainer>
        <BoyGif src="./images/contactus.gif" alt="Boy" />
      </BoyGifContainer>
    </BoyDialogContainer>
  );
};

export default Contactgif
;