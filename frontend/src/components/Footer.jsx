import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xkgvdkpk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // make sure your formData includes { name, email, message }
      });
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({ title: "Error", description: "Failed to send message." });
      }
    } catch (err) {
      toast({ title: "Error", description: "Network error. Try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="contact-info">
            <h2 className="footer-title">Let's Build Something Together</h2>
            <p className="footer-description">
              Ready to turn your ideas into reality. Let's discuss your next
              project.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <Mail size={16} />
                <a href="mailto:anamikaraj038@gmail.com">
                  anamikaraj038@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <MapPin size={16} />
                <span>Available for Remote Work</span>
              </div>
            </div>

            <div className="social-links-footer">
              <a
                href="https://github.com/AnamikaRaj03"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-footer"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/curated-anamika/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-footer"
              >
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
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-credits">
            <p className="mono">
              &lt;built-with passion="true" stack="MERN" /&gt;
            </p>
            <p>© 2025 Anamika Raj. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
