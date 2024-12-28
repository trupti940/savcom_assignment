
import React, { useState } from "react";
import  './TextCaptcha.css'


const TextCaptcha = ({ onVerify }) => {
  const [captchaText] = useState(() => Math.random().toString(36).substring(2, 8)); 
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input === captchaText) {
      alert("Verified"); 
      onVerify(true); 
    } else {
      alert("Captcha incorrect"); 
      onVerify(false);
    }
  };

  return (
    <div className="text-captcha-container">
      <i>
        <strong>CAPTCHA:</strong> 
        <span className="captcha-box">{captchaText}</span>
      </i>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter CAPTCHA text"
      />
      <button onClick={handleSubmit}>Verify</button>
    </div>
  );
};

export default TextCaptcha;