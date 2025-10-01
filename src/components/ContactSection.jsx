import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-gradient-to-b from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Get In <span className="text-purple-600 dark:text-purple-400">Touch</span>
        </h2>

        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Contact Information
            </h3>

            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "sarah.bijimon@gmail.com", href: "mailto:sarah.bijimon@gmail.com" },
                { icon: Phone, title: "Phone", value: "+91 9663995652", href: "tel:+91 9663995652" },
                { icon: MapPin, title: "Location", value: "Bangalore,Karnataka,India" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-purple-100/30 dark:bg-purple-700/20">
                    <item.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            
          </div>

          {/* Contact Form */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {[
                { label: "Your Name", type: "text", id: "name", placeholder: "Name" },
                { label: "Your Email", type: "email", id: "email", placeholder: "xyz@gmail.com" },
              ].map((field, idx) => (
                <div key={idx}>
                  <label htmlFor={field.id} className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 transition-all duration-300"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 resize-none transition-all duration-300"
                  rows={5}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 transition-all duration-300"
                )}
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
