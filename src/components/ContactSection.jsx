import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);


    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,        
        import.meta.env.VITE_TEMPLATE_ID,       
        form.current,
        import.meta.env.VITE_PUBLIC_API       
      )
      .then(
        (result) => {
          console.log("EmailJS success:", result);
          toast({
            title: "Message sent successfully!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
          setFormData({
            user_name: '',
            user_email: '',
            message: ''
          });
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast({
            title: "Failed to send message",
            description: `Error: ${error.text || 'Please try again or contact me directly via email.'}`,
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-30 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-10 mt-12">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 md:ml-14 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary"  />
                </div>
                <div>
                  <h4 className="font-medium flex items-start">Email</h4>
                  <a
                    href="mailto:saikamkrishnareddy09@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    saikamkrishnareddy09@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 md:ml-14">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium flex items-start">Phone</h4>
                  <a
                    href="tel:+919876543210"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9876543210
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 md:ml-14">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium flex items-start">Location</h4>
                  <span className="text-muted-foreground">
                    Bengaluru, India
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-18">
              <h4 className="font-medium text-lg mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a 
                  href="https://github.com/krishnareddy006" 
                  target="_blank"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                >
                  <Github className="h-7 w-7" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/saikamkrishnareddy/" 
                  target="_blank"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                >
                  <Linkedin className="h-7 w-7" />
                </a>
                <a 
                  href="https://x.com/Krishna7308734?t=SxfhRL4L8QfswrOoYqRWWw&s=08" 
                  target="_blank"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                >
                  <Twitter className="h-7 w-7" />
                </a>
                <a 
                  href="https://www.instagram.com/krishna_reddy_006/" 
                  target="_blank"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                >
                  <Instagram className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe..."
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium 
                         transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]
                         disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
};
