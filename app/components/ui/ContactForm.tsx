const ContactForm = () => {
    return (
      <form className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="contact-input"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="contact-input"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="contact-input"
            placeholder="How can we help you?"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="contact-input"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <button type="submit" className="btn-primary w-full">
          Send Message
        </button>
      </form>
    );
  };
  
  export default ContactForm;