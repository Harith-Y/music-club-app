'use client';

import { FaMapMarkerAlt, FaEnvelope, FaUsers, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import AnimatedSection from '../../components/layout/AnimatedSection';
import SocialIcon from '../../components/ui/SocialIcon';

const ContactSection = () => {
  return (
    <AnimatedSection id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Have questions or want to join the club? Reach out to us using the contact form or through our contact information.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: <FaMapMarkerAlt size={20} />, title: 'Address', content: 'Music Room (D1 PEMS Block), IIITDM Kancheepuram, Vandalur-Kelambakkam Road, Chennai - 600127, Tamil Nadu, India' },
                { icon: <FaEnvelope size={20} />, title: 'Email', content: <a href="mailto:musicclub@iiitdm.ac.in" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">musicclub@iiitdm.ac.in</a> },
                { icon: <FaUsers size={20} />, title: 'Club Hours', content: 'Monday - Friday: 6:00 PM - 11:00 PM\nSaturday & Sunday: 9:00 AM - 11:00 PM' },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full text-purple-600 dark:text-purple-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { href: 'https://facebook.com', icon: <FaFacebook /> },
                { href: 'https://www.instagram.com/musicclub.iiitdm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: <FaInstagram /> },
                { href: 'https://www.youtube.com/@iiitdmmusicclub2549', icon: <FaYoutube /> },
                { href: 'https://twitter.com', icon: <FaTwitter /> },
              ].map((social, index) => (
                <SocialIcon key={index} href={social.href}>{social.icon}</SocialIcon>
              ))}
            </div>
          </div>
          
          <div>
            <form className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input type="text" id="name" className="contact-input" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input type="email" id="email" className="contact-input" placeholder="john@example.com" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input type="text" id="subject" className="contact-input" placeholder="How can we help you?" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea id="message" rows={4} className="contact-input" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>    
  );
};

export default ContactSection;
