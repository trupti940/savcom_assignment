

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
        sitekey="6LfwZqoqAAAAAF2eXnrbUDJe-8OSWEGfw35dp-aF" 
        onChange={handleCaptchaChange}
      />
    </div>
  );
};

export default Recaptcha;


