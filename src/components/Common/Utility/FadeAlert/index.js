import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Fade from '../Fade/Fade';

import './style.css';

export default function FadeAlert({ variant, resetMessage, message }) {
  const [showMessage, setShowMessage] = useState(true);

  const reset = async function() {
    setShowMessage(false);

    const sleep = milliseconds => {
      return new Promise(resolve => setTimeout(resolve, milliseconds));
    };

    await sleep(1000).then(() => {
      resetMessage();
    });
  };

  return (
    <Fade
      show={showMessage}
      callback={() => {
        reset();
      }}
    >
      <Alert variant={variant} dismissible onClose={() => reset()}>
        <p className="errorMessage">{message}</p>
      </Alert>
    </Fade>
  );
}
