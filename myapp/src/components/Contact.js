import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [alert, setAlert] = useState({ message: '', type: '' });
  const glowContainerRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setAlert({ message: 'All fields are required.', type: 'error' });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setAlert({ message: 'Please enter a valid email address.', type: 'error' });
      return;
    }

    const webhookUrl = 'https://discord.com/api/webhooks/1271605752515002489/cvUWAU51aRxjtbqfJsrWb4FRyxyyzVUkXJNgQR3ESRf5I8nF6PipLpczQ2UNNpiq8ip7';

    const payload = {
      content: `New message from ${formData.name} (${formData.email}):\n${formData.message}`
    };

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      setAlert({ message: 'Message sent successfully! We will contact you soon <3', type: 'success' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setAlert({ message: 'Failed to send message.', type: 'error' });
    }
  };

  useEffect(() => {
    if (alert.message) {
      const timer = setTimeout(() => {
        setAlert({ message: '', type: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  useEffect(() => {
    const glowContainer = glowContainerRef.current;
    const createGlowElements = () => {
      const glowCount = 5;
      for (let i = 0; i < glowCount; i++) {
        const glow = document.createElement('div');
        glow.classList.add('galaxy');
        glow.style.top = `${Math.random() * 100}%`;
        glow.style.left = `${Math.random() * 100}%`;
        glowContainer.appendChild(glow);
      }
    };
    createGlowElements();
  }, []);

  return (
    <section id="contact" className="bg-background py-16 text-primary relative overflow-hidden">
      <div ref={glowContainerRef} className="absolute inset-0 pointer-events-none"></div>
      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="twelve">
          <h2 className="text-4xl font-bold text-center">Contact Me</h2>
        </div>
        {alert.message && (
          <div
            className={`mt-4 p-4 rounded-lg shadow-lg text-white text-center ${
              alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {alert.message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 rounded-lg"
            ></textarea>
          </div>
          <button type="submit" className="view-button w-full bg-secondary text-primary py-3 rounded-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
