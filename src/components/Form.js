import "./FormStyles.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form action="https://formspree.io/f/mpzeovnr" method="POST">
        <label> Your Name</label>
        <input type="text" name="username" placeholder="username" autoComplete="off" required/>
        <label> Email</label>
        <input type="email" name="Email" placeholder="Email" autoComplete="off" required />
        <label>Subject</label>
        <input type="text" name="subject" placeholder="Subject" autoComplete="off" />
        <label>Message</label>.
        <textarea name="message" cols="30" rows="6" placeholder="Type your message here"></textarea>
        <input type="submit" value="send"/>
      
      </form>

    
    </div>

  );
};

export default Form;
