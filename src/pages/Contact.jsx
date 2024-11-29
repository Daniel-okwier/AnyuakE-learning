import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import 'font-awesome/css/font-awesome.min.css';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Daniel Okwier', 
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send('1122', 'template_0c3osbs', templateParams, 'wjRtFyAyNVLZzKW07')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      {submitted ? (
        <p className="thank-you-message">Thanks for reaching out! Your message has been received.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      )}
      <div className="social-media">
        <h3>Follow us:</h3>
        <a href="https://web.facebook.com/profile.php?id=61566859666832" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook" aria-hidden="true"></i> Facebook
        </a>
        <a href="https://www.tiktok.com/@hvsslex" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok" aria-hidden="true"></i> TikTok
        </a>
        <a href="https://t.me/BellaXTech" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram" aria-hidden="true"></i> Telegram
        </a>
      </div>
    </div>
  );
}

export default Contact;