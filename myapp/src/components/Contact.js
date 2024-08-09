import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-background py-16 text-primary">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Contact Me</h2>
        <form className="mt-8 max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Name</label>
            <input type="text" className="w-full p-3 bg-gray-800 rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Email</label>
            <input type="email" className="w-full p-3 bg-gray-800 rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea className="w-full p-3 bg-gray-800 rounded-lg"></textarea>
          </div>
          <button type="submit" className="w-full bg-secondary text-primary py-3 rounded-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
