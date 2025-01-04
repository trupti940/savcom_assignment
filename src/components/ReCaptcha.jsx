

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = ({ onVerify }) => {
  const [isVerified, setIsVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    setIsVerified(value);
    onVerify(value);
  };

  return (
    <div className="recaptcha-container">
      <ReCAPTCHA
        sitekey="6LfFX6oqAAAAALuxKNoVgjMlrDjtLA9C9nVdOCtP" 
        onChange={handleCaptchaChange}
      />
    </div>
  );
};

export default Recaptcha;


