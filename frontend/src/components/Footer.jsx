import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission - will be replaced with actual API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="contact-info">
            <h2 className="footer-title">
              Let's Build Something Together
            </h2>
            <p className="footer-description">
              Ready to turn your ideas into reality. Let's discuss your next project.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <Mail size={16} />
                <a href="mailto:anamikaraj038@gmail.com">anamikaraj038@gmail.com</a>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Available for Remote Work</span>
              </div>
            </div>

            <div className="social-links-footer">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link-footer">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link-footer">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <Input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  rows={4}
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-credits">
            <p className="mono">
              &lt;built-with passion="true" stack="MERN" /&gt;
            </p>
            <p>
              © 2025 Anamika Raj. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;