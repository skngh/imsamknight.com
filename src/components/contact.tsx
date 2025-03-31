import React, { useRef, useState } from "react";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";
import Tilt from "react-parallax-tilt";
import { motion } from "motion/react";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_57ytlb7", "template_1j7q0e6", form.current, {
        publicKey: "B3KNkCxnMyLbrJxrG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true); // Mark as submitted
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-form-container">
        <motion.h1
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Contact me!
        </motion.h1>
        <form className="contact-form" onSubmit={sendEmail} ref={form}>
          <div className="form-row">
            <motion.input
              initial={{ opacity: 0.5, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="name"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <motion.input
              initial={{ opacity: 0.5, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="email"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
          </div>
          <motion.textarea
            initial={{ opacity: 0.5, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            name="message"
            placeholder="Your Message"
            rows={6}
            required
          />
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} tiltReverse={true}>
            <motion.button
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={
                isSubmitted ? "text submitted-button" : "text un submit-button"
              }
              type="submit"
              disabled={isSubmitted}
            >
              {isSubmitted ? "Sent" : "Submit"}{" "}
              {/* Change text based on submission state */}
            </motion.button>
          </Tilt>
        </form>
      </div>
    </>
  );
};

export default Contact;
