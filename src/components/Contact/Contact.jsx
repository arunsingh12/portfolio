import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
// import { themeContext } from "../../Context";
const Contact = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();


    emailjs .sendForm("service_xl3a17n","template_5k5nfsh",form.current,"d_47-er8IzmaYGzvm")
     .then(() =>{
      setDone(true)
      console.log('Conatct')
     }).catch(err =>{
       console.log(err)
     })
  };

  return (
    <div className="contact-form" id="Contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span >Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="user" required placeholder="Name"/>
          <input type="email" name="email" className="user" required placeholder="Email"/>
          <textarea name="message" className="user"  placeholder="Message"/>
          <button type="submit" className="button">Send</button>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
